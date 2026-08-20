// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Repository is `emtatudatatech.github.io` — a GitHub *user* site, so it is served
// from the domain root. No `base` path is needed; adding one would break every link.
export default defineConfig({
  site: "https://emtatudatatech.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    // Inlining the CSS removes the last render-blocking request. It costs ~7KB
    // gzipped in each of the two HTML documents and buys back a full round trip,
    // which is the better trade on the mobile connections this audience uses.
    inlineStylesheets: "always",
    format: "directory",
  },
  image: {
    // Sharp handles the AVIF/WebP derivatives generated at build time.
    responsiveStyles: true,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
