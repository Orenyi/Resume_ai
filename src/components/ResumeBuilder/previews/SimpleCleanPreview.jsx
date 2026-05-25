import React from "react";
import formatDate from "../../../utils/formatDate";

const SimpleCleanPreview = ({ resumeData }) => {
  const personal = resumeData.personal;

  return (
    <section className="bg-white text-slate-900 w-full min-h-[760px] p-10 shadow-sm">
      <div className="border-l-4 border-[var(--color-primary)] pl-5">
        <h1 className="text-4xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          {personal.jobTitle || "Professional Title"}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
        <span>{personal.email || "email@example.com"}</span>
        <span>•</span>
        <span>{personal.phone || "+234 000 000 0000"}</span>
        <span>•</span>
        <span>{personal.location || "Location"}</span>
      </div>

      <div className="mt-8 space-y-7 text-sm">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Summary
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Experience
          </h2>

          <div className="mt-4 space-y-5">
            {resumeData.experience.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-base">
                  {item.role || "Job Title"}
                </h3>

                <p className="text-slate-500">
                  {item.company || "Company"} / {item.location || "Location"}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {formatDate(item.startDate)} -{" "}
                  {item.current ? "Present" : formatDate(item.endDate)}
                </p>

                <p className="mt-2 whitespace-pre-line leading-relaxed text-slate-600">
                  {item.description || "Describe your work achievements."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Education
          </h2>

          <div className="mt-4 space-y-3">
            {resumeData.education.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold">{item.degree || "Degree"}</h3>
                <p className="text-slate-500">
                  {item.school || "School"} / {item.location || "Location"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Skills
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {resumeData.skills.length ? (
              resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
                Your skills will appear here.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCleanPreview;
