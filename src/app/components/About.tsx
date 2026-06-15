import { content } from "../../content";
import { getIcon } from "../../content/icons";
import { Reveal } from "../lib/Reveal";
import { hover } from "../lib/hover";

const { about } = content;

function PurpleCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-5 transition-all duration-250 ${className}`}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
      {...hover(
        {
          borderColor: "rgba(124,58,237,0.35)",
          boxShadow: "0 0 24px rgba(124,58,237,0.1)",
        },
        { borderColor: "var(--border)", boxShadow: "none" }
      )}
    >
      {children}
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 items-start">
          {/* Text */}
          <Reveal>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#a78bfa",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {about.eyebrow}
            </p>
            <h2
              className="mb-7 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
              }}
            >
              {about.headingLine1}
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #a78bfa 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {about.headingAccent}
              </span>
            </h2>

            <div
              className="space-y-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.85,
              }}
            >
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Location + status pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {about.pills.map((pill) => {
                const Icon = getIcon(pill.icon);
                return (
                  <span
                    key={pill.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "#c4b5fd",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <Icon size={13} />
                    {pill.label}
                  </span>
                );
              })}
            </div>
          </Reveal>

          {/* Trait cards */}
          <Reveal className="grid grid-cols-2 gap-3.5" delay={0.1}>
            {about.traits.map((trait) => {
              const Icon = getIcon(trait.icon);
              return (
              <PurpleCard key={trait.title}>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(157,78,221,0.12) 100%)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#a78bfa",
                  }}
                >
                  <Icon size={17} />
                </div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {trait.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  {trait.desc}
                </p>
              </PurpleCard>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
