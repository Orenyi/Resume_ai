import React from "react";
import useResumeStrength from "../hooks/useResumeStrength";
const ProfileCompletionWidget = () => {
  const { strength, hasExperience, hasEducation, hasProjects, hasSkills } =
    useResumeStrength();

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadowsm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Resume Strength</h3>
        <span className="text-green-600 font-bold">{strength}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-100 mt-6 overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${strength}%` }}
        />
      </div>
      <div className="space-y-4 mt-8">
        <div className="flex items-center justify-between">
          <span>Experience</span>
          <span>{hasExperience ? "✔" : "✖"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Education</span>
          <span>{hasEducation ? "✔" : "✖"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Projects</span>
          <span>{hasProjects ? "✔" : "✖"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Skills</span>
          <span>{hasSkills ? "✔" : "✖"}</span>
        </div>
      </div>
    </section>
  );
};
export default ProfileCompletionWidget;
