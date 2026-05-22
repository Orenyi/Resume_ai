import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";

const Template = () => {
  const { sidebarOpen } = useDashboardStore();
  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
          ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto">
          <Topbar />
        </div>
      </main>
    </section>
  );
};

export default Template;
