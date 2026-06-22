import type { Metadata } from 'next';
import { Inter, Geist, Fira_Code } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: 'Muhammad Shariq — Frontend Developer',
  description: 'Portfolio of Muhammad Shariq — Next.js developer focused on agentic AI, RAG, and autonomous workflows. HITMS CS student, Innova Tech alum.',
  openGraph: {
    title: 'Muhammad Shariq',
    description: 'Next.js · Python · Agentic AI',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${geist.variable} ${firaCode.variable}`}>
      <body className="bg-base text-white antialiased flex flex-col min-h-screen">
        <Nav />
        <div className="flex-grow">
          {children}
        </div>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
