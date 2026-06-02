import React from "react";
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin } from "react-icons/fi";

const BLUE = "#4f46e5";

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

const Dots = ({ rating = 4 }) => {
  const safeRating = Math.max(0, Math.min(Number(rating) || 0, 5));

  return (
    <div className="mt-2 flex gap-2">
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          className={`h-[10px] w-[10px] rounded-full border border-[#4f46e5] ${
            dot <= safeRating ? "bg-[#4f46e5]" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="mb-3 border-b border-[#4f46e5] pb-1 text-[22px] font-bold uppercase text-[#4f46e5]">
    {children}
  </h2>
);

const AtsDesignBlueTemplate = ({ resumeData }) => {
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

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
              {personal.email && (
                <span className="flex items-center gap-1 underline">
                  <FiMail className="text-[#4f46e5]" /> {personal.email}
                </span>
              )}

              {personal.phone && (
                <span className="flex items-center gap-1 underline">
                  <FiPhone className="text-[#4f46e5]" /> {personal.phone}
                </span>
              )}

              {personal.location && (
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-[#4f46e5]" /> {personal.location}
                </span>
              )}

              {personal.linkedin && (
                <span className="flex items-center gap-1">
                  <FiLinkedin className="text-[#4f46e5]" /> {personal.linkedin}
                </span>
              )}

              {personal.website && (
                <span className="flex items-center gap-1">
                  <FiGlobe className="text-[#4f46e5]" /> {personal.website}
                </span>
              )}
            </div>
          </div>

          {personal.photoUrl && (
            <img
              src={personal.photoUrl}
              alt={personal.fullName || "Profile"}
              className="h-28 w-28 object-cover"
            />
          )}
        </div>
      </header>

      <div className="mt-8 space-y-7">
        {summary && (
          <section className="avoid-break">
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-[14px] leading-[2]">{summary}</p>
          </section>
        )}

        {filteredSkills.length > 0 && (
          <section className="avoid-break">
            <SectionTitle>Technical Skills</SectionTitle>

            <div className="grid grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const level = typeof skill === "string" ? "" : skill.level;
                const desc =
                  typeof skill === "string" ? "" : skill.description || "";
                const rating =
                  typeof skill === "string" ? 4 : skill.rating || 4;

                return (
                  <div key={index} className="avoid-break">
                    <h3 className="text-[14px] font-bold">{name}</h3>
                    {level && <p className="text-[12px]">{level}</p>}
                    {desc && (
                      <p className="text-[12px] text-slate-700">{desc}</p>
                    )}
                    <Dots rating={rating} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {filteredEducation.length > 0 && (
          <section>
            <SectionTitle>Education</SectionTitle>

            <div className="space-y-5">
              {filteredEducation.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="grid grid-cols-[1fr_1fr_150px] gap-5">
                    <div>
                      <h3 className="text-[14px] font-bold">
                        {item.degree || "Degree"}
                      </h3>
                      {item.description && (
                        <p className="mt-2 text-[14px] leading-[1.9]">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 className="text-[14px] font-bold">{item.school}</h3>
                      {item.location && (
                        <p className="text-[12px] text-slate-700">
                          {item.location}
                        </p>
                      )}
                    </div>

                    <div className="text-right text-[12px]">
                      {(item.startDate || item.endDate) && (
                        <p>
                          {item.startDate} - {item.endDate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredExperience.length > 0 && (
          <section>
            <SectionTitle>Professional Experience</SectionTitle>

            <div className="space-y-7">
              {filteredExperience.map((item, index) => (
                <div key={index} className="avoid-break">
                  <div className="grid grid-cols-[1fr_1fr_150px] gap-5">
                    <div>
                      <h3 className="text-[14px]">{item.role}</h3>
                    </div>

                    <div>
                      <h3 className="text-[14px] font-bold">{item.company}</h3>
                    </div>

                    <div className="text-right text-[12px]">
                      {(item.startDate || item.endDate || item.current) && (
                        <p>
                          {item.startDate} -{" "}
                          {item.current ? "Present" : item.endDate}
                        </p>
                      )}
                      {item.location && <p>{item.location}</p>}
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

        {filteredProjects.length > 0 && (
          <section>
            <SectionTitle>Projects</SectionTitle>

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

        {filteredAwards.length > 0 && (
          <section>
            <SectionTitle>Awards & Recognition</SectionTitle>
            <div className="space-y-5">
              {filteredAwards.map((item, index) => (
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

        {filteredLanguages.length > 0 && (
          <section>
            <SectionTitle>Languages</SectionTitle>
            <div className="grid grid-cols-2 gap-5">
              {filteredLanguages.map((item, index) => {
                const title = getItemTitle(item);
                const level = getItemSubText(item);
                const rating = typeof item === "string" ? 4 : item?.rating || 4;

                return (
                  <div key={index} className="avoid-break">
                    <h3 className="text-[14px] font-bold">{title}</h3>
                    {level && <p className="text-[12px]">{level}</p>}
                    <Dots rating={rating} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {filteredInterests.length > 0 && (
          <section>
            <SectionTitle>Interests</SectionTitle>
            <div className="grid grid-cols-2 gap-5">
              {filteredInterests.map((item, index) => (
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
                  <h3 className="text-[14px] font-bold">
                    {getItemTitle(item)}
                  </h3>
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

export default AtsDesignBlueTemplate;
