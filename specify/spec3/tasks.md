# Spec 03 Tasks

## 1. Data Layer
- [x] 1.1 Create `lib/data/projects.ts` defining the 6 projects based on the Spec 03 table.
- [x] 1.2 Commit: `feat(data): add projects data layer`.

## 2. Project Card Component
- [x] 2.1 Create `components/ProjectCard.tsx` that accepts a `Project` prop.
- [x] 2.2 Implement conditional rendering: `"Private"` badge if private, live link if exists, GitHub link if public.
- [x] 2.3 Style tech pills with `font-mono`.
- [x] 2.4 Commit: `feat(project-card): add project card with conditional link rendering`.

## 3. Projects Section Component
- [x] 3.1 Create `components/Projects.tsx`.
- [x] 3.2 Add section heading `"Projects"` with a thin accent underline.
- [x] 3.3 Import `projects` and map them to a responsive grid (1 col mobile → 2 col `md` → 3 col `lg`).
- [x] 3.4 Commit: `feat(projects): add projects section with 6-card data-driven grid`.

## 4. SEO & Metadata
- [x] 4.1 Update `app/layout.tsx` metadata to match the provided spec exactly.
- [x] 4.2 Commit: `seo(meta): add title, description, and og tags`.

## 5. Page Composition
- [x] 5.1 Import `<Projects />` in `app/page.tsx` and replace the placeholder.

## 6. Deployment & QA
- [ ] 6.1 User executes Vercel deployment.
- [ ] 6.2 Commit: `chore(deploy): connect vercel and verify production build`.
- [ ] 6.3 Run full QA (responsiveness, Lighthouse, TS compilation, correct button states).
- [ ] 6.4 Commit: `chore(qa): final pre-launch quality check pass`.
