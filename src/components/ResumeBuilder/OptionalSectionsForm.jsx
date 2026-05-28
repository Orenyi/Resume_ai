import React, { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const sectionConfig = [
  {
    key: "certifications",
    title: "Certifications",
    placeholder: "AWS Certified Developer",
  },
  {
    key: "awards",
    title: "Awards & Recognition",
    placeholder: "Best Developer Award",
  },
  {
    key: "languages",
    title: "Languages",
    placeholder: "English - Professional",
  },
  {
    key: "interests",
    title: "Interests",
    placeholder: "UI Design, Open Source",
  },
];

const OptionalSectionsForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();
  const [inputs, setInputs] = useState({});

  const addItem = (key) => {
    if (!inputs[key]?.trim()) return;
    updateSection(key, [...(resumeData[key] || []), inputs[key].trim()]);
    setInputs({ ...inputs, [key]: "" });
  };

  const removeItem = (key, index) => {
    const updated = (resumeData[key] || []).filter((_, i) => i !== index);
    updateSection(key, updated);
  };

  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Optional Sections
      </h2>

      <p className="mt-2 text-sm sm:text-base text-slate-500">
        Add extra details only when they improve your resume.
      </p>

      <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-8">
        {sectionConfig.map((section) => (
          <div
            key={section.key}
            className="rounded-3xl border border-gray-200 p-4 sm:p-5"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {section.title}
            </h3>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3">
              <input
                value={inputs[section.key] || ""}
                onChange={(e) =>
                  setInputs({ ...inputs, [section.key]: e.target.value })
                }
                placeholder={section.placeholder}
                className="w-full h-12 sm:h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none focus:border-[var(--color-primary)]"
              />

              <button
                onClick={() => addItem(section.key)}
                className="h-12 sm:h-14 w-full sm:w-14 rounded-2xl bg-[var(--color-primary)] text-white font-semibold flex items-center justify-center"
              >
                <FiPlus />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {(resumeData[section.key] || []).map((item, index) => (
                <button
                  key={index}
                  onClick={() => removeItem(section.key, index)}
                  className="max-w-full inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 hover:bg-red-50 hover:text-red-600 break-all"
                >
                  <span className="truncate max-w-[220px] sm:max-w-none">
                    {item}
                  </span>
                  <FiTrash2 className="shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptionalSectionsForm;
