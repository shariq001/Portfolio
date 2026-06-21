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
    id: 'ai-native-book',
    title: 'AI-Native Interactive Book',
    description: 'Educational platform engineered with SDD, Spec-Kit Plus, and AI CLI tools — zero manual intervention.',
    techPills: ['Next.js', 'Docusaurus', 'SDD', 'Claude Code', 'SpecKit-Plus'],
    liveUrl: 'https://shariq001.github.io/ai-native-book/',
    repoUrl: 'https://github.com/shariq001/ai-native-book',
    visibility: 'public'
  },
  {
    id: 'ai-employee',
    title: 'AI Employee Automation Tool',
    description: 'Secure Python-based automation agent using LLMs + Workspace/LinkedIn APIs for outreach and content generation.',
    techPills: ['Python', 'LLMs', 'LinkedIn API', 'Google API', 'Workspace API'],
    liveUrl: null,
    repoUrl: 'https://github.com/shariq001/AI_Employee_Silver',
    visibility: 'public'
  },
  {
    id: 'ugc-creator',
    title: 'UGC Creator Portfolio',
    description: 'Highly responsive Next.js media gallery and client outreach tool.',
    techPills: ['Next.js', 'Tailwind CSS', 'Vercel', 'SDD'],
    liveUrl: 'https://ugc-creator-portfolio.vercel.app/',
    repoUrl: 'https://github.com/shariq001/ugc-creator-portfolio',
    visibility: 'public'
  },
  {
    id: 'dashboard-sdd',
    title: 'Dashboard — Frontend via SDD',
    description: 'Dashboard engineered strictly using Spec-Driven Development without manual intervention.',
    techPills: ['Next.js', 'Tailwind CSS', 'SDD'],
    liveUrl: 'https://dashboard-shariq.vercel.app',
    repoUrl: 'https://github.com/shariq001/dashboard',
    visibility: 'public'
  },
  {
    id: 'general-chatbot',
    title: 'General Chatbot',
    description: 'A versatile chatbot for general queries using large language models and simple prompt pipelines.',
    techPills: ['Python', 'LLMs', 'Panel'],
    liveUrl: null,
    repoUrl: 'https://github.com/shariq001/General-Chatbot',
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
