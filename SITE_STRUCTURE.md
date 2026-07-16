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
    │   ├── MenuButton.tsx
    │   ├── NavigationContext.tsx
    │   ├── NavigationPanel.tsx
    │   ├── SectionLabel.tsx
    │   ├── SectionShell.tsx
    │   ├── SiteShell.tsx
    │   └── sections/
    │       ├── index.ts
    │       ├── SectionIntro.tsx
    │       ├── HeroSection.tsx
    │       ├── PhilosophySection.tsx
    │       ├── PracticeSection.tsx
    │       ├── BenefitsSection.tsx
    │       ├── JourneySection.tsx
    │       ├── CommunitySection.tsx
    │       └── ContactSection.tsx
    ├── data/
    │   └── menu.ts
    └── types/
        └── index.ts
```

## Component Hierarchy

```text
LoadingScreen
└── SiteShell / NavigationProvider
    ├── Header (fixed to viewport)
    │   └── MenuButton  ← single control: Menu ≡ ⇄ Close ×
    ├── page surface (GSAP: x + border-radius)
    │   ├── main (vertical stack in page.tsx)
    │   │   ├── HeroSection
    │   │   ├── PhilosophySection
    │   │   ├── PracticeSection
    │   │   ├── BenefitsSection
    │   │   ├── JourneySection
    │   │   ├── CommunitySection
    │   │   └── ContactSection
    │   └── Footer
    └── NavigationPanel (GSAP: x from right)
        ├── Primary links
        └── Socials / Quick Links
```

### Component roles

| Component | Responsibility |
| --- | --- |
| `LoadingScreen` | Premium full-viewport brand loader with mark, line, and fade exit |
| `SiteShell` | Page + panel shell; split-screen layout structure |
| `NavigationProvider` | Master GSAP timeline (`play` / `reverse`) for page, panel, and control crossfade |
| `Header` | Fixed global chrome — logo + single nav control (never moves) |
| `MenuButton` | One control: `Menu ≡` ⇄ `Close ×` via GSAP crossfade in the same position |
| `NavigationPanel` | Full-height right surface; no close control inside the panel |
| `Container` | Shared horizontal padding and wide max-width constraints |
| `Button` | Primary / secondary presentational buttons (no navigation) |
| `Card` | Soft surface block with border and radius |
| `SectionLabel` | Small uppercase section eyebrow label |
| `SectionShell` | Shared full-viewport (`min-h-svh`) panel shell for every section |
| `sections/*Section` | One self-contained homepage section (content + layout in the same file) |
| `SectionIntro` | Shared section label + heading + description block |
| `Footer` | Brand mark, short description, and copyright |

## Data Flow

1. Each section component owns its own content and layout under `src/components/sections/`.
2. `src/app/page.tsx` stacks the seven section components in order inside `<main>`.
3. `src/data/menu.ts` exports placeholder menu labels typed as `MenuItem`.

```text
page.tsx  →  sections/*Section.tsx  (self-contained)
menu.ts   →  NavigationPanel
types/index.ts  ← menu types
```

## Section Composition

Stack order is explicit in `page.tsx`. Each section is modular and self-contained.

| Order | Component file | Purpose |
| --- | --- | --- |
| 1 | `HeroSection.tsx` | Welcome / brand introduction |
| 2 | `PhilosophySection.tsx` | Principles grid |
| 3 | `PracticeSection.tsx` | Practice offerings |
| 4 | `BenefitsSection.tsx` | Benefits grid |
| 5 | `JourneySection.tsx` | Numbered path |
| 6 | `CommunitySection.tsx` | Intro + stacked cards |
| 7 | `ContactSection.tsx` | Details + CTA |

| Goal | Edit |
| --- | --- |
| Change one section’s copy or layout | matching file under `sections/` |
| Reorder homepage | order of components in `page.tsx` |
| Add a section | new file under `sections/` + import in `page.tsx` |

## Design System (tokens)

Defined in `src/app/globals.css`:

| Token | Role |
| --- | --- |
| `background` | Page background (`#000000`, dark-only) |
| `foreground` | Primary text / solid controls |
| `muted` | Secondary text |
| `border` | Card outlines and control borders (not section dividers) |
| `surface` | Soft card / panel fill |
| `rounded-soft` | Shared corner radius |

Shared layout system:

- Default container: `max-w-[90rem]` with `px-6` / `sm:px-10` / `lg:px-14`
- Every homepage section uses `SectionShell` → `min-h-svh` full-viewport panels
- Section separation is spacing and composition only—no horizontal rules between sections
- Layout variety: asymmetric hero, intro + grids, split columns, contact split

## Routing

Single route: `/` via `src/app/page.tsx`. Menu items and CTAs do not navigate.
