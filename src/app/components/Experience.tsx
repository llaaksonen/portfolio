import { content } from "../../content";
import type { TimelineEntry } from "../../content/types";
import { Reveal } from "../lib/Reveal";

const { experience } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

const typeLabel: Record<TimelineEntry["type"], string> = {
  work: "Experience",
  edu: "Education",
  cert: "Certification",
};

export function Experience() {
  return (
    <section
      id="experience"
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
          04 · {experience.eyebrow}
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
          }}
        >
          {experience.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          {experience.timeline.map((item, i) => (
            <div
              key={`${item.org}-${i}`}
              className="exp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "var(--exp-cols, 1fr)",
                gap: "0.5rem clamp(2rem, 5vw, 4rem)",
                borderTop: "1px solid var(--border)",
                padding: "clamp(1.75rem, 3.5vh, 2.75rem) 0",
                borderBottom:
                  i === experience.timeline.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              {/* Left meta column */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {typeLabel[item.type]}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {item.period}
                </div>
              </div>

              {/* Right content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "var(--foreground)",
                    margin: "0 0 0.35rem 0",
                  }}
                >
                  {item.role}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted-foreground)",
                    marginBottom: item.highlight ? "1rem" : "1.25rem",
                  }}
                >
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </div>

                {item.highlight && (
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    {item.highlight}
                  </p>
                )}

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        lineHeight: 1.65,
                        color: "var(--muted-foreground)",
                        padding: "0.25rem 0",
                      }}
                    >
                      <span style={{ color: "var(--accent)", lineHeight: 1.65 }}>
                        ·
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <style>{`
        @media (min-width: 768px) {
          .exp-row { --exp-cols: minmax(160px, 220px) 1fr; }
        }
      `}</style>
    </section>
  );
}
