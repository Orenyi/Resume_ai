import React from "react";
import formatDate from "../../../utils/formatDate";

const ATSClassicPreview = ({ resumeData }) => {
  const personal = resumeData.personal;

  return (
    <section className="bg-white text-slate-900 w-full min-h-[760px] p-10 shadow-sm">
      <div className="text-center border-b border-slate-300 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          {personal.email || "email@example.com"} |{" "}
          {personal.phone || "+234 000 000 0000"} |{" "}
          {personal.location || "Location"}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {personal.linkedin || "LinkedIn"} | {personal.website || "Portfolio"}
        </p>
      </div>

      <div className="mt-6 space-y-6 text-sm">
        <div>
          <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1">
            Professional Summary
          </h2>
          <p className="mt-2 leading-relaxed text-slate-700">
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1">
            Work Experience
          </h2>

          <div className="mt-3 space-y-4">
            {resumeData.experience.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{item.role || "Job Title"}</h3>
                    <p className="font-medium">
                      {item.company || "Company"} —{" "}
                      {item.location || "Location"}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 whitespace-nowrap">
                    {formatDate(item.startDate)} -{" "}
                    {item.current ? "Present" : formatDate(item.endDate)}
                  </p>
                </div>

                <p className="mt-2 whitespace-pre-line leading-relaxed text-slate-700">
                  {item.description ||
                    "Describe your work achievements and responsibilities."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1">
            Education
          </h2>

          <div className="mt-3 space-y-3">
            {resumeData.education.map((item, index) => (
              <div key={index} className="flex justify-between gap-4">
                <div>
                  <h3 className="font-bold">{item.degree || "Degree"}</h3>
                  <p>
                    {item.school || "School"} — {item.location || "Location"}
                  </p>
                </div>

                <p className="text-xs text-slate-500 whitespace-nowrap">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1">
            Skills
          </h2>

          <p className="mt-2 text-slate-700">
            {resumeData.skills.length
              ? resumeData.skills.join(", ")
              : "React, JavaScript, Tailwind CSS"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ATSClassicPreview;
