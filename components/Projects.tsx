import { projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

/** Section rendering the full project grid */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen relative">
      
      {/* Background Decor */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="mb-16 text-center md:text-left animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans inline-block pb-2">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
