import { create } from "zustand";
const useTemplateStore = create((set) => ({
  templates: [],
  loading: false,
  filters: {
    category: "All",
    career: "All",
    color: "All",
  },
  search: "",
  setTemplates: (templates) => set({ templates }),
  setLoading: (loading) => set({ loading }),
  setFilters: (filters) => set({ filters }),
  setSearch: (search) => set({ search }),
}));
export default useTemplateStore;
