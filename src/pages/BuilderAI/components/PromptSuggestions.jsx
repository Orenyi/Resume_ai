import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";

const PromptSuggestions = () => {
  const { messages, setInput } = useBuilderAiStore();

  const suggestions = [
    "Build me a modern frontend developer resume",
    "Create an ATS-friendly resume for remote jobs",
    "Make my resume clean, simple, and professional",
    "Help me create a resume with projects and skills",
  ];

  if (messages.length > 1) return null;

  return (
    <div className="px-4 md:px-8 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setInput(item)}
            className="text-left bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
