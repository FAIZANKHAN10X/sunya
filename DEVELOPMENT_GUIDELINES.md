# Development Guidelines — Sunya

## Naming Conventions

- **Components**: PascalCase filenames and exports (`Header.tsx`, `export default function Header`).
- **Data modules**: camelCase filenames (`menu.ts`).
- **Types**: PascalCase type names (`MenuItem`).
- **IDs and keys**: kebab-case or short stable strings (`hero`, `philosophy`, `home`).
- **Section components**: PascalCase under `src/components/sections/` (`HeroSection.tsx`).
- **CSS / Tailwind**: utility classes in source; shared tokens in `globals.css`.

## Component Standards

- One primary component per file under `src/components/`.
- Prefer default exports for shared UI and page-level components in this project.
- Mark client boundaries only when needed (`"use client"` for state, effects, or events).
- Keep presentational components free of data fetching and business logic.
- Props should be typed explicitly; avoid `any`.
- Do not leave `console.log` or temporary debug UI in committed code.
- Interactive placeholders that are intentionally inactive should use `disabled` buttons (menu) or presentational buttons without navigation (CTAs).
- Prefer shared primitives (`Container`, `Button`, `Card`, `SectionLabel`) over one-off class stacks when patterns repeat.

## TypeScript Standards

- Strict mode remains enabled in `tsconfig.json`.
- Share domain types from `src/types`.
- Prefer `type` aliases for simple object shapes used across modules.
- Import types with `import type` when importing only types.
- Path alias: `@/*` maps to `src/*`.

## Tailwind Standards

- Use Tailwind CSS v4 via `@import "tailwindcss"` in `globals.css`.
- Prefer utility classes in JSX over custom CSS.
- Use semantic color tokens (`background`, `foreground`, `muted`, `border`, `surface`) rather than hard-coded neutrals.
- Dark-only palette (black background); no theme toggle.
- Mobile-first: base styles for small screens, then `sm:` / larger breakpoints as needed.
- Spacing and type scales should feel deliberate and reusable—avoid arbitrary one-off values when a shared pattern exists.
- Shared radius: `rounded-soft`.
- Avoid animation utilities, transitions, gradients, and heavy shadows.
- Surfaces may use subtle borders and soft fills; keep the palette restrained.

## Content & Section Standards

- Each homepage section is a self-contained component under `src/components/sections/`.
- Content lives with its section component (not a shared `sections.ts` data file).
- Stack order is explicit in `src/app/page.tsx`.
- Prefer editing one section file when changing that section’s copy or layout.
- Preserve heading hierarchy: one `h1` in the hero, section `h2`s, item `h3`s.

## Accessibility Standards

- Use semantic landmarks (`header`, `main`, `nav`, `footer`, `section`).
- Label interactive controls (`aria-expanded`, `aria-controls`, `aria-label` where needed).
- Menu must be operable with keyboard (toggle button + Escape to close).
- Decorative layout should not rely on color alone for meaning.

## Project Organization Rules

- Application code lives under `src/`.
- Route files live under `src/app/`.
- Reusable UI lives under `src/components/`.
- Static content/configuration data lives under `src/data/`.
- Shared helpers live under `src/lib/`.
- Shared types live under `src/types/`.
- Documentation lives at the project root and should stay aligned with the implementation.
- Prefer extending data files over duplicating components.
- Do not add libraries for animation, smooth scroll, or design systems without an explicit product decision.
- Remove dead code, unused imports, and unused assets when touching related files.

## Code Quality Checklist

Before merging or finishing a task:

- [ ] TypeScript builds cleanly
- [ ] ESLint passes (or only pre-existing unrelated issues remain)
- [ ] No unused imports or dead exports
- [ ] No console logging left behind
- [ ] Responsive layout verified at mobile and desktop widths
- [ ] No animation libraries or scroll-effect patterns introduced
- [ ] Docs updated if structure or conventions change
