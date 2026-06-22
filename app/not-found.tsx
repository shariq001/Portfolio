import Link from 'next/link';

export const metadata = {
  title: '404 - Lost in the Void | Muhammad Shariq',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden text-center pt-20 pb-16">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Animated 404 Title */}
        <h1 
          className="text-8xl sm:text-9xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-purple-500 drop-shadow-[0_0_30px_rgba(0,255,255,0.4)] animate-fade-up"
        >
          404
        </h1>
        
        {/* Subtitle */}
        <h2 
          className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4 animate-fade-up font-sans"
          style={{ animationDelay: '0.2s' }}
        >
          Lost in the Void
        </h2>
        
        <p 
          className="text-muted text-base sm:text-lg max-w-md mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          The page you're looking for has either been moved, deleted, or never existed in this dimension. Let's get you back on track.
        </p>

        {/* Navigation Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-up mb-16"
          style={{ animationDelay: '0.6s' }}
        >
          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-surface font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] w-full sm:w-auto"
          >
            <svg className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto hover:scale-105"
          >
            View Projects
          </Link>
        </div>

        {/* Social Connect Divider */}
        <div className="flex items-center w-full max-w-xs mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <span className="px-4 text-xs font-mono text-muted uppercase tracking-widest">Connect</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '1s' }}>
          <a href="mailto:shariqfazal123@gmail.com" className="group text-muted hover:text-primary transition-colors duration-300 hover:scale-110">
            <span className="sr-only">Email</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </a>
          
          <a href="https://linkedin.com/in/muhammad---shariq" target="_blank" rel="noopener noreferrer" className="group text-muted hover:text-primary transition-colors duration-300 hover:scale-110">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          
          <a href="https://github.com/shariq001" target="_blank" rel="noopener noreferrer" className="group text-muted hover:text-primary transition-colors duration-300 hover:scale-110">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        
      </div>
    </main>
  );
}
