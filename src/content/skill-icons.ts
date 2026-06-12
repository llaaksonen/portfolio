import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPython,
  SiLinux,
  SiDocker,
  SiC,
  SiCplusplus,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiSqlite,
  SiFlask,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Cloud, Terminal, Webhook, Code2 } from "lucide-react";

// Props common to both lucide and react-icons components.
type IconComponent = ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

interface SkillIcon {
  Icon: IconComponent;
  color: string;
}

// Used for conceptual skills that have no brand logo.
const ACCENT = "#a78bfa";

// Maps the `icon` slug from content (see profile.local.json) to a brand logo
// and its official colour. Generic lucide icons cover non-branded skills.
const skillIcons: Record<string, SkillIcon> = {
  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  vite: { Icon: SiVite, color: "#646CFF" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  flask: { Icon: SiFlask, color: "#E5E5E5" },
  rest: { Icon: Webhook, color: ACCENT },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  sqlite: { Icon: SiSqlite, color: "#4ABEEB" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#E5E5E5" },
  python: { Icon: SiPython, color: "#3776AB" },
  pandas: { Icon: SiPandas, color: "#E70488" },
  numpy: { Icon: SiNumpy, color: "#4DABCF" },
  spark: { Icon: SiApachespark, color: "#E25A1C" },
  cloud: { Icon: Cloud, color: ACCENT },
  linux: { Icon: SiLinux, color: "#FCC624" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  scripting: { Icon: Terminal, color: ACCENT },
  c: { Icon: SiC, color: "#A8B9CC" },
  cpp: { Icon: SiCplusplus, color: "#00599C" },
  java: { Icon: FaJava, color: "#ED8B00" },
};

export function getSkillIcon(slug: string): SkillIcon {
  return skillIcons[slug] ?? { Icon: Code2, color: ACCENT };
}
