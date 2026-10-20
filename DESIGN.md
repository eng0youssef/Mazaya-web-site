---
name: Mazaya Sovereign Enterprise
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#41474e'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#71787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#2a638b'
  primary: '#003655'
  on-primary: '#ffffff'
  primary-container: '#0b4e75'
  on-primary-container: '#8bbfec'
  inverse-primary: '#98ccf9'
  secondary: '#775a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdc834'
  on-secondary-container: '#6f5400'
  tertiary: '#15354f'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e4c67'
  on-tertiary-container: '#9ebcdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#98ccf9'
  on-primary-fixed: '#001e31'
  on-primary-fixed-variant: '#044b72'
  secondary-fixed: '#ffdf97'
  secondary-fixed-dim: '#f3bf2b'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4400'
  tertiary-fixed: '#cee5ff'
  tertiary-fixed-dim: '#abcaea'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#2b4964'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-xs:
    fontFamily: IBM Plex Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets modern enterprises, financial institutions, and government-tier operators across the MENA region. The core aesthetic synthesizes institutional trust with high-tempo SaaS precision—evoking the structural rigor of Linear paired with the authoritative polish of global financial infrastructure. 

The visual personality hinges on three cornerstones:
- **Sovereign Trust & Precision:** Engineered layouts, micro-borders, and disciplined information density that reassure CFOs, enterprise architects, and operational leads.
- **Economic Prosperity & Momentum:** High-contrast Golden-Yellow micro-accents symbolizing liquidity, coin stacks, and key inflection points, anchored against deep maritime depths.
- **Bi-Directional Fluency:** Native, uncompromising RTL-first mechanics seamlessly matching LTR parity for multi-currency, multi-jurisdiction enterprise resource planning.

The design movement is **Modern High-Precision Corporate**: surgical hair-line borders, subtle cool ice-blue surface stepped tiers, crisp micro-data visualization, and controlled focal highlights.

## Colors

The palette establishes an immediate hierarchy of enterprise security backed by strategic golden focal points:

- **Primary (`#0B4E75`):** Deep Sovereign Slate Blue. Serves as the primary operational anchor—used for primary navigation headers, dominant buttons, key active states, and authoritative typography tiers.
- **Secondary (`#F3BF2B`):** Vibrant Golden-Yellow. Dedicated exclusively to growth metrics, conversion conversion points, pending alerts, coin stack accents, and critical action calls. It is paired with `#0F172A` text when used on interactive fills to ensure WCAG AAA compliance.
- **Tertiary (`#032841`):** Midnight Abyss. Employed for high-density navigation rails, terminal panels, and maximum-contrast structural framing.
- **Neutral Palette:**
  - Base Dark: `#0F172A` (Slate 900) for sharp, fatigue-free data legibility.
  - Subdued Text: `#475569` (Slate 600) for secondary metadata, ledger sub-labels, and column titles.
  - Ice Tints: `#F0F7FB` (Slate/Ice 50) and `#F8FAFC` (Slate 25) for layered data grid strips, active row highlights, and canvas backgrounds.
  - Borders: `#E2E8F0` with subtle `#0B4E7514` (8% tint) overlays to reinforce structure.

## Typography

The type system prioritizes structural alignment between Arabic and Latin scripts via `IBM Plex Sans` (with runtime Arabic extension fallback). This pairing provides engineering precision with balanced x-heights and baseline metrics across multi-lingual financial ledgers.

- **Numerals:** Financial tables and balance tallies enforce tabular figures (`tnum`) to maintain vertical column integrity across fluctuating Arabic and Western numerals.
- **RTL Rhythm:** Line heights for Arabic copy are standardized to 1.35–1.5x font size to accommodate Arabic diacritics and ascenders/descenders without vertical clipping.
- **Micro-Labels:** Metadata, status counters, and table headers use semi-bold to bold weights (`600`/`700`) to guarantee contrast even at 10px–12px on high-density displays.

## Layout & Spacing

The layout model implements a structured 12-column fluid grid designed for mission-critical ERP consoles, analytics dashboards, and operational flows:

- **Breakpoints & Layout:**
  - **Desktop (1440px+):** 12-column grid, 24px (`1.5rem`) gutters, 32px (`2rem`) outer margin. Side navigation persistent at 280px.
  - **Tablet (768px - 1439px):** 8-column grid, 16px (`1rem`) gutters, 24px (`1.5rem`) outer margin. Navigation collapses to a vertical icon rail (72px).
  - **Mobile (< 768px):** 4-column fluid layout, 12px gutters, 16px (`1rem`) outer margin. Off-canvas drawer navigation.
- **RTL Fluidity:** Margin and padding logic must strictly use logical CSS properties (`padding-inline-start`, `margin-inline-end`). Data columns start strictly from the right in Arabic contexts, with monetary signs anchored inline with script progression.

