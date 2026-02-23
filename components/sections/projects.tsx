'use client';

const projects = [
  {
    title: 'Night Snack Store',
    emoji: '🍿',
    description:
      'Full-stack e-commerce platform for hostel students to order snacks with buyer-seller role switching and UPI/cash payments.',
    tech: ['Next.js', 'Node.js', 'Google Auth', 'MongoDB'],
    link: 'https://night-snack-store.vercel.app/auth/signin', // replace with your link
  },
  {
    title: 'Intrusion Detection System',
    emoji: '🛡️',
    description:
      'ML-powered IDS that classifies network traffic as normal or malicious using advanced machine learning models.',
    tech: ['Python', 'ML', 'TensorFlow', 'Scikit-learn'],
    link: 'https://github.com/your-repo', // replace
  },
  {
    title: 'Hospital Management System',
    emoji: '🏥',
    description:
      'Comprehensive hospital management solution with billing, scheduling, and automation for seamless operations.',
    tech: ['Next.js', 'Node.js', 'APIs', 'Database'],
    link: 'https://github.com/daksh20031231/Hospital-Management-System-with-Billing-system', // replace
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-12 text-center">
          🚀 Few Things I&apos;ve Built
        </h2>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="group p-6 md:p-8 border-b border-border hover:bg-muted/50 transition-colors duration-300 cursor-pointer scale-in"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Emoji */}
                  <div className="text-4xl md:text-5xl flex-shrink-0">
                    {project.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <span className="text-xl text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0">
                    ⤴
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}