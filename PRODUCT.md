# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Product users** (primary): people who should leave wohnmohr.com and start using one of the products. Each product has its own audience: friends and flatmates splitting costs in India (Split Biller), small shop owners such as bakeries, salons, cafés and studios (NicheLinq), web-app developers and no-code builders in India (ChargeMyAI), owners and supervisors of garment, carton and construction units paying piece-rate or daily wages (MyThreadPay).
- **Partners and investors**: people judging whether wohnmohr is a serious company that ships and runs real products.

## Product Purpose

wohnmohr is a product company that builds and runs small, focused software for everyday jobs. wohnmohr is never positioned as a service or agency: building its own products is the whole vision (user, 2026-10-20). History (user, 2026-10-20): wohnmohr built products for clients in the past; the About page may say so in one line of origin story, with no client names, case studies or service offer. Success for the site: a visitor understands within seconds that wohnmohr makes real products (four today, more planned; never hard-code the count or write sentences listing every product by name; say "a growing suite of products"), can tell what each one does, and clicks through to the right one. Partners leave believing the company ships and maintains real software.

## Positioning

Focused everyday tools: each product does one real job end to end for a specific person (splitting a bill, showing today's offers, charging for AI replies, approving weekly wages). Many are India-first and UPI-native, but payments are a common trait, not the headline. Confirmed by the user on 2026-10-20; "AI product company" is no longer the lead framing.

## Operating Context

Products (facts as published on each product site, 2026-10-20):

- **Split Biller** (splitbiller.com, live, beta label on the bill input). "Split bills in ₹, settle with UPI." Who owes whom in seconds; split equally, by percentage or exact amounts; settle in the fewest payments; UPI deep links with the amount filled in (GPay, PhonePe, Paytm). No signup, no app download, groups stay on the device, sharing is end-to-end encrypted. 22 free calculators. Listed on Product Hunt. Footer reads "Created by wohnmohr".
- **NicheLinq** (nichelinq.com, live). Headline: "Show what's on. Let them buy it on the spot." One link, QR code and shop screen showing a business's current offers, each with a Pay, Order, Book, Call, WhatsApp or Directions button. Payments go straight to the owner via UPI, PayPal or Venmo. Assistant named Sparky plans the day and writes each part from the owner's wording; also makes an Instagram reel and post, site chat that answers only from the owner's news, one-line website embed. Nothing goes live until the owner publishes. Free tier (500 Spark tokens, then 100/month); packs ₹199, ₹499, ₹999. CTA "Start free".
- **ChargeMyAI** (chargemyai.com, early access, waitlist). Headline: "Add AI to your app. Your users pay for it." One script tag and `charge.ai.chat(text)`; no API key, server or AI bill. Users get 10 free replies, then top up by UPI; one balance across every app; daily limits. Developers earn a share of each paid reply (30% for the first 50 founding apps for 12 months, then 20%). ₹0 setup; ₹0.10 per standard reply. CTA "Join the waitlist".
- **MyThreadPay** (mythreadpay.com, early access per user decision). Headline on its sign-up page: "Every piece counted. Every rupee traceable." Record pieces and attendance as the work is done; rates and wages kept with their dates; weekly pay worked out and locked once approved. Trades offered at sign-up: textiles & garments (piece or bundle rates), cartons & boxes (per 1,000 by process), construction sites (daily wage, attendance, overtime). Roles: owner, supervisors, accountant. English and Tamil. Public site is a sign-in/sign-up app only.

Retired 2026-10-20 at the user's direction: all client-service pages (/services/*, /pricing, /work-with-us, /compare/*, /work/*, /tools/*), the service-selling journal (/blogs/*) and the service FAQ. Their URLs 301 to the homepage via public/_redirects. Do not reintroduce client work, services, packages or pricing for builds.

## Capabilities and Constraints

- Astro 3 + Tailwind 3 static site; content for company and products lives in `src/utils/company.ts`.
- Live routes: /, /products, /products/[slug], /about (was /company, 301), /brand.
- PostHog tracking via `data-track` attributes; keep event names.
- Contact (product feedback, partnerships, investors): one Tally form (https://tally.so/r/Eqzjxq, id in src/utils/company.ts), plus tech@wohnmohr.com and WhatsApp. No meeting booking (Calendly removed at the user's request, 2026-10-20).
- Devices (user, 2026-10-20): Split Biller, NicheLinq and ChargeMyAI are phone-first and are shown on phone screens; MyThreadPay is the only desktop product.

## Brand Commitments

- Name is lower-case "wohnmohr". Logo: "The Continuous Fold" (user-supplied bundle, 2026-10-20): an infinity ribbon with an over-under crossing plus an outlined wordmark. Masters live in `public/brand/svg/`; `src/components/brand/Logo.astro` is generated from them. Do not stretch, rotate or change the crossing; no gradients, glow, shadows or outlines.
- Standing preference (user, 2026-10-20): premium, category-standard product-company presentation executed at top craft. The site should sit alongside Linear, Stripe, Apple and 37signals/Basecamp; their craft level is the bar. A hand-painted "signwriter" direction was tried and rejected as not premium.
- Do not name the founders anywhere public (pages, meta, structured data, llms.txt) until they say so (user, 2026-10-20): they still work at other companies and don't want wohnmohr to read as moonlighting. Tell the story in "we" voice.
- Keep cobalt `#2B5BFF` as the company accent (already used as the brand colour in products and checkout).

## Evidence on Hand

- Real: each product's published features, pricing and status (above); Split Biller's Product Hunt listing; screenshots of each product site captured 2026-10-20 in `public/products/` (their in-product demo data such as "Goa trip", "Corner Bakehouse", "Savithri" is the products' own sample data).
- None public: user counts, revenue, transaction volume, customer logos, testimonials. Never invent these.

## Product Principles

1. One product, one job, done end to end.
2. Show the product doing its job; never claim what it does not do.
3. No friction by default: no signup walls or app downloads unless they genuinely help.
4. People stay in control: AI drafts, owners decide and publish.
