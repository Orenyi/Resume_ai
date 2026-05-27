import React from "react";

const steps = [
  "Contact",
  "Experience",
  "Education",
  "Skills",
  "Optional",
  "Summary",
  "Finalize",
];

const BuilderSteps = ({ currentStep, setCurrentStep }) => {
  return (
    <section className="bg-white rounded-3xl border border-gray-200 px-4 py-5 shadow-sm">
      <div className="flex items-center overflow-x-auto">
        {steps.map((step, index) => (
          <button
            key={step}
            onClick={() => setCurrentStep(index)}
            className="relative flex min-w-[120px] flex-col items-center gap-3 text-sm font-semibold"
          >
            <span
              className={`${
                currentStep === index
                  ? "text-[var(--color-primary)]"
                  : "text-slate-500"
              }`}
            >
              {step}
            </span>

            <span
              className={`h-4 w-4 rounded-full border-2 bg-white ${
                currentStep >= index
                  ? "border-[var(--color-primary)]"
                  : "border-gray-300"
              }`}
            />

            {index !== steps.length - 1 && (
              <span
                className={`absolute bottom-[7px] left-[70px] h-[2px] w-[100px] ${
                  currentStep > index
                    ? "bg-[var(--color-primary)]"
                    : "bg-gray-200"
                }`}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BuilderSteps;
