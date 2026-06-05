import React from "react";
import useBuilderAiStore from "../../../store/builderAiStore";
import builderAiService from "../../../services/builderAiService";

const GenerateResumeButton = () => {
  const {
    isInterviewComplete,
    isGenerating,
    answers,
    setGeneratedResume,
    setIsGenerating,
    addMessage,
  } = useBuilderAiStore();

  if (!isInterviewComplete) return null;

  const handleGenerate = async () => {
    if (isGenerating) return;

    try {
      setIsGenerating(true);

      const result = await builderAiService.generateResumeDraft(answers);

      if (result.success) {
        setGeneratedResume(result.data);

        addMessage({
          type: "ai",
          message:
            "Your resume draft has been generated successfully. You can now preview it on the right.",
        });
      }
    } catch (error) {
      console.log("Generate resume error:", error.message);

      addMessage({
        type: "ai",
        message:
          "Sorry, I couldn't generate your resume draft. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="px-4 pb-4">
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full bg-[var(--color-primary)] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {isGenerating ? "Generating..." : "Generate Resume Draft"}
      </button>
    </div>
  );
};

export default GenerateResumeButton;
