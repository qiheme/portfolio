// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// Fully static: Vercel builds this with its Astro preset and serves dist/,
// which lets vercel.json apply the security and caching headers.
export default defineConfig({
  site: "https://www.quincyihe.me",
  output: "static",
  build: {
    // Keep all CSS in external files so the CSP can stay at style-src 'self'.
    inlineStylesheets: "never",
  },
});
