import React from "react";
const ProfileCompletionWidget = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadowsm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Resume Strength</h3>
        <span className="text-green-600 font-bold">78%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-100 mt-6 overflow-hidden">
        <div className="w-[78%] h-full bg-green-500 rounded-full" />
      </div>
      <div className="space-y-4 mt-8">
        <div className="flex items-center justify-between">
          <span>Experience</span>
          <span>✔</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Education</span>
          <span>✔</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Projects</span>
          <span>✖</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Skills</span>
          <span>✔</span>
        </div>
      </div>
    </section>
  );
};
export default ProfileCompletionWidget;
