# Agent guidance — Sunya

## Before changing anything

1. Read **ARCHITECTURE.md** and **CONTRIBUTING.md**.
2. Inspect the real source under `src/` and **package.json**. If documentation
   conflicts with implementation or `package.json`, **implementation wins**—fix
   the docs rather than “correcting” working code unless the task says otherwise.

## Hard constraints

- Do **not** add dependencies (including GSAP, Framer Motion, Lenis, state
  libraries, CSS-in-JS, UI kits, or a CMS) unless the task explicitly requires it.
- Do **not** add architectural layers without an explicit requirement: no new
  React context, no `src/hooks/`, no `src/lib/`, no shared scroll managers.
- Prefer local state, props, and existing seams described in ARCHITECTURE.md /
  CONTRIBUTING.md (rule of three for shared components, one nav context only).

## After code or configuration changes

Validate with:

```bash
npm run lint
npm run build
```

If structure under `src/` changes, update **ARCHITECTURE.md** in the same change.
