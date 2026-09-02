# Eagle Dumpster - Design System

**Direction:** C + A - "Rojo de emergencia" con badge de disponibilidad pulsante
**Personality:** urban_edgy (primary), trustworthy_solid (secondary)
**Theme:** Dark mode only (near-black)

---

## Prohibitions

- NO hex colors outside of the 7 tokens + #DC2626 (error). Every color must reference a CSS variable.
- NO default Tailwind color classes (`bg-blue-600`, `text-gray-500`, `border-slate-200`, etc.). Only `bg-bg`, `bg-surface`, `bg-primary`, `text-text`, `text-text-muted`, `text-on-primary`, `border-border`.
- NO `rounded-lg`, `rounded-xl`, `rounded-2xl` or any default Tailwind radius. Radius is 0px - all corners are sharp. The only exception is `rounded-full` for the availability badge dot.
- NO default Tailwind shadows (`shadow-md`, `shadow-lg`). No shadows at all in this design - separation is achieved through color difference (bg vs surface) and borders.
- NO `framer-motion` import. Motion budget is CSS-only with IntersectionObserver for scroll reveals.
- NO `font-family` outside of `var(--font-heading)`, `var(--font-body)`, `var(--font-mono)`.
- NO em-dashes anywhere in copy or code.
- NO Inter, Roboto, Arial, Open Sans, Helvetica, Plus Jakarta Sans.
- NO rounded corners. This brand is angular. Every container, card, button, and input has sharp 0px radius.
- NO soft shadows, no glassmorphism, no blur effects on cards.
- NO light backgrounds. The entire site is dark.

---

## Tokens

Source of truth: `tokens.css`

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #0C0C0C | Page background, main canvas - near-black |
| `--color-surface` | #1C1C1C | Cards, elevated blocks, alternate section backgrounds |
| `--color-primary` | #E31B1B | CTAs, red bands, availability badge, active states, urgency signals |
| `--color-on-primary` | #FFFFFF | Text on primary-colored elements |
| `--color-text` | #FFFFFF | Headings, body text, primary content |
| `--color-text-muted` | #A1A1AA | Secondary text, descriptions, captions |
| `--color-border` | #2E2E2E | Dividers, card borders, section separators |
| `--color-error` | #DC2626 | Form validation errors |

---

## Typography

### Families
- **Heading:** Oswald (weight 600, 700) - condensed, muscular, all-uppercase for display. Loaded via `next/font/google`.
- **Body:** DM Sans (weight 400, 500) - clean geometric, legible at small sizes on dark backgrounds.
- **Mono:** Space Mono (weight 400, 700) - for phone numbers, data, availability badges. Has personality.

### Scale
| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 0.75rem (12px) | Fine print, legal |
| `--text-sm` | 0.875rem (14px) | Captions, badges, eyebrows |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Body text on larger screens |
| `--text-xl` | 1.25rem (20px) | Section subheadings |
| `--text-2xl` | 1.5rem (24px) | Section headings (mobile) |
| `--text-3xl` | 3rem (48px) | Section headings (mobile) |
| `--text-4xl` | 4.5rem (72px) | Section headings (desktop), Hero headline |

### Loading
```tsx
import { Oswald, DM_Sans, Space_Mono } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})
```

---

## Shape

- **Border radius:** 0px (`--radius`). ALL corners are sharp. No exceptions except `rounded-full` for the availability dot.
- **Buttons:** Sharp corners (0px radius). No rounded, no pill shapes.
- **Shadows:** None. Zero. Separation is achieved via background color contrast (bg vs surface) and 1px borders.
- **Glass effects:** None. This design is flat, industrial, and opaque.

---

## Density & Spacing

- **Section vertical padding:** `py-20` (5rem / 80px) as baseline (`--section-y`).
- **Content max-width:** 1280px (`--content-width`), centered with `mx-auto`.
- **Gutter:** 1.5rem (`--gutter`) horizontal padding on mobile.
- **Between sections:** Tight. Sections flow into each other with color changes, not gaps.
- **Red bands:** Full-width `bg-primary` strips between sections. Padding `py-4` to `py-6`.
- **Cards/blocks:** `p-6` to `p-8` internal padding. Sharp corners. 1px border.
- **Body text max-width:** `max-w-[65ch]` for readability.

---

## Motion

- **Budget:** CSS-only. No framer-motion, no GSAP, no motion library.
- **Max duration:** 300ms (`--duration-max`) for interactions. Up to 800ms for scroll reveal entries.
- **Easing:** `cubic-bezier(0.32, 0.72, 0, 1)` (`--easing`) - snappy with overshoot feel.
- **Allowed properties:** `transform`, `opacity`, `clip-path`, `border-color`, `background-color`, `color`.
- **Forbidden:** Animating `top`, `left`, `width`, `height`, `margin`, `padding`.
- **Hover states:** Border color transition from border to primary on cards. Scale `scale-[0.98]` on active for buttons.
- **Scroll reveals:** CSS-only using IntersectionObserver to toggle classes. Fade-up with translate-y.
- **Typing effect:** Red bands use CSS `steps()` + `overflow: hidden` for typewriter reveal.
- **Availability badge:** Pulsing dot with `@keyframes` on opacity + scale. CSS only.
- **Reduced motion:** All transitions and animations wrapped in `@media (prefers-reduced-motion: no-preference)`. Under `prefers-reduced-motion: reduce`, all animations are instant - typing effect shows immediately, pulse stops, reveals are instant.

---

## Urgency Architecture

The page structure is designed to create escalating urgency:

1. **Hero:** Typography-dominant. Service name massive in Oswald. Phone number as primary CTA.
2. **Availability badge:** "AVAILABLE TODAY" with pulsing red dot - persistent signal of live status.
3. **Red bands:** Full-width primary-colored strips between sections carrying action messages (phone number, coverage, availability). Each band is a call-to-action interrupt.
4. **Typing effect:** Text in red bands reveals letter-by-letter on scroll, simulating live communication.

---

## Accessibility

### Contrast (WCAG AA verified)
| Pair | Ratio | Requirement | Status |
|------|-------|-------------|--------|
| text (#FFFFFF) on bg (#0C0C0C) | 19.4:1 | >= 4.5:1 | PASS |
| text-muted (#A1A1AA) on bg (#0C0C0C) | 7.7:1 | >= 3.0:1 | PASS |
| text (#FFFFFF) on surface (#1C1C1C) | 14.7:1 | >= 4.5:1 | PASS |
| on-primary (#FFFFFF) on primary (#E31B1B) | 4.73:1 | >= 4.5:1 | PASS |

### Focus Visible
- All interactive elements must have a visible focus ring: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`.
- No `outline: none` without a replacement.

### Semantic HTML
- Proper heading hierarchy (one H1 per page, H2 for sections, H3 for subsections).
- All images have descriptive `alt` text.
- Phone links use `tel:` protocol.
- `<html lang="en">` for English pages.
