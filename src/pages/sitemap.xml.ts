import type { APIRoute } from "astro";
import { site as content } from "../data/content";

/* Single-page site, so the sitemap is one URL. Add new pages here. */
const pages = ["/"];

/* lastmod follows the content date ("Oct 2026" → "2026-10"), not the build
   date, so redeploys without content changes don't claim a fresh page. */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const [month, year] = content.updated.split(" ");
const monthIndex = MONTHS.indexOf(month ?? "");
const lastmod =
  monthIndex >= 0 && /^\d{4}$/.test(year ?? "")
    ? `${year}-${String(monthIndex + 1).padStart(2, "0")}`
    : undefined;

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((p) => {
      const loc = `<loc>${new URL(p, site).href}</loc>`;
      return `  <url>${loc}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
    })
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