## Elevation & Depth

Visual hierarchy uses a refined hybrid approach: low-contrast geometric outlines paired with cool, ambient-tinted shadows to prevent visual fatigue during long sessions.

- **Level 0 (Base Canvas):** `#F8FAFC` (Slate 25). Recessed or flat background for entire workspace canvas.
- **Level 1 (Cards & Data Panels):** `#FFFFFF` fill with a dual perimeter:
  - 1px border: `#E2E8F0` with a hint of deep blue (`rgba(11, 78, 117, 0.08)`).
  - Ambient Shadow: `0 1px 3px 0 rgba(11, 78, 117, 0.04), 0 1px 2px -1px rgba(11, 78, 117, 0.02)`.
- **Level 2 (Popovers, Dropdowns & Flyouts):** `#FFFFFF` fill, crisp 1px border (`#CBD5E1`), shadow: `0 10px 15px -3px rgba(11, 78, 117, 0.08), 0 4px 6px -4px rgba(11, 78, 117, 0.04)`.
- **Level 3 (Modals & Sovereign Dialogs):** `#FFFFFF` fill, backdrop blur `8px` overlaid with `rgba(3, 40, 65, 0.40)` (Midnight Abyss), shadow: `0 20px 25px -5px rgba(11, 78, 117, 0.14), 0 8px 10px -6px rgba(11, 78, 117, 0.08)`.

## Shapes

The design system uses a curated `rounded-2xl` structural standard for its macro containers, balanced with tighter radii for internal data components to maintain enterprise density:

- **Macro Containers (Cards, Sheet Panels, Modals):** Scaled at `rounded-2xl` (16px to 24px) for a soft, humanized, modern enterprise posture.
- **Action Elements (Buttons, Inputs, Selectors):** Standardized at `0.5rem` (8px) to project operational stability and maintain click-target precision.
- **Indicators & Badges:** Rounded pills (`9999px`) for numeric badges, micro-status tags, and state pills.

## Components

### Buttons
- **Primary Sovereign:** Background `#0B4E75`, text `#FFFFFF`, 8px radius, horizontal padding `1.25rem`, vertical padding `0.625rem`. Hover state transitions to `#083B59` with a subtle elevation shift. Focus ring: 2px offset with `#F3BF2B`.
- **Golden Growth (CTA / Conversion):** Background `#F3BF2B`, text `#0F172A`, font-weight `600`. Hover state `#DEAA20`. Reserved for high-value workflow milestones (e.g., "Confirm Transaction", "Generate VAT Invoice").
- **Secondary / Ghost:** Transparent surface with 1px border `#CBD5E1`, text `#0F172A`. Hover: `#F0F7FB` background with text `#0B4E75`.

### Input Fields & Controls
- **Form Inputs:** 40px height, background `#FFFFFF`, border 1px solid `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`. RTL alignment auto-detected with trailing contextual action/currency labels (e.g., "ر.س" or "SAR") pinned to the left edge in RTL.
- **Active State:** Focus states trigger border color `#0B4E75` with a 3px outer glow `rgba(11, 78, 117, 0.12)`.
- **Checkboxes & Radios:** 18px square/circle, border `#94A3B8`. Checked state transitions to `#0B4E75` fill with a crisp white glyph.

### Cards & Grid Modules
- **Modular ERP Card:** Fill `#FFFFFF`, 16px radius (`rounded-2xl`), 1px border `#E2E8F0`. Includes a 4px top accent border option utilizing `#0B4E75` or `#F3BF2B` for prioritized summary metric cards.
- **Growth Badge:** Embedded within metric cards—displays a directional growth-arrow motif with positive delta percentages styled with `#10B981` text over a subtle `rgba(16, 185, 129, 0.1)` surface.

### Chips & Micro-Badges
- **Status Chips:** Pill shape (`9999px`), 4px vertical padding, 10px horizontal padding.
  - *Active / Cleared:* Surface `#ECFDF5`, text `#047857`.
  - *Pending / Audit:* Surface `#FEF9C3`, text `#854D0E` with golden-yellow accent indicator.
  - *Critical / Frozen:* Surface `#FEF2F2`, text `#B91C1C`.
  - *Draft / Neutral:* Surface `#F1F5F9`, text `#475569`.

### Specialized ERP Components
- **Bilingual Ledger Header:** Sticky table header row colored in `#F8FAFC` with 1px solid divider `#E2E8F0`, displaying labels in primary Arabic with secondary Latin mini-subtexts.
- **Currency Stacking Cluster:** Displays primary sovereign balance in large tabular numerals accompanied by localized currency badges and floating growth-arrow indicators.