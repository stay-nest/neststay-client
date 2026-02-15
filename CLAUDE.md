# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neststay (neststay-client) is a Next.js 16 property rental discovery application with a modern, responsive UI. It showcases unique stays across 190+ countries.

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

No test framework is currently configured.

## Architecture

### Tech Stack

- **Next.js 16** with App Router
- **React 19** with Server Components by default
- **TypeScript** (strict mode)
- **Tailwind CSS v4** with custom theme tokens

### Directory Structure

```
app/
├── components/     # Reusable React components
├── lib/
│   └── http/       # HTTP service layer
│       └── client.ts
├── types/          # TypeScript type definitions
├── layout.tsx      # Root layout with fonts and dark mode
├── page.tsx        # Home page (/)
└── locations/
    └── page.tsx    # Locations page (/locations)
mock-data/
└── properties.json # Static property data
```

### Key Patterns

**Server vs Client Components**: Most components are Server Components. Only use `"use client"` when state or browser APIs are needed (see `LocationsHeader.tsx` as example).

**Polymorphic PropertyCard**: The `PropertyCard` component accepts a `variant` prop ("tall" or "square") and renders either `TallPropertyCard` or `SquarePropertyCard`.

**Theme System**: Custom colors defined as CSS variables in `globals.css`:
- `--color-primary`: #13a4ec
- `--color-background-light`: #f6f7f8
- `--color-background-dark`: #101c22

**Icons**: Uses Material Symbols font (configured in `MaterialSymbolsFont.tsx`). Use `<span className="material-symbols-rounded">icon_name</span>`.

**Path Aliases**: Use `@/` for imports from project root (e.g., `@/app/components/Footer`).

### Data Fetching

**HTTP Service Layer**: Use the centralized HTTP client at `app/lib/http/client.ts` for all API calls:

```ts
import { http } from '@/app/lib/http';

// In async server components
const locations = await http.get<Location[]>('/locations', { revalidate: 60 });
```

The client provides:
- Base URL from `API_BASE_URL` environment variable
- Type-safe methods: `http.get`, `http.post`, `http.put`, `http.delete`
- Next.js cache integration via `revalidate` option
- Consistent headers and error handling

**Caching Options**:
- `cache: 'force-cache'` - Static data (default)
- `cache: 'no-store'` - Always fresh
- `revalidate: 60` - ISR, refresh every N seconds

**Server Components**: Fetch data directly in async page components for SEO-friendly SSR. Add `loading.tsx` sibling for streaming loading states.

### Mock Data

Static mock data in `mock-data/properties.json` contains:
- `location`: Full location details with coordinates
- `variant`: Card display type
- `featured`: Boolean for featured badge display
