import React from "react";
import formatDate from "../../../utils/formatDate";

const CreativeSidebarPreview = ({ resumeData }) => {
  const personal = resumeData.personal;

  return (
    <section className="bg-white text-slate-900 w-full min-h-[760px] grid grid-cols-[34%_66%] shadow-sm">
      <aside className="bg-[var(--color-primary)] text-white p-8">
        <div className="h-24 w-24 rounded-full bg-white/20 border border-white/30" />

        <h1 className="mt-6 text-3xl font-bold leading-tight">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-white/80">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/80">
            Contact
          </h2>

          <div className="mt-4 space-y-2 text-xs text-white/85">
            <p>{personal.email || "email@example.com"}</p>
            <p>{personal.phone || "+234 000 000 0000"}</p>
            <p>{personal.location || "Location"}</p>
            <p>{personal.linkedin || "LinkedIn"}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/80">
            Skills
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.skills.length ? (
              resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-xs text-white/70">Skills appear here.</span>
            )}
          </div>
        </div>
      </aside>

      <main className="p-8">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Profile
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Experience
          </h2>

          <div className="mt-4 space-y-5">
            {resumeData.experience.map((item, index) => (
              <div
                key={index}
                className="relative border-l-2 border-slate-200 pl-5"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--color-primary)]" />

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
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Education
          </h2>

          <div className="mt-4 space-y-3">
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

export default CreativeSidebarPreview;
