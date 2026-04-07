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
  types/index.ts              — shared Person, UpcomingEvent types
  config/emailjs.ts           — EmailJS credentials from env vars
  data/people.json            — people data (edit to add/remove persons)
  utils/dateUtils.ts          — date helpers (next occurrence, age, format)
  hooks/
    useUpcomingEvents.ts      — filters events in next N days, sorted by date
    useEmailNotification.ts   — sends email via EmailJS, deduped via localStorage
  components/
    Header.tsx                — top navbar
    Dashboard.tsx             — main page, stats summary
    UpcomingEventList.tsx     — grid of EventCards
    EventCard.tsx             — single event (name, date, type badge, countdown)
    DaysLabel.tsx             — "Dnes!" / "Zítra" / "za N dní" label
  main.tsx                    — app entry point
  App.tsx                     — root: loads people, runs hooks, renders layout
  index.css                   — Tailwind + Flowbite CSS imports
  vite-env.d.ts               — Vite type declarations
.env.example                  — EmailJS env variable template
index.html
vite.config.ts
tsconfig.json
```

## Data file
Edit `src/data/people.json` to manage people:
```json
{ "id": "unique-id", "name": "Full Name", "birthday": "YYYY-MM-DD", "nameDay": "MM-DD" }
```
Both `birthday` and `nameDay` are optional.

## Email notifications
Uses EmailJS (client-side, no backend). Configure by copying `.env.example` → `.env` and filling in credentials.

EmailJS template must use these variables:
- `{{person_name}}`, `{{event_type}}`, `{{event_date}}`, `{{days_until}}`, `{{to_email}}`

Notifications are sent on app load, deduplicated per person/type/year via `localStorage`.

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
