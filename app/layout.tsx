import type { Metadata } from 'next';
import { Inter, Geist, Fira_Code } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FiverrButton from '@/components/FiverrButton';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad---shariq.vercel.app'),
  title: {
    default: 'Muhammad Shariq — Frontend Developer & AI Engineer',
    template: '%s | Muhammad Shariq',
  },
  description: 'Portfolio of Muhammad Shariq, a Next.js frontend developer focused on Agentic AI, RAG pipelines, and autonomous workflows. Computer Science student at HITMS and Innova Tech alum.',
  keywords: ['Muhammad Shariq', 'Frontend Developer', 'AI Engineer', 'Next.js Developer', 'React Developer', 'Agentic AI', 'RAG Pipelines', 'TypeScript', 'Python'],
  authors: [{ name: 'Muhammad Shariq' }],
  creator: 'Muhammad Shariq',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammad---shariq.vercel.app',
    title: 'Muhammad Shariq — Frontend Developer & AI Engineer',
    description: 'Portfolio of Muhammad Shariq, a Next.js frontend developer focused on Agentic AI and stunning web experiences.',
    siteName: 'Muhammad Shariq Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Shariq — Frontend Developer & AI Engineer',
    description: 'Portfolio of Muhammad Shariq, a Next.js frontend developer focused on Agentic AI and stunning web experiences.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth overflow-x-hidden w-full ${inter.variable} ${geist.variable} ${firaCode.variable}`}>
      <body className="bg-base text-white antialiased flex flex-col min-h-screen overflow-x-hidden w-full">
        <Nav />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FiverrButton />
      </body>
    </html>
  );
}
