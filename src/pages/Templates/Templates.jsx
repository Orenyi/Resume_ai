import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import useDashboardStore from "../../store/dashboardStore";
import TemplateHeader from "../../components/Template/TemplateHeader";
import TemplateFilters from "../../components/Template/TemplateFilters";
import TemplateGrid from "../../components/Template/TemplateGrid";
import ImportResumeModal from "../../components/Template/ImportResumeModal";
import useTemplates from "../../hooks/useTemplates";
import useResumeBuilderStore from "../../store/resumeBuilderStore";

const Template = () => {
  const { sidebarOpen } = useDashboardStore();
  const { templates, loading, filters, setFilters, search, setSearch } =
    useTemplates();
  const [showImportModal, setShowImportModal] = useState(false);
  const { hasImportedResume } = useResumeBuilderStore();

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
          ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
          <Topbar
            title="Resume Templates"
            description="Choose from professional ATS-friendly templates"
          />
          <TemplateHeader onImport={() => setShowImportModal(true)} />
          {hasImportedResume && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-4">
              <p className="font-semibold">Resume imported successfully.</p>
              <p className="text-sm mt-1">
                Choose any template below to create your resume with the
                imported data.
              </p>
            </div>
          )}
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
