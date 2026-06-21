export default function Skills() {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'TypeScript', 'HTML', 'CSS'],
      delay: '0.2s'
    },
    {
      category: 'Frameworks',
      items: ['Next.js', 'Tailwind CSS', 'Streamlit', 'Chainlit'],
      delay: '0.4s'
    },
    {
      category: 'AI / Tooling',
      items: ['LLMs', 'RAG', 'Agentic Workflows', 'Antigravity CLI', 'Spec-Kit Plus'],
      delay: '0.6s'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="mb-12 text-center md:text-left animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans inline-block pb-2">
          Technical Arsenal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div 
            key={group.category} 
            className="group bg-surface/30 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,255,255,0.1)] relative overflow-hidden animate-fade-up"
            style={{ animationDelay: group.delay }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <h3 className="text-white text-xl font-bold font-sans mb-6 relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-black/40 border border-white/10 text-sm font-mono px-4 py-2 rounded-full text-white/80 transition-all duration-300 hover:border-primary hover:text-white hover:bg-primary/10 hover:-translate-y-1 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
