/** Premium animated footer with social links */
export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20 mt-10 overflow-hidden">
      {/* Continuous Loop Animated Gradient Background - Made much more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 bg-[length:200%_auto] animate-gradient pointer-events-none"></div>
      
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-surface/60 backdrop-blur-md pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-up">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-5">
          <div className="font-sans font-bold text-lg text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center animate-pulse shrink-0">
              <span className="text-[10px] text-white">MS</span>
            </div>
            <span>Muhammad Shariq</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-white/20"></div>
          <p className="text-white/80 text-sm font-mono flex items-center pt-[2px]">
            © {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>

        {/* Social Links Container */}
        <div className="flex items-center gap-3">
          {/* Email */}
          <a href="mailto:shariqfazal123@gmail.com" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:text-surface hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            <span className="sr-only">Email</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </a>
          
          {/* Phone */}
          <a href="tel:+923182965978" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:text-surface hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            <span className="sr-only">Phone</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/muhammad---shariq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:text-surface hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/shariq001" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:text-surface hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            <span className="sr-only">GitHub</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
