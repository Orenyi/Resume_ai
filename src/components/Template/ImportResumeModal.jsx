import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { extractResumeText } from "../../utils/extractResumeText";
import resumeParserService from "../../services/resumeParserService";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const ImportResumeModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { setImportedResumeData } = useResumeBuilderStore();

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        setLoading(true);
        setError("");
        setSuccess(false);

        const file = acceptedFiles[0];

        if (!file) return;

        const resumeText = await extractResumeText(file);
        const parsedData = await resumeParserService.parseResume(resumeText);

        setImportedResumeData(parsedData);
        setSuccess(true);

        setTimeout(() => {
          onClose();
        }, 1200);
      } catch (error) {
        console.error(error);
        setError(
          "Unable to import resume. Please try another PDF or DOCX file.",
        );
      } finally {
        setLoading(false);
      }
    },
    [onClose, setImportedResumeData],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5000000,
    multiple: false,
  });

  if (!open) return null;

  return (
    <section
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm
        flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-5 right-5">
          <FiX className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold text-[#0f172a]">
          Import Existing Resume
        </h2>

        <p className="mt-2 text-gray-500">
          Upload your PDF or DOCX resume. Resume AI will extract your
          information, then you can choose a template.
        </p>

        <div
          {...getRootProps()}
          className="mt-8 border-2 border-dashed border-gray-300
            rounded-3xl p-12 text-center cursor-pointer hover:border-[var(--color-primary)]
            transition-all duration-300"
        >
          <input {...getInputProps()} />

          <FiUploadCloud className="mx-auto text-5xl text-gray-400" />

          <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">
            Drag & Drop Resume
          </h3>

          <p className="mt-2 text-gray-500">PDF or DOCX up to 5MB</p>

          {loading && (
            <p className="mt-4 text-[var(--color-primary)] font-semibold">
              Reading and extracting your resume...
            </p>
          )}

          {success && (
            <p className="mt-4 text-green-600 font-semibold">
              Resume imported successfully. Choose a template to continue.
            </p>
          )}

          {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default ImportResumeModal;
