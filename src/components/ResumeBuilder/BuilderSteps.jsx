import React from "react";

const steps = ["Personal Info", "Summary", "Experience", "Education", "Skills"];

const BuilderSteps = ({ currentStep, setCurrentStep }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-4">
      <div className="flex gap-3 overflow-x-auto">
        {steps.map((step, index) => (
          <button
            key={step}
            onClick={() => setCurrentStep(index)}
            className={`px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all
              ${
                currentStep === index
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {index + 1}. {step}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BuilderSteps;
