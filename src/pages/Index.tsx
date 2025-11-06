import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-4 h-4 text-geo" fill="currentColor" />
              <p className="text-sm">
                Crafted with elemental mastery © 2025
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Inspired by the world of Teyvat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
