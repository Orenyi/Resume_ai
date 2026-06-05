import { builderAiSystemPrompt } from "./builderAiSystemPrompt";

export const createBuilderAiPrompt = (messages) => {
  const conversation = messages
    .map(
      (msg) => `${msg.type === "user" ? "User" : "Builder AI"}: ${msg.message}`,
    )
    .join("\n");

  return `
${builderAiSystemPrompt}

Conversation:
${conversation}

Respond naturally as Builder AI.

Rules:
- If the user asks for advice, answer normally.
- If the user asks to improve text, rewrite it professionally.
- If the user asks to build a resume, ask for missing details if needed.
- If enough resume details are available, create a strong resume draft.
- Keep the response clear and useful.
- Do not use markdown tables.
`;
};
