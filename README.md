# Venkat J. Thodima — Portfolio

Personal research & career portfolio for Dr. Venkat J. Thodima, Ph.D. Built with React, Vite, and Tailwind CSS, deployed as a static site to GitHub Pages.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   The app runs at http://localhost:3000.

## Build

```bash
npm run build    # outputs static files to dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushing to `main` triggers the [GitHub Actions workflow](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages. The custom domain is
configured via [`public/CNAME`](public/CNAME).
