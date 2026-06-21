import { Project } from '@/lib/data/projects';

/** Card component rendering an individual project */
export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <div 
      className="group bg-surface/30 backdrop-blur-xl border border-white/5 rounded-2xl p-7 hover:border-primary/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,255,0.15)] relative overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background glowing blob on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
         <h3 className="font-sans font-bold text-white text-2xl mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
         <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
         
         <div className="flex flex-wrap gap-2 mb-8">
           {project.techPills.map((tech) => (
             <span key={tech} className="bg-black/30 border border-white/10 text-xs font-mono px-3 py-1.5 rounded-full text-white/80 group-hover:border-primary/30 transition-colors duration-300">
               {tech}
             </span>
           ))}
         </div>

         <div className="flex items-center gap-3 mt-auto">
           {project.liveUrl && (
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/10 border border-primary/20 text-primary font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-primary hover:text-surface transition-all duration-300">
               Live Demo →
             </a>
           )}
           
           {project.visibility === 'public' && project.repoUrl && (
             <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300">
               GitHub ↗
             </a>
           )}

           {project.visibility === 'private' && (
             <span className="bg-black/20 border border-white/5 text-muted font-medium px-5 py-2.5 rounded-lg text-sm cursor-not-allowed">
               Private Repository
             </span>
           )}
         </div>
      </div>
    </div>
  );
}
