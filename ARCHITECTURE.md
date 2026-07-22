# Architecture — Sunya

Reference doc. Keep this in sync: any change that adds, removes, or moves a
file under `src/`, or changes which component is shared, should update this
document in the same change.

New shared context, shared hooks, `hooks/` / `lib/` folders, or external
libraries require an **explicit architectural decision**—not incidental
addition.

## Stack

Next.js App Router + React + TypeScript + Tailwind CSS v4 + npm.

Runtime dependencies: `next`, `react`, `react-dom`, and **`lenis`** (smooth
wheel scroll only). Analytics: **GTM + dataLayer** via `src/analytics/` (no
direct GA4 `gtag` in app code). No GSAP, Framer Motion, state library,
CSS-in-JS, UI kit, or CMS. No `src/hooks/` or `src/lib/`.

Security: response headers (CSP + standard hardening) live in `next.config.ts`.
Public env is validated in `src/env.ts`. Raw HTML injection is ESLint-banned
except the GTM bootstrap in `GoogleTagManager.tsx`.

## Folder tree

```text
src
├── app
│   ├── favicon.ico
│   ├── globals.css      # tokens + loading / scroll-hint / menu-toggle CSS
│   ├── layout.tsx       # root HTML, fonts, GTM, AnalyticsRoot, metadata, JSON-LD
│   ├── manifest.ts      # PWA web manifest
│   ├── page.tsx         # homepage composition (narrative order)
│   └── contact/
│       └── page.tsx     # dedicated contact route
├── env.ts                    # validated public env (NEXT_PUBLIC_* only)
├── analytics
│   ├── track.ts              # dataLayer trackEvent + dedupe helpers
│   ├── types.ts
│   ├── GoogleTagManager.tsx  # sole approved dangerouslySetInnerHTML (GTM)
│   ├── PageViewTracker.tsx
│   ├── SectionViewTracker.tsx
│   ├── TrackedCtaLink.tsx
│   └── AnalyticsRoot.tsx
├── components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── HashScroll.tsx   # /#section deep-link handler
│   ├── Header.tsx
│   ├── LoadingScreen.tsx
│   ├── MenuButton.tsx
│   ├── NavigationContext.tsx
│   ├── NavigationPanel.tsx
│   ├── SmoothScroll.tsx     # Lenis root init (no GSAP)
│   ├── lenisBridge.ts       # shared scrollTo / stop|start for Lenis
│   ├── SectionLabel.tsx
│   ├── SectionShell.tsx
│   ├── SiteShell.tsx
│   ├── VideoBackground.tsx
│   └── sections/
│       ├── HeroSection.tsx          # 01 Identity Declaration
│       ├── HeroScrollHint.tsx
│       ├── IntroductionSection.tsx  # 02 Introduction
│       ├── MediaChapterSection.tsx  # visual field / gallery
│       ├── BeliefsSection.tsx
│       ├── FrameworkSection.tsx
│       ├── NotesSection.tsx
│       ├── CommunitySection.tsx
│       ├── ExperiencesSection.tsx
│       ├── StoriesSection.tsx
│       ├── BeginSection.tsx
│       ├── NewsletterSection.tsx    # above footer
│       ├── ContactForm.tsx          # /contact form
│       └── SectionIntro.tsx
├── data
│   └── menu.ts           # nav / social / quick-link labels
└── types
    └── index.ts           # MenuItem
```

Routes: `/` (homepage), `/contact` (contact).

## Dependency flow

```text
page.tsx (/)
   ├── LoadingScreen
   └── SiteShell
          ├── NavigationProvider
          │      ├── HashScroll
          │      ├── Header → MenuButton
          │      ├── page surface
          │      │      ├── HeroSection → VideoBackground, Container, HeroScrollHint
          │      │      ├── IntroductionSection → SectionShell, …
          │      │      ├── … journey sections …
          │      │      ├── BeginSection
          │      │      ├── NewsletterSection → Button
          │      │      └── Footer → Container
          │      └── NavigationPanel → data/menu → types/MenuItem

contact/page.tsx
   └── SiteShell → ContactForm, Footer
```

**Rules this encodes:**

- Sections never import the shell or each other.
- Shared UI (`Container`, `Card`, `SectionShell`, …) never imports sections.
- `VideoBackground` and `HeroScrollHint` observe `#hero` via the DOM—there is
  no shared scroll/observer manager.
- `page.tsx` imports each section by path (no sections barrel).

## Navigation (actual implementation)

