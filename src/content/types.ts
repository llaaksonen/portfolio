// Shape of all site text content. Real values live in a gitignored
// profile.local.json (local dev) or the VITE_CONTENT env var (Vercel).
// See src/content/index.ts for how content is resolved.

export interface NavLink {
  label: string;
  href: string;
  /** Render this link as the highlighted CTA button. */
  highlight?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Trait {
  /** Name of a lucide icon registered in src/content/icons.ts */
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  highlight: boolean;
}

export type Proficiency = "comfortable" | "learning" | "exploring";

export interface Skill {
  name: string;
  icon: string;
  level: Proficiency;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: Skill[];
}

export interface TimelineEntry {
  type: "work" | "edu";
  role: string;
  org: string;
  period: string;
  location: string;
  highlight: string;
  bullets: string[];
}

export interface Channel {
  /** Name of a lucide icon registered in src/content/icons.ts */
  icon: string;
  label: string;
  value: string;
  href: string;
  desc: string;
  color: string;
  glow: string;
}

export interface Content {
  brand: string;
  social: SocialLinks;
  nav: {
    links: NavLink[];
  };
  hero: {
    badge: string;
    name: string;
    titles: string[];
    intro: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  about: {
    eyebrow: string;
    headingLine1: string;
    headingAccent: string;
    paragraphs: string[];
    pills: string[];
    traits: Trait[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    items: Project[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: SkillGroup[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    timeline: TimelineEntry[];
  };
  contact: {
    eyebrow: string;
    headingPrefix: string;
    headingAccent: string;
    intro: string;
    channels: Channel[];
    cta: CTA;
  };
  footer: {
    copyright: string;
  };
}
