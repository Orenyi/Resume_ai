import { supabase } from "../lib/supabaseClient";

const resumeService = {
  async createResumeFromTemplate(templateId, userId) {
    const { data, error } = await supabase
      .from("resumes")
      .insert([
        {
          user_id: userId,
          title: "Untitled Resume",
          template_id: templateId,
          resume_data: {},
          status: "draft",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async getUserResumes(userId) {
    const { data, error } = await supabase
      .from("resumes")
      .select(
        `
        *,
        templates (
          id,
          name,
          category,
          career,
          color,
          thumbnail_url,
          pdf_url,
          layout_key
        )
      `,
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  },

  async getResumeById(resumeId) {
    const { data, error } = await supabase
      .from("resumes")
      .select(
        `
        *,
        templates (
          id,
          name,
          category,
          career,
          color,
          thumbnail_url,
          pdf_url,
          layout_key
        )
      `,
      )
      .eq("id", resumeId)
      .single();

    if (error) throw error;

    return data;
  },
  async updateResumeData(resumeId, resumeData) {
    const { data, error } = await supabase
      .from("resumes")
      .update({
        resume_data: resumeData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", resumeId)
      .select()
      .single();

    if (error) throw error;

    return data;
  },
};

export default resumeService;
