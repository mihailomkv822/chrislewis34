import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Search Engine",
      description: "A semantic search platform powered by transformer models. Enables natural language queries across millions of documents with sub-second response times.",
      tags: ["Python", "FastAPI", "React", "Pinecone", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "AI Code Reviewer",
      description: "Automated code review system using LLMs to analyze pull requests, detect bugs, and suggest improvements in real-time.",
      tags: ["TypeScript", "LangChain", "GitHub API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Real-time analytics platform with ML-powered forecasting. Processes 1M+ events daily for actionable business insights.",
      tags: ["React", "D3.js", "Python", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Voice AI Assistant",
      description: "Multi-modal AI assistant with voice recognition, natural language understanding, and contextual responses.",
      tags: ["Python", "Whisper", "GPT-4", "WebSockets", "Next.js"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">FEATURED WORK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of AI-powered applications and systems I've built.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
