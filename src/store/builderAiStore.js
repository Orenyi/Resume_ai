import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";
import builderAiService from "../services/builderAiService";
import builderAiChatService from "../services/builderAiChatService";
import { createResumeAnalysisPrompt } from "../pages/BuilderAI/data/resumeAnalysisPrompt";

const initialMessage = {
  id: "initial-message",
  type: "ai",
  message:
    "Hi, I’m Builder AI. I can help you build, improve, review, or optimize anything related to your resume. What would you like to do?",
};

const useBuilderAiStore = create((set, get) => ({
  chats: [],
  activeChatId: null,
  messages: [initialMessage],
  input: "",
  isGenerating: false,
  loadingChats: false,
  loadingMessages: false,

  setInput: (value) => set({ input: value }),

  loadChats: async () => {
    try {
      set({ loadingChats: true });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const chats = await builderAiChatService.getUserChats(user.id);

      set({ chats });

      if (chats.length > 0 && !get().activeChatId) {
        await get().loadChatMessages(chats[0].id);
      }
    } catch (error) {
      console.log("Load Builder AI chats error:", error.message);
    } finally {
      set({ loadingChats: false });
    }
  },

  createNewChat: async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const chat = await builderAiChatService.createChat(user.id, "New Chat");

      set((state) => ({
        chats: [chat, ...state.chats],
        activeChatId: chat.id,
        messages: [initialMessage],
        input: "",
      }));
    } catch (error) {
      console.log("Create Builder AI chat error:", error.message);
    }
  },

  loadChatMessages: async (chatId) => {
    try {
      set({ loadingMessages: true, activeChatId: chatId });

      const dbMessages = await builderAiChatService.getChatMessages(chatId);

      const formattedMessages = dbMessages.map((msg) => ({
        id: msg.id,
        type: msg.type,
        message: msg.message,
      }));

      set({
        messages:
          formattedMessages.length > 0 ? formattedMessages : [initialMessage],
      });
    } catch (error) {
      console.log("Load Builder AI messages error:", error.message);
    } finally {
      set({ loadingMessages: false });
    }
  },

  sendMessage: async (customPayload = null) => {
    const { input, messages, isGenerating, activeChatId } = get();

    const isResumeAnalysis = customPayload?.type === "resume-analysis";
    const userInput = isResumeAnalysis ? customPayload.content : input;

    if (!userInput.trim() || isGenerating) return;

    try {
      set({ isGenerating: true });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      let chatId = activeChatId;

      const chatTitle = isResumeAnalysis
        ? "Resume Analysis"
        : userInput.length > 35
          ? `${userInput.slice(0, 35)}...`
          : userInput;

      if (!chatId) {
        const newChat = await builderAiChatService.createChat(
          user.id,
          chatTitle,
        );

        chatId = newChat.id;

        set((state) => ({
          chats: [newChat, ...state.chats],
          activeChatId: chatId,
        }));
      } else {
        const currentChat = get().chats.find((chat) => chat.id === chatId);

        if (currentChat?.title === "New Chat") {
          const updatedChat = await builderAiChatService.updateChatTitle(
            chatId,
            chatTitle,
          );

          set((state) => ({
            chats: state.chats.map((chat) =>
              chat.id === chatId ? updatedChat : chat,
            ),
          }));
        }
      }

      const displayMessage = isResumeAnalysis
        ? `Please analyze this resume:\n\n${userInput}`
        : userInput;

      const aiPrompt = isResumeAnalysis
        ? createResumeAnalysisPrompt(userInput)
        : userInput;

      const userMessage = {
        id: Date.now(),
        type: "user",
        message: displayMessage,
      };

      const updatedMessages = [
        ...messages,
        {
          ...userMessage,
          message: aiPrompt,
        },
      ];

      set({
        messages: [...messages, userMessage],
        input: "",
      });

      await builderAiChatService.addMessage({
        chatId,
        userId: user.id,
        type: "user",
        message: displayMessage,
        category: isResumeAnalysis ? "resume-analysis" : "chat",
      });

      const result = await builderAiService.sendChatMessage(updatedMessages);

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        message: result.text,
      };

      set((state) => ({
        messages: [...state.messages, aiMessage],
      }));

      await builderAiChatService.addMessage({
        chatId,
        userId: user.id,
        type: "ai",
        message: result.text,
        category: isResumeAnalysis ? "resume-analysis" : "chat",
      });

      await get().loadChats();
    } catch (error) {
      console.log("Builder AI chat error:", error.message);

      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: Date.now() + 1,
            type: "ai",
            message:
              "Sorry, I couldn't process that request. Please try again.",
          },
        ],
      }));
    } finally {
      set({ isGenerating: false });
    }
  },

  clearChat: async () => {
    set({
      activeChatId: null,
      messages: [initialMessage],
      input: "",
      isGenerating: false,
    });
  },

  deleteChat: async (chatId) => {
    try {
      await builderAiChatService.deleteChat(chatId);

      set((state) => {
        const updatedChats = state.chats.filter((chat) => chat.id !== chatId);

        return {
          chats: updatedChats,
          activeChatId:
            state.activeChatId === chatId ? null : state.activeChatId,
          messages:
            state.activeChatId === chatId ? [initialMessage] : state.messages,
        };
      });
    } catch (error) {
      console.log("Delete Builder AI chat error:", error.message);
    }
  },
}));

export default useBuilderAiStore;
