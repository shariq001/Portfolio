/** About section component detailing background and focus */
export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
      <div className="w-full flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white font-sans">About</h2>
          <div className="text-lg text-muted space-y-4">
            <p>
              BS Computer Science student at HITMS (Expected 2029, GPA 3.86). Frontend Developer Intern at Innova Tech (Feb–Apr 2024), translating UI/UX specs into responsive web interfaces.
            </p>
            <p>
              Focused on agentic AI, RAG pipelines, and autonomous workflows. Available for projects, internships, and collaborations.
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-center shrink-0">
          <div className="w-1 h-48 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
