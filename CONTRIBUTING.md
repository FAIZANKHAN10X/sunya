# Contributing — conventions for Sunya

These rules are what currently make the codebase easy to navigate. The goal
is to extend along the existing seams, not add new architectural layers.
If you change the structure, update `ARCHITECTURE.md` in the same PR.

## Rule of three for shared components

Build new UI inline, inside the section that needs it. Only promote it to
`components/` on the **third** real duplicate — not the second, and never
in anticipation of future reuse. `Card` and `SectionShell` earned their
place this way. Premature sharing produces a primitive stretched to serve
needs it wasn't designed for.

## One global context, high bar for a second

`NavigationContext` is the only cross-cutting state, and that's
intentional — nav state genuinely spans `Header`, `MenuButton`, and
`NavigationPanel`. Before adding a new context provider, default to local
component state or plain props. A second provider is a structural decision
that belongs in a PR description and in `ARCHITECTURE.md`, not something
that shows up incidentally.

## No `hooks/` or `lib/` until there's real shared logic

`VideoBackground` and `HeroScrollHint` each run their own
`IntersectionObserver`. That's a shared *pattern*, not shared *logic* — so
they stay separate. Extract a hook only when a second component needs the
literal same logic, not just a similar shape.

## Adding a new content section

1. Create `src/components/sections/XSection.tsx`.
2. Use `SectionShell` + `SectionIntro` unless the section has real client
   behavior (video, animation lifecycle, etc.) — in that case model it
   after `HeroSection`, not the simple sections.
3. Give it a stable `id` matching how it will be linked/anchored.
4. Import it by path in `page.tsx` and place it in section order.
5. If it belongs in the nav, add the entry to `data/menu.ts` (extend
   `types/index.ts`'s `MenuItem` first if the shape needs to change).
6. Don't touch `SiteShell` or `NavigationContext` to ship a content-only
   section. If you find you need to, the section isn't content-only —
   flag it in the PR.

## Styling

All color/spacing/animation tokens live in `globals.css`. No component
should hardcode a value that already has a token. This is the cheapest
consistency win in the project and the easiest one to quietly break.

## Known cleanup items (resolve, don't let drift)

- `sections/index.ts` is currently unused. Either import sections through
  it from `page.tsx`, or delete the file. Don't leave it half-wired.
- `Button.tsx` has exactly one consumer (`ContactSection`). If a second
  real consumer doesn't show up, consider inlining it — confirm first
  whether `MenuButton`'s divergent styling is intentional.

## Before merging

- [ ] `ARCHITECTURE.md` updated if `src/` structure changed.
- [ ] No new shared component added without a third real consumer.
- [ ] No new context added without a note on why local state wasn't enough.
- [ ] No hardcoded color/spacing that duplicates an existing token.
- [ ] New section (if any) follows the checklist above, including nav sync.
