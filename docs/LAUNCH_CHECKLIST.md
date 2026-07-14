# Launch Checklist

Things that must happen before this demo is a real, published business site.

## Business information (see `src/data/business.js`)

- [ ] Confirm owner name
- [ ] Confirm phone number
- [ ] Confirm founding year
- [ ] Confirm street address
- [ ] Confirm license number
- [ ] Confirm business hours
- [ ] Confirm 24-hour availability (yes/no)
- [ ] Confirm service-area cities beyond Phoenix, if any
- [ ] Confirm certifications, if any
- [ ] Confirm financing options, if any
- [ ] Confirm warranty terms, if any
- [ ] Confirm typical response time claim, if any
- [ ] Supply real customer reviews (name, quote, rating) if available — `ReviewsSection` activates automatically once `business.reviews.status` is `'verified'`

## Domain and SEO

- [ ] Replace the placeholder domain (`https://www.example.com`) in `public/sitemap.xml` with the final production domain
- [ ] Re-check canonical/OG URLs resolve correctly on the final domain (they self-generate from `window.location.origin`, so no code change should be needed, but verify)
- [ ] Submit `sitemap.xml` to Google Search Console once the final domain is live

## Assets

- [ ] Supply a real logo file for `src/assets/logos/` and wire it into `Header`/`Footer` (currently text wordmark only)
- [ ] Consider compressing the source photography (several files are 2-3 MB); no image was resized or modified during this build per instructions not to alter supplied photographs
- [ ] Supply dedicated photos for drain cleaning, water heaters, faucets/fixtures, and the About/owner section if a more literal image is wanted later — none currently exist in the inventory for those subjects

## Netlify

- [ ] Confirm `netlify.toml` build command (`npm run build`) and publish directory (`dist`) are correct in the Netlify dashboard
- [ ] Confirm the Netlify Forms submission for `contact-request` appears in the dashboard after a real test submission on the live site
- [ ] Set up form notification email in Netlify so submissions are seen

## Final content review

- [ ] Legal/privacy language on the Contact page reviewed by the business owner (currently a plain, honest one-line statement, not legal copy)
- [ ] Re-read every page for tone once real business facts are added, since several sections currently say "will be added here once confirmed"
