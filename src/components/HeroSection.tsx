import { Sparkles, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            <Star className="w-2 h-2 text-geo opacity-60" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main content - Centered hero text */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wider uppercase">Computer Engineering Student</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-geo">
              Siddharth Patil
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A Computer Engineering student at VJTI, crafting innovative solutions through code and creativity
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button 
              className="talent-button"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Journey
            </button>
            <button 
              className="talent-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
