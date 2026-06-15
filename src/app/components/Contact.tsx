import { content } from "../../content";
import { getIcon } from "../../content/icons";
import { Reveal } from "../lib/Reveal";
import { hover } from "../lib/hover";

const { contact } = content;

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "var(--secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="max-w-xl mx-auto text-center mb-16">
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
            {contact.eyebrow}
          </p>
          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
            }}
          >
            {contact.headingPrefix}{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #a78bfa 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {contact.headingAccent}
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.8,
            }}
          >
            {contact.intro}
          </p>
        </Reveal>

        {/* Channel cards */}
        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14" delay={0.1}>
          {contact.channels.map((channel) => {
            const Icon = getIcon(channel.icon);
            const { label, value, href, desc, color, glow } = channel;
            return (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col p-5 rounded-2xl transition-all duration-250 group"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
              {...hover(
                {
                  borderColor: `${color}44`,
                  boxShadow: `0 0 28px ${glow}`,
                  transform: "translateY(-2px)",
                },
                {
                  borderColor: "var(--border)",
                  boxShadow: "none",
                  transform: "translateY(0)",
                }
              )}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200"
                style={{
                  background: `${color}14`,
                  border: `1px solid ${color}22`,
                  color,
                }}
              >
                <Icon size={18} />
              </div>
              <p
                className="mb-0.5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </p>
              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.55,
                }}
              >
                {desc}
              </p>
            </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
