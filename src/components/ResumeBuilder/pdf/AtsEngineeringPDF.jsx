import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const blue = "#008ee6";

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  return value && value.toString().trim() !== "";
};

const formatDate = (date) => {
  if (!date) return "";

  const [year, month] = date.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (!year || !month) return date;

  return `${months[Number(month) - 1]} ${year}`;
};

const cleanLines = (text) => {
  if (!text) return [];

  return text
    .split("\n")
    .map((line) => line.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 18,
    paddingBottom: 24,
    paddingHorizontal: 18,
    fontFamily: "Times-Roman",
    fontSize: 10,
    color: "#000",
    lineHeight: 1.35,
    backgroundColor: "#ffffff",
  },

  header: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: 14,
  },

  photo: {
    width: 82,
    height: 82,
    objectFit: "cover",
    marginBottom: 8,
  },

  name: {
    fontFamily: "Times-Bold",
    fontSize: 28,
    lineHeight: 1,
  },

  jobTitle: {
    fontSize: 11,
    marginTop: 3,
  },

  contactRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    fontSize: 9,
  },

  body: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  leftColumn: {
    width: "35%",
    paddingRight: 14,
  },

  rightColumn: {
    width: "65%",
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: blue,
  },

  section: {
    marginBottom: 14,
  },

  leftTitle: {
    fontFamily: "Times-Bold",
    fontSize: 14,
    color: blue,
    marginBottom: 7,
  },

  timelineSection: {
    position: "relative",
    paddingLeft: 16,
    marginBottom: 16,
  },

  timelineDot: {
    position: "absolute",
    left: -7,
    top: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: blue,
    backgroundColor: "#ffffff",
  },

  timelineLine: {
    position: "absolute",
    left: -2,
    top: 15,
    bottom: 0,
    width: 1.5,
    backgroundColor: blue,
  },

  timelineTitle: {
    fontFamily: "Times-Bold",
    fontSize: 14,
    color: blue,
    marginBottom: 7,
  },

  bold: {
    fontFamily: "Times-Bold",
  },

  muted: {
    color: "#555",
    fontSize: 9,
  },

  small: {
    fontSize: 9,
  },

  skillBlock: {
    marginBottom: 9,
  },

  stars: {
    color: blue,
    fontSize: 9,
    marginTop: 2,
    letterSpacing: 1.5,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  rightDate: {
    fontSize: 9,
    textAlign: "right",
    maxWidth: 120,
  },

  paragraph: {
    lineHeight: 1.45,
  },

  bulletRow: {
    flexDirection: "row",
    marginTop: 3,
  },

  bulletDot: {
    width: 10,
    fontSize: 10,
  },

  bulletText: {
    flex: 1,
    lineHeight: 1.35,
  },

  twoCol: {
    flexDirection: "row",
    gap: 25,
  },

  half: {
    flex: 1,
  },
});

const LeftSection = ({ title, children }) => {
  if (!children) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.leftTitle}>{title}</Text>
      {children}
    </View>
  );
};

const TimelineSection = ({ title, children }) => {
  if (!children) return null;

  return (
    <View style={styles.timelineSection} wrap={false}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />

      <Text style={styles.timelineTitle}>{title}</Text>
      {children}
    </View>
  );
};

const Stars = ({ rating = 0 }) => {
  const safeRating = Math.max(0, Math.min(Number(rating) || 0, 5));

  return (
    <Text style={styles.stars}>
      {"★".repeat(safeRating)}
      {"☆".repeat(5 - safeRating)}
    </Text>
  );
};

