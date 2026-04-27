# JunoTask Frontend

Task management app for Juniors.dev, built with Next.js, Tailwind CSS v4, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) v22+ (LTS)
- [pnpm](https://pnpm.io/) (version managed via `packageManager` in `package.json`)

## Getting started

```bash
# 1. Clone the repo
git clone git@github.com:Juniors-Dev/junotask-frontend.git
cd junotask-frontend

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

In development (`NODE_ENV !== "production"`), a test user is automatically available so you don't need OAuth or a running backend to work on the UI.

## Scripts

| Command      | Description                                |
|--------------|--------------------------------------------|
| `pnpm dev`   | Start the dev server with hot reload       |
| `pnpm build` | Production build (also runs lint + types)  |
| `pnpm start` | Serve the production build locally         |
| `pnpm lint`  | Run ESLint                                 |

## Project structure

```
pages/            → Next.js pages (file-based routing)
components/       → React components
  Ui/             → Bare-bone reusable UI components (styled via className)
  SideBar/        → Global sidebar navigation
styles/           → Global CSS with Tailwind v4 theme tokens
hooks/            → Custom React hooks
lib/              → Utilities and helpers
types/            → TypeScript type definitions
enums/            → Shared enums
config/           → App configuration
context/          → React context providers
public/           → Static assets
```

## Tech stack

- **Next.js 15** — React framework with Pages Router
- **Tailwind CSS v4** — Utility-first CSS with `@theme` tokens
- **TypeScript** — Type safety
- **Zustand** — State management
- **TanStack Query** — Server state / data fetching
- **Formik** — Form handling
- **Lucide React** — Icons

## Git workflow

- `main` — production (deployed automatically via Railway)
- `dev` — development (deployed automatically via Railway)

All changes go through pull requests. CI runs on every PR — it must pass before merging.

1. Create a feature branch from `dev`
2. Open a PR to `dev`
3. CI builds the app (lint + types + build)
4. Get 1 approval, then merge
5. When ready for release, PR from `dev` → `main`

## Deployment

The app is deployed on [Railway](https://railway.com/) using Docker. The `Dockerfile` and `railway.toml` in the repo handle the build configuration. Railway auto-deploys when commits land on `main` or `dev`.
