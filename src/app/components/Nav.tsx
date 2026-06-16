import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { content } from "../../content";
import { hover } from "../lib/hover";

const { links } = content.nav;
const { hero } = content;

const sectionPad = "clamp(1.5rem, 4vw, 3.5rem)";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        padding: `1.4rem ${sectionPad}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(244, 239, 231, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition:
          "background-color 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease",
      }}
    >
      {/* Wordmark */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 400,
          letterSpacing: "0.01em",
          color: "var(--foreground)",
          textDecoration: "none",
        }}
      >
        {hero.name}
      </a>

      {/* Desktop links */}
      <nav className="hidden md:flex items-center" style={{ gap: "2.25rem" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: l.highlight ? "var(--accent)" : "var(--muted-foreground)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            {...hover(
              { color: "var(--foreground)" },
              {
                color: l.highlight
                  ? "var(--accent)"
                  : "var(--muted-foreground)",
              }
            )}
          >
            {l.highlight ? `${l.label} →` : l.label}
          </a>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setOpen(!open)}
        style={{
          width: "2.25rem",
          height: "2.25rem",
          color: "var(--foreground)",
          background: "transparent",
          border: "1px solid var(--border)",
          borderRadius: "2px",
        }}
        aria-label="Toggle menu"
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(244, 239, 231, 0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
            padding: `0.5rem ${sectionPad} 1.75rem`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: l.highlight
                  ? "var(--accent)"
                  : "var(--muted-foreground)",
                textDecoration: "none",
                padding: "0.9rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.highlight ? `${l.label} →` : l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
