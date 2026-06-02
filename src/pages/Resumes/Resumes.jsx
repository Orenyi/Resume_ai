import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import { supabase } from "../../lib/supabaseClient";
import resumeService from "../../services/resumeService";

const Resumes = () => {
  const { sidebarOpen } = useDashboardStore();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          navigate("/auth");
          return;
        }

        const data = await resumeService.getUserResumes(user.id);
        setResumes(data);
      } catch (error) {
        console.log("Resume fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [navigate]);

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-12
        ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">My Resumes</h1>

              <p className="mt-2 text-gray-500">
                Manage, edit, and download your saved resumes.
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard/templates")}
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl font-semibold"
            >
              Create New Resume
            </button>
          </div>

          {loading ? (
            <section className="bg-white rounded-3xl p-10 border border-gray-200">
              Loading resumes...
            </section>
          ) : resumes.length === 0 ? (
            <section className="bg-white rounded-3xl border border-gray-200 p-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                No resumes yet
              </h2>

              <p className="text-gray-500 mt-2">
                Choose a template to create your first resume.
              </p>

              <button
                onClick={() => navigate("/dashboard/templates")}
                className="mt-6 bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl font-semibold"
              >
                Browse Templates
              </button>
            </section>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  onClick={() =>
                    navigate(`/dashboard/resumes/${resume.id}/edit`)
                  }
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={resume.templates?.thumbnail_url}
                    alt={resume.title}
                    className="w-full h-[320px] object-cover object-top bg-gray-100"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{resume.title}</h3>

                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {resume.templates?.name?.replaceAll("-", " ")}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                        {resume.status}
                      </span>

                      <span className="text-xs text-gray-400">
                        ATS {resume.ats_score}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
    </section>
  );
};

export default Resumes;
