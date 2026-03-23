const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      techs: ["Java (7, 8, 14)", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      techs: ["React", "React Native", "Angular", "Vue", "jQuery", "HTML5", "CSS3", "Tailwind"]
    },
    {
      title: "Backend",
      techs: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Batch", "Hibernate"]
    },
    {
      title: "AI/ML",
      techs: ["OpenAI API", "Anthropic Claude", "LangChain", "RAG", "Cursor", "Copilot"]
    },
    {
      title: "Databases",
      techs: ["PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Redis", "Cassandra"]
    },
    {
      title: "Cloud & DevOps",
      techs: ["AWS (EC2, S3, RDS)", "Azure", "Docker", "Kubernetes", "ECS/Fargate", "GitHub Actions", "Jenkins", "Git"]
    },
    {
      title: "Testing & QA",
      techs: ["JUnit", "Mockito", "Jest", "React Testing Library", "Cypress", "PyTest", "Postman"]
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
              A curated selection of technologies I use to build scalable, high-performance applications.
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
