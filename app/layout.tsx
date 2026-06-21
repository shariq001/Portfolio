import type { Metadata } from 'next';
import { Inter, Geist, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: 'Muhammad Shariq — Software Engineer',
  description: 'Portfolio of Muhammad Shariq — Software Engineer and Frontend Developer specializing in Python, Java, and Next.js, with a focus on agentic AI and autonomous workflows.',
  openGraph: {
    title: 'Muhammad Shariq — Software Engineer',
    description: 'Portfolio of Muhammad Shariq — Software Engineer and Frontend Developer',
    // url: 'https://...',
    // siteName: 'Muhammad Shariq Portfolio',
    // images: [{ url: 'https://...' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${geist.variable} ${firaCode.variable}`}>
      <body className="bg-base text-white antialiased">
        {children}
      </body>
    </html>
  );
}
