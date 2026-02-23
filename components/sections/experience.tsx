"use client";

import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "🔐 Cyber Security Intern",
    company: "Miles Education",
    period: "Apr 2024 - May 2024",
    location: "Bangalore, India",
    description:
      "Developed network topologies and performed packet analysis. Utilized Wireshark for traffic analysis and Python for automation, gaining hands-on experience in network security protocols.",
    tags: ["Cisco Packet Tracer", "Wireshark", "Python", "Burpsuite"],
  },
  {
    title: "🏡 Part-Time Realtor",
    company: "Independent",
    period: "2024 - Present",
    location: "Bangalore, India",
    description:
      "RERA-certified dealer working under PRIME ESTATE, handling residential and commercial properties for both rental and sale. Managing property listings, client interactions, negotiations, and end-to-end deal closures while building strong client relationships.",
    tags: ["Real Estate", "Client Relations", "Sales"],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-12 text-center">
          💼 Where I Worked At
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4 w-full">
                {/* Row 1: Title left + Period right */}
                <div className="flex items-start justify-between w-full">
                  <h3 className="text-2xl font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light whitespace-nowrap text-right">
                    {exp.period}
                  </p>
                </div>

                {/* Row 2: Company left + Location right */}
                <div className="flex w-full items-center justify-between flex-nowrap">
                  <p className="text-sm text-muted-foreground font-light">
                    📍 {exp.company} - {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
