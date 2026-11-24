# Task Checklist
## Project: Allround Dienstleistung GbR Website

### Phase 1: Inspection & Environment Readiness
- [x] Inspect existing workspace repository
- [x] Inspect developer tooling (Git, Node.js v24.19.0, npm 11.17.0, Angular CLI 22.1.3)
- [x] Inspect Figma design reference (`https://www.figma.com/proto/8oQ7A9MC7SqgnzfTHrnzPs/Untitled?node-id=5-2`)
- [x] Initialise Git repository and setup comprehensive `.gitignore`

### Phase 2: Requirements Analysis & Documentation
- [x] Extract full design tokens, hierarchy, and copy from Figma node `5:2`
- [x] Create `PRD.md` with complete business scope, personas, and services
- [x] Create `Architecture.md` with component tree, signals, routing, and Supabase roadmap
- [x] Create `Rules.md` with coding standards, naming conventions, and compliance rules
- [x] Create `Design.md` with Figma specs, color tokens, typography, and micro-interactions
- [x] Create `Tasks.md` implementation checklist
- [x] Create `Memory.md` decision ledger and confirmed facts
- [x] Present documentation and architectural plan to user for formal approval

### Phase 3: Angular Project Initialization
- [x] Initialize clean Angular application with standalone components and SCSS
- [x] Configure TypeScript strict mode and path aliases
- [x] Download and organize all Figma photography assets in `public/assets/images/`
- [x] Configure self-hosted Manrope typography and design tokens
- [x] Setup initial routing structure (`/`, `/impressum`, `/datenschutz`)
- [x] Create core service models (`ServiceItem`, `ContactRequest`) and abstract service layer (`ContactService`, `ServicesCatalogService`)
- [x] Verify production compilation with `ng build`

### Phase 4: Global Styling & Design System
- [x] Implement design tokens in `src/styles/_variables.scss`
- [x] Implement responsive typography and mixins (`_typography.scss`, `_mixins.scss`, `_animations.scss`)
- [x] Build reusable UI atoms: `ButtonComponent`, `CardComponent` (`ServiceCardComponent`, `ValueCardComponent`), `BadgeComponent`
- [x] Create scroll animation directive (`ScrollAnimateDirective`)
- [x] Verify production build passes cleanly

### Phase 5: Feature & Section Development
- [x] Build Header & Navigation Component with logo, desktop links, and mobile drawer
- [x] Build Hero Section with background photography, gradient overlay, Standort badge, and dual CTAs
- [x] Build Vertrauensleiste (Trust banner) with 3 core benefits
- [x] Build 01 / Über uns Section with narrative copy and service promise badge
- [x] Build 02 / Unsere Leistungen Section with 6 detailed interactive service cards:
  - [x] Kurierfahrten
  - [x] Entrümpelungen
  - [x] Umzüge
  - [x] Hausmeisterservice
  - [x] Reinigungsarbeiten
  - [x] Gartenpflege
- [x] Build 03 / Warum Allround Values Section with 4 core value cards
- [x] Build 04 / Kontakt Section with direct telephone, WhatsApp button, and interactive inquiry form
- [x] Build Footer Component with brand details, contact info, "Nach oben ↑", and legal links
- [x] Build Legal Pages (Impressum & Datenschutzerklärung)
- [x] Build Floating Mobile Quick Contact Bar (Direct Call & WhatsApp)

### Phase 6: Navigation, Interactions & Refinement
- [x] Implement smooth fragment anchor scrolling for header links
- [x] Build sticky mobile Quick Contact Bar (Direct Call & WhatsApp)
- [x] Implement contact form validation, German error states, and feedback triggers
- [x] Connect form submission to mailto / WhatsApp message generator
- [x] Implement Modern Signal-Based Multilingual Translation (DE | EN)
- [x] Refine copy and German/English SEO content using `/copywriting`, `/content-strategy`, and `/seo-audit` skills
- [x] Add Schema.org JSON-LD LocalBusiness structured data, robots.txt, and sitemap.xml
- [x] Design official brand logo system in Figma (`Allround · Logo System` node `19:330` with primary light, inverted dark, transparent minimal, and app-icon variants)
- [x] Export production SVG logo assets (`logo.svg`, `logo-white.svg`, `logo-mark.svg`, `favicon.svg`) and integrate into Angular Header, Footer, and Favicon

### Phase 7: Responsive Layout QA
- [ ] Mobile viewport audit (360px – 480px)
- [ ] Tablet viewport audit (768px – 1024px)
- [ ] Desktop viewport audit (1280px – 1920px)

### Phase 8: Testing, Accessibility & SEO
- [ ] Audit keyboard accessibility and ARIA roles
- [ ] Validate German semantic SEO tags and JSON-LD LocalBusiness schema
- [ ] Run production build (`ng build`) and check bundle size
- [ ] Test form submission flows and interactive states

### Phase 9: Figma Prototype Visual Review
- [ ] Cross-check all sections against Figma prototype
- [ ] Refine spacing, typography, colors, and hover micro-animations

### Phase 10: Git Commit & Final Presentation
- [ ] Clean up temporary files
- [ ] Stage and commit all code with conventional commit messages
- [ ] Prepare handoff documentation for user
