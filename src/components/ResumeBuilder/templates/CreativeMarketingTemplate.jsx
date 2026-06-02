import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiAward,
} from "react-icons/fi";

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  return value && value.toString().trim() !== "";
};

const getItemTitle = (item) => {
  if (typeof item === "string") return item;
  return item?.title || item?.name || item?.value || "";
};

const getItemSubText = (item) => {
  if (typeof item === "string") return "";
  return (
    item?.organization || item?.issuer || item?.level || item?.description || ""
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="mb-3 border-b border-black pb-1 text-[22px] font-bold">
    {children}
  </h2>
);

const CreativeMarketingTemplate = ({ resumeData }) => {
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
    references = [],
  } = resumeData || {};

  const filteredSkills = skills.filter((item) =>
    typeof item === "string" ? item.trim() : item?.name?.trim(),
  );

  const filteredExperience = experience.filter(
    (item) => item?.company || item?.role || item?.description,
  );

  const filteredEducation = education.filter(
    (item) => item?.school || item?.degree,
  );

  const filteredCertifications = certifications.filter((item) =>
    hasValue(getItemTitle(item)),
  );

  const filteredAwards = awards.filter((item) => hasValue(getItemTitle(item)));
  const filteredLanguages = languages.filter((item) =>
    hasValue(getItemTitle(item)),
  );
  const filteredInterests = interests.filter((item) =>
    hasValue(getItemTitle(item)),
  );
  const filteredProjects = projects.filter((item) =>
    hasValue(getItemTitle(item)),
  );
  const filteredCommunity = community.filter((item) =>
    hasValue(getItemTitle(item)),
  );
  const filteredPublications = publications.filter((item) =>
    hasValue(getItemTitle(item)),
  );

  return (
    <section className="w-full min-h-[1123px] bg-white px-5 py-5 font-serif text-black">
      <header className="avoid-break">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[38px] font-bold leading-none">
              {personal.fullName || "YOUR NAME"}
            </h1>

            {personal.jobTitle && (
              <p className="mt-2 text-[18px]">{personal.jobTitle}</p>
            )}

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
              {personal.email && (
                <span className="flex items-center gap-1">
                  <FiMail /> {personal.email}
                </span>
              )}

              {personal.phone && (
                <span className="flex items-center gap-1 border-l border-black pl-4">
                  <FiPhone /> {personal.phone}
                </span>
              )}

              {personal.location && (
                <span className="flex items-center gap-1 border-l border-black pl-4">
                  <FiMapPin /> {personal.location}
                </span>
              )}

              {personal.website && (
                <span className="flex items-center gap-1 border-l border-black pl-4">
                  <FiGlobe /> {personal.website}
                </span>
              )}
            </div>
          </div>

          {personal.photoUrl && (
            <img
              src={personal.photoUrl}
              alt={personal.fullName || "Profile"}
              className="h-36 w-36 rounded-lg object-cover"
            />
          )}
        </div>
      </header>

      <div className="mt-7 space-y-6">
        {(personal.linkedin || personal.website) && (
          <section className="avoid-break">
            <SectionTitle>Online Presence</SectionTitle>

            <div className="grid grid-cols-3 gap-6 text-[14px]">
              {personal.linkedin && (
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="break-all text-[12px]">{personal.linkedin}</p>
                </div>
              )}

              {personal.website && (
                <div>
                  <h3 className="font-bold">Portfolio</h3>
                  <p className="break-all text-[12px]">{personal.website}</p>
                </div>
              )}

              {personal.linkedin && (
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="break-all text-[12px]">{personal.linkedin}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {summary && (
          <section className="avoid-break">
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-[14px] leading-[2]">{summary}</p>
          </section>
        )}

        {filteredSkills.length > 0 && (
          <section className="avoid-break">
            <SectionTitle>Technical Skills</SectionTitle>

            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              {filteredSkills.map((skill, index) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const level = typeof skill === "string" ? "" : skill.level;
                const desc =
                  typeof skill === "string" ? "" : skill.description || "";

                return (
                  <div key={index} className="avoid-break">
                    <h3 className="text-[14px] font-bold">{name}</h3>
                    {level && <p className="text-[12px]">{level}</p>}
                    {desc && <p className="text-[12px]">{desc}</p>}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {filteredExperience.length > 0 && (
          <section>
            <SectionTitle>Professional Experience</SectionTitle>

            <div className="space-y-7">
              {filteredExperience.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <div>
                      <h3 className="text-[14px] font-bold">{item.company}</h3>
                      {item.role && <p className="text-[12px]">{item.role}</p>}
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
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      {item.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <li key={i} className="text-[14px] leading-[1.9]">
                            {line.replace(/^[-•]\s*/, "")}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredEducation.length > 0 && (
          <section>
            <SectionTitle>Education</SectionTitle>

            <div className="space-y-5">
              {filteredEducation.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <div>
                      <h3 className="text-[14px] font-bold">{item.school}</h3>
                      {item.degree && (
                        <p className="text-[12px]">{item.degree}</p>
                      )}
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

                  {item.description && (
                    <p className="mt-3 text-[14px] leading-[1.9]">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length > 0 && (
          <section>
            <SectionTitle>Notable Projects</SectionTitle>

            <div className="space-y-6">
              {filteredProjects.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <h3 className="text-[14px] font-bold">
                      {getItemTitle(item)}
                    </h3>
                    {item?.endDate && (
                      <p className="text-[12px]">{item.endDate}</p>
                    )}
                  </div>

                  {getItemSubText(item) && (
                    <p className="mt-2 text-[14px] leading-[1.9]">
                      {getItemSubText(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredCommunity.length > 0 && (
          <section>
            <SectionTitle>Community Involvement</SectionTitle>

            <div className="space-y-6">
              {filteredCommunity.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <h3 className="text-[14px] font-bold">
                      {getItemTitle(item)}
                    </h3>
                    {item?.endDate && (
                      <p className="text-[12px]">{item.endDate}</p>
                    )}
                  </div>

                  {getItemSubText(item) && (
                    <p className="text-[14px] leading-[1.9]">
                      {getItemSubText(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredCertifications.length > 0 && (
          <section>
            <SectionTitle>Certifications</SectionTitle>

            <div className="space-y-5">
              {filteredCertifications.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <h3 className="text-[14px] font-bold">
                      {getItemTitle(item)}
                    </h3>
                    {item?.date && <p className="text-[12px]">{item.date}</p>}
                  </div>

                  {getItemSubText(item) && (
                    <p className="text-[12px]">{getItemSubText(item)}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredInterests.length > 0 && (
          <section>
            <SectionTitle>Interests</SectionTitle>

            <div className="space-y-4">
              {filteredInterests.map((item, index) => (
                <div key={index} className="avoid-break">
                  <h3 className="flex items-center gap-2 text-[14px] font-bold">
                    <FiAward />
                    {getItemTitle(item)}
                  </h3>

                  {getItemSubText(item) && (
                    <p className="mt-1 text-[12px] text-slate-700">
                      {getItemSubText(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredAwards.length > 0 && (
          <section>
            <SectionTitle>Awards & Recognition</SectionTitle>

            <div className="space-y-5">
              {filteredAwards.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <h3 className="text-[14px] font-bold">
                      {getItemTitle(item)}
                    </h3>
                    {item?.date && <p className="text-[12px]">{item.date}</p>}
                  </div>

                  {getItemSubText(item) && (
                    <p className="text-[12px] leading-[1.7]">
                      {getItemSubText(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredLanguages.length > 0 && (
          <section>
            <SectionTitle>Languages</SectionTitle>

            <div className="space-y-5">
              {filteredLanguages.map((item, index) => (
                <div key={index} className="avoid-break">
                  <h3 className="text-[14px] font-bold">
                    {getItemTitle(item)}
                  </h3>
                  {getItemSubText(item) && (
                    <p className="text-[12px]">{getItemSubText(item)}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredPublications.length > 0 && (
          <section>
            <SectionTitle>Publications & Talks</SectionTitle>

            <div className="space-y-5">
              {filteredPublications.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="flex justify-between gap-6">
                    <h3 className="text-[14px] font-bold">
                      {getItemTitle(item)}
                    </h3>
                    {item?.date && <p className="text-[12px]">{item.date}</p>}
                  </div>

                  {getItemSubText(item) && (
                    <p className="text-[12px] leading-[1.7]">
                      {getItemSubText(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default CreativeMarketingTemplate;
