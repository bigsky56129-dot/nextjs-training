# Architecture

This document summarizes the structure and key decisions of the Next Abstract site built on Next.js 13 App Router with static export.

## Goals
- Preserve original Abstract theme look/feel and interactions.
- Enable static export suitable for GitHub Pages.
- Provide a robust base-path strategy for project sites.

## High-Level Design
- Stateless, fully static site exported via Next.js `output: 'export'`.
- Legacy front-end assets (CSS/JS) loaded globally in `app/layout.jsx`.
- Client-side initializers added to specific pages to re-enable theme plugins.

## Directory Layout
- `app/`
  - `layout.jsx`: Global head, CSS/JS includes, header/footer.
  - `page.jsx`: Home with Masonry grid, featured slider, audio init.
  - `(routes)/*`: Route folders (about, contact, category, single-* , style-guide, faq, terms, privacy).
- `components/`
  - `Header.jsx`, `Footer.jsx`: Site chrome with Next `Link` routing.
  - `CommentsList.jsx`, `CommentForm.jsx`: Comments UI for single pages.
- `public/`
  - `css/`, `js/`, `fonts/`, `images/`, `media/`: Legacy assets preserved verbatim.
  - `.nojekyll`: Ensures GitHub Pages serves directories beginning with underscores.
- `scripts/`
  - `check-base-paths.mjs`: Scans source files for root-leading `src`, inline `url('...')`, and literal `<a href="/...">`.

## Key Configuration
- `next.config.js`
  - `output: 'export'` for static export.
  - `trailingSlash: true` for GH Pages-friendly URLs.
  - `images: { unoptimized: true }` to serve legacy images directly.
  - Conditional `basePath` and `assetPrefix` derived from `NEXT_PUBLIC_BASE_PATH`.

## Base Path Strategy
- Environment variable: `NEXT_PUBLIC_BASE_PATH` (e.g., `/nextjs-training`).
- All asset references in pages/components prefix with `process.env.NEXT_PUBLIC_BASE_PATH || ""`.
- Guard test (`npm run test:paths`) blocks deploy on violations.

## Client Behavior & Plugins
- Legacy plugins: jQuery, Masonry + imagesLoaded, FlexSlider, MediaElement.js, Lity, Superfish.
- Initialization:
  - Home (`app/page.jsx`): Masonry layout; featured FlexSlider; audio player init.
  - Category (`app/category/page.jsx`): Masonry for bricks; gallery FlexSlider; audio init.
  - Single pages (`app/single-*`): Page-specific media/player behavior.

## Routing
- App Router pages with trailing slashes for export:
  - `/` (Home)
  - `/about/`, `/contact/`, `/faq/`, `/terms/`, `/privacy/`, `/style-guide/`
  - `/category/`
  - `/single-standard/`, `/single-audio/`, `/single-gallery/`, `/single-video/`

## Build & Deploy Pipeline
1. Develop with `npm run dev` (App Router, client-side only interactions).
2. `npm run build` then `npm run export` to generate static site in `out/`.
3. Deploy to GitHub Pages with `npm run deploy`.
   - For project sites: set `$env:NEXT_PUBLIC_BASE_PATH = "/<project>"` before deploy.
4. Guard test `npm run test:paths` runs pre-deploy to prevent root-leading paths.

## Notes & Constraints
- No dynamic server features; all content is static.
- Ensure all internal links use Next `Link` and have trailing slashes.
- Avoid root-leading asset paths and inline CSS `url('/...')`.
