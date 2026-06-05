import React from "react";

const MessageBubble = ({ type, message }) => {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] md:max-w-[72%] px-5 py-4 text-sm leading-7 ${
          isUser
            ? "bg-[var(--color-primary)] text-white rounded-2xl rounded-tr-md"
            : "bg-gray-100 text-slate-800 rounded-2xl rounded-tl-md"
        }`}
      >
        <p className="whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
