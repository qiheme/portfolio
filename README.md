# Quincy Iheme — Portfolio

Personal portfolio site built with [Astro](https://astro.build/), styled with
the **Quincy OS Design System** (v1.1) tokens. Fully static, deployed to Vercel.

## Structure

```
src/
├── components/      # Nav, Hero, Work, Speaking, Capabilities, Contact, Footer, Icon, BrandMark
├── data/content.ts  # All site copy in one place
├── layouts/         # Layout.astro (html shell, meta, fonts)
├── pages/index.astro
└── styles/
    ├── tokens.css   # Quincy OS color, type, radius, motion tokens (dark mode)
    └── global.css   # Reset, shared section/button/tag styles
public/
└── headshot.jpg, favicon.svg, apple-touch-icon.png
```

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site                |
| `npm run preview` | Preview the production build locally     |

## Editing content

All copy lives in `src/data/content.ts`. Every claim should trace to the master
resume or career context pool. Keep internal employer business metrics (orders,
revenue) off this public site.
