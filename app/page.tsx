'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Certifications from '@/components/sections/certifications';
import Stats from '@/components/sections/stats';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeSwitcher />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Stats />
      <Contact />
    </main>
  );
}
