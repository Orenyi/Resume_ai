import React from "react";
import ResumeCard from "./ResumeCard";
import TemplateCard from "./TemplateCard";
const ResumeSection = ({ resumes, onDeleted, onDownloaded }) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-black">
          {resumes.length === 0 ? "Templates" : "My Resumes"}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {resumes.length === 0 ? (
          <>
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
          </>
        ) : (
          resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              onDeleted={onDeleted}
              onDownloaded={onDownloaded}
            />
          ))
        )}
      </div>
    </section>
  );
};
export default ResumeSection;
