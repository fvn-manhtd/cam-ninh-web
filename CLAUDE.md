# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The one-page, bilingual marketing site for Công ty TNHH Cam Ninh (camninh.com). Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4, statically exported and hosted on GitHub Pages. Content and visual identity come from the 2026 company profile PDF (kept out of git).

## Commands

```bash
npm install
npm run dev         # dev server on http://localhost:3100
npm run build       # static export to ./out (there is no separate export step)
npm run preview     # serve ./out on port 3100 (next start does not serve an export)
npm run lint        # eslint (flat config)
npm run typecheck   # tsc --noEmit
```

- There is no test suite. Verify changes with lint, typecheck, build, then look at `/` and `/en/` in a browser.
- Node 24 (`.nvmrc`); Next 16 needs Node >= 20.9.
- `next build` downloads Google Fonts, so it needs network access.

## Deployment

`.github/workflows/deploy.yml` runs lint, typecheck and build on pushes and PRs to `main`, and publishes `./out` to the `gh-pages` branch **only on push to `main`**. Pushing to `main` is therefore a production deploy of camninh.com.

- `public/CNAME` and `public/.nojekyll` are copied into the export; the custom domain depends on that CNAME file.
- Static export only: no API routes, server actions, middleware or image optimizer. Images are plain `<img>` tags with root-absolute paths (`/images/...`); relative paths break under `/en/`.

## Architecture

- **Two locales, two root layouts.** `app/(vi)/` renders Vietnamese at `/` and `app/(en)/` renders English at `/en/`. Each has its own root layout so `<html lang>` is correct; both delegate to `components/layout/RootShell.tsx`. There is deliberately no `app/layout.tsx`. `trailingSlash: true` is required for `/en/` on GitHub Pages.
- **`components/HomePage.tsx`** composes the whole page for a locale from `components/sections/*`. Section anchors (`#about`, `#service`, `#projects`, `#partners`, `#contact`) are the same in both locales.
- **Copy lives in `content/`, not in components.**
  - `content/dictionaries/vi.ts` is the source of truth and defines the `Dictionary` type; `en.ts` must satisfy it, so a missing key fails typecheck. Add strings to both.
  - `content/data/site.ts` is the single place for company facts (name, address, phone, email, tax code). Never hardcode these elsewhere.
  - `content/data/*.ts` hold structured content (services, equipment, projects, gallery, partners, certificates) with `{ vi, en }` fields where text differs.
- **Client components are few**: `Header` (mobile menu), `ServiceTabs`, `Gallery` (lightbox via `<dialog>`), `QuoteForm`, and `Effects`. `Effects` renders nothing and enhances server HTML through data attributes: `data-reveal` (fade in on scroll), `data-countup`, `data-lang-switch` (keeps the current anchor when switching language). The page must stay complete without JS.
- **Quote form** (`components/ui/QuoteForm.tsx`) posts to Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is set in `.env.production`. With no key it opens a prefilled `mailto:` instead and must never report a fake success.

## Styling

- Tailwind 4 with no config file: brand tokens are in the `@theme` block of `app/globals.css` (`brand`, `brand-deep`, `brand-soft`, `ink`, `steel`, `mist`, `line`), plus a few component classes (`btn`, `field`, `hex-bg`, marquee).
- Fonts: Be Vietnam Pro (body) and Barlow Condensed (headings), loaded in `lib/fonts.ts` with the `vietnamese` subset.
- White text on the brand orange fails contrast; use `text-ink` on orange for anything but large display type.
- All decorative motion sits inside `@media (prefers-reduced-motion: no-preference)` in `globals.css`.
- Identity motifs from the profile: section headings use the orange bar + double rule (`SectionHeading`), photos and logos sit in orange rounded frames with an orange caption bar, the hero is a diamond photo mosaic, the footer carries the gear watermark.

## Images

Everything in `public/images/` is generated from the profile PDF; do not edit the WebP files by hand.

```bash
scripts/extract-pdf-images.sh "2026_Cam Ninh Profile.pdf"   # raw extraction into .pdf-extract/ (gitignored)
python3 scripts/build-images.py "2026_Cam Ninh Profile.pdf" # builds public/images + content/data/images.generated.json
```

- `scripts/images.manifest.tsv` is the curated list (source, alpha mask, destination, width, quality, trim). Logos for partners and clients are cropped from rendered pages 16 and 19 (`page:N:x,y,w,h`).
- Components get images through `img("section/name")` in `content/data/images.ts`, which returns the path with intrinsic width/height and throws on unknown names.
