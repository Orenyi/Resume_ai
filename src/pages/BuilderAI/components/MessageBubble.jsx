import React from "react";

const MessageBubble = ({ type, message }) => {
  const isUser = type === "user";

  return (
    <div
      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-6 ${
        isUser
          ? "ml-auto bg-[#0f172a] text-white rounded-tr-sm"
          : "bg-gray-100 text-gray-800 rounded-tl-sm"
      }`}
    >
      {message}
    </div>
  );
};

export default MessageBubble;
