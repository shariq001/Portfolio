# Spec 01 — Foundation
**Portfolio:** Muhammad Shariq · `sp.constitution.md` governs all decisions

---

## Goal
Bootstrap the Next.js project with the full design system, global layout shell, and navigation. No content sections yet — this spec ends with a working blank canvas that enforces all constitution constraints.

---

## Tasks

### 1. Project Init
- Scaffold Next.js (App Router) with TypeScript strict mode
- Install: `tailwindcss` `postcss` `autoprefixer` `@types/node`
- Install fonts: `next/font` — Inter/Geist (primary) + Fira Code (mono)
- Init `prettier` with `prettier-plugin-tailwindcss`
- Add `.gitignore` — must include `.env*`, `.next/`, `node_modules/`

**Commit:** `chore(init): scaffold next.js app with typescript and tailwind`

---

### 2. Design System — `tailwind.config.ts`

Define all tokens here. No hardcoded colors anywhere in components.

```ts
theme: {
  extend: {
    colors: {
      base: '#020617',        // slate-950
      surface: '#0f172a',     // slate-900
      border: '#1e293b',      // slate-800
      muted: '#64748b',       // slate-500
      primary: '#00FFFF',     // Electric Cyan (accent)
      'primary-dim': '#0891b2' // subdued accent for hover states
    },
    fontFamily: {
      sans: ['Inter', 'Geist', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    }
  }
}
```

**Commit:** `chore(design): add color tokens and font families to tailwind config`

---

### 3. Global Layout — `app/layout.tsx`

- Dark base background (`bg-base`) set at root
- Font variables applied via `next/font` on `<html>`
- `<head>`: title `"Muhammad Shariq — Software Engineer"`, meta description (60 words max), OG tags placeholder
- No content — layout wraps children only

**Commit:** `feat(layout): add root layout with dark theme and font setup`

---

### 4. Navigation Component — `components/Nav.tsx`

- Fixed top bar, full-width, `bg-surface/80` with `backdrop-blur`
- Logo: `"MS"` monogram in `font-mono text-primary`
- Links: `About` `Skills` `Projects` `Contact` — smooth scroll anchors (`href="#section-id"`)
- Mobile: hamburger toggle — links stack vertically in a slide-down drawer
- No external nav libraries

**Props:** none (static)

**Commit:** `feat(nav): add responsive navigation with smooth scroll links`

---

### 5. Page Shell — `app/page.tsx`

- Import and render `<Nav />` only
- Reserve section anchor IDs as empty `<section>` placeholders:
  `#hero` `#about` `#skills` `#projects` `#contact`
- Verify: page loads, nav links don't 404, dark background renders correctly

**Commit:** `feat(shell): add page with nav and empty section anchors`

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] TypeScript reports zero errors (`tsc --noEmit`)
- [ ] All color values come from Tailwind config tokens — no hardcoded hex in components
- [ ] Nav is visible and responsive on mobile (320px) and desktop (1280px)
- [ ] Lighthouse: no accessibility errors on the shell page

---

## Constitution Checks
- Strict TS: ✅ enforced at init
- No inline styles: ✅ Tailwind only
- No `.env*` committed: ✅ gitignore set at task 1
- Component < 80 lines: ✅ Nav is display-only, well within limit
