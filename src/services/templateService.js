import { supabase } from "../lib/supabaseClient";
const templateService = {
  async getTemplates() {
    const { data, error } = await supabase
      .from("templates")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      throw error;
    }
    return data;
  },
};
export default templateService;
