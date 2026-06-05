import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";

const ChatInput = () => {
  const { input, setInput, sendMessage, isGenerating } = useBuilderAiStore();

  const handleSend = () => {
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tell Builder AI what resume you want..."
          className="flex-1 bg-transparent outline-none text-sm px-3"
        />

        <button
          onClick={handleSend}
          disabled={!input.trim() || isGenerating}
          className="bg-[var(--color-primary)] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs px-5 py-3 rounded-xl font-semibold"
        >
          {isGenerating ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
