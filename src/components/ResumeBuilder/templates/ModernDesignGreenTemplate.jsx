import React from "react";
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin } from "react-icons/fi";

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  return value && value.toString().trim() !== "";
};

const RatingBar = ({ rating = 4 }) => (
  <div className="flex gap-1 mt-2">
    {[1, 2, 3, 4, 5].map((item) => (
      <div
        key={item}
        className={`h-[8px] w-8 border border-[#157a52]
        ${item <= rating ? "bg-[#157a52]" : "bg-white"}`}
      />
    ))}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-[22px] font-bold border-b border-[#157a52] pb-1 mb-4 text-[#157a52]">
    {children}
  </h2>
);

const SidebarTitle = ({ children }) => (
  <h2 className="text-[20px] font-bold border-b border-white/40 pb-2 mb-4">
    {children}
  </h2>
);

const ModernDesignGreenTemplate = ({ resumeData }) => {
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
    projects = [],
    community = [],
    publications = [],
  } = resumeData || {};

  const filteredSkills = skills.filter((item) => item?.name);
  const filteredExperience = experience.filter(
    (item) => item?.company || item?.role,
  );
  const filteredEducation = education.filter(
    (item) => item?.school || item?.degree,
  );

  const getItemTitle = (item) => {
    if (typeof item === "string") return item;
    return item?.title || item?.name || item?.value || "";
  };

  const getItemSubText = (item) => {
    if (typeof item === "string") return "";
    return (
      item?.organization ||
      item?.issuer ||
      item?.level ||
      item?.description ||
      ""
    );
  };

  return (
    <section
      className="modern-green-template relative w-full bg-white text-black"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="grid min-h-[1123px] grid-cols-[1fr_280px] items-stretch">
        {/* LEFT SIDE */}
        <div className="px-8 py-6">
          {/* HEADER */}
          <header className="flex gap-5 items-start avoid-break">
            {personal.photoUrl && (
              <img
                src={personal.photoUrl}
                alt={personal.fullName}
                className="w-28 h-28 object-cover"
              />
            )}

            <div className="flex-1">
              <h1 className="text-[38px] font-bold leading-none">
                {personal.fullName || "YOUR NAME"}
              </h1>

              <p className="text-[18px] mt-2">{personal.jobTitle}</p>

              <div className="mt-4 flex flex-wrap gap-4 text-[14px]">
                {personal.email && (
                  <span className="flex items-center gap-1">
                    <FiMail />
                    {personal.email}
                  </span>
                )}

                {personal.phone && (
                  <span className="flex items-center gap-1">
                    <FiPhone />
                    {personal.phone}
                  </span>
                )}

                {personal.location && (
                  <span className="flex items-center gap-1">
                    <FiMapPin />
                    {personal.location}
                  </span>
                )}
              </div>

              <div className="mt-2 flex flex-wrap gap-4 text-[14px]">
                {personal.linkedin && (
                  <span className="flex items-center gap-1">
                    <FiLinkedin />
                    {personal.linkedin}
                  </span>
                )}

                {personal.website && (
                  <span className="flex items-center gap-1">
                    <FiGlobe />
                    {personal.website}
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* SUMMARY */}
          {summary && (
            <section className="mt-8 avoid-break">
              <SectionTitle>Professional Summary</SectionTitle>

              <p className="text-[14px] leading-[2]">{summary}</p>
            </section>
          )}

          {/* SKILLS */}
          {filteredSkills.length > 0 && (
            <section className="mt-8 avoid-break">
              <SectionTitle>Technical Skills</SectionTitle>

              <div className="grid grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div key={index}>
                    <h3 className="text-[14px] font-bold">{skill.name}</h3>

                    <p className="text-[12px] text-gray-600">{skill.level}</p>

                    <RatingBar rating={skill.rating || 4} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {filteredEducation.length > 0 && (
            <section className="mt-8">
              <SectionTitle>Education</SectionTitle>

              <div className="space-y-6">
                {filteredEducation.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-[14px] font-bold">{item.school}</h3>

                        <p className="text-[14px]">{item.degree}</p>
                      </div>

                      <div className="text-right text-[12px]">
                        <p>
                          {item.startDate} - {item.endDate}
                        </p>

                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EXPERIENCE */}
          {filteredExperience.length > 0 && (
            <section className="mt-8">
              <SectionTitle>Professional Experience</SectionTitle>

              <div className="space-y-8">
                {filteredExperience.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-[14px] font-bold">
                          {item.company}
                        </h3>

                        <p className="text-[14px]">{item.role}</p>
                      </div>

                      <div className="text-right text-[12px]">
                        <p>{item.location}</p>

                        <p>
                          {item.startDate} -
                          {item.current ? " Present" : item.endDate}
                        </p>
                      </div>
                    </div>

                    {item.description && (
                      <div className="mt-3 space-y-2">
                        {item.description
                          .split("\n")
                          .filter(Boolean)
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
            </section>
          )}

          {/* PROJECTS */}
          {projects.length > 0 && (
            <section className="mt-8">
              <SectionTitle>Notable Projects</SectionTitle>

              <div className="space-y-8">
                {projects.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between">
                      <h3 className="text-[14px] font-bold">{item.title}</h3>

                      <span className="text-[12px]">
                        {item.startDate} -{item.endDate}
                      </span>
                    </div>

                    <p className="text-[14px] leading-[1.9] mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT GREEN SIDEBAR */}
        <aside className="modern-green-sidebar min-h-[1123px] bg-[#157a52] px-6 py-8 text-white">
          {certifications.length > 0 && (
            <section className="mb-10">
              <SidebarTitle>Certifications</SidebarTitle>

              <div className="space-y-5">
                {certifications.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <h3 className="font-semibold text-[14px]">
                      {getItemTitle(item)}
                    </h3>

                    {getItemSubText(item) && (
                      <p className="text-[13px] opacity-90">
                        {getItemSubText(item)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {awards.length > 0 && (
            <section className="mb-10">
              <SidebarTitle>Awards & Recognition</SidebarTitle>

              <div className="space-y-5">
                {awards.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <h3 className="font-semibold text-[14px]">
                      {getItemTitle(item)}
                    </h3>

                    {getItemSubText(item) && (
                      <p className="text-[13px] opacity-90">
                        {getItemSubText(item)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section className="mb-10">
              <SidebarTitle>Languages</SidebarTitle>

              <div className="grid grid-cols-2 gap-4">
                {languages.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <h3 className="font-semibold text-[14px]">
                      {getItemTitle(item)}
                    </h3>

                    {getItemSubText(item) && (
                      <p className="text-[13px] opacity-80">
                        {getItemSubText(item)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {interests.length > 0 && (
            <section className="mb-10">
              <SidebarTitle>Interests</SidebarTitle>

              <div className="space-y-4">
                {interests.map((item, index) => (
                  <p key={index} className="text-[14px]">
                    {getItemTitle(item)}
                  </p>
                ))}
              </div>
            </section>
          )}

          {publications.length > 0 && (
            <section>
              <SidebarTitle>Publications & Talks</SidebarTitle>

              <div className="space-y-6">
                {publications.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-[14px]">{item.title}</h3>

                    <p className="text-[13px] opacity-90">{item.publisher}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </section>
  );
};

export default ModernDesignGreenTemplate;
