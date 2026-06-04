import React from "react";
import MessageBubble from "./MessageBubble";
import QuickActions from "./QuickActions";
import ChatInput from "./ChatInput";
import useBuilderAiStore from "../../../store/builderAiStore";

const ChatPanel = () => {
  const { messages } = useBuilderAiStore();

  return (
    <section className="bg-white border border-gray-200 rounded-2xl h-[650px] xl:h-[calc(100vh-140px)] flex flex-col overflow-hidden">
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
      <div className="flex-1 p-5 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} type={msg.type} message={msg.message} />
        ))}
      </div>

      <QuickActions />
      <ChatInput />
    </section>
  );
};

export default ChatPanel;
