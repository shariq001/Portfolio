import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Animated Checkmark */}
        <div className="w-24 h-24 mx-auto bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center mb-8 animate-fade-up shadow-[0_0_30px_rgba(0,255,255,0.3)] group hover:scale-110 transition-transform duration-500">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Message Sent!
        </h1>
        
        <p className="text-xl text-muted mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Thank you for reaching out! I've successfully received your message and will get back to you as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/" className="w-full sm:w-auto bg-primary text-surface font-bold px-8 py-4 rounded-xl hover:bg-primary-dim transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1">
            Return to Home
          </Link>
          <a href="https://linkedin.com/in/muhammad---shariq" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-surface/50 backdrop-blur-md border border-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
