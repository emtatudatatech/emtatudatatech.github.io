# emtatudatatech
This repository hosts Michael Maina's value creation portfolio.

## portfolio
My portfolio can be accessed here: [emtatudatatech](https://emtatudatatech.github.io)

## pages
| Page | Path | Description |
| --- | --- | --- |
| Portfolio | [`index.html`](index.html) | Landing page: about, certifications, tech stack, projects, contact. |
| CV | [`cv/`](cv/index.html) | Renders [`assets/Resume.pdf`](assets/Resume.pdf) inline, page by page, with download and open-in-new-tab links. |
| Career Catalogue | [`catalogue/`](catalogue/index.html) | Dashboard view of the project catalogue. |

## updating the CV

**Replace [`assets/Resume.pdf`](assets/Resume.pdf) and commit. That is the whole process.**

`assets/Resume.pdf` is the single source of truth for the CV. The CV page does not transcribe
any of its contents — it fetches and renders that exact file — so there is no second copy to keep
in sync and no way for the site to show stale wording. The "last updated" badge on the page comes
from the file's `Last-Modified` header (falling back to the PDF's own creation date), so it
refreshes on its own too.

Keep the filename `Resume.pdf`. If you rename it, update `PDF_URL` in
[`cv/index.html`](cv/index.html) and the two button links in the same file.

The only thing worth mirroring by hand is the About blurb on [`index.html`](index.html) — it is a
short summary, not a copy of the CV, so it only needs a look when your headline or current role
changes.

### how the CV page renders

- [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 is **vendored** in
  [`assets/vendor/pdfjs/`](assets/vendor/pdfjs) (Apache-2.0, `LICENSE` included) rather than loaded
  from a CDN, so the CV never depends on a third-party host being reachable. To upgrade it, replace
  `pdf.min.js` and `pdf.worker.min.js` with a matching pair from the same release.
- The PDF is fetched with `cache: "no-cache"`, so a replaced file shows up on the next visit instead
  of sitting behind the CDN's 10-minute cache window. Unchanged files still return `304`, so this
  costs nothing.
- Each page renders to a canvas with a pdf.js text layer over it, which keeps the CV text
  selectable, searchable and readable by screen readers.
- If pdf.js fails to load, the page falls back to the browser's native PDF viewer; if that fails
  too, it falls back to a download link. The CV stays reachable either way.

Everything is static — no build step — so it deploys to GitHub Pages as-is.

## assets

### color scheme
[ArtyClick - Ligh Mustard](https://colors.artyclick.com/color-names-dictionary/color-names/light-mustard-color)

[ArtyClick - Dark Grey](https://colors.artyclick.com/color-names-dictionary/color-names/dark-grey-color)

### Portfolio Image Sources
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