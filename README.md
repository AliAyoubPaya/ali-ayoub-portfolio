# Ali Ayoub — Immersive Senior Front-End Developer Portfolio

An original, editorial **Uncommon-inspired scroll-led portfolio** designed around Ali Ayoub's verified professional information. Monochrome editorial sections contrast with an immersive dark-violet 3D sculpture, a giant outline name treatment, cinematic case studies and a crisp responsive timeline. **No source code, logos, photography or proprietary assets from the reference website are copied.**

**Reference**: https://uncommondesign.group/ (motion, visual hierarchy, immersive-to-editorial pacing)  
**Framework**: Next.js 15 App Router / TypeScript / Tailwind CSS 4  
**Animation**: GSAP + ScrollTrigger, Lenis, React Three Fiber / Drei / Three.js, Framer Motion available for small transitions  
**Deploy**: Vercel

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
# http://localhost:3000
```

```bash
npm run typecheck
npm run lint
npm run build
```

## Implementation chapters (in original prompt order)

1. **Architecture** — persistent transparent 3D Canvas, single normalized reversible scroll store, Lenis scroll + GSAP camera interpolation; mobile/reduced-motion fallbacks.
2. **Nav / Hero** — 72px fixed navbar with scroll-state border, accessible mobile menu, scroll-revealed editorial type, purple 3D sculpture, outline Ali Ayoub signature and project teaser.
3. **About** — off-white editorial section, large sticky typographic statement, word-by-word scrub, portrait slot and education chips.
4. **Skills** — five technical categories, fluid responsive grid, mouse tilt on desktop, infinity ticker.
5. **Selected work** — four user-supplied projects, cinematic color-coded cards and 3D browser mockups, desktop-only GSAP card stack, no pinning on touch devices.
6. **Experience / education** — cream vertical timeline with scrub progress, leadership and coordination panel, placeholders for missing employer and dates.
7. **Contact / Footer** — oversized conclusion, click-to-copy, phone, LinkedIn, accessible inline validated form, Resend API/honeypot, back-to-top.
8. **Polish** — reduced-motion behavior, 404, OG image, favicon, sitemap, robots, focus rings, preloader and custom pointer cursor.

## Editable content and assets

- **All actual copy, skills, project data and image links** live in `data/content.ts` (with major page copy there; small presentational labels in JSX).
- Temporary Unsplash image links are **illustrative placeholders**, not verified client screenshots or Ali's portrait. Replace them with genuine assets before launch. Recommended paths: `/public/portrait.webp` and `/public/projects/{slug}.webp`.
- **Never invent** employers, dates, project-specific responsibilities, speed scores, conversion uplift, total sites shipped or other achievements. Missing fields are deliberately marked `TODO`.
- No fabricated CV file or silent download: supply a real `/public/cv.pdf` when ready before exposing a download.

## Contact form and SEO configuration

1. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in `.env.local`, after verifying the sender domain in Resend. Unconfigured service returns HTTP 503 and the UI shows a clear error instead of pretending to send.
2. Add server-side rate limiting suited to your deployment before production launch; honeypot + validation are already wired.
3. Set `NEXT_PUBLIC_SITE_URL` to your final Vercel/production domain before publishing. The default `example.com` is not your production URL.

## Design values and interaction constraints

- Dark background `#0C0B10`, violet accent `#A98BFF`, off-white editorial surface `#F5F4F0`, 1280px max container, 12-column intent, fluid typography via `clamp()`.
- Lenis + ScrollTrigger drive a single, reversible scroll state. Each section has its own motion treatment; desktop projects pin while mobile cards flow naturally.
- 3D scene uses instancing and capped DPR. Mobile omits glass transmission and decreases particle count. WebGL-unavailable and reduced-motion viewers receive a static gradient.
- Target 60 FPS, WCAG AA and Lighthouse goals; **these are targets, not measured scores**.

## Testing limitations and next steps

A static DOM/CSS responsiveness audit was executed in headless Chromium with representative markup at widths 320, 360, 375, 390, 428, 768, 1024 and 1440 pixels. The 320px heading overflow was corrected. This **is not** an end-to-end Next.js or real WebGL browser test.

The npm registry is inaccessible in the current runtime, so `npm install`, `npm run build`, full localhost validation, real 3D animation inspection and Lighthouse are **still pending**. Run the commands above on your machine, follow `QA-CHECKLIST.md`, and replace the placeholders before launching.

**Compare against the design tokens and fix any spacing, alignment or contrast inconsistencies before finishing.**
