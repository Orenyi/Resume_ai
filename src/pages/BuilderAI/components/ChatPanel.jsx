import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import useBuilderAiStore from "../../../store/builderAiStore";
import PromptSuggestions from "./PromptSuggestions";
import TypingBubble from "./TypingBubble";

const ChatPanel = () => {
  const { messages, isGenerating } = useBuilderAiStore();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <section className="bg-white border border-gray-200 rounded-3xl min-h-[calc(100vh-160px)] flex flex-col overflow-hidden shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
          ✦
        </div>

        <div>
          <h2 className="font-bold text-[var(--color-primary)]">Resume AI</h2>
          <p className="text-xs text-gray-500">Real-time resume assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 md:px-8 py-6 space-y-5 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} type={msg.type} message={msg.message} />
        ))}

        {isGenerating && <TypingBubble />}

        <div ref={messagesEndRef} />
      </div>
      <PromptSuggestions />
      <ChatInput />
    </section>
  );
};

export default ChatPanel;
