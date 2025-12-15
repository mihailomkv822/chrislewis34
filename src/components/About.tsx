import { Brain, Code2, Database, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in neural networks, NLP, and computer vision. Building intelligent systems that learn and adapt."
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end application development with modern frameworks. From pixel-perfect UIs to scalable backends."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing robust data pipelines and architectures. Making data accessible, reliable, and actionable."
    },
    {
      icon: Sparkles,
      title: "LLM Integration",
      description: "Integrating large language models into production systems. RAG, fine-tuning, and prompt engineering."
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Bridging <span className="text-gradient">AI</span> and <span className="text-gradient">Engineering</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With 10+ years of experience building production-grade AI systems, I specialize in 
              creating intelligent applications that solve real-world problems.
            </p>
          </div>
          
          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "20+", label: "AI Models Deployed" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