- **State:** `NavigationContext` — `isOpen`, `toggle` / `close`,
  `scrollToSection`, panel width, page/panel refs, body scroll lock,
  Escape-to-close.
- **Motion:** CSS for nav chrome. **Lenis** owns wheel smooth-scrolling
  (`SmoothScroll` + `lenisBridge`). Menu open stops Lenis; close restarts it.
  Section jumps use `smoothScrollToId` (Lenis `scrollTo` with header offset).
  No GSAP. `prefers-reduced-motion: reduce` disables Lenis entirely.
- **Primary menu:** Home, Introduction, Beliefs, Community, Stories, Begin —
  each maps to a section id and scrolls via Lenis. Off-home routes use
  `router.push('/#id')` with `HashScroll` to complete the jump.
- **Quick links:** Contact (`/contact`), Newsletter (`#newsletter`).
- **Header:** Fixed to the viewport; brand returns home / scrolls to hero.

## Component responsibilities

| File | Purpose | Consumers | Shared? |
| --- | --- | --- | --- |
| `SiteShell` | Chrome: provider, header, sliding page, nav panel | `page.tsx`, `contact/page.tsx` | No |
| `NavigationContext` | Nav open state, scroll lock, `scrollToSection` | Shell, MenuButton, NavigationPanel, Header | Yes — only global state |
| `HashScroll` | Deep-link scroll after client navigation | SiteShell | No |
| `Header` | Fixed top bar: brand + menu control | SiteShell | No |
| `MenuButton` | Hamburger ↔ × (CSS morph) | Header | No |
| `NavigationPanel` | Right drawer; live section + route links | SiteShell | No |
| `LoadingScreen` | Fullscreen load, then unmounts | `page.tsx` only | No |
| `VideoBackground` | Fixed hero video, fade, handoff, pause/restart | HeroSection | No |
| `SectionShell` | Section frame + Container; compact density option | Content sections | Yes |
| `Container` | Max-width + gutters | SectionShell, Hero, Footer, contact | Yes |
| `SectionLabel` | Uppercase kicker | Available (unused by intros) | Primitive |
| `Button` | Primary/secondary control | Newsletter, ContactForm | Reusable primitive |
| `Card` | Bordered surface | Available | Reusable primitive |
| `Footer` | Brand, copyright, Contact + Newsletter links | Home + contact | No |
| `SectionIntro` | Label + h2 + description | Most content sections | Yes |
| `data/menu.ts` | Static nav labels + targets | NavigationPanel | Data |
| `types/index.ts` | `MenuItem` | `data/menu.ts` | Types |

## Section composition

Stack order is fixed in `page.tsx` as a **guided philosophy journey**:

| Order | File | Role | Section `id` |
| --- | --- | --- | --- |
| 01 | `HeroSection.tsx` | Cinematic identity + CTAs | `hero` |
| 02 | `IntroductionSection.tsx` | Founder intro + media | `introduction` |
| — | `MediaChapterSection.tsx` | Visual gallery chapter | `presence` |
| 03 | `BeliefsSection.tsx` | Editorial philosophy list | `beliefs` |
| 04 | `FrameworkSection.tsx` | Methodology pillars | `framework` |
| 05 | `NotesSection.tsx` | Essays / reflections grid | `notes` |
| 06 | `CommunitySection.tsx` | Community doors + media | `community` |
| 07 | `ExperiencesSection.tsx` | Programs, workshops, retreats | `experiences` |
| 08 | `StoriesSection.tsx` | Featured + supporting witnesses | `stories` |
| 09 | `BeginSection.tsx` | Full-scene invitation | `begin` |
| — | `NewsletterSection.tsx` | Editorial email capture | `newsletter` |

Contact is **not** a homepage section; it lives at `/contact`.

| Goal | Edit |
| --- | --- |
| One section’s copy or layout | Matching file under `sections/` |
| Homepage order | Component order in `page.tsx` |
| Add a section | New file under `sections/` + path import in `page.tsx` |
| Nav labels / targets | `src/data/menu.ts` |

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
| `--header-offset` | `scroll-padding-top` for fixed header |

Default container: near full-bleed (`max-w-[100rem]`) with responsive horizontal
padding. Content sections use `SectionShell` — content-led height on mobile,
`md:min-h-svh` on larger screens. Separation is spacing and composition.

## Data / state flow

```text
Static copy   → inlined in each *Section.tsx
Menu labels   → data/menu.ts → NavigationPanel
UI state      → NavigationContext only
Scroll FX     → local IntersectionObserver in VideoBackground & HeroScrollHint
Forms         → local client state in NewsletterSection / ContactForm
```
