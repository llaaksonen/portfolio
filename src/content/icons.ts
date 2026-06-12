import {
  Code2,
  Cloud,
  BookOpen,
  Cpu,
  Mail,
  Github,
  Linkedin,
  FileText,
  Database,
  Zap,
  Users,
  Music,
  MapPin,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

// Icons referenced by name from content data (traits, contact channels).
// Add an entry here if you reference a new icon in profile.local.json.
export const icons: Record<string, LucideIcon> = {
  Code2,
  Cloud,
  BookOpen,
  Cpu,
  Mail,
  Github,
  Linkedin,
  FileText,
  Database,
  Zap,
  Users,
  Music,
  MapPin,
  Briefcase,
};

export function getIcon(name: string): LucideIcon {
  return icons[name] ?? Code2;
}
