import GithubStats from './GithubStats';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans inline-block pb-2 mb-8 text-center sm:text-left w-full sm:w-auto">
            About Me
          </h2>
          
          <div className="bg-surface/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-purple-500"></div>
            
            <div className="text-lg md:text-xl text-muted space-y-6 leading-relaxed relative z-10">
              <p>
                I am a <strong className="text-white">Next.js Frontend Developer</strong> and Computer Science undergraduate dedicated to building robust, SEO-optimized web applications.
              </p>
              <p>
                Leveraging <strong className="text-white">Spec-Driven Development</strong> and <strong className="text-white">CLI AI tools</strong>, I engineer modern web solutions with relentless precision and scale.
              </p>
              <p>
                Currently advancing through the <strong className="text-white">Panaversity Agentic AI Developer</strong> roadmap, my core mission is merging high-performance frontend architectures with <strong className="text-white">next-generation AI automation</strong> to deliver uncompromising, impactful results.
              </p>
            </div>
          </div>
          
          <GithubStats />
        </div>

        {/* Decorative Visual element */}
        <div className="hidden lg:flex justify-center shrink-0 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-64 h-64 rounded-full border border-white/10 relative flex items-center justify-center group">
             <div className="absolute inset-4 rounded-full border border-primary/30 border-t-primary animate-[spin-slow_10s_linear_infinite]"></div>
             <div className="absolute inset-8 rounded-full border border-purple-500/30 border-b-purple-500 animate-[spin-slow_15s_linear_infinite_reverse]"></div>
             <div className="w-24 h-24 bg-surface/50 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-shadow duration-500">
               <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-primary">MS</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
