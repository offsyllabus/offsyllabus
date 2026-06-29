# OffSyllabus

A premium, modern website for **OffSyllabus** — a growth ecosystem for students aged 15–21 focused on self-discovery, future-ready skills, real-world learning, and holistic development beyond academics.

## Tech Stack

- **Framework**: TanStack Start (React + Vite)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4 + custom CSS variables and animations
- **Deployment**: Netlify (SSR via `@netlify/vite-plugin-tanstack-start`)
- **Fonts**: Google Fonts — Inter + Bricolage Grotesque

## Pages

| Route | Description |
|---|---|
| `/` | Full homepage with all sections |
| `/programs` | Program tracks (Discovery Sprint, Growth Cohort, Founder Track) |
| `/community` | Community ecosystem overview |
| `/mentors` | Mentor profiles and mentorship areas |
| `/about` | Mission, vision, values, and team |
| `/apply` | Multi-step application form |

## Design

- **Theme**: Dark (deep navy `#07070f` background)
- **Accent**: Purple-violet gradient (`#7c3aed` → `#4f46e5`)
- **Typography**: Bricolage Grotesque (headings), Inter (body)
- **Animations**: Intersection Observer-based scroll reveals, CSS keyframe animations, hover transitions
- **Layout**: Mobile-first responsive, max-width containers

## Running Locally

```bash
npm install
npm run dev
```

Requires Node.js 18+. The dev server starts at `http://localhost:3000`.

For full Netlify feature emulation (edge functions, forms, etc.):

```bash
netlify dev --port 8889
```
