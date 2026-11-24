# Development & Coding Rules
## Project: Allround Dienstleistung GbR Website

### 1. General Principles
- **Clarity over Cleverness**: Write simple, readable, self-documenting code.
- **SOLID & DRY**: Adhere to SOLID software engineering principles. Keep components focused on a single responsibility.
- **Strict Typing**: No `any`. Utilize explicit interfaces, types, and readonly arrays where data is immutable.
- **No Over-Engineering**: Do not introduce external libraries or dependencies unless strictly necessary and approved.

### 2. Angular Standards
- **Component Architecture**:
  - Always use Standalone Components (`standalone: true`).
  - Always set `changeDetection: ChangeDetectionStrategy.OnPush`.
  - Prefer modern Angular Signals (`signal`, `computed`, `input`, `output`) over traditional RxJS subscriptions where local state suffices.
  - Template logic should remain minimal; computations belong in component TypeScript signals.
- **Naming Conventions**:
  - Components: `*Component` (e.g. `HeroSectionComponent`, `ServiceCardComponent`).
  - Files: kebab-case with role suffix (e.g. `service-card.component.ts`, `service-card.component.scss`).
  - Directives: `*Directive` (e.g. `ScrollAnimateDirective`).
  - Services: `*Service` (e.g. `ContactService`, `SeoService`).
  - Models/Interfaces: PascalCase without Hungarian prefix (e.g. `ServiceItem`, `ContactPayload`).
  - Selectors: kebab-case prefixed with `app-` (e.g. `app-service-card`, `app-header`).

### 3. Styling & Design Token Rules
- **Design Tokens**: All colors, typography sizes, border radiuses, and shadows must be defined in `src/styles/_variables.scss` and exposed as CSS custom properties (`--color-primary`, `--color-accent`, etc.).
- **No Hardcoded Values**: Never hardcode arbitrary hex colors or pixel spacings across component SCSS files.
- **Responsive Mobile-First**: Style using mobile-first CSS media queries (`@include media-up(md)`, `@include media-up(lg)`).
- **Smooth Animations**: Use GPU-accelerated CSS properties (`transform`, `opacity`) for transitions and animations.

### 4. German Language & Legal Compliance
- **Flawless German**: All public UI copy, button labels, form placeholders, error messages, and meta descriptions must use correct, professional German grammar and spelling.
- **Formatting Conventions**:
  - Phone: `+49 173 9074381` or `0173 9074381`
  - Currency: `€` placed after the amount (e.g., `ab 49 €`)
  - Date format: `DD.MM.YYYY`
- **DSGVO / GDPR Compliance**:
  - Self-host all fonts and assets (zero Google Fonts CDN calls).
  - Explicit privacy checkbox on contact forms.
  - Impressum and Datenschutzerklärung accessible in 1-click from any viewport.

### 5. Git & AI Development Rules
- **Read Docs First**: Always review `PRD.md`, `Architecture.md`, `Rules.md`, `Design.md`, `Tasks.md`, and `Memory.md` before starting any task.
- **Sync Documentation**: Whenever a design, architectural decision, or implementation detail changes, update `Tasks.md` and `Memory.md` immediately.
- **Incremental Verification**: Keep the project buildable and error-free at every stage. Never mark a task complete without running tests or build verification.
- **Conventional Commits**:
  - `feat:` new feature or user-facing functionality
  - `fix:` bug fix
  - `style:` visual or layout adjustments (no business logic changes)
  - `docs:` documentation updates
  - `refactor:` code reorganization without functional changes
- **Zero Hallucination**: Never invent business facts, address details, or pricing without confirmation. If something is missing in Figma or specs, ask the user.
