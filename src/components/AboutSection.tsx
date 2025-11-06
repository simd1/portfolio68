import { User, Award, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "University", value: "VJTI Mumbai", element: "anemo" },
    { icon: BookOpen, label: "Degree", value: "B.Tech Computer Engineering", element: "hydro" },
    { icon: Target, label: "CPI", value: "8.17", element: "geo" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Character Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate Computer Engineering student with a drive for innovation
          </p>
        </div>

        {/* Character details card */}
        <div className="vision-card glow-anemo max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-cinzel font-semibold text-primary">
              ★★★★★ Education & Background
            </h3>
            
            <p className="text-foreground/90 leading-relaxed text-lg">
              Currently pursuing Bachelor of Technology in Computer Engineering at Veermata Jijabai Technological Institute (VJTI), 
              one of Mumbai's premier engineering institutions. With a strong foundation in computer science fundamentals and 
              hands-on project experience, I am passionate about building innovative solutions that make a difference.
            </p>

            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-semibold text-secondary mb-4">Academic Details</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Institution</p>
                  <p className="font-semibold text-primary">VJTI Mumbai</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="font-semibold text-foreground">B.Tech Computer Engineering</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Expected Graduation</p>
                  <p className="font-semibold text-foreground">2027</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">CPI</p>
                  <p className="font-semibold text-geo">8.17</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <h4 className="text-lg font-semibold text-secondary mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Database Management", "Operating Systems", "Software Engineering", "Artificial Intelligence", "Computer Organization"].map((course, idx) => (
                  <span 
                    key={idx}
                    className="text-sm px-3 py-1.5 rounded-md bg-muted/50 text-foreground/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="vision-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.element}/20 border-2 border-${stat.element} mb-4`}>
                <stat.icon className={`w-8 h-8 text-${stat.element}`} />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="font-semibold text-lg text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
