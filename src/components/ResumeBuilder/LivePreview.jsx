import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const LivePreview = ({ template }) => {
  const { resumeData } = useResumeBuilderStore();

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-5 sticky top-6">
      <h2 className="text-xl font-bold text-slate-900">Live Preview</h2>

      <div className="mt-6 bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
        <div className="bg-[var(--color-primary)] text-white p-6">
          <h1 className="text-2xl font-bold">
            {resumeData.personal.fullName || "Your Name"}
          </h1>

          <p className="text-sm opacity-90 mt-1">
            {resumeData.personal.jobTitle || "Your Job Title"}
          </p>
        </div>

        <div className="p-6 space-y-6 text-sm">
          <div className="flex flex-wrap gap-3 text-gray-600">
            <span>{resumeData.personal.email || "email@example.com"}</span>
            <span>{resumeData.personal.phone || "+234 000 000 0000"}</span>
            <span>{resumeData.personal.location || "Location"}</span>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 border-b pb-1">Summary</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {resumeData.summary ||
                "Your professional summary will appear here."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 border-b pb-1">
              Experience
            </h3>

            <div className="mt-3 space-y-4">
              {resumeData.experience.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-slate-900">
                    {item.role || "Job Role"}
                  </h4>

                  <p className="text-gray-500">
                    {item.company || "Company"} • {item.location || "Location"}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {item.startDate || "Start"} - {item.endDate || "End"}
                  </p>

                  <p className="mt-2 text-gray-600 whitespace-pre-line">
                    {item.description || "Job description..."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 border-b pb-1">
              Education
            </h3>

            <div className="mt-3 space-y-3">
              {resumeData.education.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-slate-900">
                    {item.degree || "Degree"}
                  </h4>

                  <p className="text-gray-500">
                    {item.school || "School"} • {item.location || "Location"}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {item.startDate || "Start"} - {item.endDate || "End"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 border-b pb-1">Skills</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {resumeData.skills.length > 0 ? (
                resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">
                  Your skills will appear here.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {template?.pdf_url && (
        <a
          href={template.pdf_url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full justify-center bg-gray-900 text-white py-3 rounded-2xl font-semibold"
        >
          Open Sample PDF
        </a>
      )}
    </section>
  );
};

export default LivePreview;
