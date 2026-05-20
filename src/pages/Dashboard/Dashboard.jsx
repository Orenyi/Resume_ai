// import { useAuth } from "../../context/AuthContext";
// import { supabase } from "../../lib/supabaseClient";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/");
//   };

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
//         <h1
//           className="text-2xl font-bold mb-2"
//           style={{ color: "var(--color-primary)" }}
//         >
//           Welcome to your Dashboard 🎉
//         </h1>
//         <p className="text-gray-500 text-sm mb-6">{user?.email}</p>
//         <button
//           onClick={handleLogout}
//           className="px-6 py-3 rounded-xl text-white font-semibold"
//           style={{ backgroundColor: "var(--color-primary)" }}
//         >
//           Sign Out
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// ---------------------- claude own ------------------------

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

const Dashboard = () => {
  const { resumes } = useResumes();
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            <StatCard
              title="Total Resumes"
              value={resumes.length}
              subtitle="Professional resumes"
            />
            <StatCard
              title="ATS Average"
              value="88%"
              subtitle="Strong optimization"
            />
            <StatCard
              title="Templates"
              value="12"
              subtitle="Modern templates"
            />
            <StatCard title="Downloads" value="24" subtitle="PDF exports" />
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
