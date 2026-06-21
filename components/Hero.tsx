import Link from 'next/link';

/** Hero section component with headline and CTAs */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">
        Muhammad Shariq
      </h1>
      
      <div className="flex items-center mb-6">
        <h2 className="text-xl md:text-2xl font-mono text-primary">
          Software Engineer · Frontend Developer · Agentic AI
        </h2>
        <span className="w-2 h-6 md:h-8 bg-primary ml-2 animate-pulse"></span>
      </div>
      
      <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
        I build intelligent web experiences — from responsive UIs to autonomous AI workflows.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Link href="#projects" className="bg-primary text-base font-medium px-6 py-3 rounded text-surface hover:bg-primary-dim transition-colors">
          View Projects →
        </Link>
        <Link href="#contact" className="border border-primary text-primary font-medium px-6 py-3 rounded hover:bg-primary/10 transition-colors">
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
