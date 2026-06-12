import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { content } from "../../content";

const { links } = content.nav;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,7,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(124,58,237,0.12)"
          : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #9d4edd 100%)",
              boxShadow: "0 0 16px rgba(124,58,237,0.4)",
            }}
          >
            <Code2 size={15} color="#fff" />
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) =>
            l.highlight ? (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-110"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  background: "rgba(124,58,237,0.15)",
                  color: "#c4b5fd",
                  border: "1px solid rgba(124,58,237,0.3)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(124,58,237,0.25)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(124,58,237,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(124,58,237,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(124,58,237,0.3)";
                }}
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="relative transition-colors duration-200 group"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--muted-foreground)")
                }
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
          onClick={() => setOpen(!open)}
          style={{
            color: "var(--muted-foreground)",
            border: "1px solid rgba(124,58,237,0.2)",
            background: "rgba(124,58,237,0.06)",
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-1"
          style={{
            background: "rgba(8,7,15,0.97)",
            borderBottom: "1px solid rgba(124,58,237,0.12)",
          }}
        >
          {links.map((l) =>
            l.highlight ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="mt-3 py-2.5 rounded-lg text-center transition-all duration-200"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "#c4b5fd",
                  border: "1px solid rgba(124,58,237,0.3)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--muted-foreground)",
                  borderColor: "rgba(255,255,255,0.04)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
