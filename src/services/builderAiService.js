import { supabase } from "../lib/supabaseClient";
import { createBuilderAiPrompt } from "../pages/BuilderAI/data/builderAiPrompt";

const builderAiService = {
  sendChatMessage: async (messages) => {
    const prompt = createBuilderAiPrompt(messages);

    const { data, error } = await supabase.functions.invoke(
      "builder-ai-resume",
      {
        body: { prompt },
      },
    );

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true,
      text: data.text,
    };
  },
};

export default builderAiService;
