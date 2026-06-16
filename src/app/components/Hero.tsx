import { motion, useReducedMotion } from "motion/react";
import { content } from "../../content";
import { ConstellationMotif } from "./ConstellationMotif";

const { hero, social } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

const nameWords = hero.name.trim().split(/\s+/);

const socialLinks = [
  { label: "GitHub", href: social.github },
  { label: "LinkedIn", href: social.linkedin },
  { label: "Email", href: `mailto:${social.email}` },
];

export function Hero() {
  const reduce = useReducedMotion();
  const show = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        padding: `0 ${sectionPad}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      {/* Constellation motif: large, drifting, behind the content. As the first
          child it paints beneath everything that follows, so no z-index needed. */}
      <div
        className="hero-motif"
        style={{
          position: "absolute",
          aspectRatio: "280 / 180",
          color: "var(--foreground)",
          pointerEvents: "none",
        }}
      >
        <ConstellationMotif width="100%" height="100%" opacity={0.16} />
      </div>

      {/* Section index label */}
      <motion.div
        {...show(0.15)}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.5625rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
          marginBottom: "clamp(2.5rem, 5vh, 3.5rem)",
          paddingTop: "8rem",
        }}
      >
        00 · {hero.titles.join(" / ")}
      </motion.div>

      {/* Display name */}
      <motion.h1
        {...show(0.25)}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: `clamp(2.75rem, 10vw, 9rem)`,
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          color: "var(--foreground)",
          margin: 0,
          maxWidth: "82%",
        }}
      >
        {nameWords.map((word, i) => (
          <span key={i}>
            {i === nameWords.length - 1 && nameWords.length > 1 ? (
              <em style={{ fontStyle: "italic", fontWeight: 200 }}>{word}</em>
            ) : (
              word
            )}
            {i < nameWords.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      {/* Intro line */}
      <motion.p
        {...show(0.5)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--muted-foreground)",
          maxWidth: "440px",
          marginTop: "clamp(2.25rem, 4vh, 3rem)",
          marginBottom: 0,
        }}
      >
        {hero.intro}
      </motion.p>

      {/* Calls to action */}
      <motion.div
        {...show(0.65)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2.5rem",
        }}
      >
        <a
          href={hero.primaryCta.href}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--foreground)",
            textDecoration: "none",
            borderBottom: "1px solid var(--foreground)",
            paddingBottom: "2px",
          }}
        >
          {hero.primaryCta.label} →
        </a>
        <a
          href={hero.secondaryCta.href}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.625rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            textDecoration: "none",
          }}
        >
          {hero.secondaryCta.label}
        </a>
      </motion.div>

      {/* Social row */}
      <motion.div
        {...show(0.8)}
        style={{
          display: "flex",
          gap: "1.75rem",
          flexWrap: "wrap",
          marginTop: "clamp(3rem, 6vh, 4.5rem)",
        }}
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5625rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              textDecoration: "none",
            }}
          >
            {s.label} ↗
          </a>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: sectionPad,
          fontFamily: "var(--font-mono)",
          fontSize: "0.5rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
          opacity: 0.6,
        }}
      >
        Scroll ↓
      </div>

      {/* Hairline rule */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: sectionPad,
          right: sectionPad,
          height: "1px",
          background: "var(--border)",
        }}
      />

      <style>{`
        /* Mobile: the motif sits across the top as a faint header, behind
           the content. On wider screens it moves to its right-side berth. */
        .hero-motif {
          top: clamp(4rem, 13vh, 7rem);
          left: 50%;
          transform: translateX(-50%);
          width: min(92vw, 540px);
          opacity: 0.7;
        }
        @media (min-width: 768px) {
          .hero-motif {
            top: 50%;
            left: auto;
            right: clamp(2rem, 7vw, 10rem);
            transform: translateY(-48%);
            width: clamp(440px, 52vw, 860px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
