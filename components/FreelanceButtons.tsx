export default function FreelanceButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '1s' }}>
      
      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/freelancers/~01d1e47120d0918186?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-[#14a800] text-white hover:bg-[#108a00] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(20,168,0,0.4)] transition-all duration-300 shadow-2xl border border-white/20 backdrop-blur-sm"
        title="Hire me on Upwork"
      >
        <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <title>Upwork</title>
          <path d="M17.65 10.63a4.91 4.91 0 0 0-3.32 1.25 15.35 15.35 0 0 1-1.22-3.14l.05-.1A4.77 4.77 0 0 0 13.56 5.8 4.67 4.67 0 0 0 8.87 10.5v3.42a2.38 2.38 0 0 1-2.38 2.38 2.38 2.38 0 0 1-2.38-2.38V5.86H0v7.64a6.49 6.49 0 0 0 6.49 6.49 6.49 6.49 0 0 0 6.49-6.49v-2.08a17.29 17.29 0 0 0 1.2 2.76 4.9 4.9 0 0 0 3.47 1.45 4.93 4.93 0 0 0 4.93-4.93 4.92 4.92 0 0 0-4.93-4.92zM17.65 18a2.53 2.53 0 0 1-2.19-1.24c.73-.85 1.4-1.89 2.05-3a2.53 2.53 0 0 1 .14 4.24z"/>
        </svg>
        <span className="hidden sm:inline font-black tracking-wide text-sm whitespace-nowrap">Hire me</span>
      </a>

      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/s/Q7ZKKVw"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-[#1dbf73] text-white hover:bg-[#19a463] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(29,191,115,0.4)] transition-all duration-300 shadow-2xl border border-white/20 backdrop-blur-sm"
        title="Hire me on Fiverr"
      >
        <svg role="img" viewBox="0 0 24 24" className="w-14 h-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <title>Fiverr</title>
          <path d="M22.052 7.042c0-1.821-1.396-3.23-3.155-3.23-1.077 0-2.073.535-2.651 1.401l-.226-.814H12.92v15.65h3.693v-8.086c0-2.02 1.055-2.859 2.274-2.859.98 0 1.637.587 1.637 1.835v9.11h3.673v-9.522c0-.525-.052-1.018-.145-1.485zm-14.156 3.65h-2.1v9.356H2v-9.356H.014V7.558H2v-2.11c0-2.31 1.15-4.22 4.02-4.22 1.341 0 2.473.284 3.19.64l-1.056 3.118c-.415-.19-.887-.333-1.415-.333-.943 0-1.057.436-1.057 1.018v1.886h4.215v3.135h-2.003v.001z"/>
        </svg>
      </a>

    </div>
  );
}
