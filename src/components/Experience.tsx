import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const workHistory = [
    {
      title: "Full Stack Developer",
      company: "FieldFlow",
      location: "San Francisco, CA",
      period: "Mar 2022 – Present",
      achievements: [
        "Led end-to-end development of workflow automation features for a B2B SaaS platform serving 500+ enterprise clients, reducing manual data entry by 70%",
        "Built responsive UIs using React, TypeScript, and Tailwind CSS, improving Lighthouse performance scores from 62 to 94",
        "Designed and deployed RESTful APIs in Node.js/Express and Python/FastAPI, reducing average API response time by 40%",
        "Containerized services with Docker and orchestrated deployments on AWS using GitHub Actions CI/CD",
        "Mentored junior engineers on testing best practices and component architecture"
      ]
    },
    {
      title: "Software Engineer",
      company: "Bloom & Co",
      location: "Chicago, IL",
      period: "Jun 2020 – Feb 2022",
      achievements: [
        "Owned full-stack rebuild of a legacy customer portal serving 10K+ users, migrating from jQuery to React + Redux",
        "Developed secure .NET Core microservices in C# with SQL Server, implementing RBAC and JWT-based authentication",
        "Engineered real-time inventory dashboards using WebSockets and Chart.js, reducing fulfillment delays by 25%",
        "Established automated test coverage using Jest and xUnit, maintaining 85%+ code coverage"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Midwest Industrial Services",
      location: "Detroit, MI",
      period: "Jan 2019 – May 2020",
      achievements: [
        "Designed and deployed an internal logistics management system using Angular, ASP.NET MVC, and SQL Server",
        "Optimized complex SQL queries, decreasing report generation time from 12 seconds to under 2 seconds",
        "Integrated application with third-party ERP system via RESTful APIs, automating 200+ daily transactions",
        "Created reusable Angular components, reducing UI inconsistency bugs by 50%"
      ]
    },
    {
      title: "Web Game Developer",
      company: "Undisclosed Tech Company",
      location: "Remote",
      period: "Jun 2019 – Aug 2019",
      achievements: [
        "Developed browser-based multiplayer mini-games using Phaser 3, PixiJS, and Socket.IO for 10K+ monthly active users",
        "Built Node.js backend to manage user sessions, leaderboards, and persistent game progress in MongoDB",
        "Optimized rendering performance achieving stable 60 FPS even on low-end mobile devices"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Undisclosed Tech Company",
      location: "Remote",
      period: "Jun 2018 – Aug 2018",
      achievements: [
        "Built UI components and debugging gameplay logic for educational web games using JavaScript and HTML5 Canvas",
        "Wrote unit tests for game state transitions and supported cross-browser compatibility testing",
        "Gained hands-on experience with Git workflows, Agile stand-ups, and Jira task tracking"
      ]
    }
  ];

  const education = {
    degree: "Bachelor's degree, Information Technology",
    school: "Ball State University",
    location: "Muncie, IN",
    period: "Apr 2010 - Sep 2013"
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