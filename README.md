# Silver Nails - Luxury Nail Salon Website

<div align="center">

**A modern, full-stack luxury nail salon website built with TanStack Start**

[![TanStack Start](https://img.shields.io/badge/TanStack-Start-blue)](https://tanstack.com/start)
[![React 19](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue)](https://tailwindcss.com)
[![Notion API](https://img.shields.io/badge/Notion-API-black)](https://developers.notion.com)

[Demo](#) • [Documentation](#documentation) • [Features](#features) • [Getting Started](#getting-started)

</div>

---

## Overview

Silver Nails is a production-ready, luxury-focused nail salon website featuring comprehensive booking management, client dashboard, admin panel, and payment integration. Built with modern web technologies and designed for easy deployment and long-term maintenance.

### Key Highlights

- 🎨 **Luxury Design System** - Custom theme with silver, rose gold, and champagne colors
- 📱 **Fully Responsive** - Beautiful on all devices
- 🚀 **Modern Stack** - TanStack Start, React 19, TypeScript, Tailwind CSS
- 📊 **Notion Backend** - Easy-to-manage database without complex setup
- 💳 **Payment Ready** - Integrated PayPal and tap payment support
- 📅 **Smart Booking** - Real-time availability and scheduling
- 🔐 **Secure** - Type-safe with comprehensive validation
- ⚡ **Fast** - Optimized for performance and SEO

## Features

### ✅ Implemented

- **Luxury Homepage**
  - Stunning hero section with gradient effects
  - Service showcase with pricing
  - Customer testimonials
  - Multiple CTAs for conversions

- **Premium UI Components**
  - shadcn/ui components customized for luxury aesthetic
  - Responsive header with mobile menu
  - Comprehensive footer
  - Button, Card, Input, Calendar, Dialog, and more

- **Type-Safe Architecture**
  - Full TypeScript coverage
  - Zod validation for all forms
  - Comprehensive type definitions

- **Notion Integration**
  - Full CRUD operations
  - Type-safe API wrapper
  - Support for Users, Staff, Services, Appointments

- **Brand Assets**
  - 5 logo concepts
  - Complete color palette
  - Typography system
  - Design guidelines

### 🚧 In Progress / Planned

- Booking system with calendar
- Authentication (login/signup)
- Client dashboard
- Admin panel
- Services page
- Gallery
- Payment integration
- Analytics dashboard

## Technology Stack

### Frontend
- **Framework**: TanStack Start (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: TanStack Router
- **State**: TanStack Query
- **Forms**: TanStack Form + React Hook Form
- **Validation**: Zod

### Backend
- **Database**: Notion API
- **Authentication**: JWT + bcryptjs
- **Payments**: PayPal, Tap payments

### DevOps
- **Build**: Vite
- **Runtime**: Nitro
- **Hosting**: Vercel (recommended)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- Notion account (free tier works)
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd silver-nails

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Notion API credentials

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Quick Start (No Database)

The site will work out of the box with sample data for demonstration purposes. To connect to Notion:

1. Follow the **[Notion Setup Guide](NOTION_SETUP.md)**
2. Add your API keys to `.env`
3. Restart the dev server

## Building For Production

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```




## Documentation

### Comprehensive Guides

- **[Project Summary](PROJECT_SUMMARY.md)** - Complete project overview and status
- **[Brand Assets](BRAND_ASSETS.md)** - Logo concepts, colors, typography, and design system
- **[Notion Setup](NOTION_SETUP.md)** - Step-by-step database configuration
- **[Deployment Guide](DEPLOYMENT.md)** - Vercel deployment instructions

### Project Structure

```
silver-nails/
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # shadcn UI components
│   │   ├── Header.tsx       # Main navigation
│   │   └── Footer.tsx       # Site footer
│   ├── lib/                 # Utilities and integrations
│   │   ├── utils.ts         # Helper functions
│   │   ├── validations.ts   # Zod schemas
│   │   └── notion.ts        # Notion API wrapper
│   ├── routes/              # TanStack Router pages
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Homepage
│   ├── types/               # TypeScript definitions
│   │   └── index.ts         # Domain types
│   └── styles.css           # Global styles + Tailwind
├── BRAND_ASSETS.md          # Brand guide
├── PROJECT_SUMMARY.md       # Project documentation
├── NOTION_SETUP.md          # Database setup guide
├── DEPLOYMENT.md            # Deployment instructions
└── package.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Silver | `#A0A7B5` | Primary color - sophistication |
| Rose Gold | `#E6B8B8` | Secondary - luxury and warmth |
| Champagne | `#F5EDD8` | Accent - elegance |

## Routing
This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Notion API
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

See [NOTION_SETUP.md](NOTION_SETUP.md) for detailed database setup instructions.

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Deploy to Other Platforms

Silver Nails can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- Fly.io

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See LICENSE file for details.

## Support

For support and questions:
- 📧 Email: support@silvernails.com (update with your email)
- 📚 [Documentation](PROJECT_SUMMARY.md)
- 🐛 [Report Issues](../../issues)

## Acknowledgments

- Built with [TanStack Start](https://tanstack.com/start)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Database by [Notion](https://notion.so)

## Learn More

- [TanStack Documentation](https://tanstack.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Notion API Documentation](https://developers.notion.com)

---

<div align="center">

**Built with ❤️ for luxury nail salons**


</div>
