# Spec 02 Tasks

## 1. Hero Section
- [x] 1.1 Create `components/Hero.tsx` with Headline (`font-sans`), Subtitle (`font-mono text-primary`), and One-liner.
- [x] 1.2 Add CTAs: `[View Projects →]` (accent filled) and `[Get In Touch]` (ghost/outline) with smooth scroll links.
- [x] 1.3 Style Hero: `min-h-screen`, vertically centered, and add CSS-only animated blinking cursor to subtitle.
- [x] 1.4 Commit: `feat(hero): add hero section with headline, subtitle, and CTAs`.

## 2. About Section
- [x] 2.1 Create `components/About.tsx` containing the specified 3-sentence biography.
- [x] 2.2 Style About: Two-column layout on `md+` (text left, decorative right) and single-column on mobile.
- [x] 2.3 Commit: `feat(about): add about section with bio and internship detail`.

## 3. Skills Section
- [x] 3.1 Create `components/Skills.tsx` and structure the skills data into Languages, Frameworks, and AI / Tooling.
- [x] 3.2 Style Skills: Categories labeled in `text-muted text-xs uppercase tracking-widest`.
- [x] 3.3 Render Skills as pills (`bg-surface border border-border text-sm font-mono px-3 py-1 rounded-full hover:border-primary hover:text-primary`).
- [x] 3.4 Commit: `feat(skills): add skills section with categorized mono pill tags`.

## 4. Certifications Section
- [x] 4.1 Create `components/Certifications.tsx` with Google AI Essentials content and inline SVG.
- [x] 4.2 Style Certifications: Minimal card (`bg-surface border border-border rounded-lg p-4`) in flex row.
- [x] 4.3 Commit: `feat(certs): add certifications section with google ai essentials card`.

## 5. Contact Section
- [x] 5.1 Create `components/Contact.tsx` with active links for Email, Phone, LinkedIn, and GitHub.
- [x] 5.2 Style Contact: Centered, minimal, using inline SVG icons with hover accent colors.
- [x] 5.3 Commit: `feat(contact): add contact section with email, phone, linkedin, github`.

## 6. Page Composition
- [x] 6.1 Create `components/Footer.tsx` with a minimal copyright one-liner.
- [x] 6.2 Update `app/page.tsx` to import and stack `<Nav />`, `<Hero />`, `<About />`, `<Skills />`, a `<Projects />` placeholder, `<Certifications />`, `<Contact />`, and `<Footer />`.
- [x] 6.3 Commit: `feat(page): compose all content sections into main page`.

## 7. Verification & Acceptance
- [x] 7.1 Verify sections are responsive (320px to 1280px).
- [x] 7.2 Verify contrast ratio ≥ 4.5:1.
- [x] 7.3 Verify Nav smooth-scroll lands correctly on each section.
- [x] 7.4 Verify no hardcoded hex colors are used.
- [x] 7.5 Verify zero TypeScript errors (`tsc --noEmit`).
- [x] 7.6 Verify contact links open correct targets.
