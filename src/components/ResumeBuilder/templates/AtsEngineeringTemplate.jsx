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

const getItemSubText = (item) => {
  if (typeof item === "string") return "";
  return (
    item?.organization || item?.issuer || item?.level || item?.description || ""
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="text-blue-500 text-[18px] font-bold mb-5">{children}</h2>
);

const TimelineSection = ({ title, children }) => (
  <section className="relative mb-12 pl-8 avoid-break">
    <span className="absolute left-0 top-[8px] z-10 h-[14px] w-[14px] rounded-full border-[3px] border-blue-500 bg-white" />
    <span className="absolute left-[6px] top-[28px] bottom-0 w-[3px] bg-blue-500" />

    <h2 className="text-blue-500 text-[22px] font-bold mb-4">{title}</h2>
    <div>{children}</div>
  </section>
);

const AtsEngineeringTemplate = ({ resumeData }) => {
  const personal = resumeData?.personal || {};

  const filteredSkills =
    resumeData?.skills?.filter((item) =>
      typeof item === "string" ? item.trim() : item?.name?.trim(),
    ) || [];

  const filteredExperience =
    resumeData?.experience?.filter(
      (item) =>
        item?.role?.trim() ||
        item?.company?.trim() ||
        item?.description?.trim(),
    ) || [];

  const filteredEducation =
    resumeData?.education?.filter(
      (item) => item?.school?.trim() || item?.degree?.trim(),
    ) || [];

  const filteredCertifications =
    resumeData?.certifications?.filter((item) =>
      hasValue(getItemTitle(item)),
    ) || [];

  const filteredAwards =
    resumeData?.awards?.filter((item) => hasValue(getItemTitle(item))) || [];

  const filteredLanguages =
    resumeData?.languages?.filter((item) =>
      typeof item === "string" ? item.trim() : item?.name?.trim(),
    ) || [];

  const filteredInterests =
    resumeData?.interests?.filter((item) => hasValue(getItemTitle(item))) || [];

  return (
    <div className="w-full bg-white text-black font-serif">
      <div className="w-full min-h-[1123px] mx-auto bg-white px-8 py-10">
        <header className="text-center avoid-break">
          {personal?.photoUrl && (
            <img
              src={personal.photoUrl}
              alt={personal.fullName || "Profile"}
              className="w-44 h-44 rounded object-cover mx-auto mb-4"
            />
          )}

          <h1 className="text-[38px] font-bold leading-none">
            {personal?.fullName || "YOUR NAME"}
          </h1>

          {personal?.jobTitle && (
            <p className="text-[18px] mt-2">{personal.jobTitle}</p>
          )}

          <div className="flex flex-wrap justify-center gap-5 mt-4 text-[14px]">
            {personal?.email && (
              <div className="flex items-center gap-1">
                <FiMail />
                {personal.email}
              </div>
            )}

            {personal?.phone && (
              <div className="flex items-center gap-1">
                <FiPhone />
                {personal.phone}
              </div>
            )}

            {personal?.location && (
              <div className="flex items-center gap-1">
                <FiMapPin />
                {personal.location}
              </div>
            )}

            {personal?.website && (
              <div className="flex items-center gap-1">
                <FiGlobe />
                {personal.website}
              </div>
            )}
          </div>
        </header>

        <section className="grid grid-cols-[35%_65%] mt-10">
          <aside className="pr-8">
            {filteredSkills.length > 0 && (
              <div className="mb-10 avoid-break">
                <SectionTitle>Technical Skills</SectionTitle>

                <div className="space-y-7">
                  {filteredSkills.map((skill, index) => {
                    const name = typeof skill === "string" ? skill : skill.name;
                    const level =
                      typeof skill === "string" ? "" : skill.level || "";
                    const rating =
                      typeof skill === "string" ? 0 : Number(skill.rating) || 0;

                    return (
                      <div key={index} className="avoid-break">
                        <h3 className="font-bold text-[14px]">{name}</h3>

                        {level && (
                          <p className="text-gray-600 text-[11px]">{level}</p>
                        )}

                        {rating > 0 && (
                          <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`text-[12px] ${
                                  star <= rating
                                    ? "text-blue-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredCertifications.length > 0 && (
              <div className="mb-10 avoid-break">
                <SectionTitle>Certifications</SectionTitle>

                <div className="space-y-5">
                  {filteredCertifications.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="font-bold text-[14px]">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="text-[11px]">{getItemSubText(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredAwards.length > 0 && (
              <div className="mb-10 avoid-break">
                <SectionTitle>Awards & Recognition</SectionTitle>

                <div className="space-y-5">
                  {filteredAwards.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <h3 className="font-bold text-[14px]">
                        {getItemTitle(item)}
                      </h3>

                      {getItemSubText(item) && (
                        <p className="text-[11px]">{getItemSubText(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.length > 0 && (
              <div className="mb-10 avoid-break">
                <SectionTitle>Languages</SectionTitle>

                <div className="space-y-5">
                  {filteredLanguages.map((item, index) => {
                    const name = typeof item === "string" ? item : item.name;
                    const level =
                      typeof item === "string" ? "" : item.level || "";

                    return (
                      <div key={index} className="avoid-break">
                        <h3 className="font-bold text-[14px]">{name}</h3>
                        {level && (
                          <p className="text-[11px] text-gray-600">{level}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredInterests.length > 0 && (
              <div className="avoid-break">
                <SectionTitle>Interests</SectionTitle>

                <div className="space-y-3">
                  {filteredInterests.map((item, index) => (
                    <p key={index} className="font-semibold text-[14px]">
                      {getItemTitle(item)}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <main className="">
            {(personal?.linkedin || personal?.website) && (
              <TimelineSection title="Online Presence">
                <div className="grid grid-cols-2 gap-6">
                  {personal?.linkedin && (
                    <div className="avoid-break">
                      <h3 className="font-bold text-[14px]">LinkedIn</h3>
                      <p className="text-[11px] break-all">
                        {personal.linkedin}
                      </p>
                    </div>
                  )}

                  {personal?.website && (
                    <div className="avoid-break">
                      <h3 className="font-bold text-[14px]">Portfolio</h3>
                      <p className="text-[11px] break-all">
                        {personal.website}
                      </p>
                    </div>
                  )}
                </div>
              </TimelineSection>
            )}

            {resumeData?.summary && (
              <TimelineSection title="Professional Summary">
                <p className="leading-[2] text-[14px]">{resumeData.summary}</p>
              </TimelineSection>
            )}

            {filteredEducation.length > 0 && (
              <TimelineSection title="Education">
                <div className="space-y-8">
                  {filteredEducation.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <div className="flex justify-between gap-5">
                        <div>
                          <h3 className="font-bold text-[14px]">
                            {item.school}
                          </h3>
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
              </TimelineSection>
            )}

            {filteredExperience.length > 0 && (
              <TimelineSection title="Professional Experience">
                <div className="space-y-10">
                  {filteredExperience.map((item, index) => (
                    <div key={index} className="avoid-break">
                      <div className="flex justify-between items-start gap-5">
                        <div>
                          <h3 className="font-bold text-[14px]">
                            {item.company}
                          </h3>
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
                        <div className="mt-5 space-y-3">
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
              </TimelineSection>
            )}
          </main>
        </section>
      </div>
    </div>
  );
};

export default AtsEngineeringTemplate;
