# Latest Changes

## 2026-03-19

### Fix: Mobile Leadership Cards Blank (decdfb2)
- Resolved a hydration race condition in `AnimatedSection.tsx` where the Intersection Observer fired before the DOM was ready, causing leadership cards to appear blank on mobile devices.

### Complete Site Redesign (d5c591d)
A comprehensive visual and structural overhaul of the portfolio site:

- **Typography & Color System** — New type scale and cohesive color tokens throughout
- **Dark/Light Mode** — Added `ThemeProvider.tsx` and `ThemeToggle.tsx` for full theme switching support
- **Hero & Navigation** — Redesigned hero section and nav layout
- **Animations** — New `AnimatedHeading.tsx` and `AnimatedSection.tsx` components for scroll-triggered reveals
- **New Sections/Components:**
  - `StatsStrip.tsx` — Key metrics display strip
  - `VoicesSection.tsx` — Testimonials/social proof section
- **`globals.css`** — Major styling overhaul (+1,709 lines), centralizing design tokens and utility classes
- **`portfolio.ts`** — Updated portfolio data and structure

## 2026-03-18

### Portfolio Copy & Source Scanning (073b361)
- Updated executive portfolio copy
- Improved source scanning configuration

### Homepage Reading Order (9ef6b58)
- Restructured homepage content hierarchy for better reading flow and comprehension

## 2026-03-16

### Portfolio Copy Refinements (250755e, 8024ee3)
- Refined copy for staging review
- Refreshed executive portfolio staging site content

### UI Polish (4eb10a2, 4cb8471, cc53d90)
- Refined footer link and F500 popup layout
- Expanded career section with F500 industry hover interaction
- Polished contact link and form field styling

## 2026-03-15

### Accessibility & Contrast (200ad97)
- Improved About box typography
- Enhanced contact input contrast for better readability
