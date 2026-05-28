const hasText = (value) => value && value.toString().trim().length > 0;

const calculateResumeScore = (resumeData) => {
  let score = 0;
  const suggestions = [];

  const personal = resumeData.personal || {};
  const experience = resumeData.experience || [];
  const education = resumeData.education || [];
  const skills = resumeData.skills || [];
  const summary = resumeData.summary || "";

  if (hasText(personal.fullName)) score += 10;
  else suggestions.push("Add your full name.");

  if (hasText(personal.email)) score += 10;
  else suggestions.push("Add a professional email address.");

  if (hasText(personal.phone)) score += 8;
  else suggestions.push("Add your phone number.");

  if (hasText(personal.location)) score += 7;
  else suggestions.push("Add your location.");

  if (hasText(personal.jobTitle)) score += 10;
  else suggestions.push("Add a clear job title.");

  if (hasText(summary) && summary.length >= 80) score += 15;
  else
    suggestions.push(
      "Add a strong professional summary with at least 80 characters.",
    );

  const validExperience = experience.filter(
    (item) =>
      hasText(item.company) && hasText(item.role) && hasText(item.description),
  );

  if (validExperience.length > 0) score += 20;
  else suggestions.push("Add at least one complete work experience.");

  const hasStrongExperience = experience.some(
    (item) => hasText(item.description) && item.description.length >= 120,
  );

  if (hasStrongExperience) score += 10;
  else
    suggestions.push(
      "Improve your experience description with stronger achievements.",
    );

  const validEducation = education.filter(
    (item) => hasText(item.school) && hasText(item.degree),
  );

  if (validEducation.length > 0) score += 10;
  else suggestions.push("Add your education details.");

  if (skills.length >= 5) score += 10;
  else suggestions.push("Add at least 5 relevant skills.");

  return {
    score: Math.min(score, 100),
    suggestions,
  };
};

export default calculateResumeScore;
