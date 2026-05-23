import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import resumeService from "../../services/resumeService";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

import BuilderSteps from "../../components/ResumeBuilder/BuilderSteps";
import PersonalInfoForm from "../../components/ResumeBuilder/ContactForm
import SummaryForm from "../../components/ResumeBuilder/SummaryForm";
import ExperienceForm from "../../components/ResumeBuilder/ExperienceForm";
import EducationForm from "../../components/ResumeBuilder/EducationForm";
import SkillsForm from "../../components/ResumeBuilder/SkillsForm";
import LivePreview from "../../components/ResumeBuilder/LivePreview";

const ResumeBuilder = () => {
  const { sidebarOpen } = useDashboardStore();
  const { resumeId } = useParams();

  const {
    resumeData,
    setResumeData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    setSelectedTemplate,
  } = useResumeBuilderStore();

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
    if (currentStep === 0) return <PersonalInfoForm />;
    if (currentStep === 1) return <SummaryForm />;
    if (currentStep === 2) return <ExperienceForm />;
    if (currentStep === 3) return <EducationForm />;
    if (currentStep === 4) return <SkillsForm />;
    return <PersonalInfoForm />;
  };

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
        ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
          <Topbar />

          {loading ? (
            <section className="bg-white rounded-3xl p-10 border border-gray-200">
              Loading resume builder...
            </section>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">
                    Resume Builder
                  </h1>

                  <p className="text-gray-500 mt-2 capitalize">
                    Editing: {resume?.templates?.name?.replaceAll("-", " ")}
                  </p>
                </div>

                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl font-semibold disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save Resume"}
                </button>
              </div>

              <BuilderSteps
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />

              <section className="grid grid-cols-1 xl:grid-cols-[1fr_520px] gap-8">
                <div className="space-y-6">
                  {renderStep()}

                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="px-6 py-3 rounded-2xl border border-gray-200 font-semibold disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {currentStep < 4 ? (
                      <button
                        onClick={nextStep}
                        className="px-6 py-3 rounded-2xl bg-[var(--color-primary)] text-white font-semibold"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold"
                      >
                        Save & Finish
                      </button>
                    )}
                  </div>
                </div>

                <LivePreview template={resume?.templates} />
              </section>
            </>
          )}
        </div>
      </main>
    </section>
  );
};

export default ResumeBuilder;
