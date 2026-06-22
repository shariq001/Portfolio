export default function FiverrButton() {
  return (
    <a
      href="https://www.fiverr.com/s/Q7ZKKVw"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2.5 px-4 py-3 sm:px-5 rounded-full bg-[#1dbf73] text-white hover:bg-[#19a463] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(29,191,115,0.4)] transition-all duration-300 animate-fade-up shadow-2xl border border-white/20 backdrop-blur-sm"
      style={{ animationDelay: '1s' }}
      title="Hire me on Fiverr"
    >
      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
        <span className="text-[#1dbf73] font-serif font-black italic text-xl pr-0.5 leading-none tracking-tighter">fi</span>
      </div>
      <span className="hidden sm:inline font-black tracking-wide text-sm">Hire me</span>
    </a>
  );
}
