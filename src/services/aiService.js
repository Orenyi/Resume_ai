import { supabase } from "../lib/supabaseClient";

const aiService = {
  async generateSummary(resumeData) {
    const { data, error } = await supabase.functions.invoke(
      "generate-resume-ai",
      {
        body: {
          type: "Generate a professional resume summary",
          resumeData,
        },
      },
    );

    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data.text;
  },

  async improveExperience(resumeData, targetText) {
    const { data, error } = await supabase.functions.invoke(
      "generate-resume-ai",
      {
        body: {
          type: "Improve this resume experience section professionally",
          resumeData,
          targetText,
        },
      },
    );

    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data.text;
  },

  async suggestSkills(resumeData) {
    const { data, error } = await supabase.functions.invoke(
      "generate-resume-ai",
      {
        body: {
          type: "Suggest 10 relevant resume skills. Return only comma-separated skills.",
          resumeData,
        },
      },
    );

    if (error) throw error;
    if (data?.error) throw new Error(data.error);

    return data.text;
  },
};

export default aiService;
