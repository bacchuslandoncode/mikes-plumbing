# Mike's Plumbing Demo

A standalone demo website for Mike's Plumbing, built with Vite + React.

## Tech Stack

- [Vite](https://vite.dev/) + React (JavaScript)
- [react-router-dom](https://reactrouter.com/) for routing
- [lucide-react](https://lucide.dev/) for icons

## Routes

`/`, `/services`, `/services/drain-cleaning`, `/services/water-heaters`, `/services/faucets-fixtures`, `/services/plumbing-repairs`, `/emergency-plumbing`, `/about`, `/service-areas`, `/contact`

## Project Structure

```
src/
  assets/
    images/       real supplied photography
    logos/        empty until a real logo is supplied
  components/
    layout/       header, footer, nav, mobile chrome
    ui/           buttons, form primitives, Seo, StructuredData
    services/     shared service-page building blocks
  data/
    business.js   single source of truth for business facts, each with a verification status
    services.js   service catalog
    navigation.js approved sitemap
    images.js     image manifest referencing real files only
  pages/
  styles/
    global.css    design tokens + all component styles
  App.jsx
  main.jsx
docs/            project planning, verification, and QA docs
public/
  robots.txt
  sitemap.xml     placeholder domain, replace before launch (see docs/LAUNCH_CHECKLIST.md)
  _redirects      SPA routing for Netlify
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run lint` — lint the project
- `npm run preview` — preview the production build

## Deployment

This project is configured for deployment on [Netlify](https://www.netlify.com/) via `netlify.toml` (build command `npm run build`, publish directory `dist`), with SPA routing handled by `public/_redirects`.

The Contact page form is wired for Netlify Forms detection: a hidden static duplicate lives in `index.html` (Netlify's build bot only scans static HTML, not client-rendered React), and the visible form submits via `fetch` with the matching `form-name`.

## Business data and verification

Every business fact rendered on the site is sourced from `src/data/business.js`, and every field carries a `status` (`verified`, `unverified`, `placeholder`, or `needsClientConfirmation`). No unverified fact is displayed as public claim. See `docs/VERIFICATION_CHECKLIST.md` and `docs/LAUNCH_CHECKLIST.md` for what still needs confirmation before this becomes a real, published business site.
