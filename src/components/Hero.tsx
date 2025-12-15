import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rotate-45 animate-float opacity-30" />
      <div className="absolute bottom-32 left-20 w-16 h-16 border border-accent/20 rotate-12 animate-float opacity-30" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">AI</span>
            <span className="text-gradient"> Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Building intelligent applications at the intersection of 
            <span className="text-primary"> machine learning</span> and 
            <span className="text-accent"> modern web technologies</span>. 
            Transforming complex problems into elegant solutions.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="glow" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
