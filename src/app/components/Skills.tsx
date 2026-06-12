import { content } from "../../content";
import { getSkillIcon } from "../../content/skill-icons";

type Proficiency = "comfortable" | "learning" | "exploring";

interface Skill {
  name: string;
  icon: string;
  level: Proficiency;
}

interface SkillGroup {
  category: string;
  description: string;
  skills: Skill[];
}

const levelConfig: Record<
  Proficiency,
  { label: string; color: string; bg: string; border: string }
> = {
  comfortable: {
    label: "Comfortable",
    color: "#a3e635",
    bg: "rgba(163,230,53,0.08)",
    border: "rgba(163,230,53,0.2)",
  },
  learning: {
    label: "Learning",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
  exploring: {
    label: "Exploring",
    color: "#67e8f9",
    bg: "rgba(103,232,249,0.08)",
    border: "rgba(103,232,249,0.2)",
  },
};

const { skills: skillsSection } = content;

function SkillChip({ skill }: { skill: Skill }) {
  const cfg = levelConfig[skill.level];
  const { Icon, color } = getSkillIcon(skill.icon);
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-default group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(124,58,237,0.12)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(124,58,237,0.07)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(124,58,237,0.3)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 16px rgba(124,58,237,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,0.03)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(124,58,237,0.12)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <Icon size={17} color={color} className="shrink-0" />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.83rem",
          fontWeight: 500,
          color: "var(--foreground)",
          flex: 1,
        }}
      >
        {skill.name}
      </span>
      <span
        className="px-1.5 py-0.5 rounded-md"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          fontWeight: 600,
          color: cfg.color,
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          letterSpacing: "0.03em",
          whiteSpace: "nowrap",
        }}
      >
        {cfg.label}
      </span>
    </div>
  );
}

function GroupCard({ group }: { group: SkillGroup }) {
  return (
    <div
      className="rounded-2xl p-6 h-full"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <p
        className="mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--foreground)",
          letterSpacing: "-0.01em",
        }}
      >
        {group.category}
      </p>
      <p
        className="mb-5"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          color: "var(--muted-foreground)",
        }}
      >
        {group.description}
      </p>
      <div className="flex flex-col gap-2">
        {group.skills.map((s) => (
          <SkillChip key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: "var(--secondary)" }}
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
          {skillsSection.eyebrow}
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
            {skillsSection.heading}
          </h2>
          {/* Legend */}
          <div className="flex items-center gap-4 shrink-0 pb-1">
            {(Object.entries(levelConfig) as [Proficiency, typeof levelConfig[Proficiency]][]).map(
              ([key, cfg]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: cfg.color }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.72rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {cfg.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsSection.groups.map((g) => (
            <GroupCard key={g.category} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
