import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { content } from "./content";
import "./styles/index.css";

// Set the browser tab title from content at runtime, so the real name stays
// out of the committed index.html (it comes from VITE_CONTENT on Vercel).
document.title = `${content.hero.name} | ${content.hero.titles[0]}`;

createRoot(document.getElementById("root")!).render(<App />);
