import { Project } from '@/lib/data/projects';

/** Card component rendering an individual project */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary transition-colors flex flex-col h-full">
      <h3 className="font-sans font-semibold text-white text-xl mb-2">{project.title}</h3>
      <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techPills.map((tech) => (
          <span key={tech} className="bg-surface border border-border text-xs font-mono px-2 py-1 rounded-full text-white">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-surface font-medium px-4 py-2 rounded text-sm hover:bg-primary-dim transition-colors">
            Live →
          </a>
        )}
        
        {project.visibility === 'public' && project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-border text-white font-medium px-4 py-2 rounded text-sm hover:border-primary hover:text-primary transition-colors">
            GitHub
          </a>
        )}

        {project.visibility === 'private' && (
          <span className="bg-surface border border-border text-muted font-medium px-4 py-2 rounded text-sm cursor-not-allowed">
            Private
          </span>
        )}
      </div>
    </div>
  );
}
