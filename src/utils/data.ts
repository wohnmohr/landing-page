export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type Capability = {
  title: string;
  description: string;
  outcomes: string[];
};

export type Engagement = {
  title: string;
  duration: string;
  description: string;
  points: string[];
};

export type Audience = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "AI Product Build",
    description:
      "We design and ship AI products and features—chat, agents, copilots, and custom workflows—built to last beyond a demo.",
    outcomes: [
      "AI product / feature delivery",
      "LLM & agent integrations",
      "Production-ready codebase",
    ],
  },
  {
    title: "AI Automation",
    description:
      "We automate the busywork: ops flows, content pipelines, support triage, data chores—so your team ships instead of copy-pasting.",
    outcomes: [
      "Workflow & ops automation",
      "Agent-assisted processes",
      "Measurable hours saved",
    ],
  },
  {
    title: "AI Testing & QA",
    description:
      "We test AI systems the way users break them—functional checks, evals, regression suites, and release gates before you ship.",
    outcomes: [
      "AI eval & regression suites",
      "Release readiness checks",
      "Quality playbooks for your team",
    ],
  },
  {
    title: "Vibe-Code Rescue",
    description:
      "Vibe coding gone bad? We untangle AI-generated messes—stabilize, refactor, secure, and get you back to a shippable product.",
    outcomes: [
      "Codebase triage & risk map",
      "Stabilize + refactor plan",
      "Hardened, maintainable code",
    ],
  },
  {
    title: "Planning & Architecture",
    description:
      "Before you burn another sprint, we help you pick the right AI approach, stack, and scope—so build time isn’t guesswork.",
    outcomes: [
      "Use-case & stack guidance",
      "Lean architecture notes",
      "Clear MVP / fix scope",
    ],
  },
  {
    title: "Performance & Cost",
    description:
      "Slow responses and runaway token bills kill products. We profile latency, reliability, and cost so AI stays usable and affordable.",
    outcomes: [
      "Latency & load checks",
      "Cost baselines",
      "Tuning recommendations",
    ],
  },
  {
    title: "Migration & Handover",
    description:
      "Move from prototypes, no-code hacks, or brittle scripts into systems your team can own—with docs and a clean handoff.",
    outcomes: [
      "Prototype → production path",
      "Migration & cutover support",
      "Docs your team can use",
    ],
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "We look at what you have—idea, half-built product, or vibe-coded chaos—and name what’s broken vs. what’s worth keeping.",
  },
  {
    step: "02",
    title: "Scope",
    description:
      "We define a tight plan: build, automate, test, or rescue—with clear outcomes and no mystery backlog.",
  },
  {
    step: "03",
    title: "Build / Fix",
    description:
      "We implement the AI product, automation, or rescue work with production habits, not throwaway prototype glue.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "We validate behavior, edge cases, performance, and cost so “it works on my machine” doesn’t become your launch day.",
  },
  {
    step: "05",
    title: "Hand over",
    description:
      "You get working software, a short ops guide, and a path to keep shipping—with us on call if you want a partner.",
  },
];

export const engagements: Engagement[] = [
  {
    title: "Rescue Sprint",
    duration: "1–2 weeks",
    description:
      "For when vibe coding (or a rushed AI build) went sideways. We stabilize, clean up, and get you back on track.",
    points: [
      "Codebase & prompt triage",
      "Security & reliability fixes",
      "Refactor priorities",
      "Ship / next-step plan",
    ],
  },
  {
    title: "Build & Ship",
    duration: "4–12 weeks",
    description:
      "We build your AI product or automation end to end—design, develop, test, and launch with you.",
    points: [
      "AI product / agent build",
      "Automation workflows",
      "QA + performance checks",
      "Launch support",
    ],
  },
  {
    title: "Automate & Assure",
    duration: "Monthly",
    description:
      "Ongoing help for AI features, automation backlog, and testing so quality doesn’t slip as you move fast.",
    points: [
      "Feature & automation capacity",
      "AI testing & evals",
      "Rescue support when needed",
      "Bi-weekly planning sync",
    ],
  },
];

