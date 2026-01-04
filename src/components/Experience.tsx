import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const workHistory = [
    {
      title: "Senior Full Stack Developer",
      company: "Self-Employed",
      location: "",
      period: "04/2020 - Present",
      achievements: [
        "Led the implementation of advanced data analytics tools, improving decision-making processes and boosting efficiency by 15%",
        "Developed comprehensive test scripts for system upgrades, reducing errors by 10% and enhancing reliability",
        "Conducted data mapping and system integration for a new loan management platform, resulting in a 20% increase in processing speed",
        "Provided expert advice to multiple business units, facilitating smoother project execution and stronger interdepartmental collaboration",
        "Created and maintained a reporting inventory, ensuring timely and accurate dissemination of critical information",
        "Participated in disaster recovery exercises, strengthening business continuity plans and securing high-level approval"
      ]
    },
    {
      title: "Business Analyst",
      company: "TD Bank",
      location: "Wilmington, DE",
      period: "06/2015 - 02/2019",
      achievements: [
        "Led development of full-stack web applications using Next.js, React, Python, and Django",
        "Designed and implemented AI-powered features and automation workflows to reduce manual operations",
        "Built secure and scalable REST APIs with authentication and role-based access control",
        "Improved performance and SEO through server-side rendering and optimized data fetching",
        "Deployed and maintained applications on AWS, using Docker and CI/CD pipelines",
        "Collaborated closely with product managers and designers in an agile environment"
      ]
    },
    {
      title: "Data Analyst",
      company: "Bank of America",
      location: "Newark, DE",
      period: "08/2012 - 05/2015",
      achievements: [
        "Enhanced user engagement by 15% through developing client-facing web applications using React and Next.js",
        "Built backend services with Django and Flask, integrating third-party APIs",
        "Delivered million-dollar projects by managing 5 initiatives simultaneously under tight deadlines",
        "Optimized frontend performance and improved user experience across devices",
        "Participated in client meetings to clarify requirements and propose solutions"
      ]
    }
  ];

  const education = {
    degree: "Master of Business Administration (MBA)",
    school: "Temple University",
    location: "Philadelphia, PA",
    period: "01/2010 - 01/2012"
  };

  return (
    <section id="experience" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">CAREER PATH</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Over a decade of experience building scalable applications and driving business value through technology.
            </p>
          </div>

          {/* Work History Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {workHistory.map((job, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 ring-4 ring-background shadow-lg shadow-primary/30" />
                  
                  {/* Content card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mb-1">
                        {job.company}
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                      )}
                      
                      <ul className="space-y-2 mt-4">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold">
                <span className="text-gradient">Education</span>
              </h3>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {education.degree}
                      </h4>
                      <p className="text-primary font-medium">{education.school}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {education.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-right">
                    <Calendar className="w-4 h-4" />
                    {education.period}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;