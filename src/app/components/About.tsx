import { content } from "../../content";
import { getIcon } from "../../content/icons";
import { Reveal } from "../lib/Reveal";

const { about } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: `clamp(6rem, 12vh, 11rem) ${sectionPad}`,
        background: "var(--background)",
        position: "relative",
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
            marginBottom: "clamp(3rem, 6vh, 5rem)",
          }}
        >
          01 · {about.eyebrow}
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "var(--about-cols, 1fr)",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: heading + prose + pills */}
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 300,
              letterSpacing: "-0.028em",
              lineHeight: 1.08,
              color: "var(--foreground)",
              margin: "0 0 2.5rem 0",
            }}
          >
            {about.headingLine1}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 200 }}>
              {about.headingAccent}
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              maxWidth: "560px",
            }}
          >
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.72,
                  color: "var(--muted-foreground)",
                  margin: 0,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pills */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {about.pills.map((pill) => {
              const Icon = getIcon(pill.icon);
              return (
                <span
                  key={pill.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted-foreground)",
                    border: "1px solid var(--border)",
                    borderRadius: "9999px",
                    padding: "0.45rem 0.85rem",
                  }}
                >
                  <Icon size={11} />
                  {pill.label}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Right: trait list with hairlines, offset down */}
        <Reveal delay={0.12} className="about-traits">
          {about.traits.map((trait, i) => {
            const Icon = getIcon(trait.icon);
            return (
              <div
                key={trait.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.25rem",
                  padding: "1.75rem 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom:
                    i === about.traits.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div style={{ color: "var(--accent)", paddingTop: "0.2rem" }}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      color: "var(--foreground)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {trait.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "var(--muted-foreground)",
                      margin: 0,
                    }}
                  >
                    {trait.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { --about-cols: 1fr 1fr; }
          .about-traits { margin-top: 4.5rem; }
        }
      `}</style>
    </section>
  );
}
