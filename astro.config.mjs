// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Shiki transformer: label code blocks for screen readers (C9).
 * Uses a `title="…"` from the fence meta when present, otherwise the language.
 * Astro already gives each <pre> tabindex="0" so it can be scrolled by keyboard.
 * @type {import('shiki').ShikiTransformer}
 */
const labelCodeBlocks = {
  name: "label-code-blocks",
  pre(node) {
    const meta = this.options.meta?.__raw ?? "";
    const title = meta.match(/title="([^"]+)"/)?.[1];
    const caption = title ?? (this.options.lang && this.options.lang !== "plaintext" ? this.options.lang : "text");
    node.properties["aria-label"] = `Code example: ${caption}`;
  },
};

// https://astro.build/config
// Fully static with no adapter: Vercel builds this with its Astro preset and
// serves dist/, which lets vercel.json apply the security and caching headers.
// Web Analytics loads through <Analytics /> in Layout.astro instead.
export default defineConfig({
  site: "https://www.quincyihe.me",
  output: "static",
  trailingSlash: "never",
  build: {
    // Keep all CSS in external files so the CSP can stay at style-src 'self'.
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      // Never inline fonts or scripts: the CSP allows only same-origin files
      // (font-src 'self', script-src 'self'), not data: URIs or inline <script>.
      assetsInlineLimit: (file) =>
        /\.(woff2?|ttf|otf|m?js)$/.test(file) ? false : undefined,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      transformers: [labelCodeBlocks],
    },
  },
});
