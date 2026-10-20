/**
 * wohnmohr company & product content.
 * Everything the homepage, product pages, footer and structured data say
 * about the company and its products lives here.
 *
 * Product facts mirror each product's own site (checked 2026-10-20). Do not
 * add numbers, customers or quotes that the products do not publish.
 */

export const company = {
  name: "wohnmohr",
  url: "https://wohnmohr.com",
  tagline: "Focused software for everyday jobs.",
  mission:
    "Build small, focused software for jobs people do every week, run it ourselves, and keep it simple enough that nobody needs a manual.",
  shortDescription:
    "wohnmohr is a product company: a growing suite of focused software for everyday jobs, every product built and run by us.",
  email: "tech@wohnmohr.com",
  founded: "2025",
  /** Where we come from (not a company address). */
  roots: "Trichy, Tamil Nadu",
  /** Companies we built for before wohnmohr. Origin story only: never a portfolio or a service offer. */
  pastClients: ["Nurexus", "One More Bags", "Applied AI Academy"],
  /** The one contact form: https://tally.so/r/Eqzjxq */
  tallyFormId: "Eqzjxq",
  whatsapp: "https://wa.me/918248438399",
};

export type ProductStep = { title: string; body: string };

/** Each product's own brand colour, used to tint its tile. */
export type Livery = "sb" | "nl" | "cma" | "mtp";

/** Where the product is mainly used: phone-first products are shown on a phone. */
export type Device = "mobile" | "desktop";

