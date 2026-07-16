# Project Overview — Sunya

## Project Purpose

Sunya is a calm, content-led yoga brand website. This repository builds a production-oriented foundation with intentional structure, typography, and layout—not a flashy marketing site, and not an animation-heavy experience.

## Current Scope

The site currently delivers:

- A simple full-viewport loading screen
- A refined sticky header with a polished, inactive menu
- Seven modular sections with believable placeholder content and layout variety
- A minimal professional footer
- A restrained visual system (spacing, type scale, surfaces, borders, design tokens)
- TypeScript, Next.js App Router, and Tailwind CSS v4 structure
- Root-level documentation aligned with the implementation

### Sections

1. **Hero** — label, large headline, supporting copy, primary and secondary CTAs
2. **Philosophy** — intro plus principle feature blocks
3. **Practice** — intro plus soft surface cards
4. **Benefits** — intro plus multi-column feature grid
5. **Journey** — numbered step layout
6. **Community** — split intro and stacked cards
7. **Contact** — heading, details, and CTA

### Explicitly out of scope (for now)

- Live routing and active navigation
- Real forms, booking, or backend integrations
- Animations, scroll effects, parallax, and motion libraries (GSAP, Framer Motion, Lenis, etc.)
- Heavy color systems, gradients, or ornate visual effects
- CMS integration

## Future Vision

Sunya will continue evolving into a premium yoga website covering practice, philosophy, and community. Later phases add real content polish, richer visual design (including imagery), purposeful interaction, and production launch concerns (SEO, performance, accessibility audits, hosting).

## Technical Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| UI | React |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4+ |
| Package manager | npm |

## Architectural Decisions

### `src/` application root

Application code lives under `src/` so configuration files stay at the project root and source code remains clearly separated.

### Modular sections

Each homepage section is a self-contained component under `src/components/sections/` (content and layout together). `page.tsx` stacks them in order. Edit one section file without touching the others.

### Shared UI primitives

Reusable presentational pieces (`Container`, `Button`, `Card`, `SectionLabel`) keep spacing, radius, and type treatment consistent across the page.

### Isolated interactive shells

- `LoadingScreen` owns simulated load timing and reveal behavior.
- `NavigationProvider` owns the GSAP split-screen menu timeline.
- Menu items and CTAs are presentation-only—no routing or form submission.

### Layout model

Sections stack vertically with generous vertical padding and max-width containers. Layout does not rely on absolute positioning hacks or z-index for structure (z-index is used only for sticky header and the temporary loading overlay).

### Visual direction

Minimal, calm, spacious, premium. Quality comes from whitespace, hierarchy, alignment, and restraint—not decoration.

### Minimal dependencies

No animation libraries, scroll libraries, or UI kits. The codebase stays easy to reason about and easy to extend.
