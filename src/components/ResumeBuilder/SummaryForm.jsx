import React, { useState } from "react";
import { FiZap } from "react-icons/fi";

import useResumeBuilderStore from "../../store/resumeBuilderStore";
import aiService from "../../services/aiService";

const SummaryForm = () => {
  const { resumeData, updateSection } = useResumeBuilderStore();

  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    try {
      setLoading(true);

      const generatedSummary = await aiService.generateSummary(resumeData);

      updateSection("summary", generatedSummary);
    } catch (error) {
      console.log("AI Summary Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Professional Summary
          </h2>

          <p className="mt-2 text-slate-500">
            Write a strong summary or generate one with AI.
          </p>
        </div>

        <button
          onClick={handleGenerateSummary}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 font-semibold text-white disabled:opacity-60"
        >
          <FiZap />

          {loading ? "Generating..." : "Generate with AI"}
        </button>
      </div>

      <textarea
        value={resumeData.summary}
        onChange={(e) => updateSection("summary", e.target.value)}
        rows="10"
        className="mt-8 w-full rounded-3xl border border-gray-200 bg-gray-50 p-5 outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
        placeholder="Write a short professional summary..."
      />
    </section>
  );
};

export default SummaryForm;
