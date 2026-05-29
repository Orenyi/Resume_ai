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

  async improveExperience(selectedExperience) {
    const { data, error } = await supabase.functions.invoke(
      "generate-resume-ai",
      {
        body: {
          type: `
            Improve ONLY this selected work experience description.
            Return 4 to 5 bullet points only.
            Do not mention any other job.
            Do not copy from other experiences.
            Use the company, role, and location below only.
            `,
          resumeData: {
            selectedExperience,
          },
          targetText: selectedExperience.description,
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
          type: "Suggest 5 relevant resume skills. Return only comma-separated skills.",
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
