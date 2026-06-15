import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { content } from "./content";
import "./styles/index.css";

// Set the page title and social meta from content at runtime, so the real name
// stays out of the committed index.html (it comes from VITE_CONTENT on Vercel).
const pageTitle = `${content.hero.name} | ${content.hero.titles[0]}`;
const pageDescription = content.hero.intro;

document.title = pageTitle;

const metaSelectors: Record<string, string> = {
  'meta[name="description"]': pageDescription,
  'meta[property="og:title"]': pageTitle,
  'meta[property="og:description"]': pageDescription,
  'meta[name="twitter:title"]': pageTitle,
  'meta[name="twitter:description"]': pageDescription,
};

for (const [selector, value] of Object.entries(metaSelectors)) {
  document.querySelector(selector)?.setAttribute("content", value);
}

createRoot(document.getElementById("root")!).render(<App />);
