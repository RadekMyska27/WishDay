# WishDay — Claude Code Context

## Project overview
WishDay is a simple frontend app to track birthdays and name days of people you care about. No backend, no database — data is stored in a local JSON file.

## Tech stack
- **React 19** + **TypeScript 6**
- **Vite 8** (bundler + dev server)
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **Flowbite** + **flowbite-react** — UI component library built on top of Tailwind

## Project structure
```
src/
  main.tsx        — app entry point
  App.tsx         — root component
  index.css       — Tailwind + Flowbite CSS imports
  vite-env.d.ts   — Vite type declarations
index.html
vite.config.ts
tsconfig.json
```

## Common commands
```bash
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview production build
```

## SOLID principles
- **S** — Single Responsibility: each component/hook does one thing only
- **O** — Open/Closed: extend via new components, don't modify stable ones
- **L** — Liskov Substitution: component variants must be interchangeable
- **I** — Interface Segregation: keep props interfaces focused, no fat interfaces
- **D** — Dependency Inversion: depend on abstractions (interfaces, hooks), not concrete implementations

## Style conventions
- Use **flowbite-react** components wherever possible instead of raw HTML
- Tailwind utility classes for layout and spacing
- Tailwind v4 — import via `@import "tailwindcss"` in CSS, not via `tailwind.config.js`
