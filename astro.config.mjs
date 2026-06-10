// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // @q-labs/cobalt ships internal .css imports that Node's ESM loader
      // can't handle during SSR/static rendering. Bundling it through Vite
      // lets Vite process those CSS imports instead.
      noExternal: ["@q-labs/cobalt"],
    },
  },
});
