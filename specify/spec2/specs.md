# Spec 02 — Sections & Content
**Portfolio:** Muhammad Shariq · Depends on: `spec-01-foundation.md` complete

---

## Goal
Build and populate all content sections except Projects (handled in Spec 03). Each section is a standalone component before being imported into `app/page.tsx`.

---

## Tasks

### 1. Hero Section — `components/Hero.tsx`

**Content:**
- Headline: `"Muhammad Shariq"`— large, bold, `font-sans`
- Subtitle: `"Software Engineer · Frontend Developer · Agentic AI"` — `font-mono text-primary`
- One-liner: `"I build intelligent web experiences — from responsive UIs to autonomous AI workflows."` 
- Two CTAs: `[View Projects →]` (accent filled) · `[Get In Touch]` (ghost/outline) — both scroll to respective sections

**Design:**
- Full viewport height (`min-h-screen`), vertically centered
- Subtle animated gradient or blinking cursor on the subtitle line — CSS only, no JS animation libraries
- CTA buttons: accent fill on primary, border-primary ghost on secondary

**Commit:** `feat(hero): add hero section with headline, subtitle, and CTAs`

---

### 2. About Section — `components/About.tsx`

**Content (3–4 sentences max):**
> BS Computer Science student at HITMS (Expected 2029, GPA 3.86). Frontend Developer Intern at Innova Tech (Feb–Apr 2024), translating UI/UX specs into responsive web interfaces. Focused on agentic AI, RAG pipelines, and autonomous workflows. Available for projects, internships, and collaborations.

**Design:**
- Two-column on `md+`: text left, minimal decorative element right (initials block or thin accent line)
- Single column on mobile

**Commit:** `feat(about): add about section with bio and internship detail`

---

### 3. Skills Section — `components/Skills.tsx`

**Content — render as pill tags in `font-mono`:**

| Category | Skills |
|---|---|
| Languages | Python · Java · TypeScript · HTML · CSS |
| Frameworks | Next.js · Tailwind CSS · Streamlit · Chainlit |
| AI / Tooling | LLMs · RAG · Agentic Workflows · Antigravity CLI · Spec-Kit Plus |

**Design:**
- Pills: `bg-surface border border-border text-sm font-mono px-3 py-1 rounded-full`
- Accent border on hover: `hover:border-primary hover:text-primary`
- Categories labeled above their pill group in `text-muted text-xs uppercase tracking-widest`

**Commit:** `feat(skills): add skills section with categorized mono pill tags`

---

### 4. Certifications — `components/Certifications.tsx`

**Content:**
- Google AI Essentials — Google · 2024
- Issuer logo placeholder (Google "G" icon via SVG inline)

**Design:**
- Single minimal card: `bg-surface border border-border rounded-lg p-4`
- Flex row: icon left, name + issuer right
- Keep small — this is not a hero section

**Commit:** `feat(certs): add certifications section with google ai essentials card`

---

### 5. Contact Section — `components/Contact.tsx`

**Content — all links must be active:**
- Email: `shariqfazal123@gmail.com` → `mailto:` link
- Phone: `+92-318-2965978` → `tel:` link
- LinkedIn: link to profile (placeholder slug if URL not provided)
- GitHub: `https://github.com/shariq001`

**Design:**
- Centered layout, minimal
- Each contact item: icon (inline SVG) + label, no external icon libraries
- Accent color on hover for each item

**No contact form in this spec** — static links only; form is a post-launch addition.

**Commit:** `feat(contact): add contact section with email, phone, linkedin, github`

---

### 6. Compose — `app/page.tsx`

Import all components into the page in order:

```tsx
<Nav />
<Hero />        {/* #hero */}
<About />       {/* #about */}
<Skills />      {/* #skills */}
<Projects />    {/* placeholder from spec-03 */}
<Certifications /> {/* #certs */}
<Contact />     {/* #contact */}
<Footer />      {/* © Muhammad Shariq — minimal one-liner */}
```

**Commit:** `feat(page): compose all content sections into main page`

---

## Acceptance Criteria

- [ ] All sections visible and readable on mobile (320px) and desktop (1280px)
- [ ] Contrast ratio ≥ 4.5:1 on all text (verify with browser DevTools)
- [ ] Nav smooth-scroll anchors land correctly on each section
- [ ] No hardcoded hex colors — all from Tailwind config tokens
- [ ] Zero TypeScript errors
- [ ] All contact links open correct targets (`mailto`, `tel`, external tabs)

---

## Constitution Checks
- Each component built standalone before page composition: ✅
- Props only — no cross-component state: ✅ (all sections are static display)
- Copy is concise, plain language: ✅ enforced in content above
- `font-mono` on all skill/tech text: ✅
