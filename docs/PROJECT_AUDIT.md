# VMAKITEC Project Audit

## 1. CURRENT ARCHITECTURE
Upon analyzing the current codebase, it was discovered that a Laravel + React application **does not yet exist** in the repository.

**Current Findings:**
- The repository contains only a single `index.php` file (previously `index.html`) which holds the entire frontend application (approximately 720 lines of code).
- The file uses standard HTML5 with Tailwind CSS loaded via CDN (`<script src="https://cdn.tailwindcss.com"></script>`).
- Styling and logic are inline (vanilla CSS and JavaScript).
- **Backend/Database:** The current code uses a hardcoded connection to Supabase (`supabase-js`) for backend functionality (e.g., storing quote requests, popups).
- **Admin System:** A hardcoded frontend admin panel exists within the single page using a static password.
- No Composer, npm, package.json, or Laravel structural files exist.

## 2. RECOMMENDED ARCHITECTURE
To meet the stringent requirement of using a scalable **Laravel + React + Tailwind** architecture, we must generate a new project from scratch while carefully porting the existing frontend design and assets from `index.php`.

**Proposed Tech Stack:**
- **Backend:** Laravel 11.x (PHP 8.2+)
- **Frontend:** React.js integrated via Laravel Breeze/Inertia.js or a standalone React SPA using Vite, communicating with Laravel APIs. (Given the requirements, a React SPA communicating via standard Laravel APIs is optimal).
- **Styling:** Tailwind CSS (configured locally, not via CDN).
- **Database:** MySQL.
- **Server:** Nginx/Apache.

## 3. DATABASE PLAN
We will create the following core MySQL tables through Laravel Migrations:
- `users` (For system admins)
- `services` (Web Dev, Mobile App Dev, etc.)
- `projects` (Portfolio)
- `leads` / `quote_requests` (For contact forms)
- `blog_posts`, `blog_categories`, `blog_tags`
- `case_studies`
- `seo_metadata`

## 4. LARAVEL API PLAN
We will implement RESTful JSON APIs structured around the required entities:
- `GET /api/services`
- `GET /api/projects`
- `POST /api/contact` (With form validation and email notification hooks)
- `GET /api/blog`
- **Admin Endpoints:** Guarded via Laravel Sanctum (e.g., `GET /api/admin/leads`, `POST /api/admin/projects`).

## 5. REACT PLAN
The existing `index.php` UI will be atomized into functional React components using Vite + React. 
- **Structure:** We will adopt a clean layout architecture separating `/pages`, `/components`, and `/admin`.
- **State Management:** React Context API or a lightweight state manager for admin sessions.
- **Routing:** React Router DOM will be used to manage `/about`, `/services`, `/contact`, and `/admin/*` routes dynamically without full page reloads.

## 6. ADMIN PLAN
We will rip out the existing static admin logic and rebuild it securely:
- Admin routes will be protected by React Router auth guards.
- Backend access requires a valid Laravel Sanctum Bearer Token.
- The Admin UI will allow managing Services, Projects, Leads, and SEO settings securely.

## 7. SEO/GEO PLAN
- **SEO Metadata:** A dynamic SEO component (`SeoMeta.jsx`) will inject standard Open Graph tags, canonical URLs, and schema markup per route.
- **Local SEO:** Content on service pages will be optimized for regional keywords (e.g., "Web development company in Chennai") while keeping the copy natural. Schema.org `LocalBusiness` structured data will be injected into the Homepage and Contact page.

## 8. THREE-MEMBER TASK DISTRIBUTION
Following the guidelines, the workflow is distributed:
- **Phase 1 (Audit):** Completed (Current Phase).
- **Phase 2 (Setup & API Contracts):** Member 1 (Backend) initiates a new Laravel project, configures the MySQL connection, and scaffolds Migrations/Seeders. Member 2 (Frontend) configures Vite, React, and Tailwind. Member 3 (QA) sets up the Admin route structure.
- **Phase 3 (Core Dev):** Backend logic and APIs are built. The frontend design from `index.php` is broken down and recreated in React.
- **Phase 4-6 (Integration & Testing):** APIs hooked up to React state, comprehensive end-to-end testing, followed by production deployment.

## 9. DEPENDENCIES
- PHP 8.2+ (needs to be verified on deployment environment)
- Composer
- Node.js & npm (for building the React/Tailwind frontend)
- MySQL Server

## 10. RISKS
- **Destructive File Replacements:** The existing `index.php` must NOT be deleted until its UI components are fully extracted and functional in React. We will rename it to `legacy_index.php` when the time comes to swap the main entry point.
- **Transition Downtime:** Currently, the app works as a single static file. Transitioning requires setting up a web server capable of running Laravel and routing properly.
