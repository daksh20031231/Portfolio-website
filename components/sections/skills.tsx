'use client';

const stats = [
  {
    number: '20+',
    label: 'Properties Rented',
    emoji: '🏠',
  },
  {
    number: '2+',
    label: 'Bugs Found',
    emoji: '🐛',
  },
  {
    number: '10+',
    label: 'Automations Built',
    emoji: '⚙️',
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-16 text-center">
          📊 Quick Stats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-8 border border-border rounded-lg hover:bg-muted/30 transition-all duration-300 scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="text-6xl mb-4">{stat.emoji}</span>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-lg text-muted-foreground text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
