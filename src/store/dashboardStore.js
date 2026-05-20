import { create } from "zustand";

const useDashboardStore = create((set) => ({
  sidebarOpen: true,
  mobileSidebar: false,

  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  openMobileSidebar: () =>
    set({
      mobileSidebar: true,
    }),

  closeMobileSidebar: () =>
    set({
      mobileSidebar: false,
    }),
}));

export default useDashboardStore;
