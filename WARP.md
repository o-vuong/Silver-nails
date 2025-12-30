# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Silver Nails is a modern, full-stack luxury nail salon website built with TanStack Start. It features comprehensive booking management, client dashboard, admin panel, and payment integration using Notion as the backend database.

## Technology Stack

- **Frontend**: TanStack Start (React 19), TypeScript, Tailwind CSS 4.0
- **UI Components**: shadcn/ui customized for luxury aesthetic
- **Routing**: TanStack Router with file-based routing
- **State Management**: TanStack Query
- **Forms**: TanStack Form + React Hook Form with Zod validation
- **Backend/Database**: Notion API
- **Authentication**: JWT + bcryptjs
- **Build Tool**: Vite with Nitro runtime
- **Package Manager**: pnpm

## Development Commands

### Essential Commands
```bash
# Development server on port 3000
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test
```

### Code Quality
```bash
# Format and lint code using Trunk
trunk fmt
trunk check

# Format specific files
trunk fmt src/components/Header.tsx
```

## Project Architecture

### Directory Structure
- `src/components/` - React components
  - `ui/` - shadcn/ui components (Button, Card, Input, Dialog, etc.)
  - `booking/` - Multi-step booking flow components
- `src/lib/` - Utilities and integrations
  - `notion.ts` - Notion API wrapper with typed CRUD operations
  - `services-catalog.ts` - Service definitions and helpers
  - `validations.ts` - Zod schemas for all forms
  - `utils.ts` - Helper functions and utilities
- `src/routes/` - TanStack Router file-based pages
- `src/types/` - TypeScript type definitions for all domain models

### Key Architectural Patterns

#### Notion Database Integration
The project uses Notion as a backend database with a comprehensive API wrapper (`src/lib/notion.ts`). All database operations are type-safe and handle the conversion between Notion's property format and TypeScript interfaces.

Database entities include:
- Users (clients with preferences and role-based access)
- Staff (with schedules, specialties, and bio)
- Services (with categories, pricing, and add-ons)
- Appointments (with status tracking and payment info)
- Payments, Reviews, Loyalty Programs, and Gallery

#### Type-Safe Forms with Zod
All forms use Zod schemas defined in `src/lib/validations.ts` for validation. This ensures consistent validation rules across the application and provides TypeScript inference.

#### Service Catalog System
Services are managed through a structured catalog (`src/lib/services-catalog.ts`) with categories, pricing, add-ons, and helper functions. This allows for easy service management and booking flow integration.

#### TanStack Router Architecture
Uses file-based routing with `__root.tsx` providing the global layout (Header/Footer). All pages are fully typed with proper route parameters and search params.

## Environment Setup

### Required Environment Variables
Copy `.env.example` to `.env` and configure:

```env
# Notion API - Required for database operations
NOTION_API_KEY=your_notion_integration_token
NOTION_DB_USERS=your_users_database_id
NOTION_DB_STAFF=your_staff_database_id
NOTION_DB_SERVICES=your_services_database_id
NOTION_DB_APPOINTMENTS=your_appointments_database_id
NOTION_DB_PAYMENTS=your_payments_database_id
NOTION_DB_LOYALTY=your_loyalty_database_id
NOTION_DB_REVIEWS=your_reviews_database_id
NOTION_DB_GALLERY=your_gallery_database_id

# Authentication
JWT_SECRET=your_secret_key_minimum_32_characters

# Site Configuration
SITE_URL=http://localhost:3000
```

See `NOTION_SETUP.md` for detailed database setup instructions.

## Development Guidelines

### Code Style
- Uses Trunk for linting and formatting (Prettier, ESLint equivalents)
- TypeScript strict mode enabled with comprehensive type checking
- Path aliases configured (`@/*` maps to `./src/*`)

### Component Development
- All UI components follow shadcn/ui patterns with luxury theme customization
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class names
- Form components should use the validation schemas from `src/lib/validations.ts`

### Database Operations
- Always use the typed API wrappers from `src/lib/notion.ts`
- Handle errors gracefully as Notion API calls can fail
- Use the domain types from `src/types/index.ts` consistently

### Routing and Navigation
- TanStack Router automatically generates route tree from files in `src/routes/`
- Use typed links and navigation throughout the application
- Route parameters and search params are fully typed

## Testing

The project uses Vitest for testing with React Testing Library. Test files should be placed alongside components or in dedicated test directories.

## Brand Guidelines

Silver Nails uses a luxury color palette:
- Silver (`#A0A7B5`) - Primary color for sophistication
- Rose Gold (`#E6B8B8`) - Secondary color for luxury and warmth  
- Champagne (`#F5EDD8`) - Accent color for elegance

Typography uses Inter for body text and Playfair Display for headings to convey luxury and elegance.

## Common Development Tasks

### Adding New Services
1. Add service definition to `src/lib/services-catalog.ts`
2. Update the service categories type in `src/types/index.ts` if needed
3. Add validation in `src/lib/validations.ts` if custom validation required

### Creating New Routes
1. Add `.tsx` file to `src/routes/` directory
2. Export route configuration using TanStack Router patterns
3. Route tree is automatically generated

### Database Schema Changes
1. Update Notion database properties
2. Modify type definitions in `src/types/index.ts`
3. Update API wrappers in `src/lib/notion.ts`
4. Update validation schemas in `src/lib/validations.ts`

### Adding Form Validation
1. Create Zod schema in `src/lib/validations.ts`
2. Export TypeScript type using `z.infer<typeof schema>`
3. Use schema in form components with TanStack Form or React Hook Form

## Deployment

The application is configured for deployment on Vercel with Nitro runtime. See `DEPLOYMENT.md` for detailed deployment instructions.

For other platforms, the build output is compatible with any Node.js hosting environment.