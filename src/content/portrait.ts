// Optional personal portrait, kept out of the public repo like profile.local.json.
// It is resolved from the first available source, in priority order:
//
//   1. src/content/portrait.local.{jpg,jpeg,png,webp} — gitignored, used in local dev
//   2. VITE_PORTRAIT env var — set in the Vercel dashboard (production)
//   3. null — the UI omits the portrait gracefully
//
// Note: anything rendered is still visible to visitors of the deployed site;
// this only keeps the image file out of the source repo.

function fromLocalFile(): string | null {
  // import.meta.glob does not error when the file is missing (e.g. on a fresh
  // clone or on Vercel, where it is gitignored), so this is safe.
  const modules = import.meta.glob<{ default: string }>(
    "./portrait.local.{jpg,jpeg,png,webp}",
    { eager: true }
  );
  const mod = Object.values(modules)[0];
  return mod ? mod.default : null;
}

function fromEnv(): string | null {
  // Accepts either a full URL (e.g. a Vercel Blob link) or a base64 data URI.
  // Both are valid straight away as an <img src>.
  return import.meta.env.VITE_PORTRAIT || null;
}

export const portrait: string | null = fromLocalFile() ?? fromEnv();
