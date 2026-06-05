import React from "react";

const TypingBubble = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-100 text-gray-700 rounded-2xl rounded-tl-md px-5 py-4 max-w-[85%] md:max-w-[70%]">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]" />
        </div>
      </div>
    </div>
  );
};

export default TypingBubble;
