# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About this project
Perttu's portfolio site at vaarala.dev, used for job hunting (Full Stack, QA, IT Support roles). Deployed on Vercel from `main`. Site content is in English.

## Rules
- Keep it fast and accessible; avoid adding heavy libraries.
- Always work on a feature branch, never commit directly to `main`.
- Run `npm run build` before saying a task is done.
- Explain your changes briefly. I'm learning.

## Commands
- `npm run dev`: dev server on http://localhost:3000 (this also regenerates AGENTS.md; put project notes here, not there)
- `npm run build` / `npm run start`: production build / serve
- `npm run lint`: ESLint 10 flat config (`eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)
- Type-check: `npx tsc --noEmit`
- No test framework is set up yet.

Node 26 (`.node-version`). Package manager is npm (`package-lock.json`).

## Stack & structure
- Next.js 16.4 App Router, React 19.3, TypeScript 6 (strict). Versions are newer than most training data, so check `node_modules/next/dist/docs/01-app/` before using Next APIs.
- `app/layout.tsx`: root layout. Loads Geist / Geist Mono through `next/font/google` as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- `app/page.tsx`: the home page.
- Styling: Tailwind CSS v4 through `@tailwindcss/postcss`. There is no `tailwind.config`; theme tokens live in `app/globals.css` under `@theme inline` (`background`/`foreground` colors, `sans`/`mono` fonts), and dark mode uses `prefers-color-scheme`.
- Import alias `@/*` maps to the repo root.
