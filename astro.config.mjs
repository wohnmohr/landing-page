import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { writeFileSync } from "node:fs";

const site = "https://wohnmohr.com";

/** Writes /sitemap.xml from every page Astro builds. */
function sitemap() {
  const priority = (path) =>
    path === "/" ? "1.0"
    : path.startsWith("/products/") ? "0.9"
    : ["/work-with-us/", "/company/", "/pricing/"].includes(path) ? "0.8"
    : path === "/brand/" ? "0.4"
    : "0.7";

  return {
    name: "wohnmohr-sitemap",
    hooks: {
      "astro:build:done": ({ pages, dir }) => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = pages
          .map(({ pathname }) => `/${pathname}`.replace(/\/+$/, "/"))
          .filter((path) => !path.startsWith("/404"))
          .sort()
          .map(
            (path) =>
              `  <url>\n    <loc>${site}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(path)}</priority>\n  </url>`
          );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
        writeFileSync(new URL("sitemap.xml", dir), xml);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});
