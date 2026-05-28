import React, { useState } from "react";
import { FiZap, FiStar, FiTrash2 } from "react-icons/fi";
import useResumeBuilderStore from "../../store/resumeBuilderStore";
import aiService from "../../services/aiService";

const skillLevels = ["Beginner", "Intermediate", "Professional", "Expert"];

const SkillsForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Professional");
  const [skillRating, setSkillRating] = useState(4);
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    if (!skillName.trim()) return;

    updateSection("skills", [
      ...(resumeData.skills || []),
      { name: skillName.trim(), level: skillLevel, rating: skillRating },
    ]);

    setSkillName("");
    setSkillLevel("Professional");
    setSkillRating(4);
  };

  const removeSkill = (index) => {
    const updated = (resumeData.skills || []).filter((_, i) => i !== index);
    updateSection("skills", updated);
  };

  const updateSkill = (index, field, value) => {
    const updated = [...(resumeData.skills || [])];
    updated[index][field] = value;
    updateSection("skills", updated);
  };

  const handleGenerateSkills = async () => {
    try {
      setLoading(true);
      const result = await aiService.suggestSkills(resumeData);

      const generatedSkills = result
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => ({
          name: item,
          level: "Professional",
          rating: 4,
        }));

      updateSection("skills", [
        ...(resumeData.skills || []),
        ...generatedSkills,
      ]);
    } catch (error) {
      console.log("AI Skills Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Add skills, choose level, and rate your strength.
          </p>
        </div>

        <button
          onClick={handleGenerateSkills}
          disabled={loading}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 font-semibold text-white disabled:opacity-60"
        >
          <FiZap />
          {loading ? "Generating..." : "Suggest Skills"}
        </button>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Skill e.g JavaScript"
          className="h-12 sm:h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none focus:border-[var(--color-primary)] sm:col-span-2 xl:col-span-1"
        />

        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="h-12 sm:h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none"
        >
          {skillLevels.map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>

        <div className="h-12 sm:h-14 flex items-center justify-center gap-1 rounded-2xl border border-gray-200 bg-gray-50 px-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setSkillRating(star)}
            >
              <FiStar
                className={
                  star <= skillRating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          ))}
        </div>

        <button
          onClick={addSkill}
          className="h-12 sm:h-14 rounded-2xl bg-[var(--color-primary)] px-6 font-semibold text-white sm:col-span-2 xl:col-span-1"
        >
          Add
        </button>
      </div>

      <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
        {(resumeData.skills || []).map((skill, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 rounded-2xl border border-gray-200 p-3 sm:p-4 mx-auto"
          >
            <input
              value={skill.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
              className="h-12 rounded-xl border border-gray-200 px-4 outline-none sm:col-span-2 xl:col-span-1"
            />

            <select
              value={skill.level}
              onChange={(e) => updateSkill(index, "level", e.target.value)}
              className="h-12 rounded-xl border border-gray-200 px-4 outline-none"
            >
              {skillLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>

            <div className="h-12 flex items-center justify-center gap-1 rounded-xl border border-gray-200">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => updateSkill(index, "rating", star)}
                >
                  <FiStar
                    className={
                      star <= skill.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                </button>
              ))}
            </div>

            <div className="col-span-full flex justify-center">
              <button
                onClick={() => removeSkill(index)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsForm;
