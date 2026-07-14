export type Project = {
  id: string;
  title: string;
  description: string;
  techPills: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  visibility: 'public' | 'private';
};

export const projects: Project[] = [
  {
    id: 'resume-builder',
    title: 'ATS-Optimized Resume Builder',
    description: 'An elegant, modern, and highly-responsive Resume Builder application designed to help users bypass Applicant Tracking Systems.',
    techPills: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'PostgreSQL'],
    liveUrl: 'https://resume---builder.vercel.app/',
    repoUrl: 'https://github.com/shariq001/resume-builder.git',
    visibility: 'public'
  },
  {
    id: 'ai-native-book',
    title: 'AI-Native Interactive Book',
    description: 'Educational platform engineered with SDD, Spec-Kit Plus, and AI CLI tools — zero manual intervention.',
    techPills: ['Next.js', 'Docusaurus', 'SDD', 'Claude Code', 'SpecKit-Plus'],
    liveUrl: 'https://shariq001.github.io/ai-native-book/',
    repoUrl: 'https://github.com/shariq001/ai-native-book',
    visibility: 'public'
  },
  {
    id: 'mens-fitness-ugc',
    title: "Men's Fitness UGC Creator Portfolio",
    description: "A high-performance, premium portfolio template designed for Men's Fitness UGC creators, calisthenics athletes, and strength-training professionals.",
    techPills: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'Framer Motion'],
    liveUrl: 'https://etsy-ugc-temp1-nu.vercel.app',
    repoUrl: null,
    visibility: 'public'
  },
  {
    id: 'dashboard-sdd',
    title: 'Next-Gen Dashboard Interface',
    description: 'Dashboard engineered strictly using Spec-Driven Development without manual intervention.',
    techPills: ['Next.js', 'Tailwind CSS', 'SDD'],
    liveUrl: 'https://dashboard-api-integration.vercel.app/',
    repoUrl: 'https://github.com/shariq001/Dashboard_API_Integration.git',
    visibility: 'public'
  },
  {
    id: 'ai-employee',
    title: 'AI Employee',
    description: 'Secure Python-based automation agent using LLMs + LinkedIn/Google APIs for outreach and content generation.',
    techPills: ['Python', 'LLMs', 'LinkedIn API', 'Google API'],
    liveUrl: null,
    repoUrl: 'https://github.com/shariq001/AI_Employee_Silver',
    visibility: 'public'
  },
  {
    id: 'in-memory-todo',
    title: 'In-Memory Todo List App',
    description: 'in-memory — no database, no backend. Fast, stateless, and built to demonstrate clean API design.',
    techPills: ['Python', 'In-Memory'],
    liveUrl: null,
    repoUrl: 'https://github.com/shariq001/In-Memory-Todo-List-App',
    visibility: 'public'
  }
];
