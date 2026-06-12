import type { Content } from "./types";
import exampleContent from "./profile.example.json";

// Content is resolved from the first available source, in priority order:
//
//   1. src/content/profile.local.json   — gitignored, your real content (local dev)
//   2. VITE_CONTENT env var (JSON)       — set in the Vercel dashboard (production)
//   3. profile.example.json              — committed placeholders (safe fallback)
//
// This keeps your real text out of the (public) git repo while the site still
// builds and runs everywhere. Note: anything rendered is still visible to
// visitors of the deployed site — this only hides it from the source repo.

function fromLocalFile(): Content | null {
  // import.meta.glob does not error when the file is absent (e.g. on Vercel),
  // so this safely returns nothing there and the real content comes from env.
  const modules = import.meta.glob<{ default: Content }>(
    "./profile.local.json",
    { eager: true }
  );
  const mod = Object.values(modules)[0];
  return mod ? mod.default : null;
}

function fromEnv(): Content | null {
  const raw = import.meta.env.VITE_CONTENT;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Content;
  } catch (err) {
    console.warn(
      "[content] VITE_CONTENT is not valid JSON — falling back to defaults.",
      err
    );
    return null;
  }
}

export const content: Content =
  fromLocalFile() ?? fromEnv() ?? (exampleContent as Content);
