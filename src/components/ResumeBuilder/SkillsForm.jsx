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

    const newSkill = {
      name: skillName.trim(),
      level: skillLevel,
      rating: skillRating,
    };

    updateSection("skills", [...resumeData.skills, newSkill]);

    setSkillName("");
    setSkillLevel("Professional");
    setSkillRating(4);
  };

  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);
    updateSection("skills", updated);
  };

  const updateSkill = (index, field, value) => {
    const updated = [...resumeData.skills];
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

      updateSection("skills", [...resumeData.skills, ...generatedSkills]);
    } catch (error) {
      console.log("AI Skills Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
          <p className="mt-2 text-slate-500">
            Add skills, choose level, and rate your strength.
          </p>
        </div>

        <button
          onClick={handleGenerateSkills}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 font-semibold text-white disabled:opacity-60"
        >
          <FiZap />
          {loading ? "Generating..." : "Suggest Skills"}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_180px_160px_auto] gap-4">
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Skill e.g JavaScript"
          className="h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none focus:border-[var(--color-primary)]"
        />

        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none"
        >
          {skillLevels.map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>

        <div className="flex items-center gap-1 rounded-2xl border border-gray-200 bg-gray-50 px-4">
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
          className="h-14 rounded-2xl bg-[var(--color-primary)] px-6 font-semibold text-white"
        >
          Add
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {resumeData.skills.map((skill, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1fr_180px_160px_auto] gap-4 rounded-2xl border border-gray-200 p-4"
          >
            <input
              value={skill.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
              className="h-12 rounded-xl border border-gray-200 px-4 outline-none"
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

            <div className="flex items-center gap-1">
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

            <button onClick={() => removeSkill(index)} className="text-red-500">
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsForm;
