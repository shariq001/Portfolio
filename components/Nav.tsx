'use client';
import { useState } from 'react';
import Link from 'next/link';

/** Main navigation component with mobile drawer */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/about#skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-surface/60 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      {/* Animated Glowing Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="group relative flex items-center">
            <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary group-hover:to-white transition-all duration-500">
              MS
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.name} href={link.path} className="relative text-sm font-medium text-muted hover:text-white transition-colors py-2 group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
              </Link>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-white hover:bg-white/5 hover:pl-5 transition-all duration-300 border-l-2 border-transparent hover:border-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
