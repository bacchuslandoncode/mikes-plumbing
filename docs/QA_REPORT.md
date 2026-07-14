# QA Report

Final production pass across SEO, structured data, accessibility, and performance.

## SEO

- Every route renders a unique `document.title` and meta description via `src/components/ui/Seo.jsx` (no new dependency; plain `useEffect` + DOM API).
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:site_name`, `og:url`) set per route.
- Canonical `<link>` set per route using `window.location.origin`, so it self-corrects once a real domain is attached (no fabricated domain hardcoded).
- `public/robots.txt` allows all crawling and points to `/sitemap.xml`.
- `public/sitemap.xml` lists all 10 routes. **The domain in `sitemap.xml` is a placeholder (`https://www.example.com`) and must be replaced with the final production domain before launch** — see `docs/LAUNCH_CHECKLIST.md`.
- Heading hierarchy: one `<h1>` per route (hero title), `<h2>` for section headings via `SectionHeading`, no skipped levels.
- All internal links use descriptive text ("View Service," "Emergency Plumbing," service names) rather than "click here."
- All meaningful images have descriptive alt text; the one decorative image (Contact page background) is still given a plain descriptive alt rather than empty alt, since it's a real (if non-literal) photo, not a spacer or icon.

## Structured Data

`src/components/ui/StructuredData.jsx` injects a single `Plumber` JSON-LD block site-wide, built only from `business.js` fields with `status: 'verified'`. Currently that is `name` and `areaServed` (from `market`). No rating, review count, price, coordinates, street address, license number, opening hours, owner name, founding year, service-area city list, or awards are included, because none of those fields carry `verified` status.

## Accessibility

- All decorative icons (icon-badges accompanying visible text labels) now carry `aria-hidden="true"`.
- FAQ accordions use native `<details>/<summary>`, which have correct built-in disclosure semantics without manual ARIA.
- Mobile navigation is a `role="dialog"` with `aria-modal="true"`, traps Escape to close, and focuses the first link on open.
- Form fields use explicit `<label htmlFor>`, `aria-required`, `aria-invalid`, and `aria-describedby` pointing at the matching error message; the Netlify honeypot field is `aria-hidden` and removed from tab order.
- `:focus-visible` outlines (orange, offset) are defined globally and apply to every interactive element — verified present on links, buttons, and form controls.
- `prefers-reduced-motion: reduce` collapses all animation/transition durations to near-zero site-wide.

## Performance

- No external image URLs anywhere in the codebase — every image is a local import from `src/assets/images/`, bundled by Vite.
- All images set `width`/`height` (via `ResponsiveImage`) and an `aspect-ratio` on the container, preventing layout shift while loading.
- Hero images use `loading="eager"` + `fetchPriority="high"`; every other image defaults to `loading="lazy"`.
- No console errors observed across any of the 10 routes during this pass.
- No broken image requests or dead links found (verified via DOM query across all internal `<a href>` and `<img src>` values).
- Production bundle: ~303 KB JS (91 KB gzipped), ~29 KB CSS (5.4 KB gzipped) — reasonable for a marketing site of this size. Image payload is large (several multi-MB source photos) since the supplied photography wasn't pre-optimized; this is flagged as a launch follow-up in `docs/LAUNCH_CHECKLIST.md` rather than something fixed by this pass (no image processing tool was invoked, per instructions not to modify the photographs).
