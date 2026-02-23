'use client';

import { Card } from '@/components/ui/card';

export default function Education() {
  return (
    <section className="py-20 px-4 bg-background fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-12 text-center">
          🎓 My Qualification
        </h2>

        <Card className="p-8 border border-border hover:border-primary/30 transition-all duration-300 scale-in">
          <div className="space-y-4">
            <div>
              {/* Row 1: Degree (left) + Timeline (right) */}
              <div className="flex items-start justify-between w-full">
                <h3 className="text-2xl font-medium text-foreground">
                  🛡️ B.Tech CSE - CyberSecurity
                </h3>

                <p className="text-sm text-muted-foreground whitespace-nowrap text-right">
                  2022 - 2026 
                </p>
              </div>

              {/* Row 2: University left + Location right */}
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-lg text-accent font-medium">
                  JAIN (Deemed-to-be University)
                </p>

                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  📍 Bangalore, India
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground">CGPA- 7.82 </p>
              <p className="text-muted-foreground">
                Pursuing B.Tech in Computer Science Engineering with a major in Cybersecurity and a minor in Artificial Intelligence & Machine Learning.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}