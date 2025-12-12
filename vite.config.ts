import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect GitHub Pages environment
const isGithub = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithub ? "/Seach-Clothing-and-Printing/" : "/", // auto-switch
  build: {
    outDir: isGithub ? "docs" : "dist", // GitHub uses docs/, Firebase uses dist/
  },
});
