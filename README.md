# Mike's Plumbing Demo

A standalone demo website for Mike's Plumbing, built with Vite + React.

## Tech Stack

- [Vite](https://vite.dev/) + React (JavaScript)
- [react-router-dom](https://reactrouter.com/) for routing
- [lucide-react](https://lucide.dev/) for icons

## Project Structure

```
src/
  assets/
    images/
    logos/
  components/
    layout/
    ui/
  data/
  pages/
  styles/
  App.jsx
  main.jsx
docs/
public/
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

This project is configured for deployment on [Netlify](https://www.netlify.com/) via `netlify.toml`, with SPA routing handled by `public/_redirects`.
