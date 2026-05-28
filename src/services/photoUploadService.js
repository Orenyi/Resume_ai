import { supabase } from "../lib/supabaseClient";

const photoUploadService = {
  async uploadProfilePhoto(file, userId) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("resume-profile-photos")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from("resume-profile-photos")
      .getPublicUrl(fileName);

    return data.publicUrl;
  },
};

export default photoUploadService;
