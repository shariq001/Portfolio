import React from 'react';

export default function GithubStats() {
  return (
    <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold text-white font-sans">GitHub Stats</h3>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Repositories */}
        <div className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all"></div>
          <div className="text-primary mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <div className="text-4xl font-black text-white mb-1 font-mono">50+</div>
          <div className="text-sm font-bold text-muted font-mono tracking-wider uppercase">Public Repos</div>
        </div>

        {/* Top Languages */}
        <div className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-all"></div>
          <div className="text-purple-500 mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <div className="flex flex-col justify-center h-[40px]">
            <div className="text-xl font-bold text-white font-mono leading-tight">
              Python . Typescript . Next.Js . SDD
            </div>
          </div>
          <div className="text-sm font-bold text-muted font-mono tracking-wider uppercase mt-1">Top Stack</div>
        </div>

      </div>
    </div>
  );
}
