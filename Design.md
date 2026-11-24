# Design Specifications
## Project: Allround Dienstleistung GbR Website

### 1. Figma Reference
- **Figma Prototype Link**: [Figma Prototype (Node 5:2)](https://www.figma.com/proto/8oQ7A9MC7SqgnzfTHrnzPs/Untitled?node-id=5-2&p=f&t=X0rKL0M8DfzuZJli-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2&show-proto-sidebar=1)
- **Node ID**: `5:2`
- **Design Intent**: Professional, trustworthy, modern, and conversion-focused design reflecting high-grade German service and craftsmanship.

### 2. Color Palette & Exact Figma Design Tokens
```scss
// Brand Colors from Figma (Exact hex codes)
--color-navy: #10283d;             // Primary Dark / Headings / Hero Background
--color-green: #83c99a;            // Accent Highlight / Action Buttons / Bullets
--color-green-hover: #71b888;      // Hover state for green buttons
--color-mist: #f3f6f4;             // Subtle Section Background (Vertrauensleiste, Leistungen, Formular)
--color-border: #dae2de;           // Input borders, card dividers
--color-muted: #5c6d77;            // Secondary text, subheadings, labels
--color-white: #ffffff;            // Pure White background, card surface, inverse text

// Text Semantic Colors
--color-text-navy: #10283d;
--color-text-muted: #5c6d77;
--color-text-white: #ffffff;
--color-text-green: #83c99a;
```

### 3. Typography
- **Primary Typeface**: `Manrope`, sans-serif (Weights: Regular 400, Medium 500, SemiBold 600, Bold 700)
- **Hierarchy & Sizes (from Figma)**:
  - Hero Display Title: `76px`, line-height `1.12`, tracking `-2.28px` (Manrope SemiBold)
  - Section Headlines (01, 02, 03, 04): `44px` - `48px`, line-height `1.18`, tracking `-1.32px`
  - Subhead Numbers (01 / ÜBER UNS, etc.): `11px`, Bold, uppercase, tracking `1.32px`
  - Card Titles (Service Names): `22px`, SemiBold, line-height `1.6`
  - Form & Section Sub-titles: `24px` / `30px` (Phone number), SemiBold
  - Body Text: `14px` - `16px`, line-height `1.6`, Regular
  - Small Meta / Footnotes: `10px` - `12px`, line-height `1.6`, Medium / Regular
  - Buttons / CTA Labels: `14px`, Bold, line-height `1.45`

### 4. Layout Grid & Spacing
- **Container Max-Width**: `1280px`
- **Breakpoints**:
  - `sm`: 640px (large mobile)
  - `md`: 768px (tablets)
  - `lg`: 1024px (laptops/small desktop)
  - `xl`: 1280px (standard desktop)
  - `2xl`: 1536px (wide screens)
- **Spacing Steps**:
  - `xs`: 4px, `sm`: 8px, `md`: 16px, `lg`: 24px, `xl`: 32px, `2xl`: 48px, `3xl`: 64px, `4xl`: 96px

### 5. UI Elements & Micro-interactions
- **Navigation Header**:
  - Transparent on top of hero, transitions to glassmorphism backdrop blur on scroll (`background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px)`).
  - Prominent Call Button with phone icon and active hours badge.
  - Smooth mobile hamburger slide-out drawer.
- **Hero Section**:
  - Badge: "Ihr verlässlicher Partner in Weingarten & Umgebung"
  - Strong H1 headline highlighting all-round competence.
  - Conversion CTA buttons: "Jetzt anrufen" (Direct Tel link) + "Kostenloses Angebot" (Anchor jump to contact form).
  - Trust indicators: "100% Zuverlässig", "Faire Festpreise", "Schnelle Termine".
- **Service Cards (6 Core Services)**:
  - Card hover effect: Elevation lift `-6px`, subtle glow border, accent color indicator.
  - Icon badge container with soft rounded corners.
  - Bulleted list of included scope of work.
  - "Jetzt anfragen" action trigger linking directly to the quote form with pre-selected service.
- **Sticky Quick-Contact Bar (Mobile)**:
  - Bottom docked on mobile devices: Direct Call button + WhatsApp chat button for instant friction-free inquiry.
- **Animations**:
  - Scroll-triggered entrance animations (`fade-in`, `slide-up`) with `IntersectionObserver`.
  - Accessible animation support (`@media (prefers-reduced-motion: reduce)`).
