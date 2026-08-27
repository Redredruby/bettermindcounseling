# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`)

There is no test suite configured in this repo (no test runner in `package.json`).

## Architecture

This is a personal/marketing site for Rebecca Tavangar (LPC, NCC) built on the Next.js App Router (`app/`), currently in an early placeholder phase — most pages explicitly say "content and design still to come."

- **Routing**: one folder per route under `app/`, each with a `page.tsx` exporting a default component and a `metadata` object (title follows the `"Page | Rebecca Tavangar"` pattern). Current routes: `/` (home), `/about`, `/pivot`, `/reflections`.
- **Shared shell**: `app/layout.tsx` is the root layout — it loads the Geist Sans/Mono fonts via `next/font/google`, sets site-wide `metadata`, and wraps all pages with the shared `<Nav />` / `<Footer />` from `components/`.
- **Styling**: Tailwind CSS v4, configured via the CSS-first `@import "tailwindcss"` + `@theme inline` block in `app/globals.css` (no `tailwind.config.js`). Color theme vars (`--background`, `--foreground`) toggle automatically via `prefers-color-scheme: dark`, and most page content mirrors this with paired `text-zinc-*` / `dark:text-zinc-*` classes rather than a manual dark-mode toggle.
- **Layout convention**: page content is consistently wrapped in `mx-auto flex w-full max-w-3xl flex-1 flex-col ... px-6 py-24`, matching the `max-w-3xl` container used by `Nav`/`Footer`. Follow this convention when adding new pages so widths stay consistent across the shared header/footer.
- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`), e.g. `import Nav from "@/components/Nav"`.
- **Deployment**: deployed to Vercel with auto-deploy on push (see README deploy-verification note and commit history).
