# Verification Checklist

Run through this before any page publicly displays a business fact, service description, or image.

## Business Facts (`src/data/business.js`)

For each field about to be rendered as visible text:

- [ ] Field's `status` is `verified`
- [ ] If `status` is `unverified`, `placeholder`, or `needsClientConfirmation`, the field is NOT rendered as fact
- [ ] Owner name — currently placeholder, needs confirmation
- [ ] Phone number — currently placeholder, needs confirmation
- [ ] Founding year — currently placeholder, needs confirmation
- [ ] Street address — currently placeholder, needs confirmation
- [ ] License number — currently placeholder, needs confirmation
- [ ] Business hours — currently placeholder, needs confirmation
- [ ] 24-hour availability claim — currently placeholder, needs confirmation
- [ ] Reviews / rating / review count — currently placeholder, needs confirmation
- [ ] Service-area cities — currently placeholder, needs confirmation
- [ ] Certifications — currently placeholder, needs confirmation
- [ ] Financing options — currently placeholder, needs confirmation
- [ ] Warranty terms — currently placeholder, needs confirmation
- [ ] Response time claim — currently placeholder, needs confirmation

## Services (`src/data/services.js`)

- [ ] Each service's `summary` is null or `status: 'needsClientConfirmation'` until real service detail is supplied
- [ ] No pricing appears anywhere
- [ ] No guaranteed arrival time appears anywhere

## Images (`src/data/images.js`, `docs/IMAGE_INVENTORY.md`)

- [ ] No image is used in a section it does not genuinely depict
- [ ] `gasPipeManifold` is not used at a size/crop where the French-language signage is legible
- [ ] Only one of `waterDropGrayscale` / `waterDropBlue` is used sitewide
- [ ] No logo is rendered until a real file exists in `src/assets/logos/`
- [ ] Drain cleaning, water heaters, faucets/fixtures, and about/owner sections either use no image or a genuinely new, dedicated photo — never a forced substitute

## Copy Rules

- [ ] No fabricated reviews
- [ ] No fake review count
- [ ] No fake star rating
- [ ] No invented license number
- [ ] No fake certifications
- [ ] No fake owner biography
- [ ] No invented team size
- [ ] No fake awards
- [ ] No guaranteed arrival time
- [ ] No fake pricing
- [ ] No fake financing
- [ ] No fake warranty
- [ ] No competitor copy
- [ ] No visible lorem ipsum
- [ ] No keyword stuffing
- [ ] No em dashes in website copy
- [ ] No generic AI marketing language

## Sitemap Conformance

- [x] All built routes match the approved sitemap in `docs/PROJECT_BRIEF.md` exactly — verified live, all 10 routes return 200 on direct load
- [ ] No route is added or removed without updating `src/data/navigation.js` and `docs/PROJECT_BRIEF.md` together

## Structured Data

- [x] `StructuredData` component only emits fields with `status: 'verified'` in `business.js` (currently `name` and `areaServed` only)
- [ ] Re-check this list any time a `business.js` field's status changes to `'verified'`
