import Projects from '@/components/Projects';

export const metadata = {
  title: 'Projects | Muhammad Shariq',
  description: 'Explore cutting-edge Next.js and Agentic AI projects built by Muhammad Shariq, including real-time RAG applications and autonomous workflows.',
};

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <Projects />
    </main>
  );
}
