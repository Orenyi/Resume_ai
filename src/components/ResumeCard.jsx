import React from "react";
import { Document, Page } from "react-pdf";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ResumeCard = ({ resume }) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-[300px] overflow-hidden bg-gray-100">
        {resume.pdf_url ? (
          <Document file={resume.pdf_url}>
            <Page pageNumber={1} width={280} />
          </Document>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No PDF
          </div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <button className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <FiEdit2 />
          </button>

          <button className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg truncate">{resume.title}</h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            ATS {resume.ats_score}%
          </span>

          <span className="text-sm text-gray-500">PDF</span>
        </div>
      </div>
    </section>
  );
};

export default ResumeCard;
