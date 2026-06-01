import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiAward,
} from "react-icons/fi";

const GREEN = "#4a9f12";
const LIGHT_GREEN = "#eaf6e2";

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

const SkillBar = ({ rating = 4 }) => {
  const safeRating = Math.max(0, Math.min(Number(rating) || 0, 5));

  return (
    <div className="mt-2 flex gap-1">
      {[1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className={`h-[9px] w-[12px] border border-[#4a9f12] ${
            item <= safeRating ? "bg-[#4a9f12]" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="mb-3 border-b border-[#4a9f12] pb-1 text-[22px] font-bold text-[#4a9f12]">
    {children}
  </h2>
);

const SmallSectionTitle = ({ children }) => (
  <h2 className="mb-3 border-b border-[#4a9f12] pb-1 text-[18px] font-bold text-[#4a9f12]">
    {children}
  </h2>
);

const CreativeEngineeringGreenTemplate = ({ resumeData }) => {
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
    <section className="w-full min-h-[1123px] bg-white font-serif text-black">
      {/* HEADER */}
      <header className="avoid-break bg-[#eaf6e2] px-5 py-6">
        <div className="flex items-start gap-6">
          {personal.photoUrl && (
            <img
              src={personal.photoUrl}
              alt={personal.fullName || "Profile"}
              className="h-40 w-40 rounded-lg object-cover"
            />
          )}

          <div className="flex-1">
            <h1 className="text-[38px] font-bold leading-none">
              {personal.fullName || "YOUR NAME"}
            </h1>

            {personal.jobTitle && (
              <p className="mt-2 text-[18px]">{personal.jobTitle}</p>
            )}

            {summary && (
              <p className="mt-4 text-[14px] leading-[2]">{summary}</p>
            )}
          </div>
        </div>
      </header>

      {/* CONTACT BAR */}
      <div className="avoid-break bg-[#d8edc9] px-5 py-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          {personal.email && (
            <span className="flex items-center gap-2">
              <FiMail className="text-[#4a9f12]" /> {personal.email}
            </span>
          )}

          {personal.phone && (
            <span className="flex items-center gap-2">
              <FiPhone className="text-[#4a9f12]" /> {personal.phone}
            </span>
          )}

          {personal.location && (
            <span className="flex items-center gap-2">
              <FiMapPin className="text-[#4a9f12]" /> {personal.location}
            </span>
          )}

          {personal.website && (
            <span className="flex items-center gap-2">
              <FiGlobe className="text-[#4a9f12]" /> {personal.website}
            </span>
          )}
        </div>
      </div>

      {/* BODY */}
      <main className="grid grid-cols-[1fr_285px] gap-6 px-5 py-5">
        {/* LEFT MAIN */}
        <div className="space-y-7">
          {(personal.linkedin || personal.website) && (
            <section className="avoid-break">
              <SectionTitle>Online Presence</SectionTitle>

              <div className="grid grid-cols-2 gap-6 text-[14px]">
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
              </div>
            </section>
          )}

          {filteredSkills.length > 0 && (
            <section className="avoid-break">
              <SectionTitle>Technical Skills</SectionTitle>

              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
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
                      {desc && <p className="text-[12px]">{desc}</p>}
                      <SkillBar rating={rating} />
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {filteredExperience.length > 0 && (
            <section>
              <div className="avoid-break">
                <SectionTitle>Professional Experience</SectionTitle>

                {filteredExperience.slice(0, 1).map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between gap-6">
                      <div>
                        <h3 className="text-[14px] font-bold">
                          {item.company}
                        </h3>
                        {item.role && (
                          <p className="text-[12px]">{item.role}</p>
                        )}
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

              {filteredExperience.length > 1 && (
                <div className="mt-7 space-y-7">
                  {filteredExperience.slice(1).map((item, index) => (
                    <div key={index} className="avoid-break">
                      <div className="flex justify-between gap-6">
                        <div>
                          <h3 className="text-[14px] font-bold">
                            {item.company}
                          </h3>
                          {item.role && (
                            <p className="text-[12px]">{item.role}</p>
                          )}
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
              )}
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
        </div>

        {/* RIGHT OPTIONAL */}
        <aside className="space-y-7">
          {filteredCertifications.length > 0 && (
            <section className="avoid-break">
              <SmallSectionTitle>Certifications</SmallSectionTitle>

              <div className="space-y-5">
                {filteredCertifications.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between gap-4">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>
                      {item?.date && (
                        <p className="text-right text-[12px]">{item.date}</p>
                      )}
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
            <section className="avoid-break">
              <SmallSectionTitle>Interests</SmallSectionTitle>

              <div className="space-y-4">
                {filteredInterests.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <h3 className="flex items-center gap-2 text-[14px] font-bold">
                      <FiAward className="text-[#4a9f12]" />
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
            <section className="avoid-break">
              <SmallSectionTitle>Awards & Recognition</SmallSectionTitle>

              <div className="space-y-5">
                {filteredAwards.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between gap-4">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>
                      {item?.date && (
                        <p className="text-right text-[12px]">{item.date}</p>
                      )}
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
            <section className="avoid-break">
              <SmallSectionTitle>Languages</SmallSectionTitle>

              <div className="space-y-5">
                {filteredLanguages.map((item, index) => {
                  const title = getItemTitle(item);
                  const level = getItemSubText(item);
                  const rating =
                    typeof item === "string" ? 4 : item?.rating || 4;

                  return (
                    <div key={index} className="avoid-break">
                      <h3 className="text-[14px] font-bold">{title}</h3>
                      {level && <p className="text-[12px]">{level}</p>}
                      <SkillBar rating={rating} />
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {filteredPublications.length > 0 && (
            <section className="avoid-break">
              <SmallSectionTitle>Publications & Talks</SmallSectionTitle>

              <div className="space-y-5">
                {filteredPublications.map((item, index) => (
                  <div key={index} className="avoid-break">
                    <div className="flex justify-between gap-4">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>
                      {item?.date && (
                        <p className="text-right text-[12px]">{item.date}</p>
                      )}
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
        </aside>
      </main>
    </section>
  );
};

export default CreativeEngineeringGreenTemplate;
