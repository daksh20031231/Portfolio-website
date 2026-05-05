'use client';

const projects = [
  {
    title: 'Night Snack Store',
    emoji: '🍿',
    description:
      'Developed and deployed a full-stack hostel food delivery app (Next.js, NextAuth, Google OAuth 2.0) with 300+ active users, real-time buyer/seller role-switching, and UPI/cash checkout.',
    tech: ['Next.js', 'Node.js', 'Google Auth', 'MongoDB'],
    link: 'https://night-snack-store.vercel.app/auth/signin', // replace with your link
  },
  {
    title: 'Deceptinet',
    emoji: '🛡️',
    description:
      'Built DeceptiNet (SOC dashboard) — an AI honeypot platform simulating 5+ attack surfaces, achieving ~90–95% ML threat detection accuracy across 1,000+ attack events, with 30% fewer false positives via reinforcement learning.',
    tech: ['Python', 'ML', 'AI Model', 'MongoDB', 'docker', 'Next.js', 'Honeypots', 'Protocol', 'IDS and IPS'],
    link: 'https://deceptinet.vercel.app/login', // replace
  },
  {
    title: 'Hospital Management System',
    emoji: '🏥',
    description:
      'Developed a full-stack Hospital Management System with integrated billing, enabling role-based access (Admin/Doctor/Patient), appointment scheduling, and automated invoice generation. Optimized SQL database to handle 1000+ records and improved operational efficiency by ~40%.',
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