# Interaction and responsive implementation notes

**Reference direction:** Uncommon Design Group (https://uncommondesign.group/), reinterpreted for an individual developer. No original source code, branding, images or animation assets copied.

- Visual rhythm: atmospheric black-and-violet hero → white editorial About → dark technical services → immersive pinned case studies → bright career timeline → cinematic dark closing CTA.
- 3D composition: translucent iridescent sphere, metallic rings, three flat UI satellites, instanced shard particles and colored soft-box studio light.
- Camera story: linear scroll store with a six-stop spline-like smoothstep interpolation. Rotations, panel orbit, sculpture vertical motion and light intensity depend on the normalized scroll state; scrolling backward reverses the transformation.
- Scroll: Lenis drives ScrollTrigger. Fullscreen mobile menu uses keyboard focus trapping. Jump links use accessible native anchors intercepted for smooth Lenis scrolling.
- Mobile: default stack, `min-width:320px`, breakpoint corrections, simplified 3D material, reduced particles, no project pins or mouse-based tilt. Reduced-motion users see static gradient instead of WebGL.
- Real contact form integration awaits Resend environment variables.
- Project descriptions/roles and images: each real project URL retained; roles and numeric results remain TODO until verified.

## Build and QA evidence

- Headless Chromium used with representative **static DOM** (not the actual React runtime) to check CSS at widths 320, 360, 375, 390, 428, 768, 1024, and 1440px.
- Stylesheet parsed with tinycss2 (no syntax errors).
- All 24 TS/TSX source files parsed with globally installed TypeScript syntax parser (no parse errors). This is **not** a complete `tsc` type check.
- `npm install --offline` failed because required packages aren't in cache. Remote npm registry DNS is blocked. **Actual Next.js runtime/WebGL and Lighthouse were not verified.**

Compare against the design tokens and fix any spacing, alignment or contrast inconsistencies before finishing.
