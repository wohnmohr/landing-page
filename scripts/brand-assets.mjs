/**
 * Generates wohnmohr raster brand assets into /public:
 *   - Open Graph cards (1200×630) for social/search previews
 *   - App / search icons, apple-touch-icon, favicon.ico
 *   - Email avatars (profile pictures) and email-signature logos
 *
 * Usage (needs Playwright + a Chromium, not a project dependency):
 *   npx -y playwright@1 --version   # or have it installed elsewhere
 *   PLAYWRIGHT_MODULE=/path/to/node_modules/playwright/index.mjs node scripts/brand-assets.mjs
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? "playwright");

const font = (pkg, file) =>
  pathToFileURL(join(root, "node_modules/@fontsource", pkg, "files", file)).href;

const C = {
  ink: "#0B0D10",
  ink2: "#13161B",
  paper: "#F3F4EE",
  fog: "#A0A7B2",
  lime: "#C6F432",
  cobalt: "#2B5BFF",
};

// One continuous infinity path; colour is split by clipping (lime left, cobalt right)
// so the crossing stays seamless.
const LOOP = "M24 12C28 6.5 32 4 36 4C40.4 4 44 7.6 44 12C44 16.4 40.4 20 36 20C32 20 28 17.5 24 12C20 6.5 16 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16 20 20 17.5 24 12Z";

let clipId = 0;
const mark = (width, { ship = C.lime, build = C.cobalt, stroke = 4.6 } = {}) => {
  const id = `m${clipId++}`;
  return `
  <svg width="${width}" height="${width / 2}" viewBox="0 0 48 24" fill="none" style="overflow:visible;display:block">
    <defs>
      <clipPath id="${id}l"><rect x="-4" y="-4" width="28" height="32"/></clipPath>
      <clipPath id="${id}r"><rect x="24" y="-4" width="28" height="32"/></clipPath>
    </defs>
    <path d="${LOOP}" stroke="${build}" stroke-width="${stroke}" clip-path="url(#${id}r)"/>
    <path d="${LOOP}" stroke="${ship}" stroke-width="${stroke}" clip-path="url(#${id}l)"/>
  </svg>`;
};

const base = `
  <style>
    @font-face { font-family: SG; font-weight: 700; src: url(${font("space-grotesk", "space-grotesk-latin-700-normal.woff2")}); }
    @font-face { font-family: SG; font-weight: 500; src: url(${font("space-grotesk", "space-grotesk-latin-500-normal.woff2")}); }
    @font-face { font-family: Inter; font-weight: 400; src: url(${font("inter", "inter-latin-400-normal.woff2")}); }
    @font-face { font-family: JBM; font-weight: 500; src: url(${font("jetbrains-mono", "jetbrains-mono-latin-500-normal.woff2")}); }
    * { margin: 0; box-sizing: border-box; }
    html, body { background: transparent; }
    .sg { font-family: SG, sans-serif; font-weight: 700; letter-spacing: -0.045em; }
    .mono { font-family: JBM, monospace; font-weight: 500; text-transform: uppercase; letter-spacing: 0.14em; }
    .marker { background: ${C.lime}; color: ${C.ink}; padding: 0 0.1em; }
  </style>`;

const ogCard = ({ label, lines, sub, pill }) => `
  <div style="width:1200px;height:630px;position:relative;overflow:hidden;background:${C.ink};color:#fff;padding:64px 72px;display:flex;flex-direction:column">
    <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1.5px,transparent 1.5px);background-size:28px 28px;-webkit-mask-image:radial-gradient(ellipse 70% 80% at 85% 30%,#000,transparent)"></div>
    <div style="position:absolute;right:-160px;top:-200px;width:620px;height:620px;border-radius:50%;background:${C.cobalt};opacity:.35;filter:blur(120px)"></div>
    <div style="position:absolute;right:-60px;bottom:-40px;opacity:.14">${mark(560, { ship: "#fff", build: "#fff", stroke: 3 })}</div>
    <div style="position:relative;display:flex;align-items:center;gap:16px">
      ${mark(64)}
      <span class="sg" style="font-size:36px">wohnmohr</span>
    </div>
    <div style="position:relative;margin-top:auto">
      <div class="mono" style="font-size:20px;color:${C.fog};display:flex;align-items:center;gap:14px">
        <span style="width:12px;height:12px;border-radius:3px;background:${C.lime}"></span>${label}
        ${pill ? `<span style="margin-left:6px;border:1.5px solid ${C.lime};color:${C.lime};border-radius:999px;padding:6px 14px;font-size:16px">${pill}</span>` : ""}
      </div>
      <h1 class="sg" style="margin-top:22px;font-size:84px;line-height:.98">${lines.join("<br/>")}</h1>
      ${sub ? `<p style="margin-top:24px;font-family:Inter;font-size:26px;color:${C.fog};max-width:900px">${sub}</p>` : ""}
    </div>
  </div>`;

const square = (size, bg, { scale = 0.62, ship, build } = {}) => `
  <div style="width:${size}px;height:${size}px;background:${bg};display:grid;place-items:center">
    ${mark(size * scale, { ship, build })}
  </div>`;

const wordmark = (color, { ship, build } = {}) => `
  <div style="display:inline-flex;align-items:center;gap:36px;padding:40px 48px">
    ${mark(240, { ship, build })}
    <span class="sg" style="font-size:150px;line-height:1;color:${color}">wohnmohr</span>
  </div>`;

const jobs = [
  // Open Graph
  { out: "og/default.png", w: 1200, h: 630, html: ogCard({ label: "AI product company", lines: ["We build AI products", `that keep <span class="marker">shipping.</span>`], sub: "Makers of NicheLinq and Split Biller." }) },
  { out: "og/nichelinq.png", w: 1200, h: 630, html: ogCard({ label: "01 / NicheLinq", pill: "Early access", lines: ["Make ads from a link.", `Every drop, on <span class="marker">Reels.</span>`], sub: "For streetwear &amp; fashion labels." }) },
  { out: "og/split-biller.png", w: 1200, h: 630, html: ogCard({ label: "02 / Split Biller", pill: "Live", lines: ["Split bills in ₹.", `Settle with <span class="marker">UPI.</span>`], sub: "Who owes whom in seconds. No signup, no app download." }) },
  { out: "og/work-with-us.png", w: 1200, h: 630, html: ogCard({ label: "Work with us", lines: ["Your product, built", `on our <span class="marker">loop.</span>`], sub: "Rescue Sprint · Build &amp; Ship · Automate &amp; Assure" }) },
  { out: "og/company.png", w: 1200, h: 630, html: ogCard({ label: "Company", lines: ["Build. Ship. Learn.", `<span class="marker">Repeat.</span>`], sub: "wohnmohr is an AI product company." }) },
  { out: "og/journal.png", w: 1200, h: 630, html: ogCard({ label: "Journal", lines: ["Notes from", `the <span class="marker">loop.</span>`], sub: "AI products, automation, testing and vibe-code rescue." }) },

  // Icons
  { out: "logo.png", w: 512, h: 512, html: square(512, C.ink) },
  { out: "apple-touch-icon.png", w: 180, h: 180, html: square(180, C.ink) },
  { out: "icon-192.png", w: 192, h: 192, html: square(192, C.ink) },
  { out: "icon-512.png", w: 512, h: 512, html: square(512, C.ink) },
  { out: "icon-maskable-512.png", w: 512, h: 512, html: square(512, C.ink, { scale: 0.5 }) },
  { out: ".ico-32.png", w: 32, h: 32, html: square(32, C.ink, { scale: 0.8 }), temp: true },
  { out: ".ico-48.png", w: 48, h: 48, html: square(48, C.ink, { scale: 0.8 }), temp: true },

  // Email avatars — mark sized to sit inside the circular crop Gmail/Outlook apply
  { out: "brand/wohnmohr-avatar.png", w: 1024, h: 1024, html: square(1024, C.ink, { scale: 0.6 }) },
  { out: "brand/wohnmohr-avatar-light.png", w: 1024, h: 1024, html: square(1024, C.paper, { scale: 0.6 }) },
  { out: "brand/wohnmohr-avatar-lime.png", w: 1024, h: 1024, html: square(1024, C.lime, { scale: 0.6, ship: C.ink, build: C.ink }) },

  // Email-signature logos (transparent background)
  { out: "brand/wohnmohr-logo-dark.png", html: wordmark(C.ink), transparent: true },
  { out: "brand/wohnmohr-logo-light.png", html: wordmark("#fff"), transparent: true },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const shots = {};
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: job.w ?? 1600, height: job.h ?? 400 }, deviceScaleFactor: 1 });
  // Load from a file:// URL so the @font-face file URLs are allowed.
  const tmp = join(tmpdir(), `wohnmohr-asset-${process.pid}.html`);
  writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8">${base}</head><body>${job.html}</body></html>`);
  await page.goto(pathToFileURL(tmp).href);
  await page.evaluate(() => document.fonts.ready);
  rmSync(tmp);
  const target = job.w ? page : page.locator("body > div");
  const file = join(pub, job.out);
  mkdirSync(dirname(file), { recursive: true });
  await target.screenshot({ path: file, omitBackground: !!job.transparent });
  if (job.temp) shots[job.out] = readFileSync(file);
  console.log("wrote", job.out);
  await page.close();
}
await browser.close();

// favicon.ico with embedded PNGs (32 + 48)
const images = [shots[".ico-32.png"], shots[".ico-48.png"]];
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((png, i) => {
  const size = [32, 48][i];
  const e = 6 + i * 16;
  header.writeUInt8(size, e);
  header.writeUInt8(size, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(png.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += png.length;
});
writeFileSync(join(pub, "favicon.ico"), Buffer.concat([header, ...images]));
console.log("wrote favicon.ico");
