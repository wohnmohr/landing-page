/**
 * wohnmohr company & product content.
 * Everything the homepage, product pages, footer and structured data say
 * about the company and its products lives here.
 */

export const company = {
  name: "wohnmohr",
  url: "https://wohnmohr.com",
  tagline: "We build AI products that keep shipping.",
  mission:
    "Build small, sharp software for real everyday jobs—then keep improving it, loop after loop, until it’s the obvious way to get that job done.",
  shortDescription:
    "wohnmohr is an AI product company. We build and run NicheLinq (Reels ads from a product link) and Split Biller (split bills in ₹, settle via UPI)—plus a few client AI builds a month.",
  email: "hello@wohnmohr.com",
  calendly: "https://calendly.com/wohnmohr-contact/30min",
  whatsapp: "https://wa.me/918248438399",
};

export type ProductStep = { title: string; body: string };

export type Product = {
  slug: string;
  index: string;
  name: string;
  url: string;
  domain: string;
  status: "Live" | "Early access";
  audience: string;
  /** Short line used on cards, nav and meta. */
  oneLiner: string;
  /** Big headline lines for the product page. */
  headline: string[];
  summary: string;
  steps: ProductStep[];
  features: string[];
  /** Which brand signal colour this product leads with. */
  signal: "lime" | "cobalt";
  cta: string;
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "nichelinq",
    index: "01",
    name: "NicheLinq",
    url: "https://nichelinq.com",
    domain: "nichelinq.com",
    status: "Early access",
    audience: "For streetwear & fashion labels",
    oneLiner: "Make ads from a link. Every drop, on Reels.",
    headline: ["Make ads from a link.", "Every drop, on Reels."],
    summary:
      "Paste your product page. NicheLinq drafts a 40-second Reel from your label’s own words, and you direct every scene before you render.",
    steps: [
      {
        title: "Paste a link",
        body: "Drop in the product page for your latest piece. That’s the brief.",
      },
      {
        title: "Get a draft Reel",
        body: "NicheLinq writes a 40-second Reel using your label’s own words—not generic ad copy.",
      },
      {
        title: "Direct, then render",
        body: "Change any scene, reorder, rewrite. Nothing renders until you say so.",
      },
    ],
    features: [
      "Link-to-Reel in one step",
      "Built from your label’s own words",
      "Scene-by-scene control",
      "Made for drop cadence",
    ],
    signal: "lime",
    cta: "Get early access",
    metaTitle: "NicheLinq by wohnmohr | Make Reels ads from a product link",
    metaDescription:
      "NicheLinq turns a product page into a 40-second Reel for streetwear and fashion labels. Your words, your scenes—you direct before you render. Early access.",
  },
  {
    slug: "split-biller",
    index: "02",
    name: "Split Biller",
    url: "https://www.splitbiller.com",
    domain: "splitbiller.com",
    status: "Live",
    audience: "For friends, flatmates & trips in India",
    oneLiner: "Split bills in ₹, settle with UPI.",
    headline: ["Split bills in ₹.", "Settle with UPI."],
    summary:
      "Who owes whom in seconds—share privately, pay via UPI. No signup, no app download.",
    steps: [
      {
        title: "Add the bill",
        body: "Enter what was spent and who was there. Right in the browser.",
      },
      {
        title: "See who owes whom",
        body: "Balances are worked out in seconds—fewest payments, no spreadsheet maths.",
      },
      {
        title: "Share & settle",
        body: "Send a private link. Everyone pays their share over UPI.",
      },
    ],
    features: [
      "Rupee-first",
      "Settle via UPI",
      "No signup",
      "No app download",
      "Private share links",
    ],
    signal: "cobalt",
    cta: "Split a bill",
    metaTitle: "Split Biller by wohnmohr | Split bills in ₹, settle with UPI",
    metaDescription:
      "Split Biller shows who owes whom in seconds. Share privately and pay via UPI—no signup, no app download.",
  },
];

export type LoopStage = {
  key: "build" | "ship" | "learn";
  index: string;
  title: string;
  body: string;
};

/** The company operating loop — also the brand's core idea. */
export const loop: LoopStage[] = [
  {
    key: "build",
    index: "01",
    title: "Build",
    body: "Start from one real job someone does every week. Build the smallest thing that does it better—AI where it earns its place, plain software where it doesn’t.",
  },
  {
    key: "ship",
    index: "02",
    title: "Ship",
    body: "Put it in front of real people early. No waitlists for the sake of it, no six-month stealth mode.",
  },
  {
    key: "learn",
    index: "03",
    title: "Learn",
    body: "Watch what people actually do, test what the AI actually says, and cut what doesn’t matter. Then go round again.",
  },
];

export const principles = [
  {
    title: "Real jobs, not demos",
    body: "Every product starts from something people already do—posting a drop, splitting dinner. If it doesn’t save real time, it doesn’t ship.",
  },
  {
    title: "AI you can direct",
    body: "Our AI drafts; people decide. You can see, change and approve what it makes before it goes anywhere.",
  },
  {
    title: "No friction by default",
    body: "No signup walls, no app downloads, no setup calls unless they genuinely help.",
  },
  {
    title: "Tested like it matters",
    body: "Evals, regression checks and cost budgets on every AI feature—the same bar we hold for client work.",
  },
];

export type Package = {
  name: string;
  duration: string;
  summary: string;
  includes: string[];
  href: string;
};

/** Productised client work — fixed scope, fixed end date. */
export const packages: Package[] = [
  {
    name: "Rescue Sprint",
    duration: "1–2 weeks",
    summary:
      "Your AI-built or vibe-coded app is fragile. We stabilise it and hand you a clear fix plan.",
    includes: ["Codebase triage & risk map", "Critical fixes", "Written fix plan"],
    href: "/services/vibe-code-rescue",
  },
  {
    name: "Build & Ship",
    duration: "4–12 weeks",
    summary:
      "We build one AI product or feature with you, the way we build our own—tested and handed over.",
    includes: ["Scoped MVP or AI feature", "Evals & release gates", "Clean handover"],
    href: "/services/ai-product-development",
  },
  {
    name: "Automate & Assure",
    duration: "Monthly",
    summary:
      "A small, capped retainer for AI automations, testing, and keeping things healthy.",
    includes: ["Automation backlog", "AI testing & evals", "Bi-weekly check-in"],
    href: "/services/ai-automation",
  },
];
