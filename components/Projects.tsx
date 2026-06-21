import { projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

/** Section rendering the full project grid */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white font-sans inline-block border-b-2 border-primary pb-2">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
