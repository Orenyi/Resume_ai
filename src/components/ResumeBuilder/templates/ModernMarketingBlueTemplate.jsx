import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiAward,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";

const BLUE = "#4f8fa1";
const LIGHT_BLUE = "#dcebef";

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
    <div className="mt-2 flex gap-2">
      {[1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className={`h-[8px] w-12 border border-[#4f8fa1] ${
            item <= safeRating ? "bg-[#4f8fa1]" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

const SidebarTitle = ({ children }) => (
  <h2 className="mb-3 border-b border-[#4f8fa1] pb-1 text-[18px] font-bold text-[#4f8fa1]">
    {children}
  </h2>
);

const MainTitle = ({ children }) => (
  <h2 className="mb-4 border-b border-[#4f8fa1] pb-1 text-[22px] font-bold text-[#4f8fa1]">
    {children}
  </h2>
);

const ModernMarketingBlueTemplate = ({ resumeData }) => {
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
      <div className="grid min-h-[1123px] grid-cols-[280px_1fr]">
        {/* LEFT SIDEBAR */}
        <aside className="bg-[#dcebef] px-5 py-6">
          <header className="avoid-break text-center">
            {personal.photoUrl && (
              <img
                src={personal.photoUrl}
                alt={personal.fullName || "Profile"}
                className="mx-auto mb-4 h-44 w-44 object-cover"
              />
            )}

            <h1 className="text-[28px] font-bold leading-none">
              {personal.fullName || "YOUR NAME"}
            </h1>

            {personal.jobTitle && (
              <p className="mt-2 text-[16px] leading-tight">
                {personal.jobTitle}
              </p>
            )}
          </header>

          <div className="mt-5 border border-[#4f8fa1] p-4 text-[14px]">
            {personal.email && (
              <p className="mb-2 flex items-center gap-2 break-all">
                <FiMail /> {personal.email}
              </p>
            )}

            {personal.phone && (
              <p className="mb-2 flex items-center gap-2">
                <FiPhone /> {personal.phone}
              </p>
            )}

            {personal.location && (
              <p className="mb-2 flex items-center gap-2">
                <FiMapPin /> {personal.location}
              </p>
            )}

            {personal.linkedin && (
              <p className="mb-2 flex items-center gap-2 break-all">
                <FiLinkedin /> {personal.linkedin}
              </p>
            )}

            {personal.website && (
              <p className="flex items-center gap-2 break-all">
                <FiGlobe /> {personal.website}
              </p>
            )}
          </div>

          <div className="mt-6 space-y-7">
            {filteredCertifications.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Certifications</SidebarTitle>

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

            {filteredInterests.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Interests</SidebarTitle>

                <div className="space-y-4">
                  {filteredInterests.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="flex items-center gap-2 text-[14px] font-bold">
                        <FiAward className="text-[#4f8fa1]" />
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
                <SidebarTitle>Awards & Recognition</SidebarTitle>

                <div className="space-y-5">
                  {filteredAwards.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="mt-1 text-[12px] leading-[1.7]">
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
                <SidebarTitle>Languages</SidebarTitle>

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
                <SidebarTitle>Publications & Talks</SidebarTitle>

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
        </aside>

        {/* RIGHT MAIN */}
        <main className="px-6 py-6">
          {(personal.linkedin || personal.website) && (
            <section className="mb-6 avoid-break">
              <MainTitle>Online Presence</MainTitle>

              <div className="grid grid-cols-2 gap-6">
                {personal.linkedin && (
                  <div>
                    <h3 className="text-[14px] font-bold">LinkedIn</h3>
                    <p className="break-all text-[12px]">{personal.linkedin}</p>
                  </div>
                )}

                {personal.website && (
                  <div>
                    <h3 className="text-[14px] font-bold">Portfolio</h3>
                    <p className="break-all text-[12px]">{personal.website}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {summary && (
            <section className="mb-6 avoid-break">
              <MainTitle>Professional Summary</MainTitle>
              <p className="text-[14px] leading-[2]">{summary}</p>
            </section>
          )}

          {filteredEducation.length > 0 && (
            <section className="mb-6">
              <MainTitle>Education</MainTitle>

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

          {filteredExperience.length > 0 && (
            <section className="mb-6">
              <MainTitle>Professional Experience</MainTitle>

              <div className="space-y-7">
                {filteredExperience.map((item, index) => (
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
            </section>
          )}

          {filteredProjects.length > 0 && (
            <section className="mb-6">
              <MainTitle>Notable Projects</MainTitle>

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
                      <p className="text-[14px] leading-[1.9]">
                        {getItemSubText(item)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {filteredSkills.length > 0 && (
            <section className="mb-6">
              <MainTitle>Technical Skills</MainTitle>

              <div className="space-y-5">
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

          {filteredCommunity.length > 0 && (
            <section className="mb-6">
              <MainTitle>Community Involvement</MainTitle>

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
        </main>
      </div>
    </section>
  );
};

export default ModernMarketingBlueTemplate;
