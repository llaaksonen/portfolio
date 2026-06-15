import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { content } from "../../content";
import { hover } from "../lib/hover";

const { hero, social } = content;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--background)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--background) 100%)",
        }}
      />

      {/* Central purple glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(157,78,221,0.08) 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          filter: "blur(20px)",
        }}
      />

      {/* Secondary accent glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,78,221,0.12) 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
          filter: "blur(50px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={container}
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10"
          style={{
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#a3e635",
              boxShadow: "0 0 8px rgba(163,230,53,0.8)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#a78bfa",
              letterSpacing: "0.04em",
            }}
          >
            {hero.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mb-4 leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.2rem, 9vw, 6rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
          }}
        >
          {hero.name}
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 mb-7 flex-wrap"
        >
          {hero.titles.map((title, i) => (
            <Fragment key={title}>
              {i > 0 && (
                <span
                  style={{ color: "rgba(124,58,237,0.4)", fontSize: "1.2rem" }}
                >
                  /
                </span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  fontWeight: 500,
                  color: "#a78bfa",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </span>
            </Fragment>
          ))}
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={item}
          className="max-w-lg mx-auto mb-12 leading-relaxed"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "var(--muted-foreground)",
            lineHeight: 1.8,
          }}
        >
          {hero.intro}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href={hero.primaryCta.href}
            className="px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #9d4edd 100%)",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 0 24px rgba(124,58,237,0.45)",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
            {...hover(
              {
                boxShadow: "0 0 36px rgba(124,58,237,0.65)",
                transform: "translateY(-1px)",
              },
              {
                boxShadow: "0 0 24px rgba(124,58,237,0.45)",
                transform: "translateY(0)",
              }
            )}
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(124,58,237,0.08)",
              color: "#c4b5fd",
              border: "1px solid rgba(124,58,237,0.25)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
            {...hover(
              {
                background: "rgba(124,58,237,0.15)",
                borderColor: "rgba(124,58,237,0.45)",
                transform: "translateY(-1px)",
              },
              {
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.25)",
                transform: "translateY(0)",
              }
            )}
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: social.github, label: "GitHub" },
            { icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${social.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.18)",
                color: "var(--muted-foreground)",
                textDecoration: "none",
              }}
              {...hover(
                {
                  color: "#c4b5fd",
                  borderColor: "rgba(124,58,237,0.4)",
                  background: "rgba(124,58,237,0.14)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.2)",
                },
                {
                  color: "var(--muted-foreground)",
                  borderColor: "rgba(124,58,237,0.18)",
                  background: "rgba(124,58,237,0.07)",
                  boxShadow: "none",
                }
              )}
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-1.5 animate-bounce"
        style={{ color: "rgba(124,58,237,0.5)", textDecoration: "none" }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
