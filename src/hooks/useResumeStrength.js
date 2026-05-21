import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const useResumeStrength = () => {
  const [resumeData, setResumeData] = useState({
    strength: 0,
    hasExperience: false,
    hasEducation: false,
    hasProjects: false,
    hasSkills: false,
  });

  useEffect(() => {
    calculateStrength();
  }, []);

  const calculateStrength = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: resumes, error } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id)
      .limit(1);

    if (error) {
      console.error(error.message);
      return;
    }

    if (!resumes || resumes.length === 0) return;

    const resume = resumes[0];

    const hasExperience =
      Array.isArray(resume.experience) && resume.experience.length > 0;

    const hasEducation =
      Array.isArray(resume.education) && resume.education.length > 0;

    const hasProjects =
      Array.isArray(resume.projects) && resume.projects.length > 0;

    const hasSkills = Array.isArray(resume.skills) && resume.skills.length > 0;

    let score = 0;

    if (hasExperience) score += 25;
    if (hasEducation) score += 25;
    if (hasProjects) score += 25;
    if (hasSkills) score += 25;

    setResumeData({
      strength: score,
      hasExperience,
      hasEducation,
      hasProjects,
      hasSkills,
    });
  };

  return resumeData;
};

export default useResumeStrength;
