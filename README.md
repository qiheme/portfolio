# Quincy Iheme — Portfolio

Personal portfolio site built with [Astro](https://astro.build/), styled with
the **Quincy OS Design System** (v1.1) tokens. Fully static, deployed to Vercel (no adapter: Vercel's Astro preset serves
`dist/`, so `vercel.json` can set security and caching headers).

## Structure

```
src/
├── components/      # Nav, Hero, Work, Speaking, Capabilities, Contact, Footer, Icon, BrandMark
├── data/content.ts  # All site copy in one place
├── assets/          # Images optimized at build time (headshot → AVIF/WebP)
├── layouts/         # Layout.astro (html shell, SEO/OG meta, JSON-LD, fonts)
├── pages/           # index, 404, robots.txt, sitemap.xml
└── styles/
    ├── tokens.css   # Quincy OS color, type, radius, motion tokens (dark mode)
    └── global.css   # Reset, shared section/button/tag styles
public/
├── favicon.svg, favicon.ico, apple-touch-icon.png, icon-192/512.png
├── site.webmanifest
└── og-image.png     # 1200×630 social share card
```

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

## Front-End Checklist

The site follows [frontendchecklist.io](https://frontendchecklist.io/). The
pieces that matter for a static one-pager:

- **Head & SEO**: canonical URL, robots meta, Open Graph + Twitter cards with a
  1200×630 image, `Person`/`WebSite` JSON-LD, `robots.txt`, `sitemap.xml`.
- **Icons**: SVG + ICO favicons, Apple touch icon, web app manifest.
- **Performance**: self-hosted variable fonts (preloaded, `font-display: swap`),
  zero client JavaScript, AVIF/WebP headshot with 1x–3x `srcset`, immutable
  caching on hashed assets.
- **Security** (`vercel.json`): CSP with no inline script or style, HSTS,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, COOP.
- **Accessibility**: skip link, landmarks, one `h1`, visible focus styles,
  reduced-motion support, 0 axe-core violations at desktop and mobile widths.
- **Other**: custom 404 page, print stylesheet, HTML validation in CI.
