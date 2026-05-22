import React from "react";
import { FiUpload } from "react-icons/fi";

const TemplateHeader = ({ onImport }) => {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Start building your resume
        </h1>
        <p className="mt-3 text-gray-500 text-base md:text-lg">
          Choose a design you like. You can customize or switch it later.
        </p>
      </div>
      <button
        onClick={onImport}
        className="border border-gray-300 hover:border-[var(--color-primary)]
        hover:bg-white bg-white rounded-2xl px-6 py-4 flex items-center gap-3
             transition-all duration-300 shadow-sm"
      >
        <FiUpload className="text-xl" />
        <span className="font-semibold text-[#0f172a]">
          Import existing resume
        </span>
      </button>
    </section>
  );
};
export default TemplateHeader;
