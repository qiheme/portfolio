import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const BLOG_DEFAULT_OG = "/og/blog-default.png";
export const BLOG_INTRO =
  "Long-form notes on engineering leadership, frontend platforms and shipping.";

/**
 * Published posts, newest first (pubDate desc, then title asc).
 * Drafts are included only in `astro dev`, never in a production build.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  posts.forEach(lintPost);
  return posts.sort(
    (a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title),
  );
}

/*
 * Fenced code blocks, CommonMark-shaped. Opening fence: up to 3 spaces of indent,
 * 3+ backticks or tildes, optional info string. Closing fence: same character,
 * at least as long, up to 3 spaces of indent. An unclosed fence runs to end of file.
 */
const FENCE = /^ {0,3}(([`~])\2{2,})[^\n]*\n[\s\S]*?(?:^ {0,3}\1\2*[ \t]*$|(?![\s\S]))/gm;

/** Markdown rules the schema can't express. Throws so the build fails with the file name. */
export function lintPost(post: Post): void {
  const where = post.filePath ?? post.id;
  const prose = (post.body ?? "").replace(FENCE, "");
  if (/^ {0,3}#(?:[ \t]|$)/m.test(prose)) {
    throw new Error(`${where}: use ## and ### only; the post title is the page's h1.`);
  }
  if (/!\[\s*\]\(/.test(prose)) {
    throw new Error(`${where}: every image needs alt text.`);
  }
}

/*
 * Frontmatter dates are date-only ("2026-11-19"), which parse to UTC midnight.
 * Formatting them in America/New_York would shift them to the previous evening
 * (Nov 18, 7pm ET), so they are formatted in UTC to show the date as written.
 */
const longDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});
const shortDate = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

/** "Nov 19, 2026" */
export const formatDate = (date: Date) => longDate.format(date);
/** "Nov 22" */
export const formatShortDate = (date: Date) => shortDate.format(date);
/** "2026-11-19", for <time datetime> */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** Minutes at 230 wpm, fenced code excluded, minimum 1. */
export function readingTime(body = ""): number {
  const words = body.replace(FENCE, "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 230));
}

/** updatedDate, only when it is later than pubDate. */
export function updatedDate(post: Post): Date | undefined {
  const { pubDate, updatedDate } = post.data;
  return updatedDate && updatedDate > pubDate ? updatedDate : undefined;
}

export const postUrl = (post: Post) => `/blog/${post.id}`;

/** Visible in dev only, alongside the DRAFT pill. */
export const showDraftPill = (post: Post) => post.data.draft && import.meta.env.DEV;

export const countLabel = (n: number) => `${n} ${n === 1 ? "post" : "posts"}`;
