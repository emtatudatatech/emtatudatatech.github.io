# emtatudatatech

The sales site for **emtatudatatech** — Michael Maina's data, analytics and AI
consulting practice. Live at [emtatudatatech.github.io](https://emtatudatatech.github.io).

Built with [Astro](https://astro.build) and deployed to GitHub Pages by
GitHub Actions.

## running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built dist/ exactly as it deploys
npm run check    # TypeScript + Astro diagnostics
```

Node 20 or newer.

## deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/`.

> **One-time setup:** in **Settings → Pages**, set **Source** to **GitHub Actions**.
> This repo previously served raw files from the branch root. Until that setting
> is changed, pushes will keep publishing the old files instead of the build.

The repository is a GitHub *user* site, so it is served from the domain root and
`astro.config.mjs` sets no `base` path. Adding one would break every link.

## editing the content

Copy lives in typed data files, not in markup. Edit these and the pages follow:

| File | Controls |
| --- | --- |
| [`src/data/site.ts`](src/data/site.ts) | Name, role, phone, email, socials, and the WhatsApp CTA every button uses |
| [`src/data/services.ts`](src/data/services.ts) | The six capability areas |
| [`src/data/packages.ts`](src/data/packages.ts) | The four productized offers and the retainers |
| [`src/data/proof.ts`](src/data/proof.ts) | Headline stats, result stats, certifications, client list |
| [`src/data/projects.ts`](src/data/projects.ts) | Client case studies, plus `builds` — the shipped web applications |
| [`src/data/faq.ts`](src/data/faq.ts) | Objection handling |

**Rule for `proof.ts`:** every number on the site is traceable to a delivered
engagement in the CV. If a figure cannot survive a follow-up question in a sales
meeting, it does not belong there.

**Rule for job titles:** titles never carry an employer name. "Senior Data
Scientist, Enterprise Data Office" — not "… at Company X". Where Michael has
worked is answered by the CV and by the work-history timeline in
[`src/components/About.astro`](src/components/About.astro), which is the one
place employers are listed as such. Client names still appear on case studies
and in the "work delivered for" strip, because there they are proof rather than
a job title.

**Rule for `builds`:** these back the Websites & Web Applications service, which
predates its appearance on the CV. Every `live` URL is checked before it ships —
drop the field rather than link a demo that has gone down.

### changing the phone number

Change `WHATSAPP_NUMBER` in [`src/data/site.ts`](src/data/site.ts) and every
WhatsApp link, the footer, and the structured data update together.

### the guarantee

[`src/components/Guarantee.astro`](src/components/Guarantee.astro) makes three
promises — a pay-for-itself Health Check, fixed scope and deadline, and full IP
handover. Treat that file as a contract summary rather than marketing copy.

## updating the CV

**Replace [`public/Resume.pdf`](public/Resume.pdf) and commit. That is the whole
process.**

That file is the single source of truth. The CV page does not transcribe any of
its contents — it fetches and renders that exact file — so there is no second
copy to keep in sync and no way for the site to show stale wording. The "last
updated" badge comes from the file's `Last-Modified` header (falling back to the
PDF's own creation date), so it refreshes on its own too.

Keep the filename `Resume.pdf`. If you rename it, update `PDF_URL` in
[`src/pages/cv.astro`](src/pages/cv.astro).

The one thing worth mirroring by hand is the timeline in
[`src/components/About.astro`](src/components/About.astro) — a short summary,
not a copy, so it only needs a look when a role changes.

### how the CV page renders

- [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 is **vendored** in
  [`public/vendor/pdfjs/`](public/vendor/pdfjs) (Apache-2.0, `LICENSE` included)
  rather than loaded from a CDN, so the CV never depends on a third-party host.
  To upgrade it, replace `pdf.min.js` and `pdf.worker.min.js` with a matching
  pair from the same release.
- The PDF is fetched with `cache: "no-cache"`, so a replaced file shows up on the
  next visit instead of sitting behind the CDN's cache window. Unchanged files
  still return `304`, so this costs nothing.
- Each page renders to a canvas with a pdf.js text layer over it, keeping the CV
  text selectable, searchable and readable by screen readers.
- If pdf.js fails to load, the page falls back to the browser's native PDF
  viewer; if that fails too, it falls back to a download link.

## performance notes

The site makes **no third-party requests at all**. Things that keep it that way,
and that are easy to undo by accident:

- **Fonts are self-hosted** in [`public/fonts/`](public/fonts) — Inter and Space
  Grotesk, latin subsets, variable weights, ~70 KB total. Do not swap these back
  to a Google Fonts `<link>`.
- **Icons are inline SVG** in [`src/components/Icon.astro`](src/components/Icon.astro),
  replacing the RemixIcon and Material Symbols CDN stylesheets.
- **Reveal-on-scroll is an IntersectionObserver** in the base layout, replacing
  ScrollReveal from unpkg. The hidden state is gated behind an `html.js` class
  so that if scripts fail, every section still renders.
- **Images go through `astro:assets`.** Always pass an explicit `width` along
  with `widths` — without it Astro emits a full-resolution derivative for the
  non-srcset `src` fallback, which is how a single card ends up shipping 3 MB.
- **Do not import an image you are not rendering** through `<Image>`. A bare
  import in a data file still makes Vite emit the original into `dist/`.

Source images live in [`src/assets/`](src/assets) (processed at build time);
anything in [`public/`](public) is served byte-for-byte.

## pages

| Page | Path | Description |
| --- | --- | --- |
| Sales page | [`src/pages/index.astro`](src/pages/index.astro) | Offer, services, proof, packages, process, case studies, FAQ |
| CV | [`src/pages/cv.astro`](src/pages/cv.astro) | Renders `public/Resume.pdf` inline, page by page |
| Career Catalogue | [`public/catalogue/`](public/catalogue) | Internal dashboard, served as static files |

> The catalogue dashboard fetches `details.json`, which is intentionally not
> committed — so it renders empty on the deployed site. It is an internal tool,
> not part of the sales site.

## theming

Light and dark are driven by CSS custom properties defined once in
[`src/styles/global.css`](src/styles/global.css). An inline script in the
`<head>` stamps `data-theme` before first paint, so there is no flash of the
wrong theme. Visitors who never touch the toggle follow their OS setting; a
click stores the choice in `localStorage`.

Every colour resolves through a token, so the toggle never needs to know what a
component looks like. Add colours as tokens, not as literals.

## assets

### colour scheme

Brand gold `#C6A94D` on a warm neutral scale. Gold is darkened to `#7A5D12` when
used as text on light backgrounds to hold a 5.9:1 contrast ratio.

### portfolio image sources

1. https://share.google/Vg0XbYzSOImgE6VkJ
2. https://unsplash.com/photos/a-blue-abstract-background-with-lines-and-dots-pREq0ns_p_E
3. https://unsplash.com/photos/green-and-red-light-wallpaper-n6B49lTx7NM
4. https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk
5. https://unsplash.com/photos/1-usa-dollar-banknotes-8lnbXtxFGZw
6. https://unsplash.com/photos/a-close-up-of-a-map-of-africa-pDU95uBp5Uw
7. https://unsplash.com/photos/a-green-background-with-a-lot-of-white-numbers-7i37OaU1slU
8. https://unsplash.com/photos/person-wearing-lavatory-gown-with-green-stethoscope-on-neck-using-phone-while-standing-L8tWZT4CcVQ
9. https://unsplash.com/photos/background-pattern-iPrv-DOUq6I
10. https://unsplash.com/photos/the-spotify-logo-is-lit-up-on-a-flat-screen-tv-SwKf1x2_hRo
11. https://unsplash.com/photos/a-bank-sign-lit-up-in-the-dark-UENYI2DL1RA
12. https://unsplash.com/photos/orange-fruits-on-white-ceramic-plate-A4BBdJQu2co
