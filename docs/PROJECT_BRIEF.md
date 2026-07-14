# Project Brief — Mike's Plumbing Demo

## Candidate Business Information

- Business name: Mike's Plumbing — verified
- Primary market: Phoenix, Arizona — verified

All other business facts (owner name, phone number, founding year, address, license number, hours, 24-hour availability, reviews, rating, service-area cities, certifications, financing, warranty, response time) are unverified or placeholder. See `src/data/business.js` and `docs/VERIFICATION_CHECKLIST.md`.

## Approved Sitemap

```
/
/services
/services/drain-cleaning
/services/water-heaters
/services/faucets-fixtures
/services/plumbing-repairs
/emergency-plumbing
/about
/service-areas
/contact
```

## Homepage Section Order

1. Header / navigation (persistent, includes emergency link)
2. Hero — business name, one-line value statement, primary call-to-action
3. Services overview — grid linking to the four service routes
4. Emergency plumbing callout — links to `/emergency-plumbing`
5. About/owner teaser — links to `/about` (no content until a real owner bio is supplied)
6. Service-area teaser — links to `/service-areas`
7. Contact call-to-action — links to `/contact`

No review section, no rating badges, and no "why choose us" bullet list of unverifiable claims. These are excluded until real information exists.

## Section-by-Section Content Plan Per Route

### `/` (Home)
- Hero: business name, market ("Phoenix, Arizona"), single primary CTA. No phone number until confirmed.
- Services overview grid: four service cards (drain cleaning, water heaters, faucets/fixtures, plumbing repairs), each linking out.
- Emergency callout: short statement directing urgent cases to `/emergency-plumbing`.
- About teaser: one sentence, links to `/about`. No fabricated bio.
- Service-area teaser: links to `/service-areas`. No city list until confirmed.
- Contact CTA: links to `/contact`.

### `/services`
- Intro: one sentence describing the service catalog.
- Card grid of all four services, each with route link. No pricing.

### `/services/drain-cleaning`
- Header: service name.
- Description: placeholder pending confirmed service details.
- CTA: link to `/contact` (or phone once confirmed).
- No stock image forced in; flagged in `docs/IMAGE_INVENTORY.md` as needing a dedicated photo.

### `/services/water-heaters`
- Header: service name.
- Description: placeholder pending confirmed service details.
- CTA: link to `/contact`.
- No stock image forced in; same as above.

### `/services/faucets-fixtures`
- Header: service name.
- Description: placeholder pending confirmed service details.
- CTA: link to `/contact`.
- No stock image forced in; same as above.

### `/services/plumbing-repairs`
- Header: service name.
- Description: placeholder pending confirmed service details.
- CTA: link to `/contact`.
- Image: `plumbingTools` (tools photo) or `waterMetersValves` may be used per `src/data/images.js`.

### `/emergency-plumbing`
- Header: urgent framing, no fabricated response-time promise.
- Description: placeholder pending confirmed emergency-service details.
- Image: `pipePouringWater`.
- CTA: prominent, links to `/contact` (or phone once confirmed).

### `/about`
- Owner/team introduction: placeholder, no fabricated biography, awards, certifications, or team size until supplied.
- Company story: placeholder pending real content.
- No image until a real owner/team photo is supplied.

### `/service-areas`
- Intro: one sentence.
- City list: placeholder, `needsClientConfirmation`, do not display as fact until confirmed.
- Image: `waterMetersValves`.

### `/contact`
- Contact form or contact details, phone number withheld until confirmed.
- Background image: `waterDropBlue` (decorative only).

## Initial Service Categories

- Drain cleaning
- Water-heater repair
- Faucet and fixture repair
- Leak and plumbing repair
- Emergency plumbing

Each is recorded in `src/data/services.js` with `status: 'needsClientConfirmation'` since none are directly supported yet by verified business information.

## Rules Recap (enforced across all future content work)

No fabricated reviews, review counts, or star ratings. No invented license numbers, certifications, owner biography, team size, or awards. No guaranteed arrival times, pricing, financing, or warranty claims. No competitor copy. No visible lorem ipsum. No keyword stuffing. No em dashes in website copy. No generic AI marketing language.

## Build Status

All 10 routes in the approved sitemap are built and functional. See `docs/QA_REPORT.md` for the SEO/accessibility/performance pass, `docs/RESPONSIVE_QA.md` for breakpoint verification, and `docs/LAUNCH_CHECKLIST.md` for what remains before this becomes a live, published site (primarily: real business facts to replace the honest placeholders, and a real production domain).