export const audiences: Audience[] = [
  {
    title: "Founders who shipped a vibe-coded MVP",
    description:
      "It worked in the demo. Now it’s fragile, confusing, or scary to change. We fix it without starting from zero.",
  },
  {
    title: "Teams building AI products",
    description:
      "You need real AI features, agents, or automations—built and tested properly, not glued together overnight.",
  },
  {
    title: "Startups that can’t hire an AI squad yet",
    description:
      "One partner for product, automation, and testing—so you don’t juggle five freelancers and a pile of half-finished chats.",
  },
];

export const principles = [
  {
    title: "We build it—or we fix it",
    description:
      "AI products, automations, and test suites from scratch—or a clean rescue when vibe coding went bad.",
  },
  {
    title: "Production over vibes",
    description:
      "Demos are easy. We care about maintainable code, real tests, and systems you can change next month.",
  },
  {
    title: "Honest scope",
    description:
      "We’ll tell you what to keep, what to rewrite, and what’s not worth saving—before you spend more runway.",
  },
  {
    title: "Startup speed, senior judgment",
    description:
      "Fast delivery without the “AI wrote it, nobody owns it” hangover.",
  },
];

export const techStack = [
  { name: "Python", src: "/logos/python.svg" },
  { name: "Node.js", src: "/logos/node.svg" },
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/next.svg" },
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Google Cloud", src: "/logos/google_cloud.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Selenium", src: "/logos/selenium.svg" },
  { name: "Cypress", src: "/logos/cypress.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
];

export type RescueScenario = {
  slug: string;
  title: string;
  before: string;
  after: string;
  outcome: string;
};

export type ComparePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  leftTitle: string;
  leftPoints: string[];
  rightTitle: string;
  rightPoints: string[];
  verdict: string;
  ctaLabel: string;
  ctaHref: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  ctaLabel: string;
};

export const rescueScenarios: RescueScenario[] = [
  {
    slug: "vibe-coded-mvp-deploy-failure",
    title: "Vibe-coded MVP that wouldn’t deploy",
    before:
      "A founder shipped a Cursor/ChatGPT-built app that worked locally—then failed CI, leaked keys, and broke on every second click.",
    after:
      "We triaged the repo, locked secrets, fixed the deploy path, and refactored the hottest failure points.",
    outcome: "Stable staging deploy + a clear keep/rewrite map for the next sprint.",
  },
  {
    slug: "ai-automation-hallucinations",
    title: "AI automation that hallucinated in prod",
    before:
      "An ops bot drafted emails and CRM updates with confident wrong answers—and no evals to catch it.",
    after:
      "We added guardrails, human-in-the-loop checks, and a regression eval suite before messages left the system.",
    outcome: "Fewer false actions, measurable eval coverage, and a safer automation loop.",
  },
  {
    slug: "ai-feature-demo-to-ship",
    title: "AI feature demo that couldn’t ship",
    before:
      "A polished agent demo with brittle prompts, no tests, and zero cost controls—great for investors, scary for users.",
    after:
      "We hardened the product path: structured outputs, testing gates, latency/cost baselines, and a real handoff.",
    outcome: "A launch-ready feature the team could change without fear.",
  },
];

