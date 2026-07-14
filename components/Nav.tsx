'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-0 sm:mt-6 px-0 sm:px-8 pointer-events-none">
      <nav 
        className={`pointer-events-auto relative w-full max-w-3xl transition-all duration-700 rounded-b-3xl sm:rounded-full bg-surface/30 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
          scrolled ? 'shadow-[0_8px_32px_rgba(0,255,255,0.15)] bg-surface/60 border-primary/20' : ''
        }`}
      >
        {/* Animated glowing pseudo-border inner light */}
        <div className="absolute inset-0 rounded-3xl sm:rounded-full pointer-events-none p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-gradient opacity-50 w-[200%]"></div>
        </div>

        <div className="relative flex justify-between items-center px-5 sm:px-6 py-3">
          {/* Futuristic Logo Bubble */}
          <Link href="/" className="group relative flex items-center z-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              <span className="font-mono text-sm font-black text-white group-hover:text-white transition-colors">
                MS
              </span>
            </div>
          </Link>

          {/* Desktop Pill Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-black/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`relative px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${isActive ? 'text-white bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]' : 'text-muted hover:text-white hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href="/Muhammad_Shariq_Resume.pdf?v=2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 ml-2 px-5 py-2 text-sm font-bold text-surface bg-primary hover:bg-primary-dim rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              Resume
            </a>
          </div>

          {/* Mobile Right Side Controls */}
          <div className="md:hidden flex items-center gap-3 z-10 relative">
            <a href="/Muhammad_Shariq_Resume.pdf?v=2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-surface bg-primary hover:bg-primary-dim rounded-full transition-all duration-300">
              Resume
            </a>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Expands smoothly within the pill) */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 pt-1 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-4 py-3 rounded-2xl text-center font-bold border transition-all duration-300 ${isActive ? 'text-white bg-primary/20 shadow-[0_0_15px_rgba(0,255,255,0.2)] border-primary/30' : 'text-muted hover:text-white bg-white/5 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:border-primary/30 border-transparent'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
