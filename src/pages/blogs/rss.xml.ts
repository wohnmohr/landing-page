import type { APIRoute } from "astro";
import { blogPosts } from "../../utils/blogs";

const site = "https://wohnmohr.com";

export const GET: APIRoute = () => {
  const items = blogPosts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${site}/blogs/${post.slug}/</link>
      <guid isPermaLink="true">${site}/blogs/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>wohnmohr Blog</title>
    <link>${site}/blogs/</link>
    <description>Practical guides on vibe-code rescue, AI automation, testing, and shipping AI products.</description>
    <language>en-us</language>
    <atom:link href="${site}/blogs/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
