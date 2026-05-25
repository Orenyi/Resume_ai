import React from "react";
import formatDate from "../../../utils/formatDate";

const ModernSplitPreview = ({ resumeData }) => {
  const personal = resumeData.personal;

  return (
    <section className="bg-white text-slate-900 w-full min-h-[760px] grid grid-cols-[38%_62%] shadow-sm">
      <aside className="bg-slate-100 p-8">
        <h1 className="text-3xl font-bold leading-tight">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-[var(--color-primary)] font-semibold">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-2">
            Details
          </h2>

          <div className="mt-4 space-y-2 text-xs text-slate-600">
            <p>{personal.email || "email@example.com"}</p>
            <p>{personal.phone || "+234 000 000 0000"}</p>
            <p>{personal.location || "Location"}</p>
            <p>{personal.linkedin || "LinkedIn"}</p>
            <p>{personal.website || "Portfolio"}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-2">
            Skills
          </h2>

          <div className="mt-4 space-y-2 text-xs">
            {resumeData.skills.length ? (
              resumeData.skills.map((skill, index) => (
                <p key={index} className="font-medium">
                  {skill}
                </p>
              ))
            ) : (
              <p className="text-slate-500">Skills appear here.</p>
            )}
          </div>
        </div>
      </aside>

      <main className="p-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-2">
            Profile
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-2">
            Experience
          </h2>

          <div className="mt-4 space-y-5">
            {resumeData.experience.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-sm">
                  {item.role || "Job Title"}
                </h3>

                <p className="text-xs text-slate-500">
                  {item.company || "Company"} · {item.location || "Location"}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {formatDate(item.startDate)} -{" "}
                  {item.current ? "Present" : formatDate(item.endDate)}
                </p>

                <p className="mt-2 text-xs leading-relaxed whitespace-pre-line text-slate-600">
                  {item.description || "Describe your work achievements."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-2">
            Education
          </h2>

          <div className="mt-4 space-y-4">
            {resumeData.education.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-sm">{item.degree || "Degree"}</h3>
                <p className="text-xs text-slate-500">
                  {item.school || "School"} · {item.location || "Location"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ModernSplitPreview;
