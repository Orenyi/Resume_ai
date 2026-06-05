import { create } from "zustand";
import builderAiService from "../services/builderAiService";

const initialMessage = {
  id: 1,
  type: "ai",
  message:
    "Hi, I’m Builder AI. I can help you build, improve, review, or optimize anything related to your resume. What would you like to do?",
};

const useBuilderAiStore = create((set, get) => ({
  messages: [initialMessage],
  input: "",
  isGenerating: false,

  setInput: (value) => set({ input: value }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now(),
          ...message,
        },
      ],
    })),

  sendMessage: async () => {
    const { input, messages, isGenerating } = get();

    if (!input.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      message: input,
    };

    const updatedMessages = [...messages, userMessage];

    set({
      messages: updatedMessages,
      input: "",
      isGenerating: true,
    });

    try {
      const result = await builderAiService.sendChatMessage(updatedMessages);

      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: Date.now() + 1,
            type: "ai",
            message: result.text,
          },
        ],
      }));
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

  clearChat: () =>
    set({
      messages: [initialMessage],
      input: "",
      isGenerating: false,
    }),
}));

export default useBuilderAiStore;
