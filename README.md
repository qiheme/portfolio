# Quincy Iheme — Portfolio

Personal portfolio and blog built with [Astro](https://astro.build/), styled with
the **Cobalt Design System** tokens. Fully static, deployed to Vercel with no
adapter: Vercel's Astro preset serves `dist/`, so `vercel.json` can set the
security and caching headers.

## Structure

```
src/
├── components/        # Nav (+ mobile menu), Hero, Work, Speaking, Capabilities,
│                      # Writing (home teaser), Contact, Footer, PostRow, PostHeader, Icon, BrandMark
├── assets/            # Images optimized at build time (headshot → AVIF/WebP)
├── content/blog/      # Blog posts (Markdown)
├── content.config.ts  # Blog collection schema (Zod)
├── data/content.ts    # All site copy in one place
├── layouts/           # Layout.astro (html shell, meta, OG, canonical, JSON-LD, fonts)
├── lib/blog.ts        # Post queries, draft filtering, dates, reading time, Markdown lint
├── pages/
│   ├── index.astro
│   ├── blog/index.astro       # /blog
│   ├── blog/[...slug].astro   # /blog/<slug>
│   ├── 404.astro
│   ├── robots.txt.ts          # /robots.txt
│   └── rss.xml.js             # /rss.xml
└── styles/
    ├── tokens.css     # Cobalt tokens (synced to @q-labs/cobalt) + site-only tokens
    └── global.css     # Reset, shared section/button/tag styles, .prose long-form type
public/
├── og/                # 1200×630 social cards (home.png, blog-default.png, one per post)
├── favicon.svg, favicon.ico, apple-touch-icon.png, icon-192/512.png, icon-maskable-512.png
└── site.webmanifest
```

A sitemap (`/sitemap-index.xml`) is generated at build time by `@astrojs/sitemap`.

## Commands

| Command           | Action                                                  |
| ----------------- | ------------------------------------------------------- |
| `npm install`     | Install dependencies                                    |
| `npm run dev`     | Start the dev server at `localhost:4321`                |
| `npm run build`   | Build the production site                               |
| `npm run preview` | Preview the production build locally                    |
| `npm run check`   | Type-check `.astro` and `.ts` files                     |
| `npm run verify`  | Type-check, build, and validate the HTML (what CI runs) |

## Editing content

All copy lives in `src/data/content.ts`. Every claim should trace to the master
resume or career context pool. Keep internal employer business metrics (orders,
revenue) off this public site.

## Adding a blog post

1. Create `src/content/blog/<slug>.md`. The filename becomes the URL: `/blog/<slug>`.
   Use lowercase kebab-case.
2. Add frontmatter:

   ```yaml
   ---
   title: "10–90 characters. Wraps, never truncated."
   description: "70–160 characters. Used for the list row, lede, meta description, OG and RSS."
   pubDate: 2026-11-19
   updatedDate: 2026-11-22        # optional; shown only when later than pubDate
   tags: ["Engineering leadership"] # optional; up to 5, 2–24 chars each. Only the first is shown.
   ogImage: "/og/<slug>.png"      # optional; falls back to /og/blog-default.png
   linkedinUrl: "https://…"       # optional; adds "Discuss on LinkedIn ↗" to the article footer
   canonicalUrl: "https://…"      # optional; only if the canonical copy lives elsewhere
   draft: true                    # optional; drafts show in `npm run dev` only
   ---
   ```

   Frontmatter isn't run through smartypants, so type curly quotes (’ “ ”) yourself.
   The body is converted automatically.

3. Write the body in Markdown. The title is the page's h1, so use `##` and `###` only.
   The build fails on a `# ` heading or an image without alt text.
4. Social card (optional): 1200×630 PNG, sRGB, under 300 KB. Keep an 80px side and
   72px top/bottom safe zone. Titles up to 70 characters set at 68px; 71–90 at 56px.
   Save to `public/og/<slug>.png` and set `ogImage`.
5. Run `npm run build`. A bad frontmatter field fails the build and names the file and field.

Drafts (`draft: true`) are excluded from production pages, the home teaser, RSS and the
sitemap. Reading time is `ceil(words / 230)`, with fenced code excluded.

If you delete the last post, clear Astro's cache (`rm -rf node_modules/.astro`) before
a local build. Astro's glob loader keeps the last entry cached when the folder is empty.

## Front-End Checklist

The site follows [frontendchecklist.io](https://frontendchecklist.io/). The
pieces that matter for this site:

- **Head & SEO**: canonical URL, robots meta, Open Graph + Twitter cards with a
  1200×630 image, `Person`/`WebSite` JSON-LD, `robots.txt`, sitemap.
- **Icons**: SVG + ICO favicons, Apple touch icon, web app manifest.
- **Performance**: self-hosted variable fonts (preloaded, `font-display: swap`),
  AVIF/WebP headshot with 1x–3x `srcset`, immutable caching on hashed assets.
- **Security** (`vercel.json`): CSP that allows only same-origin scripts, styles
  and fonts (no inline `<script>` or `<style>`; inline `style=""` attributes are
  allowed for Shiki code highlighting), HSTS, `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP.
  `astro.config.mjs` keeps scripts, CSS and fonts as files so this holds.
- **Analytics**: Vercel Web Analytics via `@vercel/analytics/astro` (same-origin,
  so it passes the CSP).
- **Accessibility**: skip link, landmarks, one `h1`, visible focus styles,
  reduced-motion support, 0 axe-core violations at desktop and mobile widths.
- **Other**: custom 404 page, print stylesheet, HTML validation in CI.
