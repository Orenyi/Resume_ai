import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const useDashboardStats = () => {
  const [stats, setStats] = useState({
    totalResumes: 0,
    averageATS: 0,
    totalTemplates: 12,
    totalDownloads: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      // Get logged-in user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Fetch resumes
      const { data: resumes, error } = await supabase
        .from("resumes")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;

      // Total resumes
      const totalResumes = resumes.length;

      // ATS Average
      const totalATS = resumes.reduce(
        (acc, resume) => acc + (resume.ats_score || 0),
        0,
      );

      const averageATS =
        totalResumes > 0 ? Math.round(totalATS / totalResumes) : 0;

      // Downloads count
      const totalDownloads = resumes.reduce(
        (acc, resume) => acc + (resume.downloads || 0),
        0,
      );

      setStats({
        totalResumes,
        averageATS,
        totalTemplates: 12,
        totalDownloads,
      });
    } catch (error) {
      console.error("Dashboard stats error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    stats,
    loading,
    refetch: fetchStats,
  };
};

export default useDashboardStats;
