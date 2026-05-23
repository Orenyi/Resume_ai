import React, { useState } from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const SkillsForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;

    updateSection("skills", [...resumeData.skills, skill.trim()]);
    setSkill("");
  };

  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);
    updateSection("skills", updated);
  };

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-slate-900">Skills</h2>

      <div className="mt-6 flex gap-3">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Add skill e.g React"
          className="flex-1 h-12 rounded-2xl border border-gray-200 px-4 outline-none"
        />

        <button
          onClick={addSkill}
          className="bg-[var(--color-primary)] text-white px-5 rounded-2xl font-semibold"
        >
          Add
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {resumeData.skills.map((item, index) => (
          <button
            key={index}
            onClick={() => removeSkill(index)}
            className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
          >
            {item} ×
          </button>
        ))}
      </div>
    </section>
  );
};

export default SkillsForm;
