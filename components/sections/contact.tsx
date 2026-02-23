'use client';

import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'daksh20031231@gmail.com',
    href: 'mailto:daksh20031231@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'daksh20031231',
    href: 'https://www.linkedin.com/in/daksh20031231/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'daksh20031231',
    href: 'https://github.com/daksh20031231',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@itsdaksh.dev',
    href: 'https://instagram.com/itsdaksh.dev',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4 text-center">
          📬 Contact Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="p-6 border border-border rounded-lg hover:border-primary/40 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-light">
                        {contact.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="mailto:daksh20031231@gmail.com">
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© 2024 Daksh Sharma. All rights reserved.</p>
      </div>
    </section>
  );
}
