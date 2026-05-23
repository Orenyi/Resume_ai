import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const PersonalInfoForm = () => {
  const { resumeData, updatePersonal } = useResumeBuilderStore();

  const fields = [
    { name: "fullName", label: "Full Name" },
    { name: "jobTitle", label: "Job Title" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone" },
    { name: "location", label: "Location" },
    { name: "website", label: "Website" },
    { name: "linkedin", label: "LinkedIn" },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-sm font-semibold text-slate-700">
              {field.label}
            </label>

            <input
              type="text"
              value={resumeData.personal[field.name]}
              onChange={(e) => updatePersonal(field.name, e.target.value)}
              className="mt-2 w-full h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:border-[var(--color-primary)]"
              placeholder={field.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfoForm;
