import React, { useState } from "react";
import { FiPlus, FiRotateCcw } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import useBuilderAiStore from "../../../store/builderAiStore";
import PasteResumeModal from "./PasteResumeModal";
import UploadResumeModal from "./UploadResumeModal";

const ChatInput = () => {
  const [showPasteModal, setShowPasteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { input, setInput, sendMessage, isGenerating, clearChat } =
    useBuilderAiStore();

  const handleSend = () => sendMessage();

  const handleAnalyzeResume = (payload) => {
    const isUpload = typeof payload === "object";

    sendMessage({
      type: isUpload ? "resume-upload-analysis" : "resume-analysis",
      content: isUpload ? payload.resumeText : payload,
      fileName: isUpload ? payload.fileName : null,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-3xl p-2 shadow-sm">
        <div className="flex items-center gap-2 min-w-0">
          <button
            type="button"
            onClick={clearChat}
            className="hidden sm:flex shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 items-center justify-center transition"
            title="New Chat"
          >
            <FiRotateCcw className="text-lg text-gray-600" />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenu((prev) => !prev)}
              className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <FiPlus className="text-xl text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute bottom-14 left-0 bg-white border border-gray-200 rounded-2xl shadow-lg w-52 overflow-hidden z-50">
                <button
                  onClick={() => {
                    setShowPasteModal(true);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50"
                >
                  Paste Resume
                </button>

                <button
                  onClick={() => {
                    setShowUploadModal(true);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50"
                >
                  Upload PDF / DOCX
                </button>
              </div>
            )}
          </div>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="min-w-0 flex-1 bg-transparent outline-none text-sm sm:text-[15px] text-slate-700 placeholder:text-gray-400"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isGenerating}
            className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[var(--color-primary)] disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition"
          >
            <RiSendPlaneFill className="text-white text-lg" />
          </button>
        </div>
      </div>

      <PasteResumeModal
        isOpen={showPasteModal}
        onClose={() => setShowPasteModal(false)}
        onAnalyze={handleAnalyzeResume}
      />
      <UploadResumeModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onAnalyze={handleAnalyzeResume}
      />
    </>
  );
};

export default ChatInput;
