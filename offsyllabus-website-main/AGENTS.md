# AGENTS — OffSyllabus Architecture Guide

This file is for AI agents working on this codebase. Read before making changes.

## Framework

**TanStack Start** (React 19, Vite 7, TypeScript). File-based routing via `@tanstack/react-router`. Each file under `src/routes/` becomes a route. The route tree is **auto-generated** at `src/routeTree.gen.ts` by the Vite plugin — never edit that file manually.

## Directory Structure

```
src/
  routes/
    __root.tsx        ← Root layout: Navbar + Footer + <Outlet>
    index.tsx         ← Homepage (all homepage sections as components)
    programs.tsx      ← Programs & tracks page
    community.tsx     ← Community overview page
    mentors.tsx       ← Mentor profiles page
    about.tsx         ← About, mission, values, team
    apply.tsx         ← Multi-step application form
  styles.css          ← Global CSS: variables, animations, utility classes
  router.tsx          ← Router factory (uses auto-generated routeTree)

public/               ← Static assets served as-is
netlify.toml          ← Netlify build config
vite.config.ts        ← Vite + TanStack + Tailwind + Netlify plugin config
```

## Styling Conventions

- **Tailwind CSS v4** is available (via `@tailwindcss/vite`) but the project primarily uses **inline `style` props** for component-specific styles.
- **CSS custom properties** are defined in `src/styles.css` under `:root`. Use them for brand colors.
- **Utility classes** in `styles.css` (`.glass-card`, `.btn-primary`, `.btn-secondary`, `.gradient-text`, `.section-label`, etc.) are applied as `className` strings.
- The dark theme color palette:
  - Background: `#07070f`
  - Card BG: `rgba(255,255,255,0.03)`
  - Border: `rgba(255,255,255,0.08)`
  - Accent: `#7c3aed` → `#4f46e5`
  - Text primary: `#f1f5f9`
  - Text secondary: `#94a3b8`
  - Text muted: `#64748b`

## Animation Pattern

Scroll-based reveals use a local `RevealSection` component (in each route file) that uses `IntersectionObserver`. This pattern is self-contained per page — no global animation library.

## Navigation

- Navbar and Footer live in `src/routes/__root.tsx`.
- All nav links use TanStack's `<Link>` component for client-side navigation.
- The Navbar becomes sticky + frosted glass on scroll via a `scrollY` listener.

## Adding a New Page

1. Create `src/routes/your-page.tsx`
2. Export `Route = createFileRoute('/your-page')({ ... })`
3. Add a link in `__root.tsx` navbar's `navLinks` array
4. The route tree auto-updates at build time

## Key Decisions

- **No animation library**: Scroll reveals are implemented with vanilla `IntersectionObserver` to keep the bundle lean.
- **Inline styles over Tailwind**: Chosen to avoid Tailwind v4 purge edge cases and keep complex conditional styles readable.
- **Multi-step form in apply.tsx**: Client-side only; no backend integration yet. The submit handler shows a success state. Future: wire to Netlify Forms or a backend API.
- **RevealSection is duplicated across pages**: Intentional — keeps each page self-contained. Extract to `src/components/RevealSection.tsx` if it's used in 4+ places.
- **No CMS integration yet**: Content is hard-coded. To add CMS: use content-collections or a headless CMS with TanStack loaders.
