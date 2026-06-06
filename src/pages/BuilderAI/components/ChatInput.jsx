import React from "react";
import { FiPlus, FiRotateCcw } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import useBuilderAiStore from "../../../store/builderAiStore";

const ChatInput = () => {
  const { input, setInput, sendMessage, isGenerating, clearChat } =
    useBuilderAiStore();

  const handleSend = () => sendMessage();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-3xl p-2 shadow-sm">
      <div className="flex items-center gap-2 min-w-0">
        {/* New Chat */}
        <button
          type="button"
          onClick={clearChat}
          className="hidden sm:flex shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 items-center justify-center transition"
          title="New Chat"
        >
          <FiRotateCcw className="text-lg text-gray-600" />
        </button>

        {/* Upload Resume */}
        <button
          type="button"
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          title="Upload Resume (Coming Soon)"
        >
          <FiPlus className="text-xl text-gray-600" />
        </button>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          className="min-w-0 flex-1 bg-transparent outline-none text-sm sm:text-[15px] text-slate-700 placeholder:text-gray-400"
        />

        {/* Send */}
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
  );
};

export default ChatInput;
