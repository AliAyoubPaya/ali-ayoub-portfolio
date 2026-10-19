# QA Checklist — Ali Ayoub / Uncommon-Inspired 3D Portfolio

Run each chapter sequentially on localhost: `npm install && npm run dev` → open http://localhost:3000. Check viewport widths **320 / 360 / 375 / 390 / 428 / 768 / 1024 / 1440** and test touch, keyboard and reduced motion.

- [ ] **1 Architecture:** persistent Canvas, transparent background and fallback; scroll down/up rewinds camera and animations deterministically. No WebGL or hydration errors.
- [ ] **2 Navigation & Hero:** nav 72px, border after 40px, mobile fullscreen menu with working close/Escape/focus; stable wordmark, 3D orb, CTA anchors and project teaser.
- [ ] **3 About:** large sticky heading on desktop and natural mobile flow; word reveals are readable, non-motion text remains full opacity, portrait is labeled as temporary, info chips wrap.
- [ ] **4 Skills:** five groups and skill tags; desktop hover lift and <=4° tilt; no tap-only hover dependence on mobile; marquee pauses on pointer hover and obeys reduced motion.
- [ ] **5 Projects:** real external links open in new tabs; distinctive descriptions; fake metrics absent; pending project roles visible; pin stack only desktop (<=900px must not pin). Browser screenshot hover preview is optional on touch.
- [ ] **6 Timeline:** scroll-scrub accent progress, 3 accurate entries, desktop alternating columns and mobile single column, employer/date remain clearly marked TODOs.
- [ ] **7 Contact:** email click-to-copy, usable phone and LinkedIn links, form labels/inline errors/loading state, backend returns 503 if Resend unconfigured, honeypot.
- [ ] **8 Final polish:** preloader under 1.2s, 404, favicon, updated Open Graph artwork, SEO/robots/sitemap, semantic headings and focus states, layout and contrast.
- [ ] **Commands:** `npm run typecheck`, `npm run lint`, `npm run build` after installing dependencies.
- [ ] **Real QA:** Lighthouse and axe scans, Safari iOS/Chrome Android, 3D/WebGL performance, focus management, video capture of scroll reversal.
- [ ] **Before launch:** genuine screenshots and portrait, employer/dates, CV, confirmed project roles and site domain, Resend email credentials, server-side rate limiting.

### Completed here vs remaining

- [x] Reference page content and selected screenshots reviewed; design direction adapted rather than copied.
- [x] Static DOM/CSS preview checked at 8 viewports in headless Chromium; small viewport heading overflow fixed.
- [x] CSS stylesheet parser and TS/TSX syntax parser checks (see build notes).
- [ ] Full localhost Next.js page, React hydration and live WebGL: **not tested**, npm registry inaccessible.
- [ ] Final Lighthouse scores: **not measured**.

Compare against the design tokens and fix any spacing, alignment or contrast inconsistencies before finishing.
