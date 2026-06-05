import React, { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";
import useBuilderAiStore from "../../../store/builderAiStore";

const ResumePreviewPanel = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const { answers, generatedResume } = useBuilderAiStore();

  const resumeData = generatedResume || answers;

  const ResumeContent = () => (
    <div className="bg-white max-w-[720px] mx-auto min-h-[900px] p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {resumeData.fullName || "Your Full Name"}
        </h1>

        <p className="text-blue-600 mt-2 font-medium">
          {resumeData.jobTitle || "Target Job Title"}
        </p>

        <p className="text-sm text-gray-500 mt-3">
          {resumeData.email || "email@example.com"} •{" "}
          {resumeData.phone || "Phone Number"} •{" "}
          {resumeData.location || "Location"}
        </p>
      </div>

      <div className="mt-8 border-t border-black pt-6">
        <h3 className="text-xs tracking-[0.3em] text-blue-600 font-bold">
          PROFILE
        </h3>

        <p className="mt-4 text-sm text-gray-700 leading-6">
          {resumeData.summary ||
            "Your professional summary will appear here as Builder AI collects your details."}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xs tracking-[0.3em] text-blue-600 font-bold">
          EXPERIENCE
        </h3>

        <p className="mt-4 text-sm text-gray-700 leading-6">
          {resumeData.experience || "Your work experience will appear here."}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xs tracking-[0.3em] text-blue-600 font-bold">
          EDUCATION
        </h3>

        <p className="mt-4 text-sm text-gray-700 leading-6">
          {resumeData.education || "Your education details will appear here."}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xs tracking-[0.3em] text-blue-600 font-bold">
          SKILLS
        </h3>

        {Array.isArray(resumeData.skills) ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-700 leading-6">
            {resumeData.skills || "Your skills will appear here."}
          </p>
        )}
      </div>
    </div>
  );
  return (
    <>
      <section className="bg-[#e5e7eb] rounded-2xl h-[700px] xl:h-[calc(100vh-140px)] overflow-hidden">
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
          <div>
            <h3 className="font-bold text-slate-900">Live Preview</h3>
            <p className="text-xs text-gray-500">
              Preview your generated resume
            </p>
          </div>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition"
            title="Open full preview"
          >
            <FiZoomIn />
          </button>
        </div>

        <div className="h-full overflow-y-auto p-4 md:p-6">
          <ResumeContent />
        </div>
      </section>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="fixed top-5 right-5 z-[10000] w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition"
            title="Close preview"
          >
            <FiX size={22} />
          </button>

          <div className="min-h-screen py-10 px-4">
            <ResumeContent />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumePreviewPanel;
