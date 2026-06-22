# Spec 04 Tasks

## 1. Route Creation
- [x] 1.1 Create `app/about/page.tsx` importing and rendering `<About />`, `<Skills />`, and `<Certifications />`.
- [x] 1.2 Create `app/projects/page.tsx` importing and rendering `<Projects />`.
- [x] 1.3 Create `app/contact/page.tsx` importing and rendering `<Contact />`.
- [x] 1.4 Refactor `app/page.tsx` to render only the `<Hero />` component.
- [x] 1.5 Commit: `refactor(routes): split single page into distinct app router pages`.

## 2. Navigation Updates
- [x] 2.1 Edit `components/Nav.tsx` links to point to `/about`, `/projects`, and `/contact` rather than hash anchors.
- [x] 2.2 Commit: `refactor(nav): update nav to use nextjs optimized route links`.

## 3. Hero CTAs Update
- [x] 3.1 Edit `components/Hero.tsx` CTA links to point to `/projects` and `/contact`.
- [x] 3.2 Commit: `refactor(hero): update cta buttons to absolute paths`.

## 4. Quality Assurance
- [x] 4.1 Run `npx tsc --noEmit` to verify type safety.
- [x] 4.2 Commit: `chore(qa): verify multi-page routing integrity`.
