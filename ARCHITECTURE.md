# Architecture — Sunya

Reference doc. Keep this in sync: any change that adds, removes, or moves a
file under `src/`, or changes which component is shared, should update this
document in the same change.

New shared context, shared hooks, `hooks/` / `lib/` folders, or external
libraries require an **explicit architectural decision**—not incidental
addition.

## Stack

Next.js App Router + React + TypeScript + Tailwind CSS v4 + npm.

Runtime dependencies: `next`, `react`, `react-dom` only. No state library,
CSS-in-JS, UI kit, CMS, or animation libraries (GSAP, Framer Motion, Lenis,
etc.). No `src/hooks/` or `src/lib/`.

## Folder tree

```text
src
├── app
│   ├── favicon.ico
│   ├── globals.css      # tokens + loading / scroll-hint / menu-toggle CSS
│   ├── layout.tsx       # root HTML, fonts, metadata
│   └── page.tsx         # homepage composition only (narrative order)
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
│       ├── HeroSection.tsx          # 01 Identity Declaration
│       ├── HeroScrollHint.tsx
│       ├── IntroductionSection.tsx  # 02 Introduction
│       ├── TurningPointSection.tsx  # 03 The Turning Point
│       ├── BeliefsSection.tsx       # 04 What I Believe
│       ├── FrameworkSection.tsx     # 05 The Framework
│       ├── NotesSection.tsx         # 06 Notes From The Path
│       ├── CommunitySection.tsx     # 07 Community
│       ├── ExperiencesSection.tsx   # 08 Practice & Experiences
│       ├── StoriesSection.tsx       # 09 Stories of Change
│       ├── BeginSection.tsx         # 10 Begin
│       └── SectionIntro.tsx
├── data
│   └── menu.ts           # nav / social / quick-link labels
└── types
    └── index.ts           # MenuItem
```

Single route: `/` (`src/app/page.tsx`).

## Dependency flow

```text
page.tsx
   ├── LoadingScreen               (fixed overlay, then unmounts)
   └── SiteShell
          ├── NavigationProvider   (wraps the whole shell)
          │      ├── Header → MenuButton
          │      ├── page surface (CSS transform when menu open)
          │      │      ├── HeroSection → VideoBackground, Container, HeroScrollHint
          │      │      ├── IntroductionSection → SectionShell, SectionIntro
          │      │      ├── TurningPointSection → SectionShell, SectionIntro
          │      │      ├── BeliefsSection      → SectionShell, SectionIntro
          │      │      ├── FrameworkSection    → SectionShell, SectionIntro
          │      │      ├── NotesSection        → SectionShell, SectionIntro
          │      │      ├── CommunitySection    → SectionShell, SectionIntro, Card
          │      │      ├── ExperiencesSection  → SectionShell, SectionIntro
          │      │      ├── StoriesSection      → SectionShell, SectionIntro
          │      │      ├── BeginSection        → SectionShell, Button
          │      │      └── Footer → Container
          │      └── NavigationPanel → data/menu → types/MenuItem
```

**Rules this encodes:**

- Sections never import the shell or each other.
- Shared UI (`Container`, `Card`, `SectionShell`, …) never imports sections.
- `VideoBackground` and `HeroScrollHint` observe `#hero` via the DOM—there is
  no shared scroll/observer manager.
- `page.tsx` imports each section by path (no sections barrel).

## Navigation (actual implementation)

- **State:** `NavigationContext` — `isOpen`, `toggle` / `close`, panel width,
  page/panel refs, body scroll lock, Escape-to-close.
- **Motion:** CSS only. `SiteShell` applies `transform` / `border-radius`
  transitions on the page surface while open; `NavigationPanel` slides with a
  CSS `transform` transition. Menu control morph is CSS in `globals.css`
  (`.menu-toggle`). No GSAP or other animation library.
- **Behavior:** Menu opens and closes. Panel links are presentation-only
  (`disabled` buttons)—no client-side routing to section anchors yet.
- **Header:** Fixed to the viewport; does not slide with the page surface.

## Component responsibilities

