import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import resumeService from "../../services/resumeService";

const ResumeBuilder = () => {
  const { sidebarOpen } = useDashboardStore();
  const { resumeId } = useParams();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await resumeService.getResumeById(resumeId);
        setResume(data);
      } catch (error) {
        console.log("Resume fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [resumeId]);

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
            <section className="grid grid-cols-1 xl:grid-cols-[1fr_520px] gap-8">
              <div className="bg-white rounded-3xl border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-slate-900">
                  Edit Resume
                </h1>

                <p className="text-gray-500 mt-2">
                  Template selected:{" "}
                  <span className="font-semibold text-slate-800">
                    {resume?.templates?.name?.replaceAll("-", " ")}
                  </span>
                </p>

                <div className="mt-8 rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                  <h2 className="font-bold text-slate-900">
                    Resume form coming next
                  </h2>

                  <p className="text-gray-500 mt-2">
                    This is where the multi-step form will be built.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Template Preview
                </h2>

                <div className="mt-6 border rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src={resume?.templates?.thumbnail_url}
                    alt={resume?.templates?.name}
                    className="w-full object-cover object-top"
                  />
                </div>

                {resume?.templates?.pdf_url && (
                  <a
                    href={resume.templates.pdf_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white py-3 font-semibold"
                  >
                    Open PDF Sample
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </section>
  );
};

export default ResumeBuilder;
