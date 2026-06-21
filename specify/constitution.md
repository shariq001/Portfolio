# sp.constitution — Muhammad Shariq Portfolio

## Project Identity

- **Owner:** Muhammad Shariq
- **Type:** Personal Developer Portfolio
- **Stack:** Next.js · Tailwind CSS · Vercel
- **Methodology:** Spec-Driven Development (SDD) via Antigravity CLI (`agy`) + Spec-Kit Plus (`speckit`)

---

## Agent Context (agy Prompt Seed)

> Pass this block directly to `agy` at session start.

```
You are building a personal portfolio for Muhammad Shariq — a BS Computer Science student at HITMS (Expected 2029, GPA 3.86), Software Engineer and Frontend Developer specializing in Python, Java, and Next.js. He focuses on agentic AI, RAG implementations, and autonomous workflows. He completed a Frontend Developer Internship at Innova Tech (Feb–Apr 2024). Skills: Python, Java, Next.js, HTML/CSS, Tailwind, Streamlit, Chainlit, AI tooling. Certified: Google AI Essentials. Contact: shariqfazal123@gmail.com | +92-318-2965978 | LinkedIn | GitHub.
```

---

## Architecture Principles

- Every section (Hero, About, Projects, Skills, Contact) is a standalone module/component before page composition
- Components communicate through explicit props — no cross-component internal state sharing
- All async operations (form submit, API calls) use consistent error handling — no raw `throw`; use typed Result patterns
- No direct data fetching inside UI components — use a dedicated `lib/data` layer

---

## Technology Constraints

- **Framework:** Next.js (App Router) — SSG preferred for all static sections
- **Styling:** Tailwind CSS only — no inline styles, no external CSS libraries
- **Fonts:** Inter / Geist (primary) + Fira Code (monospaced for tech tags, skill labels, code elements)
- **Color Palette:** Deep dark base (Slate-950 / Midnight Blue) + vibrant accent (Electric Cyan `#00FFFF` or Neon Purple `#A855F7`) — defined as Tailwind CSS variables in `tailwind.config`
- **Deployment:** Vercel — CI/CD on `main` branch push
- **No** external UI component libraries (shadcn excepted if explicitly approved per spec)

---

## Design Standards

- Mobile-first responsive layout — breakpoints: `sm` `md` `lg` `xl`
- All copy: concise, plain human language — no buzzword padding
- Accent color used sparingly: CTAs, highlights, active states only
- Fira Code applied to: skill tags, tech stack labels, project tech pills
- Minimum contrast ratio 4.5:1 on all text over dark backgrounds

---

## Page Structure & Sections

| Section | Key Content | Notes |
|---|---|---|
| **Hero** | Name, title, one-liner, CTA buttons | Animated accent; link to Projects + Contact |
| **About** | Identity, GPA, university, internship, focus areas | Keep to 3–4 sentences max |
| **Skills** | Python, Java, Next.js, Tailwind, Streamlit, Chainlit, AI tools | Rendered in Fira Code pill tags |
| **Projects** | 3 featured cards (see below) | Grid layout; live links required |
| **Certifications** | Google AI Essentials | Minimal badge/card |
| **Contact** | Email, phone, LinkedIn, GitHub | All links must be active and tested |

---

## Projects Specification

### 1 — AI-Native Interactive Book
- **Description:** Educational platform engineered with SDD, Spec-Kit Plus, and AI CLI tools — zero manual intervention
- **Live Link:** `https://shariq001.github.io/ai-native-book/`
- **Tech Pills:** SDD · Spec-Kit Plus · Antigravity CLI

### 2 — AI Employee Automation Tool
- **Description:** Secure Python-based automation agent using LLMs + Workspace/LinkedIn APIs for outreach and content generation
- **Live Link:** *(internal / private — omit or show "Private Repo")*
- **Tech Pills:** Python · LLMs · LinkedIn API · Workspace API

### 3 — UGC Creator Portfolio
- **Description:** Highly responsive Next.js media gallery and client outreach tool
- **Live Link:** `https://ugc-creator-portfolio.vercel.app/`
- **Tech Pills:** Next.js · Tailwind CSS · Vercel

---

## Code Quality Standards

- No component longer than 80 lines — extract sub-components rather than extending
- All components and utility functions have a one-line JSDoc comment
- TypeScript strict mode enabled — no `any` types
- Tailwind class order follows Prettier Tailwind plugin convention
- `agy` must generate a spec file (`.spec.md`) before generating any component

---

## Security & Environment Rules

- No API keys, tokens, or credentials in code or committed files — `.env.local` only
- Contact form (if dynamic): validate all inputs server-side in Next.js API route or Server Action
- Never commit `.env*` files — `.gitignore` enforced from project init

---

## SDD Workflow Rules (speckit + agy)

- **Spec first:** every new section or feature starts with a `speckit` spec file before code generation
- **Ambiguity protocol:** when a spec detail is unclear, `agy` asks one clarifying question before proceeding — no assumptions
- **Options protocol:** for layout or architectural decisions, `agy` proposes three options and waits for selection
- **Commit format:** `type(scope): description` — e.g., `feat(hero): add animated accent headline`
- **Commit cadence:** one commit per completed spec task
- **Violation flag:** if `agy` detects a deviation from this constitution, it must flag it explicitly before continuing

---

## Constitution Enforcement

> This file is the single source of truth. `agy` must re-read `sp.constitution.md` at the start of every new session. Any spec, component, or decision that conflicts with this document must be flagged and resolved before implementation proceeds.
