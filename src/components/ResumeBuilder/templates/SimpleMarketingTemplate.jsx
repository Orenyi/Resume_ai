import React from "react";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  return value && value.toString().trim() !== "";
};

const getItemTitle = (item) => {
  if (typeof item === "string") return item;
  return item?.title || item?.name || item?.value || "";
};

const ResumeRow = ({ title, children }) => (
  <section className="avoid-break border-t border-gray-700 py-4">
    <div className="grid grid-cols-[170px_1fr] gap-6">
      <h2 className="text-[18px] font-bold leading-tight text-gray-800">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  </section>
);

const SimpleMarketingTemplate = ({ resumeData }) => {
  const {
    personal = {},
    summary = "",
    experience = [],
    education = [],
    skills = [],
    certifications = [],
    awards = [],
    languages = [],
    interests = [],
  } = resumeData || {};

  const filteredExperience = experience.filter(
    (item) => item?.company || item?.role || item?.description,
  );

  const filteredEducation = education.filter(
    (item) => item?.school || item?.degree,
  );

  const filteredSkills = skills.filter((item) =>
    typeof item === "string" ? item.trim() : item?.name?.trim(),
  );

  return (
    <section className="w-full min-h-[1123px] bg-white px-8 py-10 font-serif text-black">
      <header className="avoid-break text-center">
        {personal.photoUrl && (
          <img
            src={personal.photoUrl}
            alt={personal.fullName || "Profile"}
            className="mx-auto mb-4 h-44 w-44 object-cover"
          />
        )}

        <h1 className="text-[38px] font-bold leading-none">
          {personal.fullName || "YOUR NAME"}
        </h1>

        {personal.jobTitle && (
          <p className="mt-2 text-[18px]">{personal.jobTitle}</p>
        )}

        <div className="mt-4 flex flex-wrap justify-center gap-5 text-[14px]">
          {personal.email && (
            <span className="flex items-center gap-1">
              <FiMail /> {personal.email}
            </span>
          )}

          {personal.phone && (
            <span className="flex items-center gap-1">
              <FiPhone /> {personal.phone}
            </span>
          )}

          {personal.location && (
            <span className="flex items-center gap-1">
              <FiMapPin /> {personal.location}
            </span>
          )}

          {personal.website && (
            <span className="flex items-center gap-1">
              <FiGlobe /> {personal.website}
            </span>
          )}
        </div>
      </header>

      <div className="mt-8">
        {(personal.linkedin || personal.website) && (
          <ResumeRow title="Online Presence">
            <div className="grid grid-cols-2 gap-6">
              {personal.linkedin && (
                <div className="avoid-break">
                  <h3 className="text-[14px] font-bold">LinkedIn</h3>
                  <p className="break-all text-[11px]">{personal.linkedin}</p>
                </div>
              )}

              {personal.website && (
                <div className="avoid-break">
                  <h3 className="text-[14px] font-bold">Portfolio</h3>
                  <p className="break-all text-[11px]">{personal.website}</p>
                </div>
              )}
            </div>
          </ResumeRow>
        )}

        {summary && (
          <ResumeRow title="Professional Summary">
            <p className="text-[14px] leading-[2]">{summary}</p>
          </ResumeRow>
        )}

        {filteredSkills.length > 0 && (
          <ResumeRow title="Technical Skills">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              {filteredSkills.map((skill, index) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const level = typeof skill === "string" ? "" : skill.level;
                const rating =
                  typeof skill === "string" ? 0 : Number(skill.rating) || 0;

                return (
                  <div key={index} className="avoid-break">
                    <h3 className="text-[14px] font-bold">{name}</h3>

                    {level && (
                      <p className="text-[11px] text-gray-600">{level}</p>
                    )}

                    {rating > 0 && (
                      <div className="mt-2 flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`text-[12px] ${
                              star <= rating ? "text-gray-700" : "text-gray-300"
                            }`}
                          >
                            ●
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ResumeRow>
        )}

        {filteredEducation.length > 0 && (
          <ResumeRow title="Education">
            <div className="space-y-6">
              {filteredEducation.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-5">
                    <div>
                      <h3 className="text-[14px] font-bold">{item.school}</h3>
                      <p className="text-[12px]">{item.degree}</p>
                    </div>

                    <div className="text-right text-[12px]">
                      {(item.startDate || item.endDate) && (
                        <p>
                          {item.startDate} - {item.endDate}
                        </p>
                      )}
                      {item.location && <p>{item.location}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ResumeRow>
        )}

        {filteredExperience.length > 0 && (
          <ResumeRow title="Professional Experience">
            <div className="space-y-8">
              {filteredExperience.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-5">
                    <div>
                      <h3 className="text-[14px] font-bold">{item.company}</h3>
                      <p className="text-[12px]">{item.role}</p>
                    </div>

                    <div className="text-right text-[12px]">
                      {item.location && <p>{item.location}</p>}
                      {(item.startDate || item.endDate || item.current) && (
                        <p>
                          {item.startDate} -{" "}
                          {item.current ? "Present" : item.endDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.description && (
                    <div className="mt-3 space-y-2">
                      {item.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <p key={i} className="text-[14px] leading-[1.9]">
                            • {line.replace(/^[-•]\s*/, "")}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ResumeRow>
        )}

        {certifications.length > 0 && (
          <ResumeRow title="Certifications">
            <div className="space-y-5">
              {certifications.map((item, index) => (
                <div key={index} className="avoid-break">
                  <h3 className="text-[14px] font-bold">
                    {getItemTitle(item)}
                  </h3>
                </div>
              ))}
            </div>
          </ResumeRow>
        )}

        {awards.length > 0 && (
          <ResumeRow title="Awards & Recognition">
            <div className="space-y-5">
              {awards.map((item, index) => (
                <div key={index} className="avoid-break">
                  <h3 className="text-[14px] font-bold">
                    {getItemTitle(item)}
                  </h3>
                </div>
              ))}
            </div>
          </ResumeRow>
        )}

        {languages.length > 0 && (
          <ResumeRow title="Languages">
            <div className="grid grid-cols-2 gap-6">
              {languages.map((item, index) => (
                <div key={index} className="avoid-break">
                  <h3 className="text-[14px] font-bold">
                    {getItemTitle(item)}
                  </h3>
                </div>
              ))}
            </div>
          </ResumeRow>
        )}

        {interests.length > 0 && (
          <ResumeRow title="Interests">
            <div className="space-y-3">
              {interests.map((item, index) => (
                <p key={index} className="text-[14px] font-semibold">
                  {getItemTitle(item)}
                </p>
              ))}
            </div>
          </ResumeRow>
        )}
      </div>
    </section>
  );
};

export default SimpleMarketingTemplate;
