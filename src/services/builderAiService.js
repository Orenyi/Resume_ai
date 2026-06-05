const builderAiService = {
  generateResumeDraft: async (answers) => {
    const skillsArray = answers.skills
      ? answers.skills.split(",").map((skill) => skill.trim())
      : [];

    const generatedResume = {
      fullName: answers.fullName || "",
      email: answers.email || "",
      phone: answers.phone || "",
      location: answers.location || "",
      jobTitle: answers.jobTitle || "",

      summary:
        answers.summary ||
        `Motivated ${answers.jobTitle} with a strong interest in building professional, user-focused solutions.`,

      experience: answers.experience || "",
      education: answers.education || "",
      skills: skillsArray,
    };

    return {
      success: true,
      data: generatedResume,
    };
  },
};

export default builderAiService;
