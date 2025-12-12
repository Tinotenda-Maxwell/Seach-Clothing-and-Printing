import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect if we are building for GitHub Pages
const isGithub = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithub ? "/Seach-Clothing-and-Printing/" : "/", // GitHub needs base, Firebase does not
});
