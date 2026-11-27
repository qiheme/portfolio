import rss from "@astrojs/rss";
import { BLOG_INTRO, getPosts, postUrl } from "../lib/blog";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "Writing · Quincy Iheme",
    description: BLOG_INTRO,
    site: context.site,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: "<language>en-us</language>",
  });
}
