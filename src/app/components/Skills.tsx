import { content } from "../../content";
import { getSkillIcon } from "../../content/skill-icons";
import { Reveal } from "../lib/Reveal";

type Proficiency = "comfortable" | "learning" | "exploring";

const levelLabel: Record<Proficiency, string> = {
  comfortable: "Comfortable",
  learning: "Learning",
  exploring: "Exploring",
};

const { skills: skillsSection } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: `clamp(6rem, 12vh, 11rem) ${sectionPad}`,
        background: "rgba(26, 23, 20, 0.03)",
      }}
    >
      <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5625rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            marginBottom: "clamp(2.5rem, 5vh, 4rem)",
          }}
        >
          03 · {skillsSection.eyebrow}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "var(--foreground)",
            margin: "0 0 clamp(3rem, 6vh, 5rem) 0",
            maxWidth: "16ch",
          }}
        >
          {skillsSection.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          {skillsSection.groups.map((group) => (
            <div key={group.category}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {group.category}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 300,
                  lineHeight: 1.55,
                  color: "var(--muted-foreground)",
                  margin: "0 0 1.5rem 0",
                  minHeight: "2.4em",
                }}
              >
                {group.description}
              </p>

              <div>
                {group.skills.map((skill) => {
                  const { Icon } = getSkillIcon(skill.icon);
                  const level = skill.level as Proficiency;
                  return (
                    <div
                      key={skill.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.7rem 0",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--muted-foreground)",
                          display: "inline-flex",
                          opacity: 0.8,
                        }}
                      >
                        <Icon size={14} />
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          fontWeight: 400,
                          color: "var(--foreground)",
                          flex: 1,
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.4375rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color:
                            level === "comfortable"
                              ? "var(--accent)"
                              : "var(--muted-foreground)",
                          opacity: level === "exploring" ? 0.6 : 1,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {levelLabel[level]}
                      </span>
                    </div>
                  );
                })}
                <div style={{ borderTop: "1px solid var(--border)" }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
