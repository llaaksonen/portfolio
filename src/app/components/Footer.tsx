import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { content } from "../../content";
import { hover } from "../lib/hover";

const { social, footer } = content;

export function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{
        background: "var(--background)",
        borderTop: "1px solid rgba(124,58,237,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #9d4edd)",
            }}
          >
            <Code2 size={12} color="#fff" />
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              color: "var(--muted-foreground)",
            }}
          >
            {footer.copyright}
          </p>
        </div>

        <div className="flex items-center gap-5">
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
              className="transition-colors duration-200"
              style={{ color: "var(--muted-foreground)" }}
              {...hover(
                { color: "#c4b5fd" },
                { color: "var(--muted-foreground)" }
              )}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
