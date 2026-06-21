'use client';
import { useState } from 'react';
import Link from 'next/link';

/** Main navigation component with mobile drawer */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/about#skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-xl font-bold text-primary">
            MS
          </Link>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.name} href={link.path} className="text-muted hover:text-primary transition-colors">
                {link.name}
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
              <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-muted hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
