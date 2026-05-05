"use client";

import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "🔐 Cyber Security Intern",
    company: "Miles Education",
    period: "Apr 2024 - May 2024",
    location: "Bangalore, India",
    description:
      "Designed and deployed 5+ network topologies in Cisco Packet Tracer to optimise packet transfer efficiency, reducing simulated network latency by ~20%. Captured and analysed 500+ packets using Wireshark, identifying anomalous traffic patterns including ARP spoofing and irregular TCP handshakes. Automated packet capture and parsing pipeline in Python, cutting manual analysis time by ~40% and accelerating threat identification across 3 simulated enterprise network scenarios.",
    tags: ["Cisco Packet Tracer", "Wireshark", "Python", "Burpsuite"],
  },
  {
    title: "🏡 Real Estate Operations",
    company: "Dream Realty Sevices LLP",
    period: "2024 - Present",
    location: "Bangalore, India",
    description:
      "Handled client interactions, supported property consultations, and coordinated aspects of residential and commercial real estate deals. In parallel, I handle the technical and digital side of Dreamrealty.in—building and maintaining the website, managing its online presence, and supporting marketing efforts to improve lead generation and visibility. This experience allows me to work at the intersection of technology and business, focusing on creating effective digital solutions while contributing to real-world operations.",
    tags: [
      "Real Estate",
      "Client Relations",
      "Sales",
      "Web Development",
      "Lead Generation",
      "Marketing",
      "Communication",
    ],
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
                {/* Row 1 */}
                <div className="flex items-start justify-between w-full">
                  <h3 className="text-2xl font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light whitespace-nowrap text-right">
                    {exp.period}
                  </p>
                </div>

                {/* Row 2 */}
                <div className="flex w-full items-center justify-between flex-nowrap">
                  <p className="text-sm text-muted-foreground font-light">
                    📍 {exp.company} - {exp.location}
                  </p>
                </div>
              </div>

              {/* 🔥 Description with clickable Dreamrealty */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description.includes("Dreamrealty.in") ? (
                  <>
                    {exp.description.split("Dreamrealty.in")[0]}
                    <a
                      href="https://dreamrealty.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary hover:opacity-80 transition font-medium"
                    >
                      Dreamrealty.in
                    </a>
                    {exp.description.split("Dreamrealty.in")[1]}
                  </>
                ) : (
                  exp.description
                )}
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