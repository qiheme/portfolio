# Quincy Iheme — Portfolio

Personal portfolio site built with [Astro](https://astro.build/) and
[Tailwind CSS v4](https://tailwindcss.com/). Fully static, deployed to Vercel.

## Tech stack

- **Astro** — static site generator
- **Tailwind CSS v4** — styling (via the `@tailwindcss/vite` plugin)
- **@astrojs/vercel** — deployment adapter

## Project structure

```
src/
├── components/      # Hero, Features, FeatureTwo, ContactForm, Footer
├── data/content.ts  # All site copy/content in one place
├── layouts/         # Layout.astro (html shell, fonts, global styles)
├── pages/index.astro
└── styles/global.css  # Tailwind import + custom theme (colors, font)
public/
├── icons/           # Feature card icons
├── illustrations/   # Contact form illustration
└── icon.jpg, favicon.ico, logo192.png, logo512.png
```

## Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Deployment

Configured for Vercel via the `@astrojs/vercel` adapter. Vercel auto-detects the
Astro project and runs `npm run build` (output in `dist/`).

## Editing content

All copy lives in `src/data/content.ts` (hero, features, contact form, footer).
Update there rather than in the components.
