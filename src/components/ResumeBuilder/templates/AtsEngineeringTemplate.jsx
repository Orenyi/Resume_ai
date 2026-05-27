import React from "react";

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  return value && value.toString().trim() !== "";
};

const SectionTitle = ({ children }) => (
  <h2 className="mb-2 text-[15px] font-extrabold text-[#008ee6]">{children}</h2>
);

const TimelineSection = ({ title, children }) => (
  <section className="relative mb-5 pl-5">
    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[#008ee6] bg-white" />
    <div className="absolute left-[5px] top-5 bottom-0 w-[2px] bg-[#008ee6]" />

    <h2 className="mb-2 text-[15px] font-extrabold text-[#008ee6]">{title}</h2>

    <div className="relative z-10">{children}</div>
  </section>
);

const ContactItem = ({ value }) => {
  if (!hasValue(value)) return null;

  return <span>{value}</span>;
};

const AtsEngineeringTemplate = ({ resumeData }) => {
  const { personal, summary, experience, education, skills } = resumeData;

  const filteredExperience = experience.filter(
    (item) =>
      hasValue(item.company) ||
      hasValue(item.role) ||
      hasValue(item.description),
  );

  const filteredEducation = education.filter(
    (item) => hasValue(item.school) || hasValue(item.degree),
  );

  return (
    <section className="w-full min-h-[1123px] bg-white text-black font-serif text-[12px] leading-[1.45]">
      <div className="px-5 pt-5 pb-6">
        {/* HEADER */}
        <header className="text-center">
          {personal.photoUrl && (
            <img
              src={personal.photoUrl}
              alt={personal.fullName || "Profile"}
              className="mx-auto h-[120px] w-[120px] object-cover"
            />
          )}

          <h1 className="mt-3 text-[31px] font-extrabold leading-none">
            {personal.fullName || "Your Name"}
          </h1>

          {hasValue(personal.jobTitle) && (
            <p className="mt-1 text-[13px]">{personal.jobTitle}</p>
          )}

          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px]">
            <ContactItem value={personal.email} />
            <ContactItem value={personal.phone} />
            <ContactItem value={personal.location} />
            <ContactItem value={personal.website} />
          </div>
        </header>

        {/* BODY */}
        <div className="mt-5 grid grid-cols-[35%_65%]">
          {/* LEFT COLUMN */}
          <aside className="pr-5">
            {skills.length > 0 && (
              <section className="mb-5">
                <SectionTitle>Technical Skills</SectionTitle>

                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <p className="font-bold text-[12px]">⌁ {skill}</p>
                      <p className="text-[11px] text-gray-500">Professional</p>
                      <p className="text-[#008ee6] text-[12px] tracking-[2px]">
                        ☆ ☆ ☆ ☆ ☆
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <p className="font-bold">Available upon request</p>
            </section>

            <section className="mb-5">
              <SectionTitle>Awards & Recognition</SectionTitle>
              <p className="font-bold">Available upon request</p>
            </section>

            <section className="mb-5">
              <SectionTitle>Languages</SectionTitle>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-bold">English</p>
                  <p className="text-gray-500">Professional</p>
                  <p className="text-[#008ee6] tracking-[2px]">☆ ☆ ☆ ☆ ☆</p>
                </div>
              </div>
            </section>

            <section className="mb-5">
              <SectionTitle>Interests</SectionTitle>
              <p>Software Development</p>
              <p>Technology</p>
              <p>Problem Solving</p>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <main className="border-l-2 border-[#008ee6] pl-5">
            {(hasValue(personal.linkedin) || hasValue(personal.website)) && (
              <TimelineSection title="Online Presence">
                <div className="grid grid-cols-2 gap-4">
                  {hasValue(personal.linkedin) && (
                    <div>
                      <p className="font-bold">LinkedIn</p>
                      <p className="break-all text-gray-600">
                        {personal.linkedin}
                      </p>
                    </div>
                  )}

                  {hasValue(personal.website) && (
                    <div>
                      <p className="font-bold">Portfolio</p>
                      <p className="break-all text-gray-600">
                        {personal.website}
                      </p>
                    </div>
                  )}
                </div>
              </TimelineSection>
            )}

            {hasValue(summary) && (
              <TimelineSection title="Professional Summary">
                <p>{summary}</p>
              </TimelineSection>
            )}

            {filteredEducation.length > 0 && (
              <TimelineSection title="Education">
                <div className="space-y-4">
                  {filteredEducation.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-bold">{item.school || "School"}</p>
                          {hasValue(item.degree) && <p>{item.degree}</p>}
                        </div>

                        <div className="text-right text-[11px]">
                          {(hasValue(item.startDate) ||
                            hasValue(item.endDate)) && (
                            <p>
                              {item.startDate} - {item.endDate}
                            </p>
                          )}

                          {hasValue(item.location) && <p>{item.location}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TimelineSection>
            )}

            {filteredExperience.length > 0 && (
              <TimelineSection title="Professional Experience">
                <div className="space-y-5">
                  {filteredExperience.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-bold">
                            {item.company || "Company"}
                          </p>
                          {hasValue(item.role) && <p>{item.role}</p>}
                        </div>

                        <div className="text-right text-[11px]">
                          {hasValue(item.location) && <p>{item.location}</p>}

                          {(hasValue(item.startDate) ||
                            hasValue(item.endDate)) && (
                            <p>
                              {item.startDate} -{" "}
                              {item.current ? "Present" : item.endDate}
                            </p>
                          )}
                        </div>
                      </div>

                      {hasValue(item.description) && (
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {item.description
                            .split("\n")
                            .filter(Boolean)
                            .map((line, i) => (
                              <li key={i}>{line.replace(/^[-•]\s*/, "")}</li>
                            ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </TimelineSection>
            )}

            <TimelineSection title="References">
              <p className="font-bold">Available upon request</p>
            </TimelineSection>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AtsEngineeringTemplate;
