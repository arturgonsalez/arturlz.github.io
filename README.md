# Artur Lopez Zarytskyi — Portfolio

The personal portfolio site of Artur Lopez Zarytskyi, a product designer with
eight years of experience across fintech, SaaS, and consumer products.

A static, dependency-free website: hand-written HTML, CSS, and a little vanilla
JavaScript. No build step, no framework, no package install. Open `index.html`
and it runs.

## Structure

```
portfolio/
├── index.html              # Landing page — intro, work index, services, contact
│
├── finario.html            # Case study — Finario capex platform redesign
├── arbolus.html            # Case study — Arbolus expert-network platform
├── beam-health.html        # Case study — Beam Health
├── cadence.html            # Case study — Cadence
├── magma.html              # Case study — Magma
├── telemetry-run.html      # Case study — Telemetry observability tool
│
├── styles.css              # Global tokens + landing-page styles
├── case-study.css          # Shared case-study layout (nav, hero, before/after)
├── case-study.js           # Shared case-study behavior (scroll reveal, toggles)
├── script.js               # Landing-page behavior
│
├── finario-mockups.css     # Scoped inline product UI for the Finario study
├── beam-mockups.css        # Scoped inline product UI for the Beam study
├── telemetry-mockups.css   # Scoped inline product UI for the Telemetry study
│
├── portrait.png            # Profile image (nav avatar + landing)
├── thumb-*.png / *.svg     # Case-study cover thumbnails
└── assets/                 # Per-project case-study imagery
```

Each case study links back to `index.html` via the nav avatar in the top-left.

## Running locally

It's a static site, so any of these work:

```bash
# Option 1 — just open it
open index.html

# Option 2 — serve it (recommended, avoids file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder's contents to the repository root (so `index.html` sits at
   the top level).
2. In the repo: **Settings → Pages → Source → Deploy from a branch**, pick your
   branch and the `/ (root)` folder.
3. The site publishes at `https://<username>.github.io/<repo>/`.

No build, no CI, no environment variables required — all links are relative.

## Design notes

- **Type & color** live as CSS custom properties at the top of `styles.css`.
- **Product mockups** in the case studies are recreated in pure HTML/CSS
  (no screenshots), namespaced under `*-mockups.css` files so each study's UI
  styling stays isolated.
- The shared `case-study.css` drives the consistent nav, hero, and
  before/after components across every case-study page — edit it once to update
  all of them.

## Contact

artur@lopezzarytskyi.com
