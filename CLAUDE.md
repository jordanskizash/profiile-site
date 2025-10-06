# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev --turbopack` - Run development server with Turbopack for faster builds
- **Build**: `npm run build` - Build the production application
- **Start**: `npm start` - Start the production server
- **Lint**: `npm run lint` - Run ESLint to check code quality

## Architecture

This is a Next.js 15 personal profile website using the App Router architecture with TypeScript.

### Tech Stack
- **Framework**: Next.js 15 with App Router and React 19
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui components (New York style)
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Key Features
- **Theme System**: Custom dark/light/system theme provider with localStorage persistence
- **Component Library**: shadcn/ui components with consistent styling using `cn()` utility
- **Responsive Design**: Mobile-first responsive layout with Tailwind

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `ui/` - shadcn/ui components (Button, Switch, etc.)
  - `theme-provider.tsx` - Theme context and provider
  - `theme-toggle.tsx` - Theme switching component
- `lib/` - Utility functions (mainly `cn()` for class merging)

### Import Aliases
- `@/` - Root directory alias
- `@/components` - Components directory
- `@/lib/utils` - Utilities
- `@/components/ui` - UI components

### Styling Conventions
- Uses Tailwind CSS with custom CSS variables for theming
- Theme classes applied to `documentElement` for global theme switching
- Consistent color scheme: blue-400/300 for links, gray variants for text
- Font setup with CSS variables: `--font-geist-sans` and `--font-geist-mono`

### Theme Implementation
The theme system uses React Context with three modes:
- `dark` - Force dark theme
- `light` - Force light theme
- `system` - Follow system preference

Theme state persists in localStorage and automatically applies classes to the document root.