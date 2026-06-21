/** Skills section displaying categorized technology pills */
export default function Skills() {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'TypeScript', 'HTML', 'CSS']
    },
    {
      category: 'Frameworks',
      items: ['Next.js', 'Tailwind CSS', 'Streamlit', 'Chainlit']
    },
    {
      category: 'AI / Tooling',
      items: ['LLMs', 'RAG', 'Agentic Workflows', 'Antigravity CLI', 'Spec-Kit Plus']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12 text-white font-sans">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-muted text-xs uppercase tracking-widest mb-4 font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-surface border border-border text-sm font-mono px-3 py-1 rounded-full text-white transition-colors hover:border-primary hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
