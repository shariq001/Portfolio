# Spec 04 — Multi-Page Routing Refactor
**Portfolio:** Muhammad Shariq · Depends on: `spec-03` complete

---

## Goal
Refactor the current Single-Page Application architecture into a Multi-Page Application utilizing the Next.js App Router. This isolates sections into distinct URLs for dedicated page SEO and utilizes Next.js `<Link>` for optimized client-side prefetching.

---

## Tasks

### 1. Route Creation
Extract existing components out of the monolithic `app/page.tsx` and place them into dedicated route pages. The global `app/layout.tsx` will continue to provide the `<Nav />` and `<Footer />` globally.
- **Home:** Update `app/page.tsx` to render *only* the `<Hero />` component.
- **About:** Create `app/about/page.tsx` to render `<About />`, `<Skills />`, and `<Certifications />` sequentially.
- **Projects:** Create `app/projects/page.tsx` to render `<Projects />`.
- **Contact:** Create `app/contact/page.tsx` to render `<Contact />`.

**Commit:** `refactor(routes): split single page into distinct app router pages`

### 2. Navigation Updates — `components/Nav.tsx`
- Replace anchor hash URLs (`#about`, `#projects`, `#contact`) with absolute route paths (`/about`, `/projects`, `/contact`).
- Ensure `next/link` is utilized for optimized routing, eliminating hard page reloads.

**Commit:** `refactor(nav): update nav to use nextjs optimized route links`

### 3. Hero CTAs Update — `components/Hero.tsx`
- Update the "View Projects" CTA from `href="#projects"` to `href="/projects"`.
- Update the "Get In Touch" CTA from `href="#contact"` to `href="/contact"`.

**Commit:** `refactor(hero): update cta buttons to absolute paths`

### 4. Cleanup & Verification
- Verify `app/layout.tsx` properly renders the children within the global shell.
- Run type checks (`tsc --noEmit`) to ensure absolute path integration didn't break TS constraints.

**Commit:** `chore(qa): verify multi-page routing integrity`