export const comparePages: ComparePage[] = [
  {
    slug: "rescue-vs-rewrite",
    metaTitle: "Rescue vs Rewrite for Vibe-Coded MVPs | wohnmohr",
    metaDescription:
      "Should you rescue or rewrite an AI-generated MVP? Compare cost, risk, and speed—then pick the cheaper path to a shippable product.",
    eyebrow: "Compare",
    headline: "Rescue vs rewrite: which path costs less?",
    intro:
      "Most vibe-coded MVPs don’t need a full rewrite on day one. They need an honest triage: what to stabilize, what to replace, and what to stop shipping on.",
    leftTitle: "Choose rescue when",
    leftPoints: [
      "Core flows work most of the time",
      "The product idea is validated; engineering is the bottleneck",
      "You can still run and explain the main paths",
      "You need a stable deploy before the next demo or users",
    ],
    rightTitle: "Choose rewrite when",
    rightPoints: [
      "Nobody can explain critical paths—including the “author”",
      "Secrets were leaked or auth is fundamentally broken",
      "Every small change breaks unrelated features",
      "Stack choices fight hosting, team skills, or cost reality",
    ],
    verdict:
      "Start with a Rescue Sprint triage. You often rewrite the hot path and rescue the rest—cheaper than a blank-slate rebuild, safer than pretending the demo is production.",
    ctaLabel: "Run the free scorecard",
    ctaHref: "/tools/vibe-code-health-check",
  },
  {
    slug: "ai-consultant-vs-freelancer",
    metaTitle: "AI Consultant vs Freelancer for Startups | wohnmohr",
    metaDescription:
      "Hiring an AI freelancer or an AI consulting team? Compare ownership, rescue depth, testing, and when each model fits a startup.",
    eyebrow: "Compare",
    headline: "AI consultant vs freelancer: what startups actually need",
    intro:
      "Both can ship. The difference shows up when the demo meets production—evals, cost controls, handoff, and who owns the messy middle.",
    leftTitle: "A consulting team fits when",
    leftPoints: [
      "You need build + rescue + testing under one roof",
      "The codebase is already messy or investor-demo fragile",
      "You want architecture decisions with delivery, not slides alone",
      "Handover, docs, and maintainability matter as much as speed",
    ],
    rightTitle: "A freelancer fits when",
    rightPoints: [
      "Scope is a thin, well-defined feature",
      "Your team can review AI risk and own production ops",
      "You’re not mid-rescue on a failing vibe-coded MVP",
      "You have strong internal product/engineering leadership",
    ],
    verdict:
      "If you’re past “add a chat widget” and into “this has to work for users,” a small consulting team that ships and rescues usually beats a lone sprint with no evals or handoff.",
    ctaLabel: "Book a free intro call",
    ctaHref: "/#contact",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you only rescue vibe-coded projects?",
    answer:
      "No. We build AI products, automations, and test systems from scratch—and we also rescue projects when prompt-built code goes sideways.",
  },
  {
    question: "How do you decide rescue vs rewrite?",
    answer:
      "In a Rescue Sprint we map what’s worth keeping, what’s risky, and what’s cheaper to rewrite. You get an honest recommendation before more budget burns.",
  },
  {
    question: "How fast can we start?",
    answer:
      "Most Rescue Sprints kick off within a week of a scoping call. Build & Ship timelines are typically 4–12 weeks depending on scope.",
  },
  {
    question: "Who owns the IP?",
    answer:
      "You do. Work product and code we deliver for your project are yours under the engagement agreement.",
  },
  {
    question: "What don’t you do?",
    answer:
      "We don’t sell slide-only strategy with no delivery, and we don’t pretend a weekend vibe-coded demo is production. If it’s not shippable, we’ll say so.",
  },
  {
    question: "How does pricing work?",
    answer:
      "See regional guide rates on our pricing page for Rescue Sprint, Build & Ship, and Automate & Assure. Enterprise programs are custom—contact us.",
  },
];

export const teamBlurb = {
  eyebrow: "The team",
  title: "A small AI consulting startup—hands on the keyboard",
  body: "wohnmohr is a lean team of builders. You work with people who write the code, run the tests, and own the rescue—not a chain of account managers. We’re built for founders and product teams that need AI shipped right, fast.",
  points: [
    "Direct access to the people doing the work",
    "Startup-aware scope and pricing",
    "Comfortable with greenfield builds and messy codebases",
  ],
};

