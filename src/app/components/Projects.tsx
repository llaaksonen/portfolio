import { ExternalLink, Github, Star } from "lucide-react";
import { content } from "../../content";
import type { Project } from "../../content/types";

const { projects: projectsSection, social } = content;

const tagPalette: Record<string, { bg: string; color: string }> = {
  React: { bg: "rgba(97,218,251,0.1)", color: "#67e8f9" },
  TypeScript: { bg: "rgba(49,120,198,0.12)", color: "#93c5fd" },
  Python: { bg: "rgba(255,221,87,0.1)", color: "#fde68a" },
  "Node.js": { bg: "rgba(104,160,99,0.12)", color: "#86efac" },
  Docker: { bg: "rgba(36,150,237,0.1)", color: "#7dd3fc" },
  Linux: { bg: "rgba(255,255,255,0.06)", color: "#d1d5db" },
};

function getTagStyle(tag: string) {
  const p = tagPalette[tag] ?? {
    bg: "rgba(124,58,237,0.1)",
    color: "#c4b5fd",
  };
  return {
    background: p.bg,
    color: p.color,
    border: `1px solid ${p.color}22`,
    fontFamily: "var(--font-sans)" as const,
    fontSize: "0.7rem" as const,
    fontWeight: 500 as const,
    padding: "2px 8px",
    borderRadius: "9999px",
    letterSpacing: "0.02em",
  };
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex flex-col p-6 rounded-2xl h-full transition-all duration-250"
      style={{
        background: project.highlight
          ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(157,78,221,0.06) 100%)"
          : "var(--card)",
        border: project.highlight
          ? "1px solid rgba(124,58,237,0.3)"
          : "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(124,58,237,0.45)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 32px rgba(124,58,237,0.12)";
        (e.currentTarget as HTMLElement).style.transform =
          "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = project.highlight
          ? "rgba(124,58,237,0.3)"
          : "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
          opacity: project.highlight ? 1 : 0,
        }}
      />

      <div className="flex items-start justify-between mb-3">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.name}
        </h3>
        <div
          className="flex items-center gap-1 shrink-0 ml-3 px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <Star
            size={10}
            style={{ color: "#a78bfa", fill: "#a78bfa" }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              color: "#a78bfa",
              fontWeight: 500,
            }}
          >
            {project.stars}
          </span>
        </div>
      </div>

      <p
        className="mb-5 flex-1 leading-relaxed"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          color: "var(--muted-foreground)",
          lineHeight: 1.7,
        }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} style={getTagStyle(tag)}>
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--muted-foreground)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#c4b5fd")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color =
              "var(--muted-foreground)")
          }
        >
          <Github size={14} />
          Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 500,
              color: "#a78bfa",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.75")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
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
          {projectsSection.eyebrow}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.035em",
            }}
          >
            {projectsSection.heading}
          </h2>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--muted-foreground)",
              textDecoration: "none",
              paddingBottom: "4px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#c4b5fd")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--muted-foreground)")
            }
          >
            <Github size={15} />
            See all on GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsSection.items.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
