import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Recipaura",
      rarity: 5,
      type: "Recipe Recommendation App",
      element: "Anemo",
      description: "A machine learning-powered recipe app that provides personalized recommendations based on user-selected ingredients and dietary preferences. Built with Flutter for a smooth, responsive UI and integrated with sentence-transformer models for intelligent suggestions.",
      technologies: ["Python", "Flutter", "ML", "all-MiniLM-L6-v2"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
      github: "https://github.com/ahaandesai27/Inheritance-2024-mars",
      timeline: "Oct 2024 – Jan 2025"
    },
    {
      name: "Real-Time Chat Application",
      rarity: 4,
      type: "Network Application",
      element: "Hydro",
      description: "A Python socket-based chat application enabling real-time messaging between multiple clients. Features a TCP server with efficient connection management using select/threading, nickname authentication, and modular architecture for maintainability.",
      technologies: ["Python", "Socket Programming", "TCP", "Threading"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      github: "https://github.com/simd1/Python-Socket-Programming",
      timeline: "Dec 2024"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-geo/10 border border-geo/30 mb-4">
            <Star className="w-4 h-4 text-geo" fill="currentColor" />
            <span className="text-sm font-semibold text-geo">Artifact Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions built with passion and technical expertise
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="vision-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-xl mb-4 -mt-6 -mx-6 h-48">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Rarity stars */}
                <div className="absolute top-3 left-3 flex gap-1">
                  {[...Array(project.rarity)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-geo" fill="currentColor" />
                  ))}
                </div>

                {/* Element badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-semibold text-primary">
                  {project.element}
                </div>
              </div>

              {/* Project info */}
              <div className="px-6 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-cinzel font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-sm text-secondary font-semibold mb-3">
                  {project.type}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-muted/30 text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-foreground text-sm font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
