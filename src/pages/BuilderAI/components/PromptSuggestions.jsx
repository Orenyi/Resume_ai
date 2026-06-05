import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";
import {
  RiFileTextLine,
  RiSparklingLine,
  RiShieldCheckLine,
  RiArticleLine,
} from "react-icons/ri";

const PromptSuggestions = () => {
  const { messages, setInput } = useBuilderAiStore();

  if (messages.length > 1) return null;

  const suggestions = [
    {
      title: "Build Resume",
      description: "Create a professional resume from scratch",
      icon: <RiFileTextLine size={22} />,
      prompt: "Help me build a professional resume",
    },
    {
      title: "Improve Resume",
      description: "Rewrite and strengthen my resume content",
      icon: <RiSparklingLine size={22} />,
      prompt: "Help me improve my existing resume",
    },
    {
      title: "ATS Review",
      description: "Optimize my resume for ATS systems",
      icon: <RiShieldCheckLine size={22} />,
      prompt: "Review my resume for ATS compatibility",
    },
    {
      title: "Cover Letter",
      description: "Generate a tailored cover letter",
      icon: <RiArticleLine size={22} />,
      prompt: "Help me write a professional cover letter",
    },
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {suggestions.map((item) => (
          <button
            key={item.title}
            onClick={() => setInput(item.prompt)}
            className="group bg-white border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-md rounded-3xl p-5 text-left transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-slate-900">{item.title}</h3>

            <p className="mt-2 text-sm text-gray-500 leading-6">
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
