import React from "react";

const FinalizeStep = ({ onSave, saving }) => {
  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        Finalize your resume
      </h2>

      <p className="mt-3 text-slate-500 max-w-xl mx-auto">
        Review your information, save your resume, then continue to
        download/export later.
      </p>

      <button
        onClick={onSave}
        disabled={saving}
        className="mt-8 rounded-2xl bg-[var(--color-primary)] px-8 py-4 font-bold text-white disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Resume"}
      </button>
    </section>
  );
};

export default FinalizeStep;
