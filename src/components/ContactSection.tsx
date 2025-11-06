import { Mail, Github, Linkedin, Twitter, Download, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/simd1", color: "text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/siddharth-patil-b7b674330", color: "text-hydro" },
    { icon: Mail, label: "Email", href: "mailto:sidpatil1311@gmail.com", color: "text-pyro" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">

        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Send Message</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Let's Connect
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to embark on a new adventure together? Reach out through any of these channels
          </p>
        </div>

        {/* Main contact card */}
        <div className="vision-card glow-anemo text-center space-y-8 mb-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-cinzel font-semibold text-foreground">
              Let's Connect
            </h3>

            <p className="text-muted-foreground">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
              I'm always excited to connect!
            </p>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:-translate-y-1"
              >
                <link.icon className={`w-6 h-6 ${link.color}`} />
                <span className="text-sm font-semibold text-foreground">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Resume download */}
          <div className="pt-8 border-t border-border">
            <a 
              href="/Siddharth_Patil_Resume.pdf"
              download
              className="wish-button inline-flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <span className="text-sm opacity-80">(Make a Wish)</span>
            </a>

            <p className="text-xs text-muted-foreground mt-4">
              ★ Obtain detailed character information and experience log
            </p>
          </div>

        </div>  {/* FIXED: this closing div was missing */}

        {/* Quick contact info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="vision-card text-center">
            <Mail className="w-8 h-8 text-pyro mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Email</h4>
            <a 
              href="mailto:sidpatil1311@gmail.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              sidpatil1311@gmail.com
            </a>
          </div>

          <div className="vision-card text-center">
            <MessageCircle className="w-8 h-8 text-anemo mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Phone</h4>
            <a 
              href="tel:+917304802765" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +91 7304802765
            </a>
          </div>
        </div>

      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
