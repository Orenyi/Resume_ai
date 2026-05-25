import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const EducationForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();

  const updateEducation = (index, field, value) => {
    const updated = [...resumeData.education];
    updated[index][field] = value;
    updateSection("education", updated);
  };

  const addEducation = () => {
    updateSection("education", [
      ...resumeData.education,
      {
        school: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const updated = resumeData.education.filter((_, i) => i !== index);
    updateSection("education", updated);
  };

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-900">Education</h2>

        <button
          onClick={addEducation}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-xl text-sm font-semibold"
        >
          Add Education
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {resumeData.education.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-3xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                value={item.school}
                onChange={(e) =>
                  updateEducation(index, "school", e.target.value)
                }
                placeholder="School"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.degree}
                onChange={(e) =>
                  updateEducation(index, "degree", e.target.value)
                }
                placeholder="Degree"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                value={item.location}
                onChange={(e) =>
                  updateEducation(index, "location", e.target.value)
                }
                placeholder="Location"
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none"
              />

              <input
                type="month"
                value={item.startDate}
                onChange={(e) =>
                  updateEducation(index, "startDate", e.target.value)
                }
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:border-[var(--color-primary)]"
              />

              <input
                type="month"
                value={item.endDate}
                onChange={(e) =>
                  updateEducation(index, "endDate", e.target.value)
                }
                className="h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:border-[var(--color-primary)]"
              />
            </div>

            {resumeData.education.length > 1 && (
              <button
                onClick={() => removeEducation(index)}
                className="mt-4 text-sm font-semibold text-red-500"
              >
                Remove Education
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationForm;
