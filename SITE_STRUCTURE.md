# Site Structure — Sunya

## Folder Structure

```text
sunya/
├── PROJECT_OVERVIEW.md
├── SITE_STRUCTURE.md
├── DEVELOPMENT_GUIDELINES.md
├── ROADMAP.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── public/
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Container.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── LoadingScreen.tsx
    │   ├── MobileMenu.tsx
    │   ├── Section.tsx
    │   ├── SectionLabel.tsx
    │   ├── SectionShell.tsx
    │   ├── ThemeProvider.tsx
    │   └── ThemeToggle.tsx
    ├── data/
    │   ├── menu.ts
    │   └── sections.ts
    ├── lib/
    │   └── theme.ts
    └── types/
        └── index.ts
```

## Component Hierarchy

```text
ThemeProvider
└── LoadingScreen
    ├── Header
    │   ├── ThemeToggle
    │   └── MobileMenu
    ├── main
    │   └── Section (×7, from data; layout by variant)
    └── Footer
```

### Component roles

| Component | Responsibility |
| --- | --- |
| `ThemeProvider` | Theme state (`light` / `dark` / `system`), persistence, and DOM class application |
| `ThemeToggle` | Header control to choose light, dark, or system theme |
| `LoadingScreen` | Premium full-viewport brand loader with mark, line, and fade exit |
| `Header` | Sticky top bar with brand mark, theme control, and morph menu |
| `MobileMenu` | Right-anchored morph menu expanding from the Menu button; Escape / backdrop close |
| `Container` | Shared horizontal padding and wide max-width constraints |
| `Button` | Primary / secondary presentational buttons (no navigation) |
| `Card` | Soft surface block with border and radius |
| `SectionLabel` | Small uppercase section eyebrow label |
| `SectionShell` | Shared full-viewport (`min-h-svh`) panel shell for every section |
| `Section` | Data-driven section renderer; switches layout by `variant` |
| `Footer` | Brand mark, short description, and copyright |

## Data Flow

1. `src/data/sections.ts` exports an array of section objects typed as `Section`.
2. Each section includes a `variant` that determines layout (`hero`, `features`, `cards`, `steps`, `split`, `contact`).
3. `src/app/page.tsx` maps the array to `<Section />`.
4. `src/data/menu.ts` exports placeholder menu labels typed as `MenuItem`.
5. `MobileMenu` reads menu data and renders disabled buttons—no routing.

```text
sections.ts  →  page.tsx  →  Section (variant switch)
menu.ts      →  MobileMenu
types/index.ts  ← shared types for section, menu, and theme data
```

## Section Generation Approach

Sections are **not** seven hardcoded top-level components.

| Order | ID | Variant | Purpose |
| --- | --- | --- | --- |
| 1 | `hero` | `hero` | Welcome / brand introduction |
| 2 | `philosophy` | `features` | Principles grid |
| 3 | `practice` | `cards` | Practice offerings |
| 4 | `benefits` | `features` | Benefits grid |
| 5 | `journey` | `steps` | Numbered path |
| 6 | `community` | `split` | Intro + stacked cards |
| 7 | `contact` | `contact` | Details + CTA |

- Content source: `src/data/sections.ts`
- Presentational dispatcher: `src/components/Section.tsx`
- Composition: `page.tsx` maps `sections` to `Section` instances

To change copy later, edit the data file. To change a layout pattern, edit the matching branch in `Section.tsx`.

## Design System (tokens)

Defined in `src/app/globals.css`:

| Token | Role |
| --- | --- |
| `background` | Page background (`#ffffff` light / `#000000` dark) |
| `foreground` | Primary text / solid controls |
| `muted` | Secondary text |
| `border` | Card outlines and control borders (not section dividers) |
| `surface` | Soft card / panel fill |
| `rounded-soft` | Shared corner radius |

Shared layout system:

- Default container: `max-w-[90rem]` with `px-6` / `sm:px-10` / `lg:px-14`
- Every homepage section uses `SectionShell` → `min-h-svh` full-viewport panels
- Section separation is spacing and composition only—no horizontal rules between sections
- Layout variety by variant: asymmetric hero, intro + grids, split columns, contact split

## Theme

- Preference stored in `localStorage` under `sunya-theme`
- Values: `light`, `dark`, `system` (default)
- Resolved dark mode applies the `dark` class on `<html>`
- An inline init script in `layout.tsx` prevents a flash of the wrong theme on load

## Routing

Single route: `/` via `src/app/page.tsx`. Menu items and CTAs do not navigate.