export const servicePages: ServicePage[] = [
  {
    slug: "vibe-code-rescue",
    navLabel: "Vibe-code rescue",
    title: "Vibe-Code Rescue",
    metaTitle: "Vibe Code Rescue | Fix AI-Generated Apps | wohnmohr",
    metaDescription:
      "Vibe coding gone bad? wohnmohr rescues AI-generated MVPs—stabilize, refactor, secure, and ship. Book a Rescue Sprint.",
    eyebrow: "Rescue",
    headline: "Vibe coding gone bad? We fix it.",
    intro:
      "AI-assisted coding is fast—until deploys fail, bugs multiply, and nobody trusts the codebase. We triage, stabilize, and get you back to a shippable product.",
    problem:
      "Prompt-built apps often look done and behave like prototypes: weak tests, secret leaks, brittle prompts, and “works on my machine” deploys.",
    approach: [
      "Diagnose the repo: risk map, keep vs rewrite calls",
      "Stabilize deploy, secrets, and critical user paths",
      "Refactor hotspots and add practical tests",
      "Hand over a clear next-sprint plan",
    ],
    deliverables: [
      "Triage report with prioritized fixes",
      "Stabilized staging/production path",
      "Hardened, maintainable code for the worst areas",
      "Optional follow-on Build & Ship or Automate & Assure",
    ],
    ctaLabel: "Book a Rescue Sprint call",
  },
  {
    slug: "ai-automation",
    navLabel: "AI automation",
    title: "AI Automation",
    metaTitle: "AI Automation Consulting for Startups | wohnmohr",
    metaDescription:
      "Automate ops, support, and workflows with AI—built with guardrails and testing. wohnmohr ships automation that sticks.",
    eyebrow: "Automation",
    headline: "AI automation that saves hours—without surprise mistakes.",
    intro:
      "We design and ship agent-assisted workflows for ops, support, content, and data chores—so your team ships instead of copy-pasting.",
    problem:
      "Many “automations” are fragile scripts or unconstrained bots that hallucinate in production. Speed without guardrails creates more cleanup later.",
    approach: [
      "Map the workflow and where AI actually helps",
      "Build with human-in-the-loop where risk is high",
      "Add evals and regression checks",
      "Measure time saved and failure modes",
    ],
    deliverables: [
      "Working automation in your stack",
      "Guardrails and approval steps as needed",
      "Basic eval / monitoring hooks",
      "Runbook for your team",
    ],
    ctaLabel: "Talk automation with us",
  },
  {
    slug: "ai-testing",
    navLabel: "AI testing",
    title: "AI Testing & QA",
    metaTitle: "AI Testing & QA for LLM Products | wohnmohr",
    metaDescription:
      "AI testing and evals for LLM features—regression suites, release gates, and performance checks. Ship with confidence.",
    eyebrow: "Testing",
    headline: "Test AI the way users break it.",
    intro:
      "We build functional checks, eval suites, and release gates for AI features—so “it worked in the demo” isn’t your launch strategy.",
    problem:
      "LLM outputs drift. Prompt tweaks regress. Without evals and regression suites, every change is a gamble.",
    approach: [
      "Define critical behaviors and failure cases",
      "Build eval + regression coverage for AI paths",
      "Add performance and cost baselines",
      "Wire release readiness into your workflow",
    ],
    deliverables: [
      "Test / eval plan for your AI surface",
      "Automated regression suite",
      "Latency and cost baselines",
      "Quality playbook for ongoing changes",
    ],
    ctaLabel: "Get an AI testing plan",
  },
  {
    slug: "ai-product-development",
    navLabel: "AI products",
    title: "AI Product Development",
    metaTitle: "AI Product Development for Startups | wohnmohr",
    metaDescription:
      "Build AI products and features—agents, copilots, workflows—with production engineering and testing. Partner with wohnmohr.",
    eyebrow: "Build",
    headline: "AI products built to ship—not just demo.",
    intro:
      "From copilots and agents to custom AI workflows, we design, build, test, and launch features your users can rely on.",
    problem:
      "Many AI builds stop at a flashy prototype. Scaling to real users needs architecture, integrations, tests, and cost control.",
    approach: [
      "Scope the MVP that proves value fast",
      "Build integrations and production paths",
      "Harden with testing and performance checks",
      "Launch with a clean handoff",
    ],
    deliverables: [
      "Shipped AI feature or product slice",
      "Maintainable codebase and docs",
      "QA + basic performance validation",
      "Launch support",
    ],
    ctaLabel: "Start a Build & Ship talk",
  },
];


export type PricingPackage = {
  name: string;
  duration: string;
  price: string;
  note: string;
  featured?: boolean;
  cta: string;
  ctaHref: string;
  includes: string[];
};

export type PricingRegion = {
  id: string;
  label: string;
  countries: string;
  currency: string;
  dayRate: string;
  hourlyRate: string;
  packages: PricingPackage[];
};

