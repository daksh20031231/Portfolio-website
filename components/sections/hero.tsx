import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 fade-in">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Image on Left */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted border-2 border-primary/20 flex items-center justify-center scale-in">
              <span className="text-5xl md:text-6xl"><img src="/IMG_2043-modified.png" alt="Profile" /></span>
            </div>
          </div>

          {/* Text on Right */}
          <div className="space-y-2 order-1 md:order-2 text-center md:text-left md:col-span-2">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground whitespace-nowrap">
                Daksh Sharma
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                🚀 Final Year B.Tech CSE-Cybersecurity | Realtor
              </p>
              <p className="text-base text-muted-foreground">
                📍 Bangalore, India
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cybersecurity enthusiast, final year B.Tech CSE student specializing in Cybersecurity, building projects in AI, Cybersecurity and Web. Also working as a part-time Realtor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  window.open("https://docs.google.com/document/d/1L1B4mZGauxjTtT8uPdup-svNhp1GKJKzN0gdeoBCoMA/edit?usp=sharing", "_blank");
                }}
              >
                Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-20 animate-bounce text-center">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
}
