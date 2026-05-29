import React, { forwardRef } from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";
import TemplateRenderer from "./templates/TemplateRenderer";

const LivePreview = forwardRef(({ template }, ref) => {
  const { resumeData } = useResumeBuilderStore();

  return (
    <section className="hidden md:block xl:sticky xl:top-6">
      <div className=" overflow-x-auto pb-4">
        <div
          ref={ref}
          className="resume-print-area mx-auto w-[210mm] min-h-[297mm] bg-white shadow-2xl"
        >
          <TemplateRenderer template={template} resumeData={resumeData} />
        </div>
      </div>
    </section>
  );
});

LivePreview.displayName = "LivePreview";

export default LivePreview;
