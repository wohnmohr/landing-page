export type HealthAnswer = "yes" | "partial" | "no";

export type HealthCheckItem = {
  id: string;
  title: string;
  description: string;
};

export type HealthTier = {
  id: "stable" | "salvageable" | "rewrite";
  minScore: number;
  label: string;
  summary: string;
  ctaHint: string;
};

export const healthCheckItems: HealthCheckItem[] = [
  {
    id: "auth",
    title: "Auth & access control",
    description:
      "Protected routes, roles, and session handling work beyond the happy path.",
  },
  {
    id: "secrets",
    title: "Secrets & env handling",
    description:
      "API keys and tokens live in env/secrets—not in client code or the git history.",
  },
  {
    id: "data",
    title: "Data model & migrations",
    description:
      "Schema changes are intentional and repeatable—not one-off patches in prod.",
  },
  {
    id: "errors",
    title: "Error handling & logging",
    description:
      "Failures are visible. You know when something breaks for users.",
  },
  {
    id: "tests",
    title: "Automated tests or evals",
    description:
      "Critical paths have smoke tests, and AI features have at least basic evals.",
  },
  {
    id: "deploy",
    title: "Deploy & rollback path",
    description:
      "You can deploy reproducibly and roll back without heroics.",
  },
  {
    id: "cost",
    title: "Cost & rate limits for AI calls",
    description:
      "Caps, timeouts, caching, or budgets stop runaway token spend.",
  },
  {
    id: "review",
    title: "Human review for high-stakes AI outputs",
    description:
      "Emails, CRM writes, refunds, or other risky actions need a human gate.",
  },
];

export const healthTiers: HealthTier[] = [
  {
    id: "stable",
    minScore: 80,
    label: "Stable enough to harden",
    summary:
      "You’re in good shape to keep building. Focus on selective hardening—tests, monitoring, and the weakest items—rather than a full rewrite.",
    ctaHint: "Book a call if you want a second pair of eyes on what to harden next.",
  },
  {
    id: "salvageable",
    minScore: 50,
    label: "Salvageable with rescue",
    summary:
      "This is a classic rescue candidate: enough structure to keep, enough risk to fix before you scale users or fundraising demos.",
    ctaHint: "Request a free human health check—we’ll map what’s keep vs rewrite.",
  },
  {
    id: "rewrite",
    minScore: 0,
    label: "High rewrite risk",
    summary:
      "Stabilize before you scale. Shipping more features on this foundation usually costs more than a focused rescue or selective rewrite.",
    ctaHint: "Start with a Rescue Sprint call before the next big feature push.",
  },
];

const pointsPerItem = 100 / healthCheckItems.length;

export function answerScore(answer: HealthAnswer): number {
  if (answer === "yes") return pointsPerItem;
  if (answer === "partial") return pointsPerItem / 2;
  return 0;
}

export function getTier(score: number): HealthTier {
  if (score >= 80) return healthTiers[0];
  if (score >= 50) return healthTiers[1];
  return healthTiers[2];
}
