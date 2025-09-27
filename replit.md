# Overview

Capable Labs is a modern web development agency platform built as a full-stack application. The project serves as both a marketing website and business platform for a development agency that offers web development, mobile apps, AI solutions, and automation services. The application features a sleek, modern design with comprehensive service pages, pricing calculators, contact forms, and content management capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **Framework**: Vite for build tooling and development server with hot module replacement
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth page transitions and component animations
- **Theme System**: Built-in dark/light mode toggle with system preference detection

The application uses a clean folder structure separating pages, components, hooks, and utilities. The component library is based on Radix UI primitives, ensuring accessibility and consistency across the platform.

## Backend Architecture

The backend follows a traditional REST API pattern built with **Express.js**:

- **Framework**: Express.js with TypeScript for the web server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (PostgreSQL-compatible serverless database)
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful endpoints for contact forms, quotes, and newsletter subscriptions
- **Email Service**: SendGrid integration for transactional emails and notifications

The server architecture separates concerns with dedicated modules for database operations, email services, and route handling. The storage layer uses a repository pattern for clean data access abstraction.

## Database Schema

The database schema is designed to support the agency's core business operations:

- **Users**: Basic user authentication system (prepared for future admin features)
- **Contacts**: Contact form submissions with service preferences and project details
- **Quotes**: Pricing calculator results and quote requests with detailed project specifications
- **Newsletter Subscribers**: Email subscription management for marketing communications

All tables use UUID primary keys and include proper timestamps for audit trails. The schema supports complex data types like JSON arrays for storing multiple service selections and project add-ons.

## Component Architecture

The frontend uses a modular component architecture:

- **UI Components**: Reusable shadcn/ui components for consistent design
- **Page Components**: Full page layouts for different sections (services, pricing, contact, etc.)
- **Feature Components**: Specialized components like pricing calculators, contact forms, and case study displays
- **Layout Components**: Navigation, footer, and theme providers for consistent site structure

The design system uses CSS custom properties for theming and maintains a consistent visual hierarchy throughout the application.

# External Dependencies

## Development & Build Tools

- **Vite**: Frontend build tool and development server with TypeScript support
- **esbuild**: Fast bundling for production server builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## UI & Component Libraries

- **Radix UI**: Headless, accessible component primitives for forms, dialogs, and interactive elements
- **shadcn/ui**: Pre-built component library built on Radix UI with Tailwind styling
- **Lucide React**: Comprehensive icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions and micro-interactions

## Backend Services

- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **SendGrid**: Email service for contact form notifications and marketing emails
- **Drizzle ORM**: Type-safe PostgreSQL ORM with migration support
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Utility Libraries

- **TanStack Query**: Server state management and caching for API interactions
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for form data and API inputs
- **date-fns**: Modern date utility library for timestamp formatting
- **clsx & class-variance-authority**: Dynamic class name composition for component variants

## Development Environment

- **Replit Integration**: Development environment with runtime error overlays and debugging tools
- **TypeScript**: Full type safety across frontend and backend with shared schema types
- **ESLint & Prettier**: Code linting and formatting for consistent code style (implicit from project structure)

The application is designed for deployment on modern hosting platforms with support for both static site generation and server-side rendering capabilities.
