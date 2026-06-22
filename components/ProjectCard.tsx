import { Project } from '@/lib/data/projects';

/** Card component rendering an individual project */
export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  const colorThemes = [
    {
      glow: 'bg-cyan-500/30',
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      title: 'text-cyan-400',
      pillBorder: 'border-cyan-500/30',
      demoBg: 'bg-cyan-500/10 hover:bg-cyan-400',
      demoBorder: 'border-cyan-500/30',
      demoText: 'text-cyan-400 hover:text-slate-900',
      shadow: 'shadow-[0_5px_30px_rgba(6,182,212,0.15)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.25)]'
    },
    {
      glow: 'bg-purple-500/30',
      border: 'border-purple-500/30 hover:border-purple-500/60',
      title: 'text-purple-400',
      pillBorder: 'border-purple-500/30',
      demoBg: 'bg-purple-500/10 hover:bg-purple-500',
      demoBorder: 'border-purple-500/30',
      demoText: 'text-purple-400 hover:text-white',
      shadow: 'shadow-[0_5px_30px_rgba(168,85,247,0.15)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]'
    },
    {
      glow: 'bg-emerald-500/30',
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      title: 'text-emerald-400',
      pillBorder: 'border-emerald-500/30',
      demoBg: 'bg-emerald-500/10 hover:bg-emerald-500',
      demoBorder: 'border-emerald-500/30',
      demoText: 'text-emerald-400 hover:text-white',
      shadow: 'shadow-[0_5px_30px_rgba(16,185,129,0.15)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]'
    },
    {
      glow: 'bg-rose-500/30',
      border: 'border-rose-500/30 hover:border-rose-500/60',
      title: 'text-rose-400',
      pillBorder: 'border-rose-500/30',
      demoBg: 'bg-rose-500/10 hover:bg-rose-500',
      demoBorder: 'border-rose-500/30',
      demoText: 'text-rose-400 hover:text-white',
      shadow: 'shadow-[0_5px_30px_rgba(244,63,94,0.15)] hover:shadow-[0_10px_40px_rgba(244,63,94,0.25)]'
    },
    {
      glow: 'bg-amber-500/30',
      border: 'border-amber-500/30 hover:border-amber-500/60',
      title: 'text-amber-400',
      pillBorder: 'border-amber-500/30',
      demoBg: 'bg-amber-500/10 hover:bg-amber-400',
      demoBorder: 'border-amber-500/30',
      demoText: 'text-amber-400 hover:text-slate-900',
      shadow: 'shadow-[0_5px_30px_rgba(245,158,11,0.15)] hover:shadow-[0_10px_40px_rgba(245,158,11,0.25)]'
    },
    {
      glow: 'bg-blue-500/30',
      border: 'border-blue-500/30 hover:border-blue-500/60',
      title: 'text-blue-400',
      pillBorder: 'border-blue-500/30',
      demoBg: 'bg-blue-500/10 hover:bg-blue-500',
      demoBorder: 'border-blue-500/30',
      demoText: 'text-blue-400 hover:text-white',
      shadow: 'shadow-[0_5px_30px_rgba(59,130,246,0.15)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)]'
    }
  ];

  const theme = colorThemes[index % colorThemes.length];

  return (
    <div 
      className={`group bg-surface/30 backdrop-blur-xl border rounded-2xl p-7 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 relative overflow-hidden animate-fade-up ${theme.border} ${theme.shadow}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background glowing blob on hover */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[50px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${theme.glow}`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
         <h3 className={`font-sans font-bold text-2xl mb-3 transition-colors duration-300 ${theme.title}`}>{project.title}</h3>
         <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
         
         <div className="flex flex-wrap gap-2 mb-8">
           {project.techPills.map((tech) => (
             <span key={tech} className={`bg-black/30 border text-xs font-mono px-3 py-1.5 rounded-full text-white/90 transition-colors duration-300 ${theme.pillBorder}`}>
               {tech}
             </span>
           ))}
         </div>

         <div className="flex flex-wrap items-center gap-3 mt-auto">
           {project.liveUrl && (
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`border font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 ${theme.demoBg} ${theme.demoBorder} ${theme.demoText}`}>
               Live Demo →
             </a>
           )}
           
           {project.visibility === 'public' && project.repoUrl && (
             <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300">
               GitHub ↗
             </a>
           )}

           {project.visibility === 'private' && (
             <span className="bg-black/20 border border-white/10 text-white/50 font-medium px-5 py-2.5 rounded-lg text-sm cursor-not-allowed">
               Private Repository
             </span>
           )}
         </div>
      </div>
    </div>
  );
}
