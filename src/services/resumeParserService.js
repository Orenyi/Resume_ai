import { supabase } from "../lib/supabaseClient";

const cleanJsonResponse = (text) => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

const resumeParserService = {
  parseResume: async (resumeText) => {
    const prompt = `
You are Resume AI, an expert resume parser.

Extract the resume below into valid JSON.

Return ONLY valid JSON.
Do not include markdown.
Do not include explanation.
Do not wrap response in code blocks.

Use this exact structure:

{
  "personal": {
    "fullName": "",
    "jobTitle": "",
    "email": "",
    "phone": "",
    "location": "",
    "website": "",
    "linkedin": "",
    "photoUrl": ""
  },
  "summary": "",
  "experience": [
    {
      "company": "",
      "role": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "current": false,
      "description": ""
    }
  ],
  "education": [
    {
      "school": "",
      "degree": "",
      "location": "",
      "startDate": "",
      "endDate": ""
    }
  ],
  "skills": [
    {
      "name": "",
      "level": "Professional",
      "rating": 4
    }
  ],
  "certifications": [],
  "awards": [],
  "languages": [],
  "interests": []
}

Rules:
- If a field is missing, use an empty string.
- If a section is missing, use an empty array.
- Keep descriptions as plain text.
- Do not invent fake experience.
- Convert skills into objects with name, level, and rating.
- Use "Professional" as default skill level.
- Use 4 as default skill rating.

Resume:
${resumeText}
`;

    const { data, error } = await supabase.functions.invoke(
      "builder-ai-resume",
      {
        body: { prompt },
      },
    );

    if (error) {
      throw new Error(error.message);
    }

    const cleanJson = cleanJsonResponse(data.text);

    return JSON.parse(cleanJson);
  },
};

export default resumeParserService;
