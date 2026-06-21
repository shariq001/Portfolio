export default function Certifications() {
  return (
    <section id="certs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative pb-32">
      <div className="mb-12 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-sans inline-block pb-2">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full"></div>
      </div>

      <a 
        href="https://coursera.org/share/7fdcc92ea764d047676cd4ffbc2740af" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative inline-flex flex-col sm:flex-row items-center gap-6 bg-surface/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,255,255,0.15)] overflow-hidden animate-fade-up w-full max-w-2xl"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        
        <div className="flex flex-col text-center sm:text-left z-10">
          <h3 className="text-white font-bold text-2xl group-hover:text-primary transition-colors">Google AI Essentials</h3>
          <p className="text-muted font-mono mt-2 flex items-center justify-center sm:justify-start gap-2">
            Issued by Google
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            2024
          </p>
        </div>

        <div className="sm:ml-auto w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-500 z-10 text-white mt-4 sm:mt-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>
      </a>
    </section>
  );
}
