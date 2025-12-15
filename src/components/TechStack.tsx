const TechStack = () => {
  const categories = [
    {
      title: "AI & ML",
      techs: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face", "scikit-learn"]
    },
    {
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
      title: "Backend",
      techs: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      title: "DevOps & Cloud",
      techs: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"]
    }
  ];

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
            style={{ 
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">TECH STACK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Tools of the <span className="text-gradient">Trade</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated selection of technologies I use to build intelligent, scalable applications.
            </p>
          </div>
          
          {/* Tech categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary font-mono">
                  {`0${categoryIndex + 1}. ${category.title}`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
