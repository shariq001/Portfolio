# Spec 01 Tasks

## 1. Project Init
- [x] 1.1 Scaffold Next.js (App Router) with TypeScript strict mode in the root directory (using `npx create-next-app@latest .`).
- [x] 1.2 Install dependencies: `tailwindcss` `postcss` `autoprefixer` `@types/node`.
- [x] 1.3 Add and configure fonts using `next/font` (Inter or Geist for sans, Fira Code for mono).
- [x] 1.4 Initialize `prettier` with `prettier-plugin-tailwindcss` and create `.prettierrc`.
- [x] 1.5 Update `.gitignore` to ensure `.env*`, `.next/`, `node_modules/` are included.
- [x] 1.6 Commit: `chore(init): scaffold next.js app with typescript and tailwind`.

## 2. Design System — `tailwind.config.ts`
- [x] 2.1 Update `tailwind.config.ts` to include color tokens (`base`, `surface`, `border`, `muted`, `primary`, `primary-dim`).
- [x] 2.2 Update `tailwind.config.ts` to include font family variables (`sans`, `mono`).
- [x] 2.3 Commit: `chore(design): add color tokens and font families to tailwind config`.

## 3. Global Layout — `app/layout.tsx`
- [x] 3.1 Update `app/layout.tsx` to set the root background to `bg-base` and apply text colors.
- [x] 3.2 Apply font variables to the `<html>` or `<body>` tag.
- [x] 3.3 Configure `metadata` export for title (`"Muhammad Shariq — Software Engineer"`), description, and OG tags placeholder.
- [x] 3.4 Ensure `app/layout.tsx` wraps children only without extra content.
- [x] 3.5 Commit: `feat(layout): add root layout with dark theme and font setup`.

## 4. Navigation Component — `components/Nav.tsx`
- [x] 4.1 Create `components/Nav.tsx` with a fixed top bar, `bg-surface/80`, and `backdrop-blur`.
- [x] 4.2 Add the logo: `"MS"` monogram in `font-mono text-primary`.
- [x] 4.3 Add desktop navigation links: `About`, `Skills`, `Projects`, `Contact` linked to `#section-id`.
- [x] 4.4 Implement a mobile hamburger toggle with a slide-down drawer for vertical links.
- [x] 4.5 Commit: `feat(nav): add responsive navigation with smooth scroll links`.

## 5. Page Shell — `app/page.tsx`
- [x] 5.1 Update `app/page.tsx` to import and render `<Nav />` only.
- [x] 5.2 Add empty `<section>` placeholders with IDs: `#hero`, `#about`, `#skills`, `#projects`, `#contact`.
- [x] 5.3 Commit: `feat(shell): add page with nav and empty section anchors`.

## 6. Verification & Acceptance
- [ ] 6.1 Verify `npm run dev` starts without errors.
- [ ] 6.2 Verify TypeScript reports zero errors (`npx tsc --noEmit`).
- [x] 6.3 Verify no hardcoded hex colors exist in components.
- [ ] 6.4 Verify Nav is visible/responsive on mobile (320px) and desktop (1280px).
- [ ] 6.5 Verify Lighthouse accessibility on the shell page.
