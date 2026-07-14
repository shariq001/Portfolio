export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mb-12 animate-fade-up text-center sm:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans inline-block pb-2">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-4 mx-auto sm:mx-0 rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
        {/* Timeline item */}
        <div className="relative md:flex md:gap-8 group animate-fade-up" style={{ animationDelay: '0.2s' }}>
          
          <div className="absolute -left-[41px] md:relative md:left-0 md:w-48 flex-shrink-0 flex md:justify-end mt-1 md:mt-0">
             <div className="hidden md:block text-right pr-8">
               <div className="text-primary font-mono font-bold">Feb 2025</div>
               <div className="text-muted text-sm font-mono">Apr 2025</div>
             </div>
             {/* Timeline Node */}
             <div className="w-5 h-5 rounded-full bg-surface border-4 border-primary z-10 md:absolute md:-right-[10px] md:top-1 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
          </div>
          
          <div className="md:hidden mb-2">
            <span className="text-primary font-mono text-sm font-bold">Feb 2025 — Apr 2025</span>
          </div>

          <div className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex-grow hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,255,255,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Frontend Developer Intern</h3>
            <h4 className="text-lg text-white/70 font-mono mb-4">InnovaTech</h4>
            <p className="text-muted leading-relaxed">
              Translated complex UI/UX wireframes into highly responsive, interactive web interfaces. Collaborated with design and backend teams to ensure pixel-perfect implementations and seamless API integrations.
            </p>
            <div className="mt-6 relative z-10">
              <a href="/Certificate.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary font-mono text-sm font-bold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                View Certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
