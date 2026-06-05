import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import useBuilderAiStore from "../../../store/builderAiStore";
import PromptSuggestions from "./PromptSuggestions";
import TypingBubble from "./TypingBubble";

const ChatPanel = () => {
  const { messages, isGenerating } = useBuilderAiStore();
  const messagesEndRef = useRef(null);

  const hasStartedChat = messages.length > 1;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  return (
    <section className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Messages Area */}
      <div
        className={`flex-1 overflow-y-auto px-4 md:px-8 ${
          hasStartedChat ? "py-8" : "flex flex-col items-center justify-center"
        }`}
      >
        {!hasStartedChat ? (
          <div className="w-full max-w-4xl mx-auto text-center mt-[33rem] md:mt-[10rem] lg:mt-[2px]">
            <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl shadow-lg">
              ✦
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
              How can I help you today?
            </h1>

            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Ask me anything about your resume. I can help you build, improve,
              optimize, and tailor it to any job.
            </p>

            <PromptSuggestions />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full space-y-5">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                type={msg.type}
                message={msg.message}
              />
            ))}

            {isGenerating && <TypingBubble />}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="w-full px-3 sm:px-4 md:px-8 pb-4 sm:pb-6">
        <div className="max-w-4xl mx-auto">
          <ChatInput />

          <p className="text-center text-xs text-gray-400 mt-3">
            Resume AI may make mistakes. Review important information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatPanel;
