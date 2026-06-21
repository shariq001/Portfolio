import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';

export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen">
      <About />
      <Skills />
      <Certifications />
    </main>
  );
}
