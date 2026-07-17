# Architecture — Sunya

Reference doc. Keep this in sync: any PR that adds/removes/moves a file under
`src/` should update the relevant section here in the same PR.

## Stack

Next.js + React only. No state library, no CSS-in-JS library, no `hooks/`,
no `lib/`. If one of those shows up, this doc (and the reasoning below) needs
to be revisited on purpose, not by accretion.

## Folder tree

```
src
├── app
│   ├── globals.css      # tokens + loading / scroll-hint / menu-toggle CSS
│   ├── layout.tsx       # root HTML, fonts, metadata
│   └── page.tsx         # homepage composition only
├── components
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
│   ├── VideoBackground.tsx
│   └── sections/
│       ├── index.ts      # barrel — NOT currently imported anywhere
│       ├── HeroSection.tsx
│       ├── HeroScrollHint.tsx
│       ├── PhilosophySection.tsx
│       ├── PracticeSection.tsx
│       ├── BenefitsSection.tsx
│       ├── JourneySection.tsx
│       ├── CommunitySection.tsx
│       ├── ContactSection.tsx
│       └── SectionIntro.tsx
├── data
│   └── menu.ts           # nav / social / quick-link labels
└── types
    └── index.ts           # MenuItem
```

## Dependency flow

```
page.tsx
   ├── LoadingScreen               (fixed overlay, then unmounts)
   └── SiteShell
          ├── NavigationProvider   (wraps the whole shell)
          │      ├── Header → MenuButton
          │      ├── page surface (slides when menu open)
          │      │      ├── HeroSection → VideoBackground, Container, HeroScrollHint
          │      │      ├── PhilosophySection → SectionShell → Container, SectionIntro
          │      │      ├── PracticeSection   → SectionShell, SectionIntro, offering list
          │      │      ├── BenefitsSection   → …
          │      │      ├── JourneySection    → …
          │      │      ├── CommunitySection  → …, Card × N
          │      │      ├── ContactSection    → …, Button
          │      │      └── Footer → Container
          │      └── NavigationPanel → data/menu → types/MenuItem
```

**Rules this encodes:**
- Sections never import the shell or each other.
- Shared UI (`Container`, `Card`, `SectionShell`, …) never imports sections.
- `VideoBackground` / `HeroScrollHint` watch `#hero` via the DOM directly —
  there is no shared scroll/observer manager.
- `page.tsx` imports each section by path. `sections/index.ts` is unused;
  either wire it in or delete it (see CONTRIBUTING.md).

## Component responsibilities

| File | Purpose | Consumers | Shared? |
|---|---|---|---|
| `SiteShell` | Chrome: provider, header, sliding page, nav panel | `page.tsx` | No |
| `NavigationContext` | `isOpen`, toggle/close, scroll lock, panel width, Escape | Shell, MenuButton, NavigationPanel | Yes — the only global state |
| `Header` | Fixed top bar: brand + menu control | SiteShell | No |
| `MenuButton` | Hamburger ↔ × | Header | No |
| `NavigationPanel` | Right drawer links | SiteShell | No |
| `LoadingScreen` | Fullscreen load, then unmounts | `page.tsx` | No |
| `VideoBackground` | Fixed hero video, fade, handoff, pause/restart | HeroSection | No |
| `SectionShell` | Full-viewport section frame + Container | All content sections except Hero | Yes |
| `Container` | Max-width + gutters | SectionShell, HeroSection, Footer | Yes |
| `SectionLabel` | Uppercase kicker | SectionIntro | Yes (via intro) |
| `Button` | Primary/secondary button | ContactSection only | Designed shared, 1 consumer |
| `Card` | Bordered surface | Community only | Designed shared, 1 consumer |
| `Footer` | Footer brand + copyright | `page.tsx` | No |
| `SectionIntro` | Label + h2 + description | 6 content sections | Yes |
| `sections/index.ts` | Barrel re-exports | Nobody (currently) | Dead weight until resolved |
| `data/menu.ts` | Static nav labels | NavigationPanel | Data |
| `types/index.ts` | `MenuItem` | `data/menu.ts` | Types |

**Critical path** (breaking these breaks the page): `layout`, `page`,
`SiteShell`, nav stack, Hero + `VideoBackground`, the six content sections,
`Footer`, `globals.css`.

**Helpers** (safe to refactor locally without wider blast radius):
`Container`, `SectionShell`, `SectionIntro`, `SectionLabel`, `Card`,
`Button`, `HeroScrollHint`.

## Why the section split exists

Each `*Section.tsx` is a vertical band of the marketing page with its own
`id` and copy — a page *chapter*, not a deep module. `page.tsx` stays a
short table of contents. Hero is split further only because it has real
client lifecycle (video + `IntersectionObserver`); the other six sections
are simple and split purely so one can be edited without opening another.

## Data / state flow

```
Static copy   → inlined in each *Section.tsx
Menu labels   → data/menu.ts → NavigationPanel only
UI state      → NavigationContext only
Scroll FX     → local IntersectionObserver in VideoBackground & HeroScrollHint
                (no global store, no hooks/, no lib/)
```
