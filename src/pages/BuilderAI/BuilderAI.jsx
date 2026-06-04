import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import ChatPanel from "./components/ChatPanel";
import ResumePreviewPanel from "./components/ResumePreviewPanel";

const BuilderAI = () => {
  const { sidebarOpen } = useDashboardStore();

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
        ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
          <Topbar
            title="Builder AI"
            description="Create and improve your resume with AI assistance"
          />

          <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6">
            <ChatPanel />
            <ResumePreviewPanel />
          </div>
        </div>
      </main>
    </section>
  );
};

export default BuilderAI;
