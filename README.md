# hec-ia.com

Official website of HEC IA, the student association at HEC Paris dedicated to artificial intelligence.

## Stack

- [Astro 5](https://astro.build) — static-first framework with server-side rendering
- [React 19](https://react.dev) — interactive components
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — component library
- [Cloudflare Workers](https://workers.cloudflare.com) — deployment target

## Prerequisites

- Node.js >= 18
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) for deployment

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start the development server            |
| `npm run build`     | Build for production                    |
| `npm run preview`   | Build and preview locally via Wrangler  |
| `npm run deploy`    | Build and deploy to Cloudflare Workers  |
| `npm run lint`      | Run ESLint                              |
| `npm run format`    | Format source files with Prettier       |
| `npm run typecheck` | Run TypeScript checks via `astro check` |

## Project structure

```
src/
  components/   — Shared UI components
  content/      — Content collections (events, projects, blog, news)
  data/         — Static data files
  i18n/         — Translations and routing utilities
  layouts/      — Page layouts
  lib/          — Utility functions
  pages/        — File-based routes
  styles/       — Global styles
```

## Internationalization

The site supports French (default) and English. Routes are prefixed with `/en/` for English; French URLs have no prefix.

Translations live in `src/i18n/ui.ts`.

## Adding UI components

```bash
npx shadcn@latest add <component>
```

Components are placed in `src/components/ui/`.

## Deployment

The site is deployed on Cloudflare Workers. Configuration is in `wrangler.jsonc`.

```bash
npm run deploy
```
