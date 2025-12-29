import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Search Engine",
      description: "HubFinance is a cutting-edge financial platform that connects businesses with essential financial services to streamline operations, manage risks, and drive growth. Whether you're a startup or an established enterprise, HubFinance offers tailored solutions, from funding and investment opportunities to cash flow management and financial advisory services. With a focus on innovation, transparency, and customer success, HubFinance simplifies complex financial processes, empowering businesses to achieve their goals efficiently and securely.",
      tags: ["Python", "FastAPI", "React", "Pinecone", "OpenAI"],
      image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_14.png",
      github: "#",
      live: "https://www.hubfinance.com/en/",
      featured: true
    },
    {
      title: "Rever",
      description: "Rever.vn is a leading real estate platform in Vietnam, offering seamless property buying, selling, and renting experiences. Whether you're searching for your dream home, selling a property, or exploring investment rtunities, Rever.vn provides professional services, market insights, and cutting-edge technology to guide you every step of the way. With a trusted network of agents, verified listings, and advanced tools like virtual tours, Rever.vn is the ultimate destination for making informed real estate decisions.",
      tags: ["TypeScript", "LangChain", "GitHub API", "PostgreSQL"],
      image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_11.png",
      github: "#",
      live: "https://rever.vn/",
      featured: true
    },
    {
      title: "LoveVelo",
      description: "Love Velo is a premier cycling travel company specializing in creating unforgettable bike holidays and tours worldwide. Whether you’re a seasoned cyclist seeking an adventurous route or a leisure rider looking to explore stunning destinations, Love Velo curates the perfect cycling experiences tailored to your needs.",
      tags: ["React", "D3.js", "Python", "TensorFlow", "AWS"],
      image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_10.png",
      github: "#",
      live: "https://lovevelo.co.uk/",
      featured: false
    },
    {
      title: "MiCard",
      description: "Micard.io is a modern and innovative platform that allows individuals and businesses to create and share digital business cards effortlessly. With its sleek design and easy-to-use interface, Micard.io replaces traditional paper cards with eco-friendly, digital alternatives that can be shared instantly and updated in real time.",
      tags: ["Python", "Whisper", "GPT-4", "WebSockets", "Next.js"],
      image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_9.png",
      github: "#",
      live: "https://micard.io/en-de",
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
