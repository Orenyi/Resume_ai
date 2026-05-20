import React from "react";
import { FiPlus } from "react-icons/fi";

const TemplateCard = () => {
  return (
    <section className="border-2 border-dashed border-gray-300 rounded-2xl h-[420px] flex flex-col items-center justify-center hover:border-[var(--color-primary)] hover:bg-blue-50/40 transition-all duration-300 cursor-pointer">
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
        <FiPlus className="text-3xl text-[var(--color-primary)]" />
      </div>

      <h3 className="text-lg font-semibold mt-6">Create New Resume</h3>

      <p className="text-gray-500 text-sm mt-2 text-center max-w-[220px]">
        Choose a professional template and start building your resume.
      </p>
    </section>
  );
};

export default TemplateCard;
