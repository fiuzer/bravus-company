# Bravus Landing Implementation Plan

Last updated: 2026-04-15

Design reference:

- Project: `48a45349-8fe5-4b2f-8e36-49dadea469a4`
- Draft: `2fa049e3-6616-4489-9ecc-078057179b57`
- Preview URL: `https://p.superdesign.dev/draft/2fa049e3-6616-4489-9ecc-078057179b57`
- Local HTML reference: `.superdesign/bravus-landing-draft.html`

## 1. Starting Point

The repository currently has no application code, framework config, routes, styles, or assets. This means implementation is not a styling pass over an existing app; it is a first-page bootstrap.

Recommended baseline stack for this repo:

- Next.js with App Router and TypeScript
- Tailwind CSS for tokenized utility styling
- Local asset storage for the transparent logo
- `lucide-react` for icons instead of runtime Iconify script injection

Reasoning:

- The draft is a marketing landing page that benefits from SEO, fast static rendering, and easy future expansion into more branded pages.

## 2. Draft Breakdown

The draft resolves into six implementation sections:

1. Sticky transparent header with logo and anchor navigation
2. Hero section with badge, large gradient headline, supporting text, and dual CTAs
3. Demo/video section with glass container and play affordance
4. Benefits grid with three glass cards
5. Three-step process section with oversized step numerals
6. Final WhatsApp CTA and compact footer

Cross-cutting draft traits:

- Dark canvas with violet accent system
- Glassmorphism cards
- Large display typography
- Rounded pill CTAs
- Minimal but polished hover motion

## 3. Codebase Structure

Initial implementation should create the following structure:

- `app/layout.tsx` for font loading and global shell
- `app/page.tsx` for the landing route
- `app/globals.css` for tokens, gradients, utility classes, and base resets
- `components/site/header.tsx`
- `components/site/hero.tsx`
- `components/site/demo-section.tsx`
- `components/site/benefits-section.tsx`
- `components/site/process-section.tsx`
- `components/site/final-cta.tsx`
- `components/site/footer.tsx`
- `components/ui/container.tsx`
- `public/brand/bravus-logo.png` or a higher-quality transparent source if available

This keeps the first page modular without over-engineering a full design system before the first screen exists.

## 4. Asset and Content Work

Required before implementation is considered production-ready:

- Replace remote draft logo URLs with a checked-in local logo asset
- Replace placeholder demo area with either an embedded video or a poster-thumbnail pattern
- Replace `href="#"` placeholders with real CTA destinations
- Replace `https://wa.me/yourlink` with the actual WhatsApp entrypoint
- Confirm footer social URLs
- Update copyright year handling

If the transparent logo currently exists only in the Superdesign-hosted URL, download and commit it to `public/brand/` to avoid runtime external dependency.

## 5. Design Token Extraction

Create first-pass tokens from the draft rather than hardcoding styles repeatedly:

- Colors: background, surface, border, foreground, muted foreground, primary accent, accent glow
- Typography: display and body font families plus 4-5 text scales
- Radius: pill, card, media frame
- Shadow: primary glow and CTA shadow
- Layout: max widths and section paddings

These tokens should live in `app/globals.css` and be consumed by the landing components. Avoid keeping Tailwind CDN-era values embedded in JSX.

## 6. Implementation Sequence

Phase 1: Bootstrap

- Initialize Next.js + Tailwind + TypeScript
- Add fonts and global token layer
- Add local logo asset and icon dependency

Phase 2: Page skeleton

- Build `app/page.tsx`
- Create shared `Container`
- Implement header and footer anchors

Phase 3: Section build-out

- Implement hero
- Implement demo/video block
- Implement benefits grid
- Implement process section
- Implement final CTA

Phase 4: Polish

- Match spacing, gradients, glass surfaces, and responsive breakpoints to the draft
- Replace placeholder links/content
- Ensure anchor scrolling feels correct with sticky header offset

Phase 5: Verification

- Test responsive layouts on mobile, tablet, desktop
- Run accessibility pass for heading order, contrast, focus states, and link semantics
- Compare implementation visually against `.superdesign/bravus-landing-draft.html`

## 7. Component Notes

Header:

- Use a sticky or fixed header with backdrop blur
- Keep the logo height responsive and preserve transparent background
- Desktop nav can stay simple; mobile will need either collapsed links or a minimal menu

Hero:

- Reproduce the small automation badge, gradient headline, and two-button CTA row
- Headline line breaks should be handled responsively, not with a hardcoded desktop-only split alone

Demo section:

- The draft uses a placeholder. For production, prefer either an embedded player or a poster card that opens a modal/video

Benefits:

- Implement as data-driven cards so the content can change without editing markup structure

Process:

- Keep giant translucent step numerals as decorative layers behind each step
- Preserve icon, title, and short explanation hierarchy

Final CTA:

- This is the conversion endpoint. Treat the WhatsApp CTA as the primary measurable action

## 8. Risks and Decisions

Current blockers that are outside the draft itself:

- No existing framework choice in repo
- No production-ready content source for CTA links
- No confirmed local brand asset package
- Demo media is still placeholder-only

Recommended decisions to lock before coding:

1. Confirm Next.js as the initial framework
2. Provide final WhatsApp URL and secondary CTA target
3. Provide local transparent logo source at highest available quality
4. Decide whether the demo section is video embed, modal, or static poster for v1

## 9. Definition of Done

The first implementation pass is complete when:

- `/` matches the approved draft closely across desktop and mobile
- All external draft-hosted visual dependencies are removed from runtime
- CTA links are real
- Typography and color tokens are centralized
- The page is split into maintainable sections rather than one large file