const starterIncludes = [
  "Diagnose your AI build or vibe-code mess",
  "Keep / rewrite / rescue recommendation",
  "Scope for product, automation, or testing",
  "7–14 day action plan",
];

const buildIncludes = [
  "AI product or automation delivery",
  "Integrations & hardening",
  "AI testing & basic performance checks",
  "Launch / handover support",
];

const growthIncludes = [
  "Ongoing AI feature or automation capacity",
  "Testing & eval support",
  "Light rescue when things break",
  "Bi-weekly planning sync",
];

const enterpriseIncludes = [
  "Multi-product or multi-team AI programs",
  "Deeper security / compliance needs",
  "Custom SLAs & reporting",
  "Blended delivery model",
];

/** Startup-friendly regional guide pricing. */
export const pricingRegions: PricingRegion[] = [
  {
    id: "us-ca",
    label: "United States & Canada",
    countries: "United States, Canada",
    currency: "USD",
    dayRate: "$450 – $700",
    hourlyRate: "$55 – $90",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "$1,800 – $3,500",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From $7,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From $2,200 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "uk",
    label: "United Kingdom",
    countries: "United Kingdom, Ireland",
    currency: "GBP",
    dayRate: "£350 – £550",
    hourlyRate: "£45 – £70",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "£1,400 – £2,800",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From £5,800",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From £1,700 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "eu",
    label: "European Union",
    countries: "Germany, France, Netherlands, Nordics & EU",
    currency: "EUR",
    dayRate: "€400 – €650",
    hourlyRate: "€50 – €80",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "€1,600 – €3,200",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From €6,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From €1,900 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "au-nz",
    label: "Australia & New Zealand",
    countries: "Australia, New Zealand",
    currency: "AUD",
    dayRate: "A$600 – A$950",
    hourlyRate: "A$75 – A$120",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "A$2,400 – A$4,500",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From A$9,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From A$2,800 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "me",
    label: "Middle East",
    countries: "UAE, Saudi Arabia, Qatar, Bahrain",
    currency: "USD",
    dayRate: "$500 – $800",
    hourlyRate: "$60 – $100",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "$2,000 – $3,800",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From $8,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From $2,500 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "in",
    label: "India",
    countries: "India",
    currency: "INR",
    dayRate: "₹12,000 – ₹22,000",
    hourlyRate: "₹1,500 – ₹2,800",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "₹45,000 – ₹90,000",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From ₹2,50,000",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From ₹75,000 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "sg-sea",
    label: "Singapore & SEA",
    countries: "Singapore, Malaysia, Indonesia, Thailand, Philippines",
    currency: "SGD",
    dayRate: "S$500 – S$800",
    hourlyRate: "S$65 – S$100",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "S$2,000 – S$3,800",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From S$8,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From S$2,400 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
  {
    id: "latam",
    label: "Latin America",
    countries: "Brazil, Mexico, Argentina, Colombia, Chile",
    currency: "USD",
    dayRate: "$300 – $500",
    hourlyRate: "$40 – $65",
    packages: [
      {
        name: "Rescue Sprint",
        duration: "1–2 weeks",
        price: "$1,200 – $2,400",
        note: "Vibe coding gone bad? We stabilize and plan the fix.",
        cta: "Get started",
        ctaHref: "/#contact",
        includes: starterIncludes,
      },
      {
        name: "Build & Ship",
        duration: "4–12 weeks",
        price: "From $5,500",
        note: "AI product, automation, and testing—delivered.",
        featured: true,
        cta: "Start building",
        ctaHref: "/#contact",
        includes: buildIncludes,
      },
      {
        name: "Automate & Assure",
        duration: "Monthly",
        price: "From $1,600 / mo",
        note: "Ongoing AI build, automation, and QA capacity.",
        cta: "Talk to us",
        ctaHref: "/#contact",
        includes: growthIncludes,
      },
      {
        name: "Enterprise",
        duration: "Custom",
        price: "Contact us",
        note: "Larger programs, SLAs, and custom delivery",
        cta: "Contact us",
        ctaHref: "#enterprise",
        includes: enterpriseIncludes,
      },
    ],
  },
];
