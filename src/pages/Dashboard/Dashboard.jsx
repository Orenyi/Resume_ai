import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import ResumeSection from "../../components/ResumeSection";
import StatCard from "../../components/StatCard";
import ProfileCompletionWidget from "../../components/ProfileCompletionWidget";
import QuickActionsWidget from "../../components/QuickActionsWidget";
import ActivityFeed from "../../components/ActivityFeed";
import useResumes from "../../hooks/useResumes";
import useDashboardStore from "../../store/dashboardStore";
import useDashboardStats from "../../hooks/useDashboardStats";

const Dashboard = () => {
  const { resumes } = useResumes();
  const { sidebarOpen } = useDashboardStore();
  const { stats, loading } = useDashboardStats();

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main
        className={`transition-all duration-300 px-4 md:px-6 lg:px-8 py-6
          ${sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[85px]"}`}
      >
        <div className="max-w-[85rem] mx-auto">
          <Topbar />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            <StatCard
              title="Total Resumes"
              value={stats.totalResumes}
              subtitle="Professional resumes"
            />

            <StatCard
              title="ATS Average"
              value={`${stats.averageATS}%`}
              subtitle="Strong optimization"
            />

            <StatCard
              title="Templates"
              value={stats.totalTemplates}
              subtitle="Modern templates"
            />

            <StatCard
              title="Downloads"
              value={stats.totalDownloads}
              subtitle="PDF exports"
            />
          </div>
          <div className="mt-10">
            <ResumeSection resumes={resumes} />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
            <div className="xl:col-span-2">
              <ActivityFeed />
            </div>
            <div className="space-y-6">
              <ProfileCompletionWidget />
              <QuickActionsWidget />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Dashboard;
