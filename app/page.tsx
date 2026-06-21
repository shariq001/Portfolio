import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/** Root page composing all portfolio sections */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen">
        <Hero />
        <About />
        <Skills />
        <section id="projects" className="min-h-screen flex items-center justify-center border-b border-border/50">
          <p className="text-muted text-xl font-mono">{'/* Projects section placeholder from spec-03 */'}</p>
        </section>
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
