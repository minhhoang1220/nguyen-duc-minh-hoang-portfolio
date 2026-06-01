# Nguyễn Đức Minh Hoàng Portfolio

Public-facing portfolio website for Nguyễn Đức Minh Hoàng,
positioned toward Game Product, LiveOps, and Game Operations, supported by
Product/System Business Analyst evidence from product flows, documentation,
backlog coordination, system logic, and delivery-ready artifacts.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Static deployment, no backend or database

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Content Notes

- Portfolio content is managed in `src/data/portfolio.ts`.
- The site supports English and Vietnamese through a lightweight local language toggle.
- The default language is English.
- The LinkedIn URL is `https://www.linkedin.com/in/hoangnguyenducminh/`.
- The CV link points to `/Nguyen-Duc-Minh-Hoang-CV.pdf`.

## Active Image Assets

The active public image assets are stored in `public/assets/`:

- `cdp-campaign-list-ui.png`
- `cdp-flow-report-detail.png`
- `cdp-automation-flow-map.png`
- `cdp-flow-management-states.png`
- `chatbot-zalo-journey-flow.png`
- `chatbot-feedback-rating-flow.png`
- `immersevietnam-website-overview.png`
- `dashboard-revenue-overview.png`
- `thesis-portfolio-optimization-overview.png`

In-page cards use optimized previews from `public/assets/previews/`, while full-size assets load in the artifact viewer. Unused project screenshots are kept in `public/assets/archive/` and are not referenced by the website.

## CV File

Place the final PDF at:

```text
public/Nguyen-Duc-Minh-Hoang-CV.pdf
```

The UI checks whether the PDF is available before navigating. If the file is missing in production, visitors see a fallback message asking them to email Hoàng directly.

## Pre-Deploy Checklist

Before publishing publicly:

1. Run `npm install`.
2. Run `npm run build`.
3. Run `npm run preview` and check the site on mobile, tablet, desktop, and large desktop widths.
4. Confirm English and Vietnamese modes both render correctly.
5. Confirm the CV file exists at `public/Nguyen-Duc-Minh-Hoang-CV.pdf`.
6. Confirm Open Graph metadata in `index.html` uses the deployed domain.

Current Open Graph URL:

```text
https://nguyen-duc-minh-hoang-portfolio.vercel.app/
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository on Vercel.
3. Use these settings:
   - Framework: Vite
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.
5. After deployment, open the production URL and confirm the CV link, language toggle, anchor navigation, and Open Graph preview.

The included `vercel.json` rewrites all routes to `index.html`, which keeps the static React app safe if future case-study pages are added through client-side routing.

## Deploy to Netlify

1. Push this project to GitHub.
2. Import the repository on Netlify.
3. Use these settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.
5. After deployment, open the production URL and confirm the CV link, language toggle, anchor navigation, and Open Graph preview.

For Netlify CLI deployment:

```bash
npm install
npm run build
netlify deploy --prod --dir=dist
```
