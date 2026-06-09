import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiFileText, FiUploadCloud } from "react-icons/fi";
import { extractResumeText } from "../../../utils/extractResumeText";

const UploadResumeModal = ({ isOpen, onClose, onAnalyze }) => {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const resetModal = () => {
    setFileName("");
    setStatus("");
    setError("");
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError("");

    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      setError("File size must be less than 5MB.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF and DOCX files are supported.");
      return;
    }

    setFileName(file.name);
    setStatus("Reading your resume...");

    try {
      const text = await extractResumeText(file);

      if (!text.trim()) {
        setError("No readable text was found in this file.");
        setStatus("");
        return;
      }

      setStatus("Builder AI is analyzing your resume...");

      onAnalyze({
        resumeText: text,
        fileName: file.name,
        source: "upload",
      });

      setTimeout(() => {
        resetModal();
        onClose();
      }, 700);
    } catch (err) {
      console.error(err);
      setError("Unable to read this file. Please upload a PDF or DOCX resume.");
      setStatus("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold">Upload Resume</h2>

          <button onClick={handleClose}>
            <IoClose size={24} />
          </button>
        </div>

        {!fileName ? (
          <label className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
            <FiUploadCloud className="text-4xl text-gray-500 mb-3" />

            <p className="font-semibold text-slate-800">
              Upload PDF or DOCX resume
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Builder AI will read and analyze your resume automatically.
            </p>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <FiFileText className="text-xl text-[var(--color-primary)]" />
            </div>

            <div className="min-w-0">
              <p className="font-semibold text-slate-800 truncate">
                {fileName}
              </p>
              <p className="text-sm text-gray-500">{status}</p>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UploadResumeModal;
