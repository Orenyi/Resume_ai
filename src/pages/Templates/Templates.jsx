import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import TemplateHeader from "../../components/Template/TemplateHeader";
import TemplateFilters from "../../components/Template/TemplateFilters";
import TemplateGrid from "../../components/Template/TemplateGrid";
import ImportResumeModal from "../../components/Template/ImportResumeModal";
import useTemplates from "../../hooks/useTemplates";

const Template = () => {
  const { sidebarOpen } = useDashboardStore();
  const { templates, loading, filters, setFilters, search, setSearch } =
    useTemplates();
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
          ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
          <Topbar />
          <TemplateHeader onImport={() => setShowImportModal(true)} />
          <TemplateFilters
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
          />
          <TemplateGrid templates={templates} loading={loading} />
        </div>
      </main>
      <ImportResumeModal
        open={showImportModal}
        onClose={() => setShowImportModal(false)}
      />
    </section>
  );
};
export default Template;
