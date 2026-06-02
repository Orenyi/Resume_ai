import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const useResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResumes = async () => {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("resumes")
        .select(
          `*,
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
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (error) throw error;

      setResumes(data || []);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const uploadPdf = async (resumeId, blob) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const filePath = `${user.id}/${resumeId}.pdf`;

      const { error } = await supabase.storage
        .from("resumes")
        .upload(filePath, blob, {
          upsert: true,
          contentType: "application/pdf",
        });

      if (error) throw error;

      const { data } = supabase.storage.from("resumes").getPublicUrl(filePath);

      await supabase
        .from("resumes")
        .update({
          pdf_url: data.publicUrl,
        })
        .eq("id", resumeId);

      fetchResumes();
    } catch (error) {
      console.log(error.message);
    }
  };
  const removeResumeFromState = (resumeId) => {
    setResumes((prev) => prev.filter((resume) => resume.id !== resumeId));
  };

  const updateResumeInState = (updatedResume) => {
    setResumes((prev) =>
      prev.map((resume) =>
        resume.id === updatedResume.id ? updatedResume : resume,
      ),
    );
  };

  return {
    resumes,
    loading,
    fetchResumes,
    uploadPdf,
    removeResumeFromState,
    updateResumeInState,
  };
};

export default useResumes;
