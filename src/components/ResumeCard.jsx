import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDownload, FiEdit2, FiTrash2 } from "react-icons/fi";
import resumeService from "../services/resumeService";
import { resumeTemplates } from "../data/resumesTemplates";

const ResumeCard = ({ resume, onDeleted, onDownloaded }) => {
  const navigate = useNavigate();

  const template = resumeTemplates.find(
    (item) =>
      item.id === resume.template_id ||
      item.id === resume.template ||
      item.name === resume.template,
  );

  const thumbnail =
    resume.templates?.thumbnail_url ||
    resume.thumbnail_url ||
    template?.thumbnail ||
    template?.image;

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/dashboard/resumes/${resume.id}/edit`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();

    try {
      await resumeService.deleteResume(resume.id);
      onDeleted?.(resume.id);
    } catch (error) {
      console.log("Delete resume error:", error.message);
    }
  };

  const handleDownload = async (e) => {
    e.stopPropagation();

    if (resume.pdf_url) {
      window.open(resume.pdf_url, "_blank");
    } else {
      navigate(`/dashboard/resumes/${resume.id}/edit`);
      return;
    }

    try {
      const updatedResume = await resumeService.incrementDownloads(
        resume.id,
        resume.downloads || 0,
      );

      onDownloaded?.(updatedResume);
    } catch (error) {
      console.log("Download count error:", error.message);
    }
  };

  return (
    <section
      onClick={handleEdit}
      className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-[320px] bg-slate-100 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={resume.title || "Resume preview"}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold text-[var(--color-primary)]">
              R
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">
              Resume Preview
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Open to edit and export
            </p>
          </div>
        )}

        <div
          className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100
          transition-all duration-300 flex items-center justify-center gap-3"
        >
          <button
            onClick={handleEdit}
            className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition"
            title="Edit resume"
          >
            <FiEdit2 />
          </button>

          <button
            onClick={handleDelete}
            className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition"
            title="Delete resume"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 truncate">
          {resume.title || "Untitled Resume"}
        </h3>

        <p className="text-sm text-slate-500 mt-1 capitalize truncate">
          {resume.templates?.name || template?.name || "Resume template"}
        </p>

        <div className="flex items-center justify-between gap-3 mt-5">
          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-semibold">
            {resume.downloads || 0} Downloads
          </span>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 text-sm bg-[var(--color-primary)] text-white px-4 py-2 rounded-xl hover:opacity-90 transition-all duration-300"
          >
            <FiDownload />
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeCard;
