import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";

const ChatInput = () => {
  const { input, setInput, submitAnswer } = useBuilderAiStore();

  const handleSend = () => {
    submitAnswer();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Builder AI..."
          className="flex-1 bg-transparent outline-none text-sm px-2"
        />

        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[var(--color-primary)] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
