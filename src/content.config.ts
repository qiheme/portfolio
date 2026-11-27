import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(10).max(90),
    description: z.string().min(70).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string().min(2).max(24)).max(5).default([]),
    draft: z.boolean().default(false),
    /** Site-relative 1200×630 PNG, e.g. "/og/launch-day-gta-vi.png". Falls back to the blog default card. */
    ogImage: z.string().startsWith("/").optional(),
    /** Set only when the canonical copy lives elsewhere. Defaults to the post's own URL. */
    canonicalUrl: z.string().url().optional(),
    /** LinkedIn post or article for the "Discuss on LinkedIn" link. */
    linkedinUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
