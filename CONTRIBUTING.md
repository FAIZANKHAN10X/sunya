# Contributing — Sunya

Extend along existing seams. Do not add new architectural layers without an
explicit decision. If you change structure under `src/`, update
`ARCHITECTURE.md` in the same change.

## Rule of three for shared components

Build new UI **inline** inside the section that needs it. Promote to
`src/components/` only on the **third** real duplicate—not the second, and
never in anticipation of future reuse. Premature sharing stretches primitives
beyond what they were designed for.

## One global context

`NavigationContext` is the only cross-cutting state. It spans `Header`,
`MenuButton`, `NavigationPanel`, and the sliding page surface. Prefer local
component state or props for everything else. A second provider is a structural
decision that belongs in the PR description and `ARCHITECTURE.md`.

## No `hooks/` or `lib/`

There is no shared logic that justifies those folders. `VideoBackground` and
`HeroScrollHint` each run their own `IntersectionObserver` on purpose—that is a
shared *pattern*, not shared *logic*. Extract a hook only when a second
component needs the **literal same** logic.

## Adding a new content section

1. Create `src/components/sections/XSection.tsx`.
2. Use `SectionShell` + `SectionIntro` unless the section has real client
   behavior (video, animation lifecycle)—then model after `HeroSection`.
3. Give it a stable `id` for anchoring.
4. Import it **by path** in `src/app/page.tsx` and place it in section order.
5. If it belongs in the nav, add an entry to `src/data/menu.ts` (extend
   `MenuItem` in `src/types/index.ts` if the shape changes).
6. Do not touch `SiteShell` or `NavigationContext` for content-only work.

## Naming conventions

- **Components**: PascalCase filenames and exports (`Header.tsx`).
- **Data modules**: camelCase (`menu.ts`).
- **Types**: PascalCase (`MenuItem`).
- **IDs / keys**: short stable strings (`hero`, `philosophy`).
- **Section components**: `*Section.tsx` under `src/components/sections/`.
- **CSS**: utilities in JSX; shared tokens in `globals.css`.

## Component standards

- One primary component per file under `src/components/`.
- Prefer default exports for UI and page-level components.
- Use `"use client"` only when state, effects, or browser events require it.
- Keep presentational components free of data fetching and business logic.
- Type props explicitly; avoid `any`.
- Do not leave `console.log` or temporary debug UI in commits.
- Primary nav links scroll to homepage sections (or route to `/#id` off-home).
  Forms may remain client-only (no backend) until a provider is chosen.
- Prefer existing primitives (`Container`, `Card`, `SectionLabel`, `SectionShell`,
  `Button` when a true button is needed) when the pattern already matches.

## TypeScript standards

- Strict mode stays on (`tsconfig.json`).
- Domain types live in `src/types`.
- Prefer `type` aliases for simple shared shapes.
- Use `import type` for type-only imports.
- Path alias: `@/*` → `src/*`.

## Tailwind and styling

- Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.css`.
- Prefer utility classes in JSX over custom CSS.
- Use design tokens (`background`, `foreground`, `muted`, `border`, `surface`,
  `rounded-soft`, ease/duration tokens) rather than hardcoding values that
  already exist as tokens.
- Dark-only palette; no theme toggle.
- Mobile-first: base styles, then `sm:` / larger breakpoints.
- Prefer deliberate spacing and type scales over one-off arbitrary values.
- Do not add animation libraries. Existing CSS transitions for nav and small
  UI (menu toggle, load screen, hero handoff) are intentional—do not expand
  motion casually.

## Content and sections

- Each homepage section is self-contained under `src/components/sections/`.
- Content lives with the section (not a shared sections data file).
- Stack order is explicit in `src/app/page.tsx`.
- Heading hierarchy: one `h1` in the Hero, section `h2`s, item `h3`s.

## Accessibility

- Semantic landmarks: `header`, `main`, `nav`, `footer`, `section`.
- Label interactive controls (`aria-expanded`, `aria-controls`, `aria-label`).
- Menu must remain keyboard-operable (toggle + Escape to close).
- Do not rely on color alone for meaning.

## Project organization

| Path | Role |
| --- | --- |
| `src/app/` | Routes, layout, global CSS |
| `src/components/` | Shell, nav, shared UI, sections |
| `src/data/` | Static configuration (e.g. menu labels) |
| `src/types/` | Shared types |
| Project root `*.md` | Documentation |

- Application code lives under `src/`. There is no `src/hooks/` or `src/lib/`.
- Prefer extending data files over duplicating components.
- Do not add libraries for animation, smooth scroll, design systems, state,
  CSS-in-JS, or CMS without an explicit product decision.
- Remove dead code when you touch related files.

## Deferred cleanup

- `Button.tsx` is a reusable primitive used by form sections (`NewsletterSection`,
  `ContactForm`). Keep its API small; do not turn it into a general link component.

## Before merging

- [ ] `ARCHITECTURE.md` updated if `src/` structure or shared ownership changed
- [ ] No new shared component without a third real consumer
- [ ] No new context without explaining why local state is insufficient
- [ ] No hardcoded color/spacing that duplicates an existing token
- [ ] New section follows the checklist above (including nav sync if needed)
- [ ] TypeScript / `npm run build` clean for code changes
- [ ] `npm run lint` passes (or only pre-existing unrelated issues remain)
- [ ] No unused imports, dead exports, or debug logging introduced
- [ ] Responsive check at mobile and desktop widths when UI changed
- [ ] No animation libraries or new architectural layers without explicit need
