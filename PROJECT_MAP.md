# PROJECT_MAP — NextVision Software Website

## [TECH_STACK]

| Layer       | Technology     | Version  | Status |
| ----------- | -------------- | -------- | ------ |
| Framework   | Next.js        | 16.2.5   | ✅     |
| UI Library  | React          | 19.2.4   | ✅     |
| Styling     | Tailwind CSS   | 4.x      | ✅     |
| Language    | TypeScript     | ^5       | ✅     |
| Linting     | ESLint         | ^9       | ✅     |
| Fonts       | Syne + DM Sans | Google   | ✅     |

## [ARCHITECTURE]

```
app/
├── layout.tsx          (server)      — Root layout, metadata, font link
├── page.tsx            (server)      — Composes all sections (no client logic)
├── globals.css                      — Tailwind v4 import + theme + animations

├── components/
│   ├── Navbar.tsx      (client)      — Scroll-aware nav, mobile menu, active section
│   ├── Hero.tsx        (server)      — Hero section with orbital animation
│   ├── About.tsx        (server)      — Stats grid + value props
│   ├── Services.tsx     (server)      — 6 service cards
│   ├── Packages.tsx     (server)      — 3 pricing tiers (Starter/Growth/Enterprise)
│   ├── Testimonials.tsx (server)      — 6 client testimonial cards
│   ├── Contact.tsx      (client)      — Form with useActionState + validation
│   ├── Footer.tsx       (server)      — Footer with nav links + dynamic year
│   └── ScrollLink.tsx   (client)      — Reusable smooth-scroll anchor
└── lib/
    ├── actions.ts       (server)      — Server Actions: submitContact + validation
    └── logger.ts        (server)      — Async structured logger (info/warn/error)
```

### Data Flow

```
User fills contact form
  → Contact.tsx (client) dispatches useActionState
    → lib/actions.ts (server action)
      → Validates fields
      → logger.info() logs submission
      → Returns { success, message, errors? }
  → Contact.tsx displays success/error to user
```

## [SYSTEM_FLOW]

### User Journey (SPA)

```
Land on Hero
  → Scroll or nav-click to any section
  → Each section is a server component (fast, SEO-friendly)
  → Navbar tracks active section via scroll (client effect)
  → "Get Started" / "Learn more" → smooth-scroll to #contact
  → Contact form → Server Action → validation → feedback
  → Footer has dynamic copyright year
```

### Success Criteria

1. **Scroll interaction**: Navbar background toggles, active link highlights
2. **Mobile nav**: Hamburger toggles menu, links close menu and scroll
3. **Contact form**: Client validation errors shown instantly; server validates again; success/error message displayed; pending state disables button
4. **All sections render**: Hero, About, Services, Packages, Testimonials, Contact, Footer
5. **Build succeeds**: `next build` with 0 errors, 0 lint warnings

## [ORPHANS & PENDING]

| Item | Status | Notes |
| ---- | ------ | ----- |
| Email delivery (SMTP) | ❌ Not implemented | Server Action logs only; connect Resend/SendGrid when ready |
| Analytics | ❌ Not implemented | Add PostHog or GA4 snippet when needed |
| SEO meta per section | ❌ Not implemented | Single metadata in layout.tsx is sufficient for v1 |
| Accessibility audit | ❌ Not implemented | Keyboard nav works minimally via ScrollLink |
| Performance optimization | ❌ Not implemented | Images, lazy loading, etc. — defer until content is finalized |
