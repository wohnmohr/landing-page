export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  relatedService?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "vibe-coded-mvp-rewrite-or-rescue",
    title: "How to know if your vibe-coded MVP needs a rewrite (or just a rescue)",
    description:
      "A practical checklist for founders: when AI-generated code can be stabilized, and when rewriting is the cheaper path.",
    date: "2026-07-19",
    readTime: "6 min read",
    tags: ["Vibe-code rescue", "Startups", "AI engineering"],
    relatedService: "/services/vibe-code-rescue",
  },
  {
    slug: "ai-automation-without-hallucinations",
    title: "AI automation without the hallucination hangover",
    description:
      "How to ship agent-assisted workflows that save hours—without false CRM updates, bad emails, or silent production failures.",
    date: "2026-07-19",
    readTime: "7 min read",
    tags: ["AI automation", "Testing", "Ops"],
    relatedService: "/services/ai-automation",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
