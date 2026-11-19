# FlowCart — Landing Page (V2 design)

New brand design for **FlowCart**, the WooCommerce one-page express checkout plugin.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (theme tokens in `src/index.css`: `ink`, `paper`, `lime`, `clay`, `moss`)
- Fonts: Bricolage Grotesque (display), Instrument Serif (accents), Inter (body), JetBrains Mono (labels)
- `lucide-react` icons

## Structure
```
src/
  App.tsx                  page composition + download modal state
  hooks/useReveal.ts       scroll-reveal observer for [data-reveal]
  data/widgets.ts          the 20 Elementor widgets (single source of truth)
  components/
    Navbar.tsx             sticky dark top bar
    Hero.tsx               dark headline + live checkout mock + logo marquee
    Metrics.tsx            3-up stat row
    ProblemSolution.tsx    before / after split
    Features.tsx           12 expandable feature tiles (dark)
    Widgets.tsx            filterable widget grid + spec-sheet modal
    HowItWorks.tsx         3-step setup + admin settings mock
    Pricing.tsx            free-edition "ticket"
    Faq.tsx                numbered accordion (dark)
    FinalCta.tsx           lime closer
    Footer.tsx             dark footer
    DownloadModal.tsx      zip install flow
```

## Scripts
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # dist/
npm run lint    # tsc --noEmit
```

## Notes
- Widget count is derived from `ELEMENTOR_WIDGETS.length` — add/remove a widget and every
  number on the page updates automatically.
- Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`.
