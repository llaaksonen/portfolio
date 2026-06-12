import { content } from "../../content";
import type { TimelineEntry } from "../../content/types";

const { experience } = content;

function TimelineItem({
  item,
  last,
}: {
  item: TimelineEntry;
  last: boolean;
}) {
  const isWork = item.type === "work";

  return (
    <div className="flex gap-5 sm:gap-7">
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full shrink-0 mt-1.5 transition-all duration-300"
          style={{
            background: isWork
              ? "linear-gradient(135deg, #7c3aed, #9d4edd)"
              : "transparent",
            border: isWork ? "none" : "2px solid rgba(167,139,250,0.4)",
            boxShadow: isWork ? "0 0 12px rgba(124,58,237,0.4)" : "none",
          }}
        />
        {!last && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.04) 100%)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="px-2 py-0.5 rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 600,
              color: isWork ? "#a78bfa" : "#67e8f9",
              background: isWork
                ? "rgba(124,58,237,0.1)"
                : "rgba(103,232,249,0.08)",
              border: isWork
                ? "1px solid rgba(124,58,237,0.2)"
                : "1px solid rgba(103,232,249,0.2)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {isWork ? "Experience" : "Education"}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              color: "var(--muted-foreground)",
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Role + org */}
        <h3
          className="mb-0.5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          {item.role}
        </h3>
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--muted-foreground)",
          }}
        >
          {item.org} · {item.location}
        </p>

        {/* Highlight pill */}
        {item.highlight && (
          <span
            className="inline-block mb-4 px-2.5 py-0.5 rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#c4b5fd",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            {item.highlight}
          </span>
        )}

        {/* Bullets */}
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div
                className="mt-2 w-1 h-1 rounded-full shrink-0"
                style={{ background: "rgba(167,139,250,0.5)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
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
          {experience.eyebrow}
        </p>
        <h2
          className="mb-14 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.035em",
          }}
        >
          {experience.heading}
        </h2>

        <div className="max-w-2xl">
          {experience.timeline.map((item, i) => (
            <TimelineItem
              key={`${item.org}-${i}`}
              item={item}
              last={i === experience.timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
