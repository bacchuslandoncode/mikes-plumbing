# Responsive QA

Verified live via the dev server at the four required viewports: 1440x900, 1024x768, 768x1024, 390x844.

## Method

Each shared layout pattern (sticky header, mobile nav overlay, hero grid, split-band, service rows, FAQ accordion, contact form) is used across multiple routes through the shared component system (`src/components/layout`, `src/components/ui`, `src/components/services`). Breakpoints live in `src/styles/global.css` and apply uniformly wherever a given class is used, so a pattern verified on one route is verified everywhere that pattern renders.

## Checks performed and results

- **Horizontal overflow**: `document.documentElement.scrollWidth > clientWidth` checked on `/`, `/services`, `/emergency-plumbing`, `/about`, `/service-areas`, `/contact` at all four widths. No overflow found.
- **Navigation**: desktop inline nav swaps to a hamburger + full-screen overlay below 900px; verified open/close via direct state invocation (see note below on the `computer` click-simulation limitation in this environment) and via native `.click()`.
- **Mobile sticky actions**: visible only at or below 768px, `display: flex`; `.app-shell__main` carries `padding-bottom` equal to the sticky bar height so it never covers the footer or the final CTA.
- **Hero composition**: home hero and service heroes collapse from a two-column grid to a single stacked column at 860px, image moves above text.
- **Forms**: contact form grid collapses from two columns to one at 700px; all fields remain reachable and labeled at 390px.
- **FAQ accordion**: native `<details>/<summary>` scales correctly at all widths, no overflow from long questions.
- **Cards/rows**: service grids use `repeat(auto-fit, minmax(...))`, reflowing from multi-column to single-column without manual breakpoints.

## Known tooling limitation

The Browser pane's `computer` screenshot action times out in this environment (unrelated to the site's code — confirmed via console/network logs showing no errors). Visual QA was therefore done via DOM/CSS computed-value assertions (`getComputedStyle`, `getBoundingClientRect`, `scrollWidth`/`clientWidth`) rather than pixel screenshots. This verifies layout mechanics precisely but does not substitute for a human visual pass before launch.

## Items corrected during this audit

- Header CTA button was not hiding at mobile widths (`.btn` class order was overriding the `display: none` rule) — fixed with explicit specificity.
- `ResponsiveImage` had no way to override its natural aspect ratio, which meant a display-time crop intended to hide foreign-language signage on the About page photo wasn't actually cropping the correct axis — added an `aspectRatio` override prop and corrected the crop direction (16:9, bottom-anchored) so the signage is excluded.
- `split-band` used `align-items: center` everywhere, which vertically misaligned the Contact page's long form against its shorter aside — added a `split-band--top` modifier.
