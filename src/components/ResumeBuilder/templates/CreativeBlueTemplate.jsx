import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiGithub,
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

const SidebarTitle = ({ children }) => (
  <h2 className="border-b border-[#168fc4] pb-1 text-[18px] font-bold text-slate-900">
    {children}
  </h2>
);

const MainTitle = ({ children }) => (
  <h2 className="border-b border-slate-300 pb-1 text-[18px] font-bold text-slate-900">
    {children}
  </h2>
);

const BlueAccentBlock = ({ children }) => (
  <div className="avoid-break border-l-[5px] border-[#0e9bd8] pl-4">
    {children}
  </div>
);

const CreativeBlueTemplate = ({ resumeData }) => {
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

  return (
    <section className="w-full min-h-[1123px] bg-white font-serif text-black">
      <div className="grid min-h-[1123px] grid-cols-[260px_1fr]">
        {/* LEFT SIDEBAR */}
        <aside className="bg-[#cfe8f6]">
          {/* TOP BLUE PROFILE */}
          <div className="bg-[#0c8ec4] px-4 py-5 text-white">
            {personal.photoUrl && (
              <img
                src={personal.photoUrl}
                alt={personal.fullName || "Profile"}
                className="mb-4 h-44 w-44 object-cover"
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

            <div className="mt-5 space-y-2 text-[14px]">
              {personal.location && (
                <p className="flex items-center gap-2">
                  <FiMapPin /> {personal.location}
                </p>
              )}

              {personal.phone && (
                <p className="flex items-center gap-2">
                  <FiPhone /> {personal.phone}
                </p>
              )}

              {personal.email && (
                <p className="flex items-center gap-2 break-all">
                  <FiMail /> {personal.email}
                </p>
              )}

              {personal.website && (
                <p className="flex items-center gap-2 break-all">
                  <FiGlobe /> {personal.website}
                </p>
              )}
            </div>
          </div>

          {/* SIDEBAR CONTENT */}
          <div className="space-y-6 px-4 py-5">
            {(personal.linkedin || personal.github || personal.website) && (
              <section className="avoid-break">
                <SidebarTitle>Profiles</SidebarTitle>

                <div className="mt-3 space-y-2 text-[14px]">
                  {personal.linkedin && (
                    <p className="flex items-center gap-2 break-all">
                      <FiLinkedin className="text-[20px]" /> {personal.linkedin}
                    </p>
                  )}

                  {personal.github && (
                    <p className="flex items-center gap-2 break-all">
                      <FiGithub /> {personal.github}
                    </p>
                  )}

                  {personal.website && (
                    <p className="flex items-center gap-2 break-all">
                      <FiGlobe /> {personal.website}
                    </p>
                  )}
                </div>
              </section>
            )}

            {filteredSkills.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Skills</SidebarTitle>

                <div className="mt-3 space-y-4">
                  {filteredSkills.map((skill, index) => {
                    const name = typeof skill === "string" ? skill : skill.name;
                    const level = typeof skill === "string" ? "" : skill.level;
                    const desc =
                      typeof skill === "string" ? "" : skill.description || "";

                    return (
                      <div key={index} className="avoid-break">
                        <h3 className="text-[14px] font-bold">{name}</h3>
                        {level && <p className="text-[12px]">{level}</p>}
                        {desc && <p className="text-[14px]">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {filteredCertifications.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Certifications</SidebarTitle>

                <div className="mt-3 space-y-4">
                  {filteredCertifications.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="text-[14px]">{getItemSubText(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
            {filteredAwards.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Awards & Recognition</SidebarTitle>

                <div className="mt-3 space-y-4">
                  {filteredAwards.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="text-[14px]">{getItemSubText(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredLanguages.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Languages</SidebarTitle>

                <div className="mt-3 space-y-4">
                  {filteredLanguages.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="text-[14px]">{getItemSubText(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredInterests.length > 0 && (
              <section className="avoid-break">
                <SidebarTitle>Interests</SidebarTitle>

                <div className="mt-3 space-y-3">
                  {filteredInterests.map((item, index) => (
                    <p key={index} className="text-[14px] font-semibold">
                      {getItemTitle(item)}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </aside>

        {/* RIGHT MAIN */}
        <main>
          {summary && (
            <section className="bg-[#d7eef8] px-6 py-5 avoid-break">
              <p className="text-[14px] leading-[2]">{summary}</p>
            </section>
          )}

          <div className="space-y-7 px-6 py-5">
            {filteredExperience.length > 0 && (
              <section>
                <MainTitle>Experience</MainTitle>

                <div className="mt-4 space-y-8">
                  {filteredExperience.map((item, index) => (
                    <BlueAccentBlock key={index}>
                      <div className="flex justify-between gap-5">
                        <div>
                          <h3 className="text-[14px] font-bold">
                            {item.company}
                          </h3>
                          <p className="text-[12px]">{item.role}</p>
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

                      {item.website && (
                        <p className="mt-1 text-[14px] underline">
                          {item.website}
                        </p>
                      )}

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
                    </BlueAccentBlock>
                  ))}
                </div>
              </section>
            )}

            {filteredEducation.length > 0 && (
              <section>
                <MainTitle>Education</MainTitle>

                <div className="mt-4 space-y-5">
                  {filteredEducation.map((item, index) => (
                    <BlueAccentBlock key={index}>
                      <div className="flex justify-between gap-5">
                        <div>
                          <h3 className="text-[14px] font-bold">
                            {item.school}
                          </h3>
                          {item.location && (
                            <p className="text-[12px]">{item.location}</p>
                          )}
                        </div>

                        <div className="text-right text-[12px]">
                          {(item.startDate || item.endDate) && (
                            <p>
                              {item.startDate} - {item.endDate}
                            </p>
                          )}
                          {item.degree && <p>{item.degree}</p>}
                        </div>
                      </div>
                    </BlueAccentBlock>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section>
                <MainTitle>Projects</MainTitle>

                <div className="mt-4 space-y-6">
                  {projects.map((item, index) => (
                    <BlueAccentBlock key={index}>
                      <h3 className="text-[14px] font-bold">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="mt-2 text-[14px] leading-[1.9]">
                          {getItemSubText(item)}
                        </p>
                      )}
                    </BlueAccentBlock>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default CreativeBlueTemplate;
