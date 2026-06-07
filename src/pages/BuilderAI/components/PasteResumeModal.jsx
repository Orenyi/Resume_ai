import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PasteResumeModal = ({ isOpen, onClose, onAnalyze }) => {
  const [resumeText, setResumeText] = useState("");

  if (!isOpen) return null;

  const handleAnalyze = () => {
    if (!resumeText.trim()) return;

    onAnalyze(resumeText);
    setResumeText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold">Paste Existing Resume</h2>

          <button onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        <textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
          className="w-full h-80 border rounded-xl p-4 resize-none outline-none"
        />

        <div className="flex justify-end mt-5">
          <button
            onClick={handleAnalyze}
            className="bg-[var(--color-primary)] text-white px-5 py-3 rounded-xl"
          >
            Analyze Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasteResumeModal;
