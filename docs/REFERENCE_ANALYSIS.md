# Reference Analysis

## Methodology note

This conversation does not contain actual URLs, screenshots, or source code for competitor plumbing websites, nor did it re-open Callahan Air, Mitchell Brothers HVAC, American Cooling and Heating, Mustang Plumbing, or Davillier Law Group in this session. Rather than fabricate specifics about sites that were not actually inspected here, this document records the strategic conversion principles and quality bar to apply, as described in this project's instructions. If specific competitor URLs are supplied later, this file should be updated with concrete, site-specific observations, still following the "principles only, never copy" rule below.

## What "reference only" means for this project

Strategic patterns may inform structure and priorities. The following must never be copied from any external site:

- Layouts
- Wording
- Photographs
- Source code
- Branding
- Page designs
- Reviews
- Coupons
- Claims

## Conversion Principles To Apply

- **Emergency-service conversion**: An emergency/urgent-need path should be reachable within one click from any page, not buried in a services submenu.
- **Phone-number visibility**: A call-to-action should be visible without scrolling on both desktop and mobile, once a real phone number is confirmed (see `docs/CONTENT_SOURCE_LOG.md`).
- **Appointment calls to action**: Every service page should end with a clear next step (call or contact), not just descriptive text.
- **Service organization**: Group services by job type, not by internal jargon, so a homeowner can self-identify their problem quickly.
- **Trust placement**: Trust signals belong near decision points (hero, service page footers, contact page) but only once they are real and verified. Nothing in `src/data/business.js` currently qualifies.
- **Review placement**: Reserved for a future update once real reviews are supplied. No review section should render fabricated content in the meantime.
- **Service-area content**: A dedicated `/service-areas` route should state coverage plainly once city names are confirmed.
- **FAQ structure**: Short, specific, homeowner-phrased questions outperform generic marketing FAQs. Defer writing FAQ copy until real service details are confirmed.
- **Local SEO page organization**: Each service gets its own route (already reflected in the approved sitemap) rather than being flattened into one long services page.
- **Mobile conversion patterns**: Sticky call-to-action, short paragraphs, and thumb-reachable buttons take priority over dense desktop-style layouts.

## Quality Bar (from prior project work)

The following standard applies to this build without recreating any prior project's specific design:

- Clean layouts with generous whitespace
- Strong, consistent spacing rhythm
- Real photography only, never generic AI-looking filler
- Clear page hierarchy (one primary action per screen)
- Separate routes per topic, not single-page scroll-everything
- Professional typography, restrained font pairing
- Functional, working calls to action (not decorative buttons)
- No unnecessary repeated sections
