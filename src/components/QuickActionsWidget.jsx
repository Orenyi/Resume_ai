import React from "react";
const QuickActionsWidget = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadowsm">
      <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-[var(--color-primary)] text-white py-4 rounded-xl
            font-semibold hover:opacity-90 transition-all duration-300"
        >
          Create Resume
        </button>
        <button
          className="border border-gray-200 py-4 rounded-xl font-semibold
        hover:bg-gray-100 transition-all duration-300"
        >
          Upload CV
        </button>
        <button
          className="border border-gray-200 py-4 rounded-xl font-semibold
        hover:bg-gray-100 transition-all duration-300"
        >
          ATS Check
        </button>
        <button
          className="border border-gray-200 py-4 rounded-xl font-semibold
        hover:bg-gray-100 transition-all duration-300"
        >
          Export PDF
        </button>
      </div>
    </section>
  );
};
export default QuickActionsWidget;
