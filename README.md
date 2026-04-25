# Artur Lopez Zarytskyi — Portfolio

Personal portfolio website. Static site — no build step required.

## Stack

- Vanilla HTML / CSS / JS
- Google Fonts (Inter Tight + JetBrains Mono)
- GitHub Pages via GitHub Actions

## Development

Open `index.html` directly in a browser, or use VS Code's Live Server extension for hot reload.

## Deploy (first time)

1. Create a new **public** repo on github.com (e.g. `portfolio` or `arturlz.github.io`)
2. In this directory, run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → GitHub Actions**
4. The workflow fires automatically — your site is live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

If the repo is named exactly `YOUR_USERNAME.github.io`, the site will be at `https://YOUR_USERNAME.github.io` (no subdirectory).

## Customise before launch

| What | Where |
|------|-------|
| Email address | `index.html` — search `artur@lopezzarytskyi.com` |
| Social links | `index.html` — the `contact__links` list |
| CV link | `index.html` — the "Read CV →" button `href` |
| Portrait photo | Replace `about__portrait` placeholder with `<img src="portrait.jpg" alt="Artur">` |
| Case study images | Replace each `card__image` placeholder with a real `<img>` or `<video>` |
| Availability blurb | `index.html` — `contact__now` paragraph |
| "Available Q3" pill | `index.html` — update copy as availability changes |
