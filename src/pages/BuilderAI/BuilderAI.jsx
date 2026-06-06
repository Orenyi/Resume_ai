import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import useDashboardStore from "../../store/dashboardStore";
import ChatPanel from "./components/ChatPanel";
import useBuilderAiStore from "../../store/builderAiStore";

import Topbar from "../../components/Topbar";

const BuilderAI = () => {
  const { sidebarOpen } = useDashboardStore();
  const { loadChats } = useBuilderAiStore();

  useEffect(() => {
    loadChats();
  }, [loadChats]);

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main
        className={`transition-all duration-300
        ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="lg:hidden">
          <Topbar title="Builder AI" description="" />
        </div>
        <div className="h-screen w-full flex">
          <div className="flex-1 min-w-0">
            <ChatPanel />
          </div>
        </div>
      </main>
    </section>
  );
};

export default BuilderAI;
