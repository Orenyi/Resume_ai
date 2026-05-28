import React from "react";
import { FiDownload, FiSave } from "react-icons/fi";

const FinalizeStep = ({ onSave, saving, onExportPDF }) => {
  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Finalize your resume
      </h2>

      <p className="mt-3 text-slate-500 max-w-xl mx-auto">
        Save your latest changes, then export your resume as a PDF.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onSave}
          disabled={saving}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-bold text-slate-700 hover:bg-gray-50 disabled:opacity-60"
        >
          <FiSave />
          {saving ? "Saving..." : "Save Draft"}
        </button>

        <button
          onClick={onExportPDF}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-7 py-4 font-bold text-white shadow-lg hover:opacity-90"
        >
          <FiDownload />
          Export PDF
        </button>
      </div>
    </section>
  );
};

export default FinalizeStep;
