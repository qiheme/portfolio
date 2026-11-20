// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
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
export default defineConfig({
  site: "https://www.quincyihe.me",
  output: "static",
  trailingSlash: "never",
  adapter: vercel(),
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
