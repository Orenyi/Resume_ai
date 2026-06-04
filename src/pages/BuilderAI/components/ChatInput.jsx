import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";

const ChatInput = () => {
  const { input, setInput, submitAnswer } = useBuilderAiStore();

  const handleSend = () => {
    submitAnswer();
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Builder AI..."
          className="flex-1 bg-transparent outline-none text-sm px-2"
        />

        <button
          onClick={handleSend}
          className="bg-[var(--color-primary)] text-white text-xs px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
