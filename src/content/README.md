# Site content

All visible text lives in **one place** so it can be kept out of the public
git repo. Content is resolved in this priority order (see `index.ts`):

1. **`profile.local.json`** — your real content. Gitignored. Used in local dev.
2. **`VITE_CONTENT`** env var (JSON) — used in production (e.g. Vercel).
3. **`profile.example.json`** — committed placeholders. Safe fallback so the
   app always builds and runs.

> ⚠️ Anything rendered is still visible to visitors of the deployed site.
> This only keeps your text out of the **source repository**, not out of the
> browser.

## Editing content

- **Locally:** edit `profile.local.json` (already filled in with your data).
- **Shape reference:** `profile.example.json` + the types in `types.ts`.
- **New icon** (in a trait or contact channel)? Register it in `icons.ts`.

## Deploying to Vercel

The local file is gitignored, so Vercel won't have it. Provide the same JSON
via an environment variable:

1. Open `profile.local.json` and copy its entire contents.
2. In Vercel → Project → **Settings → Environment Variables**, add:
   - **Name:** `VITE_CONTENT`
   - **Value:** the JSON you copied (paste it as a single value)
   - **Environments:** Production (and Preview if you want)
3. Redeploy. The build reads `VITE_CONTENT` and renders your real content.

If `VITE_CONTENT` is missing or invalid JSON, the site falls back to the
placeholder content in `profile.example.json` (it won't crash).
