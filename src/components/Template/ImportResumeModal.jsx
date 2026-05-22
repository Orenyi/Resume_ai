import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiX } from "react-icons/fi";
import uploadResumeService from "../../services/uploadResumeService";
const ImportResumeModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      setLoading(true);
      const file = acceptedFiles[0];
      await uploadResumeService(file);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformatsofficedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5000000,
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
          Upload your PDF or DOCX resume and ResumeAI will automatically extract
          your information.
        </p>
        <div
          {...getRootProps()}
          className="mt-8 border-2 border-dashed border-gray-300
            rounded-3xl p-12 text-center cursor-pointer hover:border-[var(--colorprimary)]
            transition-all duration-300"
        >
          <input {...getInputProps()} />
          <FiUploadCloud className="mx-auto text-5xl text-gray-400" />
          <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">
            Drag & Drop Resume
          </h3>
          <p className="mt-2 text-gray-500">PDF, DOC or DOCX up to 5MB</p>
          {loading && (
            <p className="mt-4 text-[var(--color-primary)] font-semibold">
              Uploading and extracting data...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
export default ImportResumeModal;
