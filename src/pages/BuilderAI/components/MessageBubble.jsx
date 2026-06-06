import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MessageBubble = ({ type, message }) => {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] md:max-w-[72%] px-5 py-4 ${
          isUser
            ? "bg-[var(--color-primary)] text-white rounded-3xl rounded-tr-md"
            : "bg-gray-50 border border-gray-200 text-slate-800 rounded-3xl rounded-tl-md"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap text-sm leading-7">{message}</p>
        ) : (
          <div className="prose prose-sm max-w-none prose-slate">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
