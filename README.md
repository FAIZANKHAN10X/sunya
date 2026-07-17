# Sunya

Sunya is a calm, content-led yoga brand marketing site. This repository is a deliberately minimal Next.js foundation: intentional structure, typography, and layout—not a flashy or animation-library-heavy experience.

## Current scope

Implemented today (from actual source):

- Full-viewport loading screen
- Fixed header with working open/close menu (CSS transitions, Escape-to-close, scroll lock)
- Right navigation panel with presentation-only links (no live routes)
- Homepage sections: Hero (video background), Philosophy, Practice, Benefits, Journey, Community, Contact
- Minimal footer
- Restrained design tokens in `src/app/globals.css`
- TypeScript (strict), Next.js App Router, Tailwind CSS v4

### Out of scope (for now)

- Multi-page routing and real menu destinations
- Forms, booking, or backend integrations
- Animation / scroll libraries (GSAP, Framer Motion, Lenis, etc.)
- CMS integration
- Heavy decoration (gradients, large effect systems)

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Package manager | npm |

Runtime dependencies are only `next`, `react`, and `react-dom`.

## Commands

```bash
npm install
npm run dev      # development server
npm run lint
npm run build
npm run start    # production server after build
```

## Source map

```text
src/
├── app/                 # layout, homepage, globals.css
├── components/          # shell, nav, shared UI, sections/
├── data/                # menu labels (menu.ts)
└── types/               # shared types (MenuItem)
```

Single route: `/` via `src/app/page.tsx`.

## Documentation

| Doc | Role |
| --- | --- |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Structure, dependency flow, component roles |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Conventions and contribution rules |
| [ROADMAP.md](./ROADMAP.md) | Phased product roadmap |
| [AGENTS.md](./AGENTS.md) | Guidance for automated coding agents |
