import type { APIRoute } from "astro";

/* Single-page site, so the sitemap is one URL. Add new pages here.
   No <lastmod>: content dates are month-only ("Nov 2026"), and the build date
   would claim a change on every deploy. */
const pages = ["/"];

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
