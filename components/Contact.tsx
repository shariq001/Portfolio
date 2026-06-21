'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xgojwbpd', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        router.push('/thanks');
      } else {
        alert("Oops! There was a problem submitting your form.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center md:text-left mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans mb-6 animate-fade-up">
          Let's Connect
        </h2>
        
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-sm mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          Available for new opportunities
        </div>

        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Whether you have a project in mind, want to discuss AI integrations, or just want to say hi — my inbox is always open. Fill out the form or reach out directly via my socials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch relative z-10 w-full">
        
        {/* Left Column: Interactive Contact Form */}
        <div className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500 animate-fade-up h-full flex flex-col" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2 ml-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2 ml-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2 ml-1">Message</label>
                <textarea id="message" name="message" required rows={7} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none shadow-inner" placeholder="How can I help you?"></textarea>
              </div>
            </div>
            
            <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-primary text-surface font-bold py-4 rounded-xl hover:bg-primary-dim transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
            </button>
          </form>
        </div>

        {/* Right Column: Sleek Social Links */}
        <div className="flex flex-col animate-fade-up h-full" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md h-full flex flex-col justify-center shadow-xl">
            <div className="flex flex-col gap-6">
              {/* Email Link */}
              <a href="mailto:shariqfazal123@gmail.com" className="flex items-center gap-5 bg-surface/50 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,0.1)]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300 text-white group-hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1 group-hover:text-white transition-colors">Email</div>
                  <div className="text-white font-mono text-base md:text-lg font-bold group-hover:text-primary transition-colors">shariqfazal123@gmail.com</div>
                </div>
              </a>

              {/* Phone Link */}
              <a href="tel:+923182965978" className="flex items-center gap-5 bg-surface/50 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,0.1)]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300 text-white group-hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1 group-hover:text-white transition-colors">Phone</div>
                  <div className="text-white font-mono text-base md:text-lg font-bold group-hover:text-primary transition-colors">+92 318 2965978</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a href="https://linkedin.com/in/muhammad---shariq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-surface/50 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,0.1)]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300 text-white group-hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1 group-hover:text-white transition-colors">LinkedIn</div>
                  <div className="text-white font-mono text-base md:text-lg font-bold group-hover:text-primary transition-colors">/muhammad---shariq</div>
                </div>
              </a>

              {/* GitHub Link */}
              <a href="https://github.com/shariq001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-surface/50 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,0.1)]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300 text-white group-hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1 group-hover:text-white transition-colors">GitHub</div>
                  <div className="text-white font-mono text-base md:text-lg font-bold group-hover:text-primary transition-colors">@shariq001</div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
