import React, { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const ResumePreviewPanel = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const ResumeContent = () => (
    <div className="bg-white max-w-[720px] mx-auto min-h-[900px] p-10">
      <h1 className="text-4xl font-bold text-gray-900">LIVE RESUME PREVIEW</h1>

      <p className="text-[var(--color-primary)] mt-2 font-medium">
        Generated resume will appear here
      </p>

      <div className="mt-8 border-t border-black pt-6">
        <h3 className="text-xs tracking-[0.3em] text-[var(--color-primary)] font-bold">
          PROFILE
        </h3>

        <p className="mt-4 text-sm text-gray-600 leading-6">
          Builder AI will generate a professional resume summary, experience,
          education, skills, and other sections based on the user’s answers.
        </p>
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
