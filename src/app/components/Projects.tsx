import { useState } from "react";
import { content } from "../../content";
import { Reveal } from "../lib/Reveal";
import { hover } from "../lib/hover";

const { projects: projectsSection, social } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: `clamp(6rem, 12vh, 11rem) ${sectionPad}`,
        background: "var(--background)",
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
          02 · {projectsSection.eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "clamp(2rem, 4vh, 3.5rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            {projectsSection.heading}
          </h2>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5625rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              textDecoration: "none",
              paddingBottom: "0.4rem",
            }}
            {...hover(
              { color: "var(--foreground)" },
              { color: "var(--muted-foreground)" }
            )}
          >
            All on GitHub ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          {projectsSection.items.map((project, i) => {
            const num = String(i + 1).padStart(2, "0");
            const isHover = hovered === i;
            return (
              <div
                key={project.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="project-row"
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "clamp(1.5rem, 3vh, 2.5rem) 0",
                  display: "grid",
                  gap: "0.75rem",
                  cursor: "default",
                  paddingLeft: isHover ? "1rem" : "0",
                  transition: "padding-left 0.35s ease",
                }}
              >
                {/* Top line: number + name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "clamp(1rem, 3vw, 2.5rem)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.5625rem",
                      letterSpacing: "0.18em",
                      color: isHover
                        ? "var(--accent)"
                        : "var(--muted-foreground)",
                      transition: "color 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    {num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.35rem, 3.4vw, 2.5rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.05,
                      color: "var(--foreground)",
                      margin: 0,
                    }}
                  >
                    {project.highlight ? (
                      <em style={{ fontStyle: "italic", fontWeight: 200 }}>
                        {project.name}
                      </em>
                    ) : (
                      project.name
                    )}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="project-desc"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--muted-foreground)",
                    margin: 0,
                    maxWidth: "640px",
                    paddingLeft: "var(--desc-indent, 0)",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags + links */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "1rem 1.5rem",
                    paddingLeft: "var(--desc-indent, 0)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.5rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "1.25rem", marginLeft: "auto" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.5625rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--muted-foreground)",
                        textDecoration: "none",
                      }}
                      {...hover(
                        { color: "var(--foreground)" },
                        { color: "var(--muted-foreground)" }
                      )}
                    >
                      Source ↗
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.5625rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          textDecoration: "none",
                        }}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </Reveal>

      <style>{`
        @media (min-width: 768px) {
          .project-row { --desc-indent: calc(0.5625rem + clamp(1rem, 3vw, 2.5rem)); }
        }
      `}</style>
    </section>
  );
}
