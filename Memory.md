# Project Memory & Decisions Ledger
## Project: Allround Dienstleistung GbR Website

### 1. Confirmed Business Facts
- **Business Name**: Allround Dienstleistung GbR
- **Headquarters / Location**: Weingarten, Baden-Württemberg, Germany
- **Contact Phone**: `+49 173 9074381`
- **Primary Language**: German (`de-DE`)
- **Core 6 Services**:
  1. Kurierfahrten (Courier & express logistics)
  2. Entrümpelungen (Clearances, liquidations, decluttering)
  3. Umzüge (Private & commercial moves)
  4. Hausmeisterservice (Caretaker & property maintenance)
  5. Reinigungsarbeiten (Professional cleaning services)
  6. Gartenpflege (Garden maintenance & landscaping care)

### 2. Confirmed Technical Choices
- **Framework**: Angular (latest standalone components architecture)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: SCSS with CSS custom properties design tokens, mobile-first responsive architecture
- **State & Reactivity**: Angular Signals (`signal`, `computed`), `ChangeDetectionStrategy.OnPush`
- **Backend**: None initially; abstract service layer prepared for seamless future Supabase integration (database, storage, auth, leads)
- **Compliance**: Full DSGVO / German TMG compliance (local fonts, cookie-less or compliant, Impressum and Datenschutzerklärung)
- **Version Control**: Git initialized, conventional commit convention

### 3. Confirmed Figma Design Tokens & Specifications (Node 5:2)
- **Figma File Key**: `8oQ7A9MC7SqgnzfTHrnzPs`
- **Node ID**: `5:2` ("Desktop · Allround")
- **Color Tokens**:
  - `--color-navy`: `#10283d` (Deep Slate / Navy)
  - `--color-green`: `#83c99a` (Soft Sage / Accent Green)
  - `--color-mist`: `#f3f6f4` (Light background tint)
  - `--color-border`: `#dae2de` (Delicate gray-green border)
  - `--color-muted`: `#5c6d77` (Muted slate text)
  - `--color-white`: `#ffffff`
- **Typography**: `Manrope` (Regular 400, Medium 500, SemiBold 600, Bold 700)
- **Exact Layout Structure**:
  1. Header / Navigation: Logo ("allround DIENSTLEISTUNG GbR"), Links ("Über uns", "Leistungen", "Warum Allround"), CTA Button ("Kontakt aufnehmen →")
  2. Hero Section: Dark navy with background photo & linear gradient, Standort badge ("● IHR ALLROUND-SERVICE IN WEINGARTEN"), Title ("Ein Ansprechpartner. Viele Lösungen."), Subtitle, CTAs ("Unverbindlich anfragen →", "Leistungen entdecken →"), Bottom bar ("Persönlich vor Ort. Mit Sorgfalt erledigt.", "WEITER ENTDECKEN ↓")
  3. Vertrauensleiste: "✓ Ein Ansprechpartner", "✓ Flexible Lösungen", "✓ Für Privat & Gewerbe"
  4. 01 / ÜBER UNS: Photo Umzüge, Title ("Viel zu tun? Wir sind für Sie da."), Description, Service promise
  5. 02 / UNSERE LEISTUNGEN: Title ("Was ansteht. Wir packen es an."), 6 Service cards (Kurierfahrten, Entrümpelungen, Umzüge, Hausmeisterservice, Reinigungsarbeiten, Gartenpflege)
  6. 03 / WARUM ALLROUND: Dark navy, 4 core values (01 / Auf uns ist Verlass., 02 / So flexibel wie Ihr Alltag., 03 / Sorgfalt in jedem Detail., 04 / Persönlich statt anonym.)
  7. 04 / KONTAKT: Left contact info (+49 173 9074381, WhatsApp button, Weingarten) + Right contact form ("Ihr Anliegen. Unser nächster Schritt.") with GDPR consent checkbox
  8. Footer: Brand, contact info, "Nach oben ↑", Copyright, Impressum & Datenschutz links

### 4. Current Status
- Phase 1 (Inspection & Git init), Phase 2 (Documentation & Figma design extraction), Phase 3 (Angular project initialization, assets, routing, design tokens), Phase 4 (Reusable UI components & animation directives), and Phase 5 (Homepage and all website sections implementation) are fully COMPLETED.
- Bug Fix Applied: Fixed button text visibility by passing explicit `label` input signal to `ButtonComponent` (bypassing Angular's static `<ng-content>` drop inside conditional `@if` blocks) and ensuring `.allround-btn` class preservation.
- Graphify removed: Added `graphify-out/` and `.agents/` to `.gitignore` per user request and cleaned up workspace.
- The development server is currently running live on `http://localhost:4200/`.
- All Figma sections (Header, Hero, Vertrauensleiste, Über uns, 6 Service Cards, Warum Allround, Kontakt form, Footer, Mobile floating bar) are live.
- Ready for Phase 6: Navigation, interactions, and final QA refinements.

### 5. Open Questions / Items for User
1. Do you have a company logo file (SVG/PNG) or would you like us to generate a clean, modern SVG typographic emblem for "Allround Dienstleistung GbR"?
2. Do you have specific imagery of your vehicles, tools, or team in Weingarten, or should we curate high-resolution, realistic German craftsmanship and service photography?
3. Would you like to connect the Figma plugin (`antigravity-plugins-partners/plugin/figma`) or provide Figma personal access token / screenshots to inspect any hidden prototype variant states?
