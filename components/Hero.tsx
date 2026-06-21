import Link from 'next/link';

/** Hero section component with headline and CTAs */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
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

      <div className="relative z-10">
        <h1 
          className="text-5xl md:text-7xl font-sans font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Muhammad Shariq
        </h1>
        
        <div 
          className="flex items-center mb-6 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Typewriter text wrapper */}
          <div className="inline-block relative">
            <h2 className="text-xl md:text-2xl font-mono text-primary animate-typing whitespace-nowrap pr-2">
              Frontend Developer · Agentic AI
            </h2>
            {/* Blinking cursor fixed at the end of the line */}
            <span className="absolute right-0 top-0 bottom-0 w-2 bg-primary animate-pulse"></span>
          </div>
        </div>
        
        <p 
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 animate-fade-up"
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
    </section>
  );
}
