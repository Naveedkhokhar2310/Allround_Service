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
- **Service Catalog**: Managed via an immutable, strongly-typed `ServicesCatalogService` supplying service descriptions, feature lists, pricing notes, and iconography.
- **Contact & Inquiry Handling**:
  - `ContactService` defines an abstract interface `IContactService`.
  - Initial implementation: `LocalContactService` (handles validation, client-side submission state, mailto / WhatsApp generation).
  - Future implementation: `SupabaseContactService` seamlessly substituted via Angular's dependency injection (`provide: CONTACT_SERVICE, useClass: SupabaseContactService`).

### 4. Future Supabase Integration Blueprint
When backend capabilities are introduced:
1. **Supabase Client Provider**:
   - `provideSupabaseClient()` token injecting `@supabase/supabase-js`.
2. **Database Tables**:
   - `leads` (id, created_at, full_name, phone, email, service_type, message, status).
   - `service_reviews` (id, author, rating, comment, date, approved).
3. **Storage Bucket**:
   - For customer image uploads during quotation (e.g. photos of clearance / moving items).
4. **Edge Functions / SMTP**:
   - Instant email/SMS notification to GbR management upon new quote submission.

### 5. Performance & Accessibility (a11y)
- Zero bulky external CSS frameworks (no Bootstrap/Tailwind bloat unless specifically requested; custom lightweight SCSS design token system).
- Native HTML form controls enhanced with accessibility labels, aria-describedby for validation messages.
- Image lazy loading with `NgOptimizedImage` and explicit width/height to eliminate layout shifts.
- Accessible color contrast ratios meeting WCAG 2.1 AA standards.
