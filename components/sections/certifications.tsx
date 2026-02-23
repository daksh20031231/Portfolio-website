'use client';

import { Card } from '@/components/ui/card';

const certifications = [
  
  {
    title: '🅖 Google Cybersecurity',
    issuer: 'Coursera',
    date: 'Mar 2024',
    cred: '3JX3SK7LMYK',
    description:
      'Learned practical cybersecurity skills including threat analysis, vulnerability management, SIEM basics, Linux security, and incident response through real-world labs and security case studies.',
  },
  {
    title: '📡 Certified Network Defender(CNDv12)',
    issuer: 'EC-Council',
    date: 'Apr 2024 - Apr 2028',
    cred: 'ECC3264597801',
    description:
      'Gained hands-on knowledge of network security, including intrusion detection, incident response, firewall configuration, and threat analysis. Trained to defend, detect, and respond to network-based attacks in enterprise environments.',
  },
  {
    title: '🤖 Oracle Certified AI Foundational Associate',
    issuer: 'Oracle',
    date: 'Dec 2025',
    cred: '324792919OCI25AICFA',
    description:
      'Learned core AI fundamentals, machine learning concepts, AI lifecycle, and real-world AI applications with an introduction to Oracle Cloud AI services.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-12 text-center">
          🏆 Certifications
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="p-8 border border-border transition-colors duration-300 hover:border-primary/40"
            >
              <div className="space-y-4">
                {/* Row 1: Title + Date */}
                <div className="flex items-start justify-between w-full">
                  <h3 className="text-2xl font-medium text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-nowrap text-right">
                    {cert.date}
                  </p>
                </div>

                {/* Issued By */}
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Issued by:</span> {cert.issuer}
                </p>

                {/* Credential */}
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Cred:</span> {cert.cred}
                </p>

                {/* Divider + Description */}
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}