import { supabase } from "../lib/supabaseClient";

const builderAiChatService = {
  async createChat(userId, title = "New Chat") {
    const { data, error } = await supabase
      .from("builder_ai_chats")
      .insert({
        user_id: userId,
        title,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getUserChats(userId) {
    const { data, error } = await supabase
      .from("builder_ai_chats")
      .select("*")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getChatMessages(chatId) {
    const { data, error } = await supabase
      .from("builder_ai_messages")
      .select("*")
      .eq("chat_id", chatId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async addMessage({ chatId, userId, type, message }) {
    const { data, error } = await supabase
      .from("builder_ai_messages")
      .insert({
        chat_id: chatId,
        user_id: userId,
        type,
        message,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateChatTitle(chatId, title) {
    const { data, error } = await supabase
      .from("builder_ai_chats")
      .update({ title })
      .eq("id", chatId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteChat(chatId) {
    const { error } = await supabase
      .from("builder_ai_chats")
      .delete()
      .eq("id", chatId);

    if (error) throw error;
    return true;
  },
};

export default builderAiChatService;
