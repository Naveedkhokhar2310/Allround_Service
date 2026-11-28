# Architecture Documentation
## Project: Allround Dienstleistung GbR Website

### 1. Architecture Overview
The application is built using the latest stable **Angular** framework with modern best practices:
- **Standalone Components** throughout the application (no legacy `NgModule` boilerplate).
- **Angular Signals** (`signal`, `computed`, `effect`) for fine-grained, reactive state management.
- **OnPush Change Detection** (`ChangeDetectionStrategy.OnPush`) on all components for optimal rendering performance.
- **Strict TypeScript** typing with no implicit `any`.
- **Modular Directory Structure** separating Core, Shared, Features, and Layout.

```
src/
├── app/
│   ├── core/                  # Singleton services, models, tokens, global interceptors
│   │   ├── models/            # ServiceItem, ContactRequest, QuoteCalculation models
│   │   ├── services/          # ContactService, SeoService, Analytics/Logger
│   │   └── tokens/            # Injection tokens (e.g., API config)
│   ├── shared/                # Reusable dumb/presentational UI components & directives
│   │   ├── components/        # Button, Card, Badge, Icon, Modal, Accordion
│   │   ├── directives/        # IntersectionObserver (scroll animations), SmoothScroll
│   │   └── pipes/             # PhoneFormatPipe, SafeHtmlPipe
│   ├── layout/                # Structural application shell components
│   │   ├── header/            # Sticky navigation bar with mobile drawer
│   │   ├── footer/            # Footer with legal links, contact, service links
│   │   └── quick-action-bar/  # Sticky mobile call & WhatsApp conversion bar
│   ├── features/              # Feature sections and page views
│   │   ├── home/              # Main landing page assembling sections:
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── about/
│   │   │   ├── process/
│   │   │   ├── area/
│   │   │   ├── reviews/
│   │   │   └── contact-quote/
│   │   └── legal/             # Legal pages
│   │       ├── impressum/
│   │       └── datenschutz/
│   ├── app.component.ts       # Root shell
│   ├── app.config.ts          # Application providers and router setup
│   └── app.routes.ts          # Route definitions
├── assets/                    # Static assets, local optimized images, SVGs, icons
└── styles/                    # Global SCSS styles & tokens
    ├── _variables.scss        # Design tokens: colors, spacing, shadows, radius
    ├── _typography.scss       # Font sizes, font weights, line heights
    ├── _animations.scss       # Keyframes, transitions, entrance animations
    ├── _mixins.scss           # Media query breakpoints, flex/grid helpers
    └── styles.scss            # Global entrypoint & CSS resets
```

### 2. Component Design & State Management
- **Dumb (Presentational) vs. Smart (Container) Components**:
  - Presentational components take `input()` signals and emit `output()` events.
  - Container components manage feature state and inject services.
- **Scroll & Navigation Strategy**:
  - Angular Router with `scrollPositionRestoration: 'enabled'` and `anchorScrolling: 'enabled'`.
  - In-page navigation with smooth fragment scrolling for one-page landing experience: `#dienstleistungen`, `#ueber-uns`, `#ablauf`, `#kontakt`.
  - Independent routed views for `/impressum` and `/datenschutz`.

### 3. Data Flow & Service Layer
- **Multilingual / i18n Architecture**:
  - `TranslationService` provides reactive, signal-based translation (`currentLang: Signal<LangCode>`, `t: Signal<TranslationSchema>`).
  - Dictionaries (`de.ts`, `en.ts`) are strictly typed against `TranslationSchema`.
  - In-place instant language switching with zero page reload, synchronized with `localStorage` and `document.documentElement.lang`.
- **Service Catalog**: Managed via strongly-typed `ServicesCatalogService` combining the reactive translation schema with photography asset paths.
- **Contact & Inquiry Handling**:
  - `ContactService` (`src/app/core/services/contact.service.ts`) initializes the `@supabase/supabase-js` client from `src/environments/environment.ts` (and `environment.prod.ts` for production builds).
  - `submitInquiry()` validates required fields and GDPR consent, then inserts the enquiry into the Supabase `public.leads` table.
  - Also provides direct WhatsApp (`getWhatsAppUrl()`) and `mailto:` (`getMailtoUrl()`) helpers.

### 4. Implemented Backend & Email Notification Architecture (Supabase + Brevo)
1. **Supabase Client & Environment Configuration**:
   - `@supabase/supabase-js` configured via `src/environments/environment.ts` and `src/environments/environment.prod.ts` (switched automatically during production build via `angular.json` `fileReplacements`).
   - Graceful fallback simulation if environment credentials are not configured.
2. **Database Table & Row-Level Security (RLS)**:
   - `public.leads` (`id`, `created_at`, `full_name`, `email`, `phone`, `service_type`, `message`, `consent`, `status`).
   - RLS enabled: anonymous website visitors (`anon` role) have **INSERT-only** access; `SELECT`, `UPDATE`, and `DELETE` are restricted to authenticated admins.
3. **Email Notifications via Brevo (Supabase Database Webhook + Edge Function)**:
   - A Supabase Database Webhook listens for `INSERT` events on `public.leads` and invokes a Supabase Edge Function.
   - The Edge Function reads the `BREVO_API_KEY` from Supabase Edge Function Secrets (never exposed to the client) and calls the Brevo Transactional Email API (`https://api.brevo.com/v3/smtp/email`).
   - Sends an HTML notification email to the company inbox with `replyTo` set to the customer's submitted email address (`record.email`) for one-click replies.
4. **Future Enhancements**:
   - `service_reviews` table and Supabase Storage bucket for customer photo uploads during quotation.

### 5. Performance & Accessibility (a11y)
- Zero bulky external CSS frameworks (no Bootstrap/Tailwind bloat unless specifically requested; custom lightweight SCSS design token system).
- Native HTML form controls enhanced with accessibility labels, aria-describedby for validation messages.
- Image lazy loading with `NgOptimizedImage` and explicit width/height to eliminate layout shifts.
- Accessible color contrast ratios meeting WCAG 2.1 AA standards.
