import { create } from "zustand";

const defaultResumeData = {
  personal: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    photoUrl: "",
  },

  summary: "",

  experience: [
    {
      company: "",
      role: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  ],

  education: [
    {
      school: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  ],

  skills: [
    {
      name: "JavaScript",
      level: "Professional",
      rating: 4,
    },
  ],

  certifications: [],

  awards: [],

  languages: [],

  interests: [],
};

const useResumeBuilderStore = create((set) => ({
  resumeData: defaultResumeData,
  currentStep: 0,
  selectedTemplate: null,

  setResumeData: (data) =>
    set({
      resumeData: data,
    }),

  updateSection: (section, value) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        [section]: value,
      },
    })),

  updatePersonal: (field, value) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personal: {
          ...state.resumeData.personal,
          [field]: value,
        },
      },
    })),

  setCurrentStep: (step) =>
    set({
      currentStep: step,
    }),

  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),

  setSelectedTemplate: (template) =>
    set({
      selectedTemplate: template,
    }),

  resetBuilder: () =>
    set({
      resumeData: defaultResumeData,
      currentStep: 0,
      selectedTemplate: null,
    }),
}));

export default useResumeBuilderStore;
