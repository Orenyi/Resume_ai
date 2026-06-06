import { create } from "zustand";
import builderAiService from "../services/builderAiService";

const STORAGE_KEY = "builder_ai_chat";

const initialMessage = {
  id: 1,
  type: "ai",
  message:
    "Hi, I’m Builder AI. I can help you build, improve, review, or optimize anything related to your resume. What would you like to do?",
};

const getSavedMessages = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [initialMessage];

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [initialMessage];
    }

    return parsed;
  } catch (error) {
    console.log("Failed to load Builder AI chat:", error.message);
    return [initialMessage];
  }
};

const saveMessages = (messages) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

const useBuilderAiStore = create((set, get) => ({
  messages: getSavedMessages(),
  input: "",
  isGenerating: false,

  setInput: (value) => set({ input: value }),

  addMessage: (message) =>
    set((state) => {
      const updatedMessages = [
        ...state.messages,
        {
          id: Date.now(),
          ...message,
        },
      ];

      saveMessages(updatedMessages);

      return {
        messages: updatedMessages,
      };
    }),

  sendMessage: async () => {
    const { input, messages, isGenerating } = get();

    if (!input.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      message: input,
    };

    const updatedMessages = [...messages, userMessage];

    saveMessages(updatedMessages);

    set({
      messages: updatedMessages,
      input: "",
      isGenerating: true,
    });

    try {
      const result = await builderAiService.sendChatMessage(updatedMessages);

      set((state) => {
        const aiMessages = [
          ...state.messages,
          {
            id: Date.now() + 1,
            type: "ai",
            message: result.text,
          },
        ];

        saveMessages(aiMessages);

        return {
          messages: aiMessages,
        };
      });
    } catch (error) {
      console.log("Builder AI chat error:", error.message);

      set((state) => {
        const errorMessages = [
          ...state.messages,
          {
            id: Date.now() + 1,
            type: "ai",
            message:
              "Sorry, I couldn't process that request. Please try again.",
          },
        ];

        saveMessages(errorMessages);

        return {
          messages: errorMessages,
        };
      });
    } finally {
      set({ isGenerating: false });
    }
  },

  clearChat: () => {
    localStorage.removeItem(STORAGE_KEY);

    set({
      messages: [initialMessage],
      input: "",
      isGenerating: false,
    });
  },
}));

export default useBuilderAiStore;
