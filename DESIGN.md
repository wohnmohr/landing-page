---
name: wohnmohr
description: A product company presented plainly; the products themselves are the imagery.
colors:
  ink: "#0F1012"
  ink-raised: "#1B1C20"
  ink-panel: "#282A2F"
  paper: "#FBFBFA"
  paper-sunken: "#F3F3F1"
  graphite: "#585C64"
  fog: "#A3A7AE"
  cobalt: "#2B5BFF"
  cobalt-deep: "#1E43D6"
  cobalt-soft: "#8FA8FF"
  cobalt-tint: "#DCE5FF"
  hairline: "rgb(15 16 18 / 0.14)"
  split-biller: "#53307B"
  nichelinq: "#6D3ADF"
  chargemyai: "#0F7A4A"
  mythreadpay: "#1F2A5C"
typography:
  display:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.95rem"
    fontWeight: 400
rounded:
  pill: "9999px"
  phone: "22px"
  frame: "12px"
  brand: "16px"
  surface: "28px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  grid-gap: "16px"
  grid-gap-lg: "20px"
  section: "80px"
  section-sm: "112px"
  container: "1200px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  button-ink-hover:
    backgroundColor: "{colors.ink-panel}"
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  status-chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  product-tile:
    rounded: "{rounded.brand}"
    padding: "36px"
  closing-surface:
    backgroundColor: "{colors.paper-sunken}"
    rounded: "{rounded.surface}"
    padding: "64px 48px"
---

# Design System: wohnmohr

## Overview

**Creative North Star: "The Shop Window"**

A product company played straight, at the craft level of Linear, Stripe, Apple and 37signals. The page is a clean window and the products are what is in it: real screenshots of the live products, each sitting in its own faint wash of that product's colour. Everything around them (type, buttons, hairlines) is ink on near-white paper, quiet enough that the screenshots carry the colour and the interest.

Density is calm and generous: large tight-tracked headlines, an 18px reading size, wide section rhythm, and very few elements per view. The world is light-only by design: products are used in daylight, at counters and in shops, so there is no dark theme. The company itself has one accent, cobalt, and spends it on actions and links.

Confirmed rejections: glow blobs, a dark AI hero, fake div-built product UIs, eyebrows and kickers, rows of identical feature cards, gradients as decoration, and client-services language anywhere.

**Key Characteristics:**
- Real product screenshots in hairline frames are the only imagery.
- Ink on near-white paper; cobalt is the single company accent.
- Each product owns its colour, used only inside its own tile.
- Mona Sans everywhere, tight negative tracking on display sizes.
- Full-pill buttons, 16px tiles and frames, 28px large surfaces.
- One staggered rise on entry, one tile lift on hover; static under reduced motion.

## Colors

Mostly ink on paper, one cobalt accent, and one colour per product that never leaves its own product.

### Primary
- **Signal Cobalt** (cobalt): the one company accent. Links, the primary button, the live-status dot, check marks in feature lists, focus rings, caret and form accent-color. Pressed and hover states step to **Deep Cobalt** (cobalt-deep). **Cobalt Mist** (cobalt-soft) is the accent as text on ink. **Cobalt Wash** (cobalt-tint) is the pale band behind highlighted words and is the selection colour family.

### Neutral
- **Workshop Ink** (ink): all headings and primary text, the ink pill button, and the only dark surface. Raised and panel ink (ink-raised, ink-panel) exist for ink-button hover and on-ink panels.
- **Daylight Paper** (paper): the page ground everywhere.
- **Sunken Paper** (paper-sunken): the closing contact block, the closing CTA on product pages, the footer wash and the frame domain bar.
- **Graphite** (graphite): secondary text on paper; sublines, summaries, nav links at rest, footer links.
- **Fog** (fog): secondary text on ink only.
- **Hairline** (hairline): section dividers, list rules, footer rules and the frame domain bar's bottom edge.

### Product colours
- **Split Biller Plum** (split-biller), **NicheLinq Violet** (nichelinq), **ChargeMyAI Green** (chargemyai), **MyThreadPay Navy** (mythreadpay). Each appears only as its own tile wash (6% at rest, 10% on hover or focus-within) and as the tint of that tile's frame shadow.

### Named Rules
**The One Voice Rule.** Cobalt is the only company accent. No second accent, no accent-coloured headings, no accent backgrounds on large areas.