export type Product = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  status: "Live" | "Early access";
  /** Who the product is for. */
  audience: string;
  /** The product's own headline, as published on its site. */
  oneLiner: string;
  /** Headline lines for the product page. */
  headline: string[];
  summary: string;
  steps: ProductStep[];
  features: string[];
  /** Real published pricing, or null when the product publishes none. */
  pricing: string | null;
  livery: Livery;
  device: Device;
  cta: string;
  ctaHref: string;
  /** Screenshot of the product's own site, captured 2026-10-20. */
  screenshot: string;
  screenshotMobile: string;
  screenshotAlt: string;
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "split-biller",
    name: "Split Biller",
    url: "https://www.splitbiller.com",
    domain: "splitbiller.com",
    status: "Live",
    audience: "For friends, flatmates and trips",
    oneLiner: "Split bills in ₹, settle with UPI.",
    headline: ["Split bills in ₹.", "Settle with UPI."],
    summary:
      "Who owes whom in seconds. Share privately, pay over UPI. No signup, no app download.",
    steps: [
      {
        title: "Type the bill",
        body: "Say what was spent and who was there, right in the browser. Split equally, by percentage or exact amounts.",
      },
      {
        title: "See who owes whom",
        body: "Balances are settled in the fewest payments, so a trip of eleven expenses can close in two transfers.",
      },
      {
        title: "Pay in one tap",
        body: "Each payment opens GPay, PhonePe, Paytm or any UPI app with the amount already filled in.",
      },
    ],
    features: [
      "Made for your phone",
      "No signup",
      "No app download",
      "Groups stay on your device",
      "End-to-end encrypted sharing",
      "22 free calculators",
    ],
    pricing: null,
    livery: "sb",
    device: "mobile",
    cta: "Open Split Biller",
    ctaHref: "https://www.splitbiller.com",
    screenshot: "/products/split-biller.webp",
    screenshotMobile: "/products/split-biller-mobile.webp",
    screenshotAlt: "Split Biller's homepage: a Goa trip of ₹38,460 settled in two UPI payments.",
    metaTitle: "Split Biller by wohnmohr | Split bills in ₹, settle with UPI",
    metaDescription:
      "Split Biller shows who owes whom in seconds and settles in the fewest UPI payments. No signup, no app download, groups stay on your device.",
  },
  {
    slug: "nichelinq",
    name: "NicheLinq",
    url: "https://nichelinq.com",
    domain: "nichelinq.com",
    status: "Live",
    audience: "For bakeries, cafés, salons and studios",
    oneLiner: "Show what's on. Let them buy it on the spot.",
    headline: ["Show what's on.", "Let them buy it", "on the spot."],
    summary:
      "One link for your bio, your counter QR and the screen in your shop. It plays today's offer with a button to order, book, call or pay.",
    steps: [
      {
        title: "Tell Sparky what's on",
        body: "Type today's specials in your own words. Sparky plans the day into parts and writes each one from what you said.",
      },
      {
        title: "Approve, then publish",
        body: "Preview every part first. Nothing goes live until you publish it.",
      },
      {
        title: "Customers act on the spot",
        body: "Each offer carries a Pay, Order, Book, Call, WhatsApp or Directions button. Payments go straight to you.",
      },
    ],
    features: [
      "One link, QR and shop screen",
      "UPI, PayPal and Venmo",
      "Instagram reel and post",
      "Chat that answers only from your news",
      "One-line website embed",
    ],
    pricing: "Free to start with 500 Spark tokens. Packs from ₹199.",
    livery: "nl",
    device: "mobile",
    cta: "Start free",
    ctaHref: "https://nichelinq.com",
    screenshot: "/products/nichelinq.webp",
    screenshotMobile: "/products/nichelinq-mobile.webp",
    screenshotAlt: "NicheLinq's homepage: a café's offer page with a Book a table button.",
    metaTitle: "NicheLinq by wohnmohr | Show what's on, let them buy it on the spot",
    metaDescription:
      "NicheLinq gives a small business one link, QR code and shop screen for today's offers, each with a button to pay, order, book or call. Free to start.",
  },
  {
    slug: "chargemyai",
    name: "ChargeMyAI",
    url: "https://chargemyai.com",
    domain: "chargemyai.com",
    status: "Early access",
    audience: "For web apps and the people who build them",
    oneLiner: "Add AI to your app. Your users pay for it.",
    headline: ["Add AI to your app.", "Your users pay for it."],
    summary:
      "One script tag. No API key, no server, no AI bill. Your users top up by UPI, and you earn a share of every reply.",
    steps: [
      {
        title: "Add one script tag",
        body: "Call charge.ai.chat(text) from any web app: plain HTML, React, Next.js, WordPress, Webflow, Lovable or Bolt.",
      },
      {
        title: "Users pay per reply",
        body: "Each user gets 10 free replies, then tops up by UPI. One balance works across every app on ChargeMyAI.",
      },
      {
        title: "You earn a share",
        body: "Founding apps keep 30% of what their users spend for a year. Track replies and earnings in the console.",
      },
    ],
    features: [
      "No API key or server",
      "UPI top-ups from ₹49",
      "Daily limits for users",
      "Earnings console",
      "₹0 setup, ₹0 monthly",
    ],
    pricing: "₹0 to set up. Users pay ₹0.10 per standard reply.",
    livery: "cma",
    device: "mobile",
    cta: "Join the waitlist",
    ctaHref: "https://chargemyai.com",
    screenshot: "/products/chargemyai.webp",
    screenshotMobile: "/products/chargemyai-mobile.webp",
    screenshotAlt: "ChargeMyAI's homepage: one script tag, and a sample app answering for ₹0.10.",
    metaTitle: "ChargeMyAI by wohnmohr | Add AI to your app, your users pay for it",
    metaDescription:
      "ChargeMyAI adds AI to any web app with one script tag. Users pay per reply over UPI and you earn a share. No API key, no server. Early access.",
  },
  {
    slug: "mythreadpay",
    name: "MyThreadPay",
    url: "https://mythreadpay.com",
    domain: "mythreadpay.com",
    status: "Early access",
    audience: "For garment, carton and site owners",
    oneLiner: "Every piece counted. Every rupee traceable.",
    headline: ["Every piece counted.", "Every rupee traceable."],
    summary:
      "Record pieces and attendance as the work is done. Rates and wages are kept with their dates, and weekly pay is worked out for you.",
    steps: [
      {
        title: "Record the work",
        body: "Supervisors log pieces, bundles or attendance as the day goes. Rates are kept with the date they applied.",
      },
      {
        title: "Pay is worked out",
        body: "Each worker's week adds up from pieces times rate, by process, with attendance and salary where they apply.",
      },
      {
        title: "Approve and lock",
        body: "The owner approves the week and it is locked, so every rupee can be traced back to the work.",
      },
    ],
    features: [
      "Piece, bundle and daily rates",
      "Owner, supervisor and accountant roles",
      "English and Tamil",
      "Weekly pay locked on approval",
    ],
    pricing: null,
    livery: "mtp",
    device: "desktop",
    cta: "Ask for access",
    ctaHref: "mailto:tech@wohnmohr.com?subject=MyThreadPay%20early%20access",
    screenshot: "/products/mythreadpay.webp",
    screenshotMobile: "/products/mythreadpay-mobile.webp",
    screenshotAlt: "MyThreadPay's sign-up page: a week's approved total for one worker, by piece and rate.",
    metaTitle: "MyThreadPay by wohnmohr | Piece-rate wages, counted and traceable",
    metaDescription:
      "MyThreadPay records pieces and attendance, keeps rates with their dates and works out weekly pay for garment, carton and construction units. English and Tamil. Early access.",
  },
];

/** House rules: how every product is built. Each rule points at a real product. */
export const principles = [
  {
    title: "One job, done end to end",
    body: "Split Biller splits a bill. NicheLinq shows today's offers. Each product does one job completely instead of ten jobs halfway.",
  },
  {
    title: "No wall in front of the door",
    body: "No signup to split a bill, no card to start NicheLinq, no API key to add ChargeMyAI. You try it before you commit.",
  },
  {
    title: "You approve before it goes out",
    body: "Sparky drafts and the owner publishes. MyThreadPay works out the week's pay, and nothing is locked until it is approved.",
  },
  {
    title: "Money goes straight to the right person",
    body: "UPI links with the amount filled in, pay buttons that pay the shop owner directly, wages traced to the piece.",
  },
];
