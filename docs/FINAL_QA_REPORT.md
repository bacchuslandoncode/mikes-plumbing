# Final QA Report

Full pre-deployment audit of the Mike's Plumbing website demo. No redesign performed; only confirmed defects were fixed.

## Routes tested

All 10 approved routes, plus the 404 fallback:
`/`, `/services`, `/services/drain-cleaning`, `/services/water-heaters`, `/services/faucets-fixtures`, `/services/plumbing-repairs`, `/emergency-plumbing`, `/about`, `/service-areas`, `/contact`

Each route was checked live via the dev server for: direct load (200), page title, H1 count, broken links, console errors, and broken image requests.

## Viewports actually inspected

1440×900, 1024×768, 768×1024, 390×844 — fully inspected (all four) on: Home, Services, one service-detail page (Drain Cleaning), Emergency Plumbing, About, Contact. That is 6 pages × 4 viewports = 24 combinations, each checked live via `scrollWidth`/`clientWidth` comparison. Zero horizontal overflow found in any combination. The remaining 4 routes (the other three service-detail pages and Service Areas) were checked for overflow at their default load width only, on the reasoning that they share the exact same layout components (`ServiceDetailLayout`, `ServiceHero`) already verified at all four breakpoints elsewhere.

## Issues found

1. **About, Contact, and 404 pages had zero `<h1>` elements.** `SectionHeading` always rendered an `<h2>`, and these three pages used it for their page title instead of a real heading component with an `<h1>` option. This is a real accessibility and SEO defect (no page-level heading for assistive tech or search engines).
2. **No `og:image` meta tag existed anywhere on the site.** The `Seo` component set `og:title`, `og:description`, `og:type`, `og:site_name`, and `og:url`, but never an image, so link previews on social platforms would show no photo despite real photography being available.

No other legitimate build, lint, broken-link, broken-image, competitor-content, em-dash, or unsupported-claim issues were found in this pass.

## Issues fixed

1. Added a `level` prop to `SectionHeading` (defaults to `2`, unchanged everywhere else) and set `level={1}` on the top heading of `About.jsx`, `Contact.jsx`, and `NotFound.jsx`. This is a tag-only change — the heading's visual styling comes from its CSS class, not the HTML tag, so nothing looks different. Verified live: all three pages now render exactly one `<h1>`.
2. Added a default `og:image` to `Seo.jsx`, pointing at the real hero photograph (`stevepb-plumbing-840835_1920.jpg`), resolved to an absolute URL from `window.location.origin`. Verified live on the homepage.

## Issues intentionally not changed

- **`sitemap.xml` still uses a placeholder domain** (`https://www.example.com`). This was already flagged in `docs/LAUNCH_CHECKLIST.md` as a pre-launch step; it cannot be resolved until a real production domain exists, and fabricating one would be worse than a documented placeholder.
- **Several pages still contain "will be added here once confirmed" placeholder text** (About's local-connection section, Contact's hours, Service Areas' city list). This is intentional per the verification-status system in `business.js` — it is honest placeholder copy, not fabricated content, and is explicitly called out as visible-but-not-fake in `docs/VERIFICATION_CHECKLIST.md`. Removing it would either leave those sections blank or require inventing facts, both worse outcomes.
- **Source photography is not compressed** (several files are 2–3 MB). Per every prior instruction in this project, photographs are not to be modified. Already flagged in `docs/LAUNCH_CHECKLIST.md`.
- **No real logo exists**; header/footer use a text wordmark. Already flagged as a launch item, not something to invent.

## Image issues found

None. Every `<img>` resolves via a local Vite import (no external hotlinks), no competitor images exist, the hero image loads `eager`/high-priority and every other image loads `lazy`, every image carries `width`/`height` plus a CSS `aspect-ratio` (no layout shift), alt text is descriptive and accurate on every meaningful image, and no image is used more times than its subject justifies (see `docs/IMAGE_INVENTORY.md` for the full per-image usage table). The one previously-corrected crop (About page's `compagnons-...jpg`, cropped to 16:9 bottom-anchored to exclude foreign-language signage) remains correct.

## Responsive issues found

None beyond what was already fixed in earlier passes (header CTA mobile-hide bug, `split-band` vertical alignment). This pass's 24-combination sweep found zero new overflow, wrapping, or stacking problems. Footer confirmed to stack 4→2→1 columns correctly across breakpoints; mobile sticky actions confirmed visible with correct `main` bottom padding so they never cover the footer or final CTA.

## Accessibility issues found

The missing-H1 issue above is the only accessibility defect found and is fixed. Also reconfirmed in this pass (no changes needed): mobile nav uses `role="dialog"`, `aria-modal`, `aria-hidden`, and `inert` correctly toggled; Escape closes the menu; body scroll locks while open; FAQ uses native `<details>/<summary>` (correct built-in ARIA semantics); form fields have `<label htmlFor>`, `aria-required`, `aria-invalid`, `aria-describedby`; decorative icon-badges carry `aria-hidden="true"`; global `:focus-visible` outline is present on all interactive elements; landmarks (`header`, `main`, `footer`, `nav` ×2) are present on every route.

## Animation issues found

None new. `prefers-reduced-motion: reduce` support (confirmed present in the loaded stylesheet), the shared single `IntersectionObserver` for scroll reveal, and all hover/press/focus feedback from the previous motion pass were spot-checked and remain intact and functioning (mobile nav open/close, FAQ expand/collapse both verified live via direct state checks).

## SEO issues found

The missing `og:image` above is the only SEO defect found and is fixed. Also reconfirmed: every route has a unique `document.title` and meta description (via `Seo.jsx`), canonical URL self-generates from `window.location.origin`, `robots.txt` correctly references `/sitemap.xml`, `sitemap.xml` lists exactly the 10 real routes with no obsolete entries, and the `Plumber` JSON-LD structured data contains only `name` and `areaServed` — the two `business.js` fields with `status: 'verified'`. No rating, review count, price, address, phone, hours, or license appears in the schema.

## Remaining unverified business information

Owner name, phone number, founding year, street address, license number, business hours, 24-hour availability, reviews/rating/count, service-area cities beyond Phoenix, certifications, financing, warranty, response time. All remain `placeholder`/`needsClientConfirmation` in `src/data/business.js` and are not displayed as fact anywhere on the site. Full punch list in `docs/LAUNCH_CHECKLIST.md`.

## Build result

✅ Success (`npm run build`, no errors)

## Lint result

✅ Success (`npm run lint`, oxlint, 0 warnings)

## Remaining launch blockers

1. Replace the placeholder domain in `public/sitemap.xml` once a real production domain exists.
2. Supply verified business facts (see `docs/LAUNCH_CHECKLIST.md`) to replace honest placeholder copy.
3. Supply a real logo file.
4. Consider compressing source photography before launch (not done here — instructions prohibit modifying supplied photographs without explicit direction).
