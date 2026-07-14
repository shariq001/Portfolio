# Spec 03 — Projects & Finalization
**Portfolio:** Muhammad Shariq · Depends on: `spec-02-sections.md` complete

---

## Goal
Build the data-driven Projects section, update SEO metadata, and prepare for Vercel deployment.

---

## Tasks

### 1. Data Layer — `lib/data/projects.ts`
Export an array of 6 project objects with typed fields.
| # | Title | Live | Repo | Visibility |
|---|---|---|---|---|
| 1 | AI-Native Interactive Book | ✅ | ✅ | public |
| 2 | AI Employee Automation Tool | — | ✅ | private |
| 3 | Men's Fitness UGC Creator Portfolio | ✅ | — | public |
| 4 | Dashboard — Frontend via SDD | ✅ | ✅ | public |
| 5 | ATS-Optimized Resume Builder | ✅ | ✅ | public |
| 6 | In-Memory Todo List App | — | ✅ | public |

**Commit:** `feat(data): add projects data layer`

### 2. Project Card — `components/ProjectCard.tsx`
- Render single project card with tech pills in Fira Code font.
- If `visibility === 'private'` → render a `"Private"` muted badge, no repo link.
- If `liveUrl` exists → render live link.
- If `repoUrl` exists (and public) → render GitHub link.

**Commit:** `feat(project-card): add project card with conditional link rendering`

### 3. Projects Section — `components/Projects.tsx`
- Import `projects` from `lib/data/projects.ts`.
- Responsive grid: 1 col mobile → 2 col `md` → 3 col `lg`.
- Map over `projects` → `<ProjectCard key={project.id} project={project} />`.
- Section heading: `"Projects"` with thin accent underline.
- **No hardcoded content** — all from data layer.

**Commit:** `feat(projects): add projects section with 6-card data-driven grid`

### 4. SEO & Metadata — `app/layout.tsx`
```ts
export const metadata: Metadata = {
  title: 'Muhammad Shariq — Software Engineer & Frontend Developer',
  description: 'Portfolio of Muhammad Shariq — Next.js developer focused on agentic AI, RAG, and autonomous workflows. HITMS CS student, Innova Tech alum.',
  openGraph: {
    title: 'Muhammad Shariq — Software Engineer',
    description: 'Next.js · Python · Agentic AI',
    url: 'https://<vercel-url>',
    type: 'website'
  }
}
```
**Commit:** `seo(meta): add title, description, and og tags`

### 5. Compose — `app/page.tsx`
Replace the `#projects` placeholder with the `<Projects />` component.

### 6. Vercel Deployment
- Build command: `npm run build`
- No environment variables required
- Enable automatic deployments on push to `main`
**Commit:** `chore(deploy): connect vercel and verify production build`

### 7. Final QA Checklist
- Functionality: All 6 cards render; conditional buttons render correctly; Private badge on AI Employee; smooth scrolling works; external links use `_blank`.
- Responsive: Collapse to 1 col on mobile.
- Performance: Lighthouse tests, Zero TS errors, no hardcoded colors.
**Commit:** `chore(qa): final pre-launch quality check pass`
