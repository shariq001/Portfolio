import Link from 'next/link';
import RandomStars from './RandomStars';

/** Hero section component with headline and CTAs */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Stars (Dynamic Random Spawns) */}
      <RandomStars />

      {/* Rotating Realistic Circle / Orbital Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full border border-white/5 border-t-primary/40 border-r-primary/10 animate-spin-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full border border-white/5 border-b-primary/30 border-l-primary/10 animate-[spin-slow_25s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full mt-16 lg:mt-0">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col justify-center text-center sm:text-left items-center sm:items-start relative z-10 animate-fade-up">
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-sans font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Muhammad Shariq
          </h1>
          
          <div 
            className="flex items-center justify-center sm:justify-start mb-6 animate-fade-up h-8"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="text-sm sm:text-xl md:text-2xl font-mono text-primary animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary">
              Frontend Developer · Agentic AI&nbsp;
            </h2>
          </div>
          
          <p 
            className="text-lg md:text-xl text-muted max-w-lg mb-10 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            I build intelligent web experiences — from responsive UIs to autonomous AI workflows.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-up w-full sm:w-auto"
            style={{ animationDelay: '0.4s' }}
          >
            <Link 
              href="/projects" 
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-surface font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
            >
              <span className="relative z-10">View Projects</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
            <a href="/Muhammad_Shariq_Resume.pdf?v=2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: Code Design Component */}
        <div 
          className="hidden lg:flex flex-col items-end justify-center relative w-full h-full animate-fade-up" 
          style={{ animationDelay: '0.9s' }}
        >
          {/* Glowing orbs behind editor */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Floating Code Editor */}
          <div className="w-[480px] xl:w-[550px] bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative group transform hover:-translate-y-2 transition-transform duration-500">
            {/* Editor Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs font-mono text-white/70">agent.py</span>
            </div>
            
            {/* Editor Content */}
            <div className="p-6 font-mono text-sm xl:text-base leading-relaxed text-white/80 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="text-primary/80 mb-2">import <span className="text-white">agentic_workflows</span></div>
              <div className="text-primary/80 mb-6">from <span className="text-white">portfolio</span> import <span className="text-white">UserExperience</span></div>
              
              <div className="mb-2 text-white/80"><span className="text-purple-400">class</span> <span className="text-blue-400">Developer</span>:</div>
              <div className="pl-4 mb-2 text-white/80">
                <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-white">self</span>):
              </div>
              <div className="pl-8 mb-6 text-white/80">
                <span className="text-white">self</span>.skills = [<span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'LLMs'</span>]
              </div>
              
              <div className="pl-4 mb-2 text-white/80">
                <span className="text-purple-400">async def</span> <span className="text-blue-400">build</span>(<span className="text-white">self</span>):
              </div>
              <div className="pl-8 mb-2 text-white/80">
                <span className="text-purple-400">await</span> UserExperience.optimize(
              </div>
              <div className="pl-12 text-green-400">performance=True,</div>
              <div className="pl-12 text-green-400">aesthetics='stunning'</div>
              <div className="pl-8 text-white/80">)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
