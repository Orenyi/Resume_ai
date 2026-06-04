export const resumeQuestions = [
  {
    key: "fullName",
    question: "What is your full name?",
    validate: (value) => {
      const words = value.trim().split(/\s+/);
      return words.length >= 2;
    },
    error: "Please enter your full name, for example: Simon Orenyi.",
  },
  {
    key: "email",
    question: "What is your email address?",
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    error: "That email address looks incorrect. Please enter a valid email.",
  },
  {
    key: "phone",
    question: "What is your phone number?",
    validate: (value) => value.trim().length >= 7,
    error: "Please enter a valid phone number.",
  },
  {
    key: "location",
    question: "Where are you located?",
    validate: (value) => value.trim().length >= 2,
    error: "Please enter your location.",
  },
  {
    key: "jobTitle",
    question: "What job title are you targeting?",
    validate: (value) => value.trim().length >= 2,
    error: "Please enter a valid job title.",
  },
  {
    key: "summary",
    question: "Tell me a little about yourself and your career goals.",
    validate: (value) => value.trim().length >= 20,
    error: "Please give a little more detail about yourself.",
  },
  {
    key: "experience",
    question: "Describe your work experience.",
    validate: (value) => value.trim().length >= 10,
    error: "Please describe your experience with more detail.",
  },
  {
    key: "education",
    question: "Tell me about your education.",
    validate: (value) => value.trim().length >= 5,
    error: "Please enter your education details.",
  },
  {
    key: "skills",
    question: "List your technical and soft skills.",
    validate: (value) => value.trim().length >= 5,
    error: "Please list at least a few skills.",
  },
];
