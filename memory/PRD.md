# Dr. Rajesh Sharma — Medical Website PRD

## Original Problem Statement
Build a complete professional medical website for Dr. Rajesh Sharma (Cardiologist, 15 years, Mumbai, Maharashtra). Clean, modern, medical design (white + blue), fully responsive, SEO optimized. Pages: Home, About, Services, Appointment, Contact. Features: sticky navbar, WhatsApp floating button, call button, SEO, Google Maps, clean booking experience. Tone: professional, trustworthy, patient-friendly.

## User Choices
- Booking flow: **WhatsApp redirect only** (no DB persistence)
- Doctor photo: placeholder (user will upload later)
- Name/spec/experience/location: placeholder defaults used

## Architecture
- Frontend: React 19 + React Router v7 + Tailwind CSS + shadcn/ui + Lucide icons + sonner (toast)
- Backend: FastAPI template (left as-is — no booking persistence required)
- Fonts: Outfit (headings) + Manrope (body)
- Theme: Navy `#0F2C59`, Accent Blue `#2563EB`, Soft Blue `#E6F4F1`, White `#FFFFFF`

## Implemented (Feb 2026 — v1)
- 5-page multi-page site with shared Layout (EmergencyBanner + Navbar + Footer + FloatingWhatsApp)
- Home: hero with doctor photo, stats strip, about intro, 6 services grid, 3 testimonials, emergency CTA
- About: qualifications timeline, achievements checklist, philosophy section
- Services: 6 service cards with icons, "book consultation" CTA block
- Appointment: validated form (Name/Phone/Email/Date/Time/Message) with sonner toasts, in-page confirmation card, "Book via WhatsApp" deep link with pre-filled message
- Contact: address/phone/email/hours cards + Google Maps iframe embed + WhatsApp CTA
- Sticky glassy navbar (desktop + mobile Sheet)
- Floating WhatsApp button (pulse animation) on all pages
- Mobile "Call" button in navbar
- SEO meta tags (title, description, OG, Twitter) in index.html
- All interactive elements tagged with data-testid

## Testing Status
- Frontend testing agent: **100% pass** (iteration_1.json). Minor a11y warning on mobile Sheet fixed.
- Backend: not applicable (WhatsApp-only flow)

## Backlog / Next Steps
- **P1** Replace placeholder Pexels photo with real portrait (user to provide)
- **P1** Replace placeholder contact info (phone/email/address) with real values
- **P2** Upgrade Google Maps embed with exact clinic coordinates
- **P2** Optional: persist appointment submissions to MongoDB + email notification (Resend/SendGrid)
- **P2** Blog/health-articles section for additional SEO reach
- **P3** Multi-language support (Hindi/Marathi)