| File | Purpose | Consumers | Shared? |
| --- | --- | --- | --- |
| `SiteShell` | Chrome: provider, header, sliding page, nav panel | `page.tsx` | No |
| `NavigationContext` | Nav open state, scroll lock, panel width, Escape | Shell, MenuButton, NavigationPanel | Yes — only global state |
| `Header` | Fixed top bar: brand + menu control | SiteShell | No |
| `MenuButton` | Hamburger ↔ × (CSS morph) | Header | No |
| `NavigationPanel` | Right drawer; presentation-only links | SiteShell | No |
| `LoadingScreen` | Fullscreen load, then unmounts | `page.tsx` | No |
| `VideoBackground` | Fixed hero video, fade, handoff, pause/restart | HeroSection | No |
| `SectionShell` | Full-viewport section frame + Container | Content sections except Hero | Yes |
| `Container` | Max-width + gutters | SectionShell, HeroSection, Footer | Yes |
| `SectionLabel` | Uppercase kicker | SectionIntro | Yes (via intro) |
| `Button` | Primary/secondary button | BeginSection only | Reusable primitive, 1 consumer today |
| `Card` | Bordered surface | Community only | Reusable primitive, 1 consumer today |
| `Footer` | Brand + copyright | `page.tsx` | No |
| `SectionIntro` | Label + h2 + description | Most content sections | Yes |
| `data/menu.ts` | Static nav labels | NavigationPanel | Data |
| `types/index.ts` | `MenuItem` | `data/menu.ts` | Types |

**Critical path:** `layout`, `page`, `SiteShell`, nav stack, Hero +
`VideoBackground`, the nine content sections after hero, `Footer`, `globals.css`.

**Helpers (local blast radius):** `Container`, `SectionShell`, `SectionIntro`,
`SectionLabel`, `Card`, `Button`, `HeroScrollHint`.

## Section composition

Stack order is fixed in `page.tsx` as a **guided philosophy journey**:

| Order | File | Role | Section `id` |
| --- | --- | --- | --- |
| 01 | `HeroSection.tsx` | Identity declaration — opening philosophy line + video | `hero` |
| 02 | `IntroductionSection.tsx` | Founder intro + media placeholder | `introduction` |
| 03 | `TurningPointSection.tsx` | Origin timeline (milestones) | `turning-point` |
| 04 | `BeliefsSection.tsx` | Core philosophy cards | `beliefs` |
| 05 | `FrameworkSection.tsx` | Signature methodology pillars | `framework` |
| 06 | `NotesSection.tsx` | Essays / reflections grid (placeholders) | `notes` |
| 07 | `CommunitySection.tsx` | List / circle / events placeholders | `community` |
| 08 | `ExperiencesSection.tsx` | Programs, workshops, retreats | `experiences` |
| 09 | `StoriesSection.tsx` | Testimonial / transformation placeholders | `stories` |
| 10 | `BeginSection.tsx` | Minimal final invitation + CTA | `begin` |

| Goal | Edit |
| --- | --- |
| One section’s copy or layout | Matching file under `sections/` |
| Homepage order | Component order in `page.tsx` |
| Add a section | New file under `sections/` + path import in `page.tsx` |

Each `*Section.tsx` is a page *chapter*, not a deep module. Hero is split
further (`VideoBackground`, `HeroScrollHint`) because of real client lifecycle.
Hero keeps `id="hero"` so video and scroll-hint observers stay stable.

## Design tokens

Defined in `src/app/globals.css`:

| Token | Role |
| --- | --- |
| `background` | Page background (dark-only) |
| `foreground` | Primary text / solid controls |
| `muted` | Secondary text |
| `border` | Outlines and dividers |
| `surface` | Soft fill |
| `rounded-soft` | Shared corner radius |
| `--ease-premium` / related durations | Shared motion easing |

Default container: wide max-width with responsive horizontal padding. Content
sections use `SectionShell` (`min-h-svh`). Separation is spacing and composition.

## Data / state flow

```text
Static copy   → inlined in each *Section.tsx
Menu labels   → data/menu.ts → NavigationPanel only
UI state      → NavigationContext only
Scroll FX     → local IntersectionObserver in VideoBackground & HeroScrollHint
```
