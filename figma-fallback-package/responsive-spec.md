# Responsive Spec

Verified local preview: http://127.0.0.1:4173

## Screenshot References

- Desktop viewport: screenshots/portfolio-desktop-1280.png
- Mobile viewport: screenshots/portfolio-mobile-390.png

## Breakpoint Behavior

- Desktop: sticky nav with inline links; hero presents copy and command-center visual in a larger composed layout; artifact cards use richer device overlays.
- Tablet: containers retain generous padding, grids collapse from multi-column to fewer columns, hero visual remains present but tighter.
- Mobile: nav becomes menu-driven; secondary hero links are hidden; hero artifact support grid and journey details are reduced/hidden to keep the first viewport readable; cards stack vertically.

## Recommended Figma Reference Frames

- Desktop: 1440 x variable height.
- Tablet: 768 x variable height.
- Mobile: 390 x variable height.

## Browser Verification

- Page title loaded: Nguy?n ??c Minh Ho?ng | Game Product & LiveOps Portfolio.
- Language default: en.
- Main sections detected: home, game-direction, about, mindset, snapshot, experience, value, work-samples, contact.
- Local image assets resolve in the browser; some lazy images report incomplete until scrolled into view, which is expected for below-fold media.
