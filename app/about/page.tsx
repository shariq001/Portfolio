import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';

export default function AboutPage() {
  return (
    <main className="pt-32 min-h-screen">
      <About />
      <Experience />
      <Skills />
      <Certifications />
    </main>
  );
}
