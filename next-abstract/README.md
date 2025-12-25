# Next Abstract

Next.js 13 (App Router) static site conversion of the Abstract theme, preserving legacy styles and jQuery-driven plugins, and supporting GitHub Pages project-site deployments via a configurable base path.

## Overview
- Static export site (no server/runtime) suitable for GitHub Pages.
- Legacy CSS/JS assets loaded globally to match the original theme.
- Base path strategy: `NEXT_PUBLIC_BASE_PATH` for project sites (e.g. `/nextjs-training`).
- Guardrail test preventing root-leading asset/href paths.

## Prerequisites
- Node.js 18+ recommended
- npm 9+

## Install
```powershell
Push-Location "./next-abstract"; npm install; Pop-Location
```

## Develop
```powershell
Push-Location "./next-abstract"; npm run dev; Pop-Location
```
App runs at http://localhost:3000.

## Build & Export
```powershell
Push-Location "./next-abstract"; npm run build; npm run export; Pop-Location
```
Static files output to `next-abstract/out/`.

## Deploy (GitHub Pages)

### For a project site (e.g. `/nextjs-training`):
#### On Windows (PowerShell or CMD):
```powershell
Push-Location "./next-abstract"
npm run deploy:project:win
Pop-Location
```
#### On Mac/Linux:
```sh
cd ./next-abstract
npm run deploy:project
cd ..
```

### If deploying to a user/org site root, just run:
```powershell
Push-Location "./next-abstract"; npm run deploy; Pop-Location
```

## Base Path Guardrail Test
Run before deploy to catch root-leading paths:
```powershell
Push-Location "./next-abstract"; npm run test:paths; Pop-Location
```

## Project Structure
For a detailed breakdown of the source code and folder organization, see [`ARCHITECTURE.md`](./ARCHITECTURE.md).

- `app/`: Next.js App Router pages (`layout.jsx`, route folders).
- `components/`: Header, Footer, Comments and forms.
- `public/`: Legacy CSS/JS, fonts, images, media; shipped as-is.
- `scripts/`: `check-base-paths.mjs` guard test.

## Configuration Notes
- `next.config.js`: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`.
- Asset references in pages/components prefix with `process.env.NEXT_PUBLIC_BASE_PATH || ""`.

## License
Proprietary or theme-derivative; consult repository owner for licensing details.
