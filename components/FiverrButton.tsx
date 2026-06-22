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
      <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
        <title>Fiverr</title>
        <path d="M22.052 7.042c0-1.821-1.396-3.23-3.155-3.23-1.077 0-2.073.535-2.651 1.401l-.226-.814H12.92v15.65h3.693v-8.086c0-2.02 1.055-2.859 2.274-2.859.98 0 1.637.587 1.637 1.835v9.11h3.673v-9.522c0-.525-.052-1.018-.145-1.485zm-14.156 3.65h-2.1v9.356H2v-9.356H.014V7.558H2v-2.11c0-2.31 1.15-4.22 4.02-4.22 1.341 0 2.473.284 3.19.64l-1.056 3.118c-.415-.19-.887-.333-1.415-.333-.943 0-1.057.436-1.057 1.018v1.886h4.215v3.135h-2.003v.001z"/>
      </svg>
      <span className="hidden sm:inline font-black tracking-wide text-sm">Hire me</span>
    </a>
  );
}
