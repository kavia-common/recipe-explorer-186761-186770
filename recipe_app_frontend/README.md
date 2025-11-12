# Recipe Explorer (Next.js)

A modern, Ocean-themed recipe explorer with browsing, search, and detailed views.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Pages & Routing

- `/` – Home with featured recipes and search bar in header.
- `/search?query=term` – Search results grid.
- `/recipe/[id]` – Recipe details page with ingredients and steps.

## Theme

Ocean Professional theme:
- primary: `#2563EB`, secondary/success: `#F59E0B`, error: `#EF4444`
- gradient: `from-blue-500/10 to-gray-50`, background: `#f9fafb`, surface: `#ffffff`, text: `#111827`

## Data Layer and Environment

The app will read a backend API base from:
- `NEXT_PUBLIC_API_BASE`

When this variable is not set or a network/error occurs, the app gracefully falls back to mock data located at `src/data/mockRecipes.ts`. This ensures the UI remains functional in preview and development.

Example `.env.local`:
```
NEXT_PUBLIC_API_BASE=https://your-backend.example.com
```

Expected endpoints if API is used:
- `GET /recipes/featured`
- `GET /recipes/search?q=term`
- `GET /recipes/:id`

If your backend differs, adjust the client at `src/lib/api.ts`.

Note: No new environment variables are introduced beyond the existing keys. If `NEXT_PUBLIC_API_BASE` is not provided, mock data will be used automatically.

## Accessibility & UX

- Semantic headings and landmarks.
- Keyboard-accessible, labeled search form in the header.
- Loading and empty states for all data views.

## Project Scripts

- `npm run dev` – Start dev server.
- `npm run build` – Build for production.
- `npm start` – Start production server.

