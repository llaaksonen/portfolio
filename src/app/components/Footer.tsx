import { content } from "../../content";
import { hover } from "../lib/hover";

const { social, footer, hero } = content;
const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

const socialLinks = [
  { label: "GitHub", href: social.github },
  { label: "LinkedIn", href: social.linkedin },
  { label: "Email", href: `mailto:${social.email}` },
];

export function Footer() {
  return (
    <footer
      style={{
        padding: `1.75rem ${sectionPad}`,
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.25rem",
        background: "var(--background)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.875rem",
          fontWeight: 300,
          letterSpacing: "0.01em",
          color: "var(--muted-foreground)",
        }}
      >
        {hero.name}
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
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
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            {...hover(
              { color: "var(--foreground)" },
              { color: "var(--muted-foreground)" }
            )}
          >
            {s.label}
          </a>
        ))}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.4375rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            opacity: 0.6,
          }}
        >
          {footer.copyright}
        </span>
      </div>
    </footer>
  );
}
