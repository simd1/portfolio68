import { Code2, Palette, Database, Zap, Cloud, Shield } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Programming Languages",
      element: "Anemo",
      color: "anemo",
      icon: Code2,
      level: "Lv. 85",
      talents: ["C++", "Python", "SQL", "HTML/CSS"],
      description: "Strong foundation in core programming languages and web technologies"
    },
    {
      name: "Mobile Development",
      element: "Geo",
      color: "geo",
      icon: Palette,
      level: "Lv. 80",
      talents: ["Dart", "Flutter", "UI Design", "Responsive Apps"],
      description: "Building beautiful cross-platform mobile applications"
    },
    {
      name: "Database & Backend",
      element: "Hydro",
      color: "hydro",
      icon: Database,
      level: "Lv. 75",
      talents: ["SQL", "Database Design", "Python Backend", "API Integration"],
      description: "Managing data and creating efficient backend solutions"
    },
    {
      name: "Machine Learning",
      element: "Electro",
      color: "electro",
      icon: Zap,
      level: "Lv. 70",
      talents: ["Sentence Transformers", "ML Models", "Data Processing", "Python"],
      description: "Implementing intelligent features with machine learning"
    },
    {
      name: "Developer Tools",
      element: "Cryo",
      color: "cryo",
      icon: Cloud,
      level: "Lv. 85",
      talents: ["VS Code", "Git", "GitHub", "Version Control"],
      description: "Proficient in modern development tools and workflows"
    },
    {
      name: "Design & Marketing",
      element: "Pyro",
      color: "pyro",
      icon: Shield,
      level: "Lv. 75",
      talents: ["Canva", "Instagram Ads", "Event Design", "Visual Content"],
      description: "Creating engaging visual content and marketing materials"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Elemental Talents</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Skills & Abilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastered talents and abilities acquired throughout the journey
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="vision-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Talent header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${skill.color}/20 border border-${skill.color}/30`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${skill.color}/20 text-${skill.color}`}>
                  {skill.level}
                </span>
              </div>

              {/* Talent info */}
              <h3 className="text-xl font-cinzel font-semibold mb-2 text-foreground">
                {skill.name}
              </h3>
              <p className={`text-sm font-semibold text-${skill.color} mb-3`}>
                Element: {skill.element}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Talent list */}
              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-semibold mb-2">Key Talents:</p>
                <div className="flex flex-wrap gap-2">
                  {skill.talents.map((talent, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/80"
                    >
                      {talent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
