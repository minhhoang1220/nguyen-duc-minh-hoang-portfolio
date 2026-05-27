# Nguyễn Đức Minh Hoàng Portfolio

Personal portfolio website for Nguyễn Đức Minh Hoàng, positioned for Business Analyst, Associate Product Manager, Product Operations, System/Product Analyst, and future Game Product / LiveOps roles.

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

## Pre-Deploy Checklist

Before publishing publicly:

1. Run `npm install`.
2. Run `npm run build`.
3. Run `npm run preview` and check the site on mobile, tablet, and desktop widths.
4. Replace the placeholder CV file in `public/Nguyen-Duc-Minh-Hoang-CV.pdf`.
5. Replace the LinkedIn placeholder `#` in `src/data/portfolio.ts` with the final profile URL.
6. Update Open Graph metadata in `index.html` if a final domain or custom preview image is available.

## CV File

The website links to `/Nguyen-Duc-Minh-Hoang-CV.pdf`.

Replace `public/Nguyen-Duc-Minh-Hoang-CV.pdf` with the final CV PDF before publishing.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository on Vercel.
3. Use these settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy.
5. After deployment, open the production URL and confirm the CV link, anchor navigation, and Open Graph preview.

The included `vercel.json` rewrites all routes to `index.html`, which keeps the static React app safe if future case-study pages are added through client-side routing.

## Deploy to Netlify

1. Push this project to GitHub.
2. Import the repository on Netlify.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Install command: `npm install`
4. Deploy.
5. After deployment, open the production URL and confirm the CV link, anchor navigation, and Open Graph preview.

For Netlify CLI deployment:

```bash
npm install
npm run build
netlify deploy --prod --dir=dist
```
