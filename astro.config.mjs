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
  vite: {
    build: {
      // Never inline fonts as data: URIs; the CSP only allows font-src 'self'.
      assetsInlineLimit: (file) =>
        /\.(woff2?|ttf|otf)$/.test(file) ? false : undefined,
    },
  },
});
