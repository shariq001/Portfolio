import Link from 'next/link';

/** Hero section component with headline and CTAs */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full star" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] left-[70%] w-1.5 h-1.5 bg-primary rounded-full star" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-white rounded-full star" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[80%] left-[80%] w-2 h-2 bg-primary rounded-full star" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[40%] left-[85%] w-1 h-1 bg-white rounded-full star" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[75%] left-[30%] w-1.5 h-1.5 bg-primary rounded-full star" style={{ animationDelay: '3.1s' }}></div>
        <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-white rounded-full star" style={{ animationDelay: '1.2s' }}></div>
      </div>

      {/* Rotating Realistic Circle / Orbital Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full border border-white/5 border-t-primary/40 border-r-primary/10 animate-spin-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full border border-white/5 border-b-primary/30 border-l-primary/10 animate-[spin-slow_25s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full mt-16 lg:mt-0">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col justify-center">
          <h1 
            className="text-5xl md:text-7xl font-sans font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Muhammad Shariq
          </h1>
          
          <div 
            className="flex items-center mb-6 animate-fade-up h-8"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="text-xl md:text-2xl font-mono text-primary animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary pr-2">
              Frontend Developer · Agentic AI
            </h2>
          </div>
          
          <p 
            className="text-lg md:text-xl text-muted max-w-lg mb-10 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            I build intelligent web experiences — from responsive UIs to autonomous AI workflows.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/projects" className="bg-primary text-base font-semibold px-8 py-4 rounded-lg text-surface hover:bg-primary-dim transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              View Projects →
            </Link>
            <Link href="/contact" className="border-2 border-primary/50 text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 active:scale-95">
              Get In Touch
            </Link>
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
              <span className="ml-2 text-xs font-mono text-muted">agent.py</span>
            </div>
            
            {/* Editor Content */}
            <div className="p-6 font-mono text-sm xl:text-base leading-relaxed text-muted relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="text-primary/80 mb-2">import <span className="text-white">agentic_workflows</span></div>
              <div className="text-primary/80 mb-6">from <span className="text-white">portfolio</span> import <span className="text-white">UserExperience</span></div>
              
              <div className="mb-2"><span className="text-purple-400">class</span> <span className="text-blue-400">Developer</span>:</div>
              <div className="pl-4 mb-2">
                <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-white">self</span>):
              </div>
              <div className="pl-8 mb-6">
                <span className="text-white">self</span>.skills = [<span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'LLMs'</span>]
              </div>
              
              <div className="pl-4 mb-2">
                <span className="text-purple-400">async def</span> <span className="text-blue-400">build</span>(<span className="text-white">self</span>):
              </div>
              <div className="pl-8 mb-2">
                <span className="text-purple-400">await</span> UserExperience.optimize(
              </div>
              <div className="pl-12 text-green-400">performance=True,</div>
              <div className="pl-12 text-green-400">aesthetics='stunning'</div>
              <div className="pl-8">)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
