import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact | Muhammad Shariq',
  description: 'Get in touch with Muhammad Shariq for innovative Next.js opportunities, collaborations, and frontend developer roles.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <Contact />
    </main>
  );
}