**The Own Colour Rule.** A product colour appears only inside that product's own tile or product page, at a wash, never as a fill behind company UI and never on another product.

**The Daylight Rule.** Light theme only. Do not add a dark mode or a dark hero; ink is reserved for buttons and the logo reversal.

## Typography

**Display Font:** Mona Sans (with ui-sans-serif, system-ui)
**Body Font:** Mona Sans (with ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono, for code only

**Character:** one confident grotesque doing every job, separated by weight and tracking rather than by a second family. Display sizes pull in hard (-4% to -2%), so headlines read as solid blocks; body text sits at normal tracking and an easy 1.6 line height.

### Hierarchy
- **Display** (600, 42 to 88px fluid, 1.0): the homepage headline only, kept to about 13ch so it breaks over two lines.
- **Headline** (600, 34 to 60px fluid, 1.04): section headings on the homepage, page titles in the page hero and product page h1.
- **Title** (600, 26 to 38px fluid, 1.12): section headings on inner pages and the closing CTA line.
- **Title small** (600, 20 to 24px fluid, 1.25): the one-line promise inside each product tile.
- **Body** (400, 18px, 1.625): sublines, summaries and principle bodies, graphite, capped at 40 to 60ch. Hero and page-hero sublines step to 20px from the sm breakpoint.
- **Label** (500, 15px, -1%): buttons, tile links, nav (14.7px), footer (14.4px), status chips (12.5px).
- **Code** (Geist Mono 400): code samples and token names, nothing else.

### Named Rules
**The No Kicker Rule.** A heading stands alone. No eyebrow, kicker, overline or small uppercase label above any heading, and no uppercase tracked labels anywhere.

**The Real Sequence Rule.** Numbers appear in front of items only when they are a real ordered sequence the reader follows (product "Step 1, 2, 3"). Sections are never numbered.

**The Plain Punctuation Rule.** No em or en dashes in copy. Use a full stop, a colon or a comma.

## Layout

A single centred container (1200px max, 16px gutters, 32px from sm) on a 12-column grid at lg. Sections breathe at 80px vertical padding, 112px from sm, divided by a full-width hairline rather than by background changes. Headings sit left-aligned; nothing is centred except the frame domain label.

The homepage hero is left-aligned copy over a composed screenshot wall: at lg the desktop product sits back left and the three phone products overlap only its form column; below lg the wall becomes a horizontal snap-scroll strip. Product tiles run in an uneven 6/6 then 5/7 grid with 16 to 20px gaps, collapsing to one column. "How we build" uses a 4/8 split with a sticky heading. Inner-page lists ("What we run", "More from wohnmohr") are hairline-ruled rows on a 14rem / 1fr / auto grid, not cards. The mobile nav opens a 16px-radius white panel under the bar.

## Elevation & Depth

Mostly flat and tonal: depth comes from paper versus sunken paper and from the product tints. The single real shadow belongs to screenshot frames, which float slightly above their tile with a soft shadow tinted by the surface beneath. Other edges are 1px rings drawn with box-shadow at 8 to 18% ink rather than borders.

### Shadow Vocabulary
- **Frame float** (`box-shadow: 0 0 0 1px rgb(15 16 18 / 0.08), 0 2px 4px rgb(var(--frame-shadow) / 0.04), 0 24px 48px -24px rgb(var(--frame-shadow) / 0.28)`): every product screenshot frame; inside a tile, `--frame-shadow` takes the product colour.
- **Hairline ring** (`box-shadow: 0 0 0 1px rgb(15 16 18 / 0.08)`): white status chips, the white logo and button specimen panels.
- **Menu panel** (`box-shadow: 0 0 0 1px rgb(15 16 18 / 0.08), 0 24px 48px -24px rgb(15 16 18 / 0.35)`): the mobile navigation panel.
- **Header rule** (`box-shadow: 0 1px 0 rgb(15 16 18 / 0.08)`): the fixed header once scrolled.

### Named Rules
**The Soft Light Rule.** Shadows are soft, negative-spread and tinted. No hard offset shadows, no glow, no coloured halos.

**The Clear Glass Rule.** The fixed header is the one translucent surface (paper at 80% with a 12px backdrop blur, falling back to 95% paper). No other glass panels or frosted cards.

## Shapes

Soft but not bubbly. Every button, nav pill and status chip is a full pill. Tiles, the mobile menu and specimen panels use 16px. Desktop screenshot frames use 12px and phone frames 22px so they read as devices. Large closing surfaces (the contact block, the product page hero tile and closing CTA) use 28px. Frames clip their screenshots; where a frame bleeds off a tile edge its right corners go square. The only gradient in the system is a functional mask fade at the bottom of the product page hero screenshot.

## Components

### Buttons
Quiet, solid pills that do one thing each.
- **Shape:** full pill, 44px tall, 20px side padding, 15px medium label with an optional 16px arrow that nudges 2px right on hover.
- **Ink (default primary on paper):** ink fill, white label, hover to ink-panel. Used for "See the products", product CTAs and the nav Contact (36px compact).
- **Primary (cobalt):** cobalt fill, white label, hover to deep cobalt.
- **Outline:** transparent with an inset 1px ring at 18% ink, darkening to 50% on hover. Always the second action beside an ink pill.
- **On ink (Bright, Ghost):** white fill or a 30% white ring, for ink surfaces only; currently shown only on the brand page.
- **Press / Focus:** scale to 0.98 on press; 2px cobalt focus outline with 3px offset.

### Chips
- **Status chip:** pill, 12.5px medium. Live: white with a hairline ring and a 6px cobalt dot. Early access: transparent, graphite text, inset ring at 15% ink.

### Cards / Containers
- **Product tile:** 16px corners, product colour wash at 6% (10% on hover and focus-within), no border, 24px padding (36px from sm). Contains the product name as h3 with status chip, audience line, title-small promise, graphite summary, optional price, a cobalt "How it works" link and an ink outbound link, then the screenshot frame bleeding off the bottom or right edge. The whole tile is one link target.
- **Closing surface:** sunken paper, 28px corners, 48 to 64px padding.

### Inputs / Fields
The contact form is a Tally embed on a transparent background; only its colours and font are controlled from here (deeper styling needs Tally Pro).

### Navigation
Fixed 64px bar on translucent paper. Logo left; at lg, two pill links (graphite at rest, ink on hover, ink on a 6% ink pill when current) and a compact ink Contact pill. Below lg, a 40px ringed pill toggle opens a white 16px panel with 18px links and a full-width ink Contact pill over a 30% ink scrim.

### Product Frame (signature)
A real screenshot in a white frame with a domain bar on top: sunken paper at 70%, a hairline bottom edge, the product's domain centred in 11.5px graphite. Desktop frames are 16:10 at 12px radius; phone frames 52:100 at 22px. Phone-first products (Split Biller, NicheLinq, ChargeMyAI) are shown on phone frames; MyThreadPay, a desktop product, on a desktop frame. Screenshots are always real captures of the live product, never built from divs.

### Motion
One entrance: hero copy, CTAs and the screenshot wall rise 16px and fade in over 0.9s with 80ms steps (`cubic-bezier(0.16, 1, 0.3, 1)`), starting from an already-visible default. One signature interaction: on hover a tile's frame lifts 6px over 700ms while the wash deepens. Under reduced motion everything is static.

## Do's and Don'ts

### Do:
- **Do** let real product screenshots, in product frames, be the only imagery on the page.
- **Do** use ink pills for the main action on paper and pair them with an outline pill for the second.
- **Do** tint each product tile with only that product's colour at 6%, deepening to 10% on hover.
- **Do** separate sections with a hairline and generous padding (80px, 112px from sm) rather than with coloured bands.
- **Do** keep headings in Mona Sans 600 with the display tracking from the scale, left-aligned and width-capped.
- **Do** keep entrance motion to the one staggered rise and the tile lift, and make both static under reduced motion.

### Don't:
- **Don't** put an eyebrow, kicker or small label above a heading.
- **Don't** number sections; number only a real step sequence.
- **Don't** use em or en dashes in copy.
- **Don't** use gradients as decoration, glass or frosted panels (beyond the header), glow, or hard offset shadows.
- **Don't** introduce a second accent colour or use a product colour outside its own tile or page.
- **Don't** build fake product UIs from divs; capture the real product.
- **Don't** add a dark theme or a dark hero.
- **Don't** use client-services language (agency, services, pricing packages, "we build for you"); wohnmohr is a product company.
