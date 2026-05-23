import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const ExperienceForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();

  const updateExperience = (index, field, value) => {
    const updated = [...resumeData.experience];
    updated[index][field] = value;
    updateSection("experience", updated);
  };

  const addExperience = () => {
    updateSection("experience", [
      ...resumeData.experience,
      {
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = resumeData.experience.filter((_, i) => i !== index);
    updateSection("experience", updated);
  };

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-900">Work Experience</h2>

        <button
          onClick={addExperience}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-xl text-sm font-semibold"
        >
          Add Experience
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {resumeData.experience.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-3xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                value={item.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                placeholder="Company"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.role}
                onChange={(e) =>
                  updateExperience(index, "role", e.target.value)
                }
                placeholder="Role"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.location}
                onChange={(e) =>
                  updateExperience(index, "location", e.target.value)
                }
                placeholder="Location"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                placeholder="Start Date"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.endDate}
                onChange={(e) =>
                  updateExperience(index, "endDate", e.target.value)
                }
                placeholder="End Date"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />
            </div>

            <textarea
              value={item.description}
              onChange={(e) =>
                updateExperience(index, "description", e.target.value)
              }
              placeholder="Describe your responsibilities and achievements..."
              rows="5"
              className="mt-5 w-full rounded-2xl border border-gray-200 p-4 outline-none"
            />

            {resumeData.experience.length > 1 && (
              <button
                onClick={() => removeExperience(index)}
                className="mt-4 text-sm font-semibold text-red-500"
              >
                Remove Experience
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceForm;
