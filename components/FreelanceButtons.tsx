export default function FreelanceButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '1s' }}>
      
      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/freelancers/~01d1e47120d0918186?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_30px_rgba(20,168,0,0.3)] transition-all duration-300 shadow-xl border border-gray-200"
        title="Hire me on Upwork"
      >
        <svg role="img" viewBox="0 0 24 24" className="w-8 h-8 fill-[#14a800]" xmlns="http://www.w3.org/2000/svg">
          <title>Upwork</title>
          <path d="M17.65 10.63a4.91 4.91 0 0 0-3.32 1.25 15.35 15.35 0 0 1-1.22-3.14l.05-.1A4.77 4.77 0 0 0 13.56 5.8 4.67 4.67 0 0 0 8.87 10.5v3.42a2.38 2.38 0 0 1-2.38 2.38 2.38 2.38 0 0 1-2.38-2.38V5.86H0v7.64a6.49 6.49 0 0 0 6.49 6.49 6.49 6.49 0 0 0 6.49-6.49v-2.08a17.29 17.29 0 0 0 1.2 2.76 4.9 4.9 0 0 0 3.47 1.45 4.93 4.93 0 0 0 4.93-4.93 4.92 4.92 0 0 0-4.93-4.92zM17.65 18a2.53 2.53 0 0 1-2.19-1.24c.73-.85 1.4-1.89 2.05-3a2.53 2.53 0 0 1 .14 4.24z"/>
        </svg>
      </a>

      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/s/Q7ZKKVw"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_30px_rgba(29,191,115,0.3)] transition-all duration-300 shadow-xl border border-gray-200"
        title="Hire me on Fiverr"
      >
        <div className="flex items-center justify-center bg-[#1dbf73] w-10 h-10 rounded-full">
          <span className="text-white font-serif font-black italic text-2xl pr-0.5 pb-0.5 leading-none tracking-tighter">fi</span>
        </div>
      </a>

    </div>
  );
}
