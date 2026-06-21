import Nav from '@/components/Nav';

/** Root page component serving as a shell */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen">
        <section id="hero" className="min-h-screen flex items-center justify-center border-b border-border/50">
          {/* Hero section placeholder */}
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center border-b border-border/50">
          {/* About section placeholder */}
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center border-b border-border/50">
          {/* Skills section placeholder */}
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center border-b border-border/50">
          {/* Projects section placeholder */}
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          {/* Contact section placeholder */}
        </section>
      </main>
    </>
  );
}