const AtsEngineeringPDF = ({ resumeData }) => {
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
    (item) =>
      hasValue(item.company) ||
      hasValue(item.role) ||
      hasValue(item.description),
  );

  const filteredEducation = education.filter(
    (item) => hasValue(item.school) || hasValue(item.degree),
  );

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header} wrap={false}>
          {personal.photoUrl && (
            <Image src={personal.photoUrl} style={styles.photo} />
          )}

          <Text style={styles.name}>{personal.fullName || "Your Name"}</Text>

          {hasValue(personal.jobTitle) && (
            <Text style={styles.jobTitle}>{personal.jobTitle}</Text>
          )}

          <View style={styles.contactRow}>
            {personal.email && <Text>✉ {personal.email}</Text>}
            {personal.phone && <Text>☎ {personal.phone}</Text>}
            {personal.location && <Text>⌖ {personal.location}</Text>}
            {personal.website && <Text>🌐 {personal.website}</Text>}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.leftColumn}>
            {skills.length > 0 && (
              <LeftSection title="Technical Skills">
                {skills.map((skill, index) => (
                  <View key={index} style={styles.skillBlock} wrap={false}>
                    <Text style={styles.bold}>⌁ {skill.name || skill}</Text>

                    {skill.level && (
                      <Text style={styles.muted}>{skill.level}</Text>
                    )}

                    <Stars rating={skill.rating || 4} />
                  </View>
                ))}
              </LeftSection>
            )}

            {certifications.length > 0 && (
              <LeftSection title="Certifications">
                {certifications.map((item, index) => (
                  <View key={index} style={styles.skillBlock} wrap={false}>
                    <Text style={styles.bold}>
                      {typeof item === "string" ? item : item.title}
                    </Text>

                    {typeof item !== "string" && item.organization && (
                      <Text style={styles.muted}>{item.organization}</Text>
                    )}
                  </View>
                ))}
              </LeftSection>
            )}

            {awards.length > 0 && (
              <LeftSection title="Awards & Recognition">
                {awards.map((item, index) => (
                  <View key={index} style={styles.skillBlock} wrap={false}>
                    <Text style={styles.bold}>
                      {typeof item === "string" ? item : item.title}
                    </Text>

                    {typeof item !== "string" && item.organization && (
                      <Text style={styles.muted}>{item.organization}</Text>
                    )}
                  </View>
                ))}
              </LeftSection>
            )}

            {languages.length > 0 && (
              <LeftSection title="Languages">
                <View style={styles.twoCol}>
                  {languages.map((item, index) => (
                    <View key={index} style={styles.half} wrap={false}>
                      <Text style={styles.bold}>
                        {typeof item === "string" ? item : item.name}
                      </Text>

                      {typeof item !== "string" && item.level && (
                        <Text style={styles.muted}>{item.level}</Text>
                      )}

                      {typeof item !== "string" && (
                        <Stars rating={item.rating || 4} />
                      )}
                    </View>
                  ))}
                </View>
              </LeftSection>
            )}

            {interests.length > 0 && (
              <LeftSection title="Interests">
                {interests.map((item, index) => (
                  <Text key={index} style={styles.paragraph}>
                    {item}
                  </Text>
                ))}
              </LeftSection>
            )}
          </View>

          <View style={styles.rightColumn}>
            {(personal.linkedin || personal.website) && (
              <TimelineSection title="Online Presence">
                <View style={styles.twoCol}>
                  {personal.linkedin && (
                    <View style={styles.half}>
                      <Text style={styles.bold}>LinkedIn</Text>
                      <Text style={styles.muted}>{personal.linkedin}</Text>
                    </View>
                  )}

                  {personal.website && (
                    <View style={styles.half}>
                      <Text style={styles.bold}>Portfolio</Text>
                      <Text style={styles.muted}>{personal.website}</Text>
                    </View>
                  )}
                </View>
              </TimelineSection>
            )}

            {summary && (
              <TimelineSection title="Professional Summary">
                <Text style={styles.paragraph}>{summary}</Text>
              </TimelineSection>
            )}

            {filteredEducation.length > 0 && (
              <TimelineSection title="Education">
                {filteredEducation.map((item, index) => (
                  <View key={index} style={styles.skillBlock} wrap={false}>
                    <View style={styles.rowBetween}>
                      <View>
                        <Text style={styles.bold}>
                          {item.school || "School"}
                        </Text>

                        {item.degree && <Text>{item.degree}</Text>}
                      </View>

                      <View style={styles.rightDate}>
                        {(item.startDate || item.endDate) && (
                          <Text>
                            {formatDate(item.startDate)} -{" "}
                            {formatDate(item.endDate)}
                          </Text>
                        )}

                        {item.location && <Text>{item.location}</Text>}
                      </View>
                    </View>
                  </View>
                ))}
              </TimelineSection>
            )}

            {filteredExperience.length > 0 && (
              <TimelineSection title="Professional Experience">
                {filteredExperience.map((item, index) => (
                  <View key={index} style={styles.skillBlock} wrap={false}>
                    <View style={styles.rowBetween}>
                      <View>
                        <Text style={styles.bold}>
                          {item.company || "Company"}
                        </Text>

                        {item.role && <Text>{item.role}</Text>}
                      </View>

                      <View style={styles.rightDate}>
                        {item.location && <Text>{item.location}</Text>}

                        {(item.startDate || item.endDate || item.current) && (
                          <Text>
                            {formatDate(item.startDate)}
                            {item.startDate ? " - " : ""}
                            {item.current
                              ? "Present"
                              : formatDate(item.endDate)}
                          </Text>
                        )}
                      </View>
                    </View>

                    {cleanLines(item.description).map((line, i) => (
                      <View key={i} style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>{line}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </TimelineSection>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default AtsEngineeringPDF;
