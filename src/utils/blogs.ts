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
    slug: "vibe-coding-cursor-lovable-bolt-when-it-breaks",
    title: "Vibe coding with Cursor, Lovable, or Bolt—when it breaks in production",
    description:
      "What usually fails after a fast AI-built MVP ships, and the order of fixes that gets you stable without a panic rewrite.",
    date: "2026-07-19",
    readTime: "7 min read",
    tags: ["Vibe-code rescue", "Cursor", "Startups"],
    relatedService: "/services/vibe-code-rescue",
  },
  {
    slug: "ai-agent-vs-workflow-automation",
    title: "AI agent vs workflow automation: what to build first",
    description:
      "A simple decision guide for founders choosing between agents and reliable workflow automation—without overbuilding.",
    date: "2026-07-19",
    readTime: "6 min read",
    tags: ["AI automation", "Agents", "Product"],
    relatedService: "/services/ai-automation",
  },
  {
    slug: "ai-testing-checklist-llm-features",
    title: "AI testing checklist for LLM features before you ship",
    description:
      "Evals, regression gates, hallucination checks, and cost/latency baselines you need before users hit your AI feature.",
    date: "2026-07-19",
    readTime: "8 min read",
    tags: ["AI testing", "Evals", "Quality"],
    relatedService: "/services/ai-testing",
  },
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
