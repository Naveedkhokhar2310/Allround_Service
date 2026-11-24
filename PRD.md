# PRD (Product Requirements Document)
## Project: Allround Dienstleistung GbR Website

### 1. Executive Summary & Business Overview
- **Company Name**: Allround Dienstleistung GbR
- **Location**: Weingarten, Baden-Württemberg, Germany
- **Contact Phone**: +49 173 9074381
- **Primary Market**: Weingarten, Ravensburg, and the wider Bodensee-Oberschwaben region
- **Primary Language**: German (DE)

Allround Dienstleistung GbR is a multi-disciplinary service provider offering dependable, high-quality, and prompt services for private households, property managers (Hausverwaltungen), and commercial enterprises.

### 2. Core Service Portfolio
The website must showcase 6 primary services with dedicated value propositions, key service bullets, and immediate inquiry triggers:
1. **Kurierfahrten** (Courier & Express Deliveries):
   - Fast, reliable point-to-point document and cargo transport.
   - Punctual delivery with flexible booking for urgent business and private requirements.
2. **Entrümpelungen** (Clearance & Decluttering):
   - Comprehensive clearances: apartments, houses, basements, attics, commercial properties.
   - Eco-friendly waste separation and certified disposal.
   - Broom-clean handover ("Besenreine Übergabe").
3. **Umzüge** (Relocations & Moving Services):
   - Stress-free private and office moves.
   - Careful loading, transport, and disassembly/reassembly assistance.
   - Insured transport of furniture and valuables.
4. **Hausmeisterservice** (Caretaker & Facility Management):
   - Continuous property maintenance and inspection for landlords and businesses.
   - Small repairs, technical monitoring, and building upkeep.
   - Key management and seasonal services.
5. **Reinigungsarbeiten** (Professional Cleaning Services):
   - Residential, commercial, staircase (Treppenhausreinigung), and final deep cleaning.
   - High hygiene standards with professional equipment and biodegradable cleaning agents.
6. **Gartenpflege** (Garden & Outdoor Maintenance):
   - Lawn mowing, hedge trimming, weed removal, seasonal green waste disposal.
   - Complete outdoor care ensuring curb appeal year-round.

### 3. Target Audience & Personas
- **Persona A: Private Homeowners & Tenants**
  - Need reliable, immediate help with moves, garden maintenance, or clearing out basements/estates.
  - Key decision factors: Trustworthiness, punctuality, fair transparent pricing, ease of contact.
- **Persona B: Property Managers & Landlords (Hausverwaltungen)**
  - Seek dependable long-term partners for regular staircase cleaning, caretaker maintenance, and turnkey apartment clearances between tenants.
  - Key decision factors: Punctuality, reliability, proper invoicing, single point of contact.
- **Persona C: Local Businesses & Commercial Clients**
  - Need ad-hoc courier deliveries, office relocations, or facility maintenance.
  - Key decision factors: Speed, insured execution, flexibility.

### 4. Goals & Success Metrics
- **Primary Goal**: Turn visitors into phone calls and written service requests (Leads).
- **Key Conversion Actions**:
  - Direct Phone Call: `tel:+491739074381`
  - WhatsApp Quick Chat
  - Online Quote Inquiry / Contact Form submission
- **Performance Targets**:
  - Google Lighthouse Score > 90 across Performance, Accessibility, Best Practices, and SEO.
  - Fast First Contentful Paint (< 1.2s) and Cumulative Layout Shift (< 0.05).
  - Mobile-first responsiveness across all viewport sizes (360px to 4K).

### 5. Functional Requirements
- **Hero Section**: Catchy value proposition, trust badges ("Zuverlässig • Pünktlich • Regional"), dual primary CTAs (Call Now, Request Free Quote), and emergency availability highlight.
- **Services Showcase**: Detailed, visually rich cards for all 6 core services with modal or accordion expansions for scope of work.
- **Why Choose Us (Vorteile)**: Key differentiators: Besenreine Übergabe, Festpreisgarantie / Faire Preise, Schnelle Reaktionszeit, Regional & Nah.
- **Process Steps (Ablauf in 3-4 Schritten)**:
  1. Unverbindliche Anfrage (Phone, WhatsApp, Form)
  2. Kostenlose Besichtigung / Beratung
  3. Faires Angebot
  4. Zuverlässige Ausführung
- **Service Area (Einsatzgebiet)**: Visual coverage list/map (Weingarten, Ravensburg, Friedrichshafen, Biberach, and surrounding areas).
- **Interactive Contact & Quote Request Form**: Multi-step or structured form allowing users to select service type, location, date, and description.
- **Sticky Contact Bar (Mobile)**: Floating bottom bar on mobile viewports for one-tap calling and WhatsApp messaging.
- **Legal & Compliance**: Full compliance with German TMG and DSGVO (Impressum, Datenschutzerklärung, Cookie-free or compliant consent).

### 6. Non-Functional Requirements
- Semantic HTML5 for screen readers and search engines.
- Optimized images in WebP format with responsive srcset.
- Structured data (Schema.org JSON-LD `LocalBusiness`, `ProfessionalService`).
- No external unconsented tracking or third-party web fonts that violate DSGVO.
- Ready for future Supabase integration without frontend rewrites.
