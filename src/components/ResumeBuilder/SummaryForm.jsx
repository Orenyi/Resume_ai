import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const SummaryForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-slate-900">Professional Summary</h2>

      <textarea
        value={resumeData.summary}
        onChange={(e) => updateSection("summary", e.target.value)}
        rows="8"
        className="mt-6 w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-[var(--color-primary)]"
        placeholder="Write a short professional summary..."
      />
    </section>
  );
};

export default SummaryForm;
