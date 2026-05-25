import React from "react";
import { FiExternalLink } from "react-icons/fi";
import useResumeBuilderStore from "../../store/resumeBuilderStore";
import TemplatePreviewRouter from "./previews/TemplatePreviewRouter";

const LivePreview = ({ template }) => {
  const { resumeData } = useResumeBuilderStore();

  return (
    <section className="sticky top-6 rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Live Preview</h2>
          <p className="text-sm text-slate-500 capitalize">
            {template?.name?.replaceAll("-", " ")}
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
          {template?.category}
        </span>
      </div>

      <div className="mt-5 rounded-[1.5rem] bg-[#f8fafc] p-4 overflow-hidden">
        <div className="mx-auto aspect-[794/1123] w-full max-w-[560px] bg-white shadow-xl">
          <div className="h-full w-full origin-top scale-100 overflow-hidden">
            <TemplatePreviewRouter
              template={template}
              resumeData={resumeData}
            />
          </div>
        </div>
      </div>

      {template?.pdf_url && (
        <a
          href={template.pdf_url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 font-semibold text-white"
        >
          Open Sample PDF
          <FiExternalLink />
        </a>
      )}
    </section>
  );
};

export default LivePreview;
