import Image from 'next/image';

export default function FreelanceButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '1s' }}>
      
      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/freelancers/~01d1e47120d0918186?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_30px_rgba(20,168,0,0.4)] transition-all duration-300 shadow-xl overflow-hidden border border-white/10"
        title="Hire me on Upwork"
      >
        <Image src="/upwork.png" alt="Upwork Profile" width={56} height={56} className="w-full h-full object-cover" />
      </a>

      {/* Fiverr Button */}
      <a
        href="https://www.fiverr.com/s/Q7ZKKVw"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_30px_rgba(29,191,115,0.4)] transition-all duration-300 shadow-xl overflow-hidden border border-white/10"
        title="Hire me on Fiverr"
      >
        <Image src="/fiverr.png" alt="Fiverr Profile" width={56} height={56} className="w-full h-full object-cover" />
      </a>

    </div>
  );
}
