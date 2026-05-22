import { supabase } from "../lib/supabaseClient";
import axios from "axios";
const uploadResumeService = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("resume-uploads")
    .upload(fileName, file);
  if (error) {
    throw error;
  }
  const { data: publicUrlData } = supabase.storage
    .from("resume-uploads")
    .getPublicUrl(fileName);
  const fileUrl = publicUrlData.publicUrl;
  // Send to resume parser API
  await axios.post(
    "https://api.affinda.com/v2/resumes",
    {
      url: fileUrl,
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AFFINDA_API_KEY}`,
      },
    },
  );
};
export default uploadResumeService;
