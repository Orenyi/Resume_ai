import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiGrid, FiSave } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import resumeService from "../../services/resumeService";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

import BuilderSteps from "../../components/ResumeBuilder/BuilderSteps";
import ContactForm from "../../components/ResumeBuilder/ContactForm";
import ExperienceForm from "../../components/ResumeBuilder/ExperienceForm";
import EducationForm from "../../components/ResumeBuilder/EducationForm";
import SkillsForm from "../../components/ResumeBuilder/SkillsForm";
import SummaryForm from "../../components/ResumeBuilder/SummaryForm";
import FinalizeStep from "../../components/ResumeBuilder/FinalizeStep";
import LivePreview from "../../components/ResumeBuilder/LivePreview";
import OptionalSectionsForm from "../../components/ResumeBuilder/OptionalSectionsForm";
import calculateResumeScore from "../../utils/calculateResumeScore";
import ATSScoreWidget from "../../components/ResumeBuilder/ATSScoreWidget";
import PreviewJumpButton from "../../components/ResumeBuilder/PreviewJumpButton";

const ResumeBuilder = () => {
  const { sidebarOpen } = useDashboardStore();
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const printRef = useRef(null);

  const {
    resumeData,
    setResumeData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    setSelectedTemplate,
  } = useResumeBuilderStore();

  const handleExportPDF = useReactToPrint({
    contentRef: printRef,
    documentTitle: resumeData?.personal?.fullName || "ResumeAI Resume",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await resumeService.getResumeById(resumeId);

        setResume(data);
        setSelectedTemplate(data.templates);

        if (data.resume_data && Object.keys(data.resume_data).length > 0) {
          setResumeData(data.resume_data);
        }
      } catch (error) {
        console.log("Resume fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [resumeId, setResumeData, setSelectedTemplate]);

  useEffect(() => {
    if (!resume || loading) return;

    const saveTimeout = setTimeout(async () => {
      try {
        await resumeService.updateResumeData(resumeId, resumeData);
        console.log("Draft auto-saved");
      } catch (error) {
        console.log("Auto-save error:", error.message);
      }
    }, 1500);

    return () => clearTimeout(saveTimeout);
  }, [resumeData, resume, loading, resumeId]);

  const handleSave = async () => {
    try {
      setSaving(true);
      await resumeService.updateResumeData(resumeId, resumeData);
    } catch (error) {
      console.log("Save error:", error.message);
    } finally {
      setSaving(false);
    }
  };

  const renderStep = () => {
    if (currentStep === 0) return <ContactForm />;
    if (currentStep === 1) return <ExperienceForm />;
    if (currentStep === 2) return <EducationForm />;
    if (currentStep === 3) return <SkillsForm />;
    if (currentStep === 4) return <OptionalSectionsForm />;
    if (currentStep === 5) return <SummaryForm />;
    if (currentStep === 6)
      return (
        <FinalizeStep
          onSave={handleSave}
          saving={saving}
          onExportPDF={handleExportPDF}
        />
      );
    return <ContactForm />;
  };
  const { score, suggestions } = calculateResumeScore(resumeData);

  return (
    <section className="min-h-screen bg-[#f3f6fb]">
      <Sidebar />

      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6 ${
          sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"
        }`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-6">
          <Topbar />

          {loading ? (
            <section className="rounded-3xl border border-gray-200 bg-white p-10">
              Loading resume builder...
            </section>
          ) : (
            <>
              <section className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-950">
                    Build your resume
                  </h1>
                  <p className="mt-2 text-slate-500 capitalize">
                    Template: {resume?.templates?.name?.replaceAll("-", " ")}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <ATSScoreWidget score={score} suggestions={suggestions} />

                  <button
                    onClick={() => navigate("/dashboard/templates")}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-700 border border-gray-200 shadow-sm"
                  >
                    <FiGrid />
                    Change Template
                  </button>

                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 font-semibold text-white shadow-sm disabled:opacity-60"
                  >
                    <FiSave />
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </section>

              <BuilderSteps
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />

              <section className="grid grid-cols-1 gap-6 items-start">
                <div className="space-y-5">
                  {renderStep()}

                  <div className="sticky bottom-0 z-20 rounded-3xl border border-gray-200 bg-white/90 backdrop-blur p-4 shadow-sm flex items-center justify-between">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="rounded-2xl border border-gray-200 px-6 py-3 font-semibold text-slate-700 disabled:opacity-40"
                    >
                      Back
                    </button>

                    {currentStep < 6 ? (
                      <button
                        onClick={nextStep}
                        className="rounded-2xl bg-[var(--color-primary)] px-8 py-3 font-semibold text-white"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSave}
                        className="rounded-2xl bg-[var(--color-secondary)] px-8 py-3 font-semibold text-white"
                      >
                        Save & Finish
                      </button>
                    )}
                  </div>
                </div>

                <div
                  id="live-preview-section"
                  className="hidden md:block relative"
                >
                  <LivePreview ref={printRef} template={resume?.templates} />
                </div>
              </section>
            </>
          )}
        </div>
        <PreviewJumpButton />
      </main>
    </section>
  );
};

export default ResumeBuilder;
