import Link from 'next/link';

/** Hero section component with headline and CTAs */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50"></div>

      <div className="relative z-10">
        <h1 
          className="text-5xl md:text-7xl font-sans font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient-x opacity-0 [animation:var(--animate-fade-in-up)]"
          style={{ animationDelay: '0.1s' }}
        >
          Muhammad Shariq
        </h1>
        
        <div 
          className="flex items-center mb-6 opacity-0 [animation:var(--animate-fade-in-up)]"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-xl md:text-2xl font-mono text-primary">
            Frontend Developer · Agentic AI
          </h2>
          <span className="w-2 h-6 md:h-8 bg-primary ml-2 animate-pulse"></span>
        </div>
        
        <p 
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 opacity-0 [animation:var(--animate-fade-in-up)]"
          style={{ animationDelay: '0.5s' }}
        >
          I build intelligent web experiences — from responsive UIs to autonomous AI workflows.
        </p>
        
        <div 
          className="flex flex-wrap gap-4 opacity-0 [animation:var(--animate-fade-in-up)]"
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
