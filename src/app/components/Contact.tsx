import { content } from "../../content";
import { portrait } from "../../content/portrait";
import { Reveal } from "../lib/Reveal";
import { hover } from "../lib/hover";

const { contact, social } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

const cream = "#f4efe7";
const creamMuted = "rgba(244, 239, 231, 0.6)";
const creamFaint = "rgba(244, 239, 231, 0.32)";
const emailUser = social.email.split("@")[0];
const emailDomain = social.email.split("@")[1] ?? "";

// Secondary channels shown as small links under the headline email.
const channelLinks = contact.channels.filter(
  (c) => !c.href.startsWith("mailto:")
);

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: `clamp(6rem, 12vh, 11rem) ${sectionPad}`,
        background: "var(--accent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.5625rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: creamFaint,
          marginBottom: "clamp(3rem, 6vh, 5.5rem)",
        }}
      >
        05 · {contact.eyebrow}
      </div>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "var(--contact-cols, 1fr)",
          gap: "clamp(2.5rem, 5vw, 4.5rem)",
          alignItems: "center",
        }}
      >
      <Reveal>
        {/* Invitation line */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            color: creamMuted,
            margin: "0 0 1.75rem 0",
          }}
        >
          {contact.headingPrefix}{" "}
          <span style={{ color: cream }}>{contact.headingAccent}</span>.
        </p>

        {/* Oversized email */}
        <a
          href={`mailto:${social.email}`}
          style={{
            display: "block",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 6vw, 6rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: cream,
            textDecoration: "none",
            marginBottom: "1.75rem",
            transition: "opacity 0.2s ease",
          }}
          {...hover({ opacity: "0.7" }, { opacity: "1" })}
        >
          {emailUser}@
          <br />
          {emailDomain}
        </a>

        {/* Intro */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            fontWeight: 300,
            lineHeight: 1.7,
            color: creamMuted,
            maxWidth: "460px",
            margin: 0,
          }}
        >
          {contact.intro}
        </p>
      </Reveal>

      {/* Black & white portrait. Optional: only renders when a private
          portrait.local image is present. Square frame shows the full photo. */}
      {portrait && (
        <div
          className="contact-portrait"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            border: "1px solid rgba(244, 239, 231, 0.2)",
          }}
        >
          <img
            src={portrait}
            alt={content.hero.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "grayscale(1) contrast(1.04) brightness(1.02)",
              display: "block",
            }}
          />
        </div>
      )}
      </div>

      {/* Secondary channels, full width below the grid */}
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(244, 239, 231, 0.18)",
            paddingTop: "2rem",
            marginTop: "clamp(2.5rem, 5vh, 4rem)",
          }}
        >
          {channelLinks.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: creamMuted,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              {...hover({ color: cream }, { color: creamMuted })}
            >
              {channel.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
      </div>

      <style>{`
        .contact-portrait { order: -1; max-width: 300px; margin-bottom: 1rem; }
        @media (min-width: 768px) {
          .contact-grid { --contact-cols: 1fr minmax(240px, 380px); }
          .contact-portrait {
            order: 0;
            max-width: 380px;
            margin-bottom: 0;
            justify-self: end;
          }
        }
      `}</style>
    </section>
  );
}
