import { create } from "zustand";
import { resumeQuestions } from "../pages/BuilderAI/data/resumeQuestions";

const useBuilderAiStore = create((set, get) => ({
  currentQuestionIndex: 0,
  answers: {},

  messages: [
    {
      id: 1,
      type: "ai",
      message: resumeQuestions[0].question,
    },
  ],

  input: "",

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

  submitAnswer: () => {
    const { input, currentQuestionIndex, answers, messages } = get();

    if (!input.trim()) return;

    const currentQuestion = resumeQuestions[currentQuestionIndex];
    const nextQuestion = resumeQuestions[currentQuestionIndex + 1];

    const isValid = currentQuestion.validate
      ? currentQuestion.validate(input)
      : true;

    if (!isValid) {
      set({
        messages: [
          ...messages,
          {
            id: Date.now(),
            type: "user",
            message: input,
          },
          {
            id: Date.now() + 1,
            type: "ai",
            message:
              currentQuestion.error ||
              "Please check your answer and try again.",
          },
        ],
        input: "",
      });

      return;
    }

    set({
      answers: {
        ...answers,
        [currentQuestion.key]: input,
      },
      messages: [
        ...messages,
        {
          id: Date.now(),
          type: "user",
          message: input,
        },
        nextQuestion
          ? {
              id: Date.now() + 1,
              type: "ai",
              message: nextQuestion.question,
            }
          : {
              id: Date.now() + 1,
              type: "ai",
              message:
                "Great! I have collected your resume details. Next, I’ll generate a professional resume draft from your answers.",
            },
      ],
      currentQuestionIndex: nextQuestion
        ? currentQuestionIndex + 1
        : currentQuestionIndex,
      input: "",
    });
  }, 

  clearChat: () =>
    set({
      currentQuestionIndex: 0,
      answers: {},
      input: "",
      messages: [
        {
          id: 1,
          type: "ai",
          message: resumeQuestions[0].question,
        },
      ],
    }),
}));

export default useBuilderAiStore;
