import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiCopy } from "react-icons/fi";

const extractScore = (message, labels) => {
  for (const label of labels) {
    const regex = new RegExp(
      `${label}[\\s\\S]{0,80}?(\\d{1,3})\\s*(?:/100|%)`,
      "i",
    );

    const match = message.match(regex);

    if (match) {
      const score = Number(match[1]);
      return score > 100 ? 100 : score;
    }
  }

  return null;
};

const formatAiMessage = (message) => {
  return message
    .replace(/^Resume Analysis$/gim, "## Resume Analysis")
    .replace(/^Overall Score$/gim, "## Overall Score")
    .replace(/^Resume Score$/gim, "## Resume Score")
    .replace(/^ATS Score$/gim, "## ATS Score")
    .replace(/^Strengths:?$/gim, "## Strengths")
    .replace(/^Weaknesses:?$/gim, "## Weaknesses")
    .replace(/^ATS Issues:?$/gim, "## ATS Issues")
    .replace(/^Missing or Weak Sections:?$/gim, "## Missing or Weak Sections")
    .replace(
      /^Improved Professional Summary:?$/gim,
      "## Improved Professional Summary",
    )
    .replace(/^Improved Skills Section:?$/gim, "## Improved Skills Section")
    .replace(
      /^Improved Experience Bullets:?$/gim,
      "## Improved Experience Bullets",
    )
    .replace(/^Final Recommendations:?$/gim, "## Final Recommendations")
    .replace(
      /^Suggestions for Improvement:?$/gim,
      "## Suggestions for Improvement",
    )
    .replace(/^Refined Version:?$/gim, "## Refined Version");
};

const MessageBubble = ({ type, message }) => {
  const isUser = type === "user";

  const formattedMessage = !isUser ? formatAiMessage(message) : message;

  const resumeScore = !isUser
    ? extractScore(message, ["Resume Score", "Overall Score", "Overall"])
    : null;

  const atsScore = !isUser ? extractScore(message, ["ATS Score"]) : null;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(message);
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[95%] md:max-w-[85%] lg:max-w-[78%] px-6 py-6 ${
          isUser
            ? "bg-[var(--color-primary)] text-white rounded-3xl rounded-tr-md"
            : "bg-white border border-gray-200 text-slate-800 rounded-3xl rounded-tl-md shadow-sm"
        }`}
      >
        {!isUser && (resumeScore || atsScore) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {resumeScore && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Resume Score</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {resumeScore}%
                </h3>
              </div>
            )}

            {atsScore && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">ATS Score</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {atsScore}%
                </h3>
              </div>
            )}
          </div>
        )}

        {!isUser && (
          <div className="flex justify-end mb-3">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              <FiCopy />
              Copy
            </button>
          </div>
        )}

        {isUser ? (
          <p className="whitespace-pre-wrap text-sm leading-7">{message}</p>
        ) : (
          <div
            className="
              prose prose-slate max-w-none
              prose-p:text-[15px] prose-p:leading-8 prose-p:my-4
              prose-li:text-[15px] prose-li:leading-8 prose-li:my-2
              prose-ul:my-5 prose-ol:my-5
              prose-h1:text-2xl prose-h1:font-bold prose-h1:mt-2 prose-h1:mb-5
              prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-lg prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3
              prose-strong:text-slate-950
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {formattedMessage}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
