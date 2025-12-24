# Abstract React (Vite)

This is a React conversion of the static Abstract template, configured for GitHub Pages.

## Quick start

```powershell
# From repo root
Push-Location .\react-app
npm install
npm run dev
```

Open http://localhost:5173/nextjs-training/ (Vite will prefix with base) or http://localhost:5173/#/ directly.

## Build

```powershell
Push-Location .\react-app
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project uses `gh-pages` to publish `dist` to the `gh-pages` branch.

1. Ensure your repo has GitHub Pages enabled for the `gh-pages` branch.
2. Update the `base` in `vite.config.js` if your repository name changes.
3. Deploy:

```powershell
Push-Location .\react-app
npm run deploy
```

## Notes

- Routing uses HashRouter so deep links work on GitHub Pages.
- Original assets in `css/`, `fonts/`, `images/`, `js/`, `media/` are copied at build via `vite-plugin-static-copy`.
- To port full page contents, replace the placeholder JSX in `src/pages/*` with the corresponding HTML from the original files.
