import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const workHistory = [
    {
      title: "Senior Full Stack Java Developer",
      company: "TD",
      location: "Toronto, Canada",
      period: "Feb 2023 – Dec 2025",
      achievements: [
        "Designed and built modular Spring Boot microservices to support customer account updates, payments, authentication, notifications, and operational workflows",
        "Developed RESTful APIs integrating with downstream systems such as Customer Information Services, KYC verification, authorization engines, and fraud monitoring platforms",
        "Created modern Angular UI screens using reusable components, reactive forms, data binding, and client-side validations",
        "Integrated Spring Security with OAuth2/JWT, enforcing role-based authentication and token-based access control",
        "Implemented Kafka producers and consumers for asynchronous processing of transaction logs, user activity events, and system notifications"
      ]
    },
    {
      title: "Senior Full Stack Java Developer",
      company: "Delta Dental Insurance",
      location: "San Francisco, CA",
      period: "Feb 2020 – Nov 2022",
      achievements: [
        "Developed scalable healthcare applications using Java 14, Spring Boot, Spring MVC, Hibernate, and RESTful APIs within a microservices architecture",
        "Developed responsive UI components using Angular, TypeScript, RxJS, integrating with Java-based backend services",
        "Implemented secure authentication and authorization using Spring Security, OAuth2, and JWT, ensuring HIPAA compliance",
        "Modernized legacy systems into cloud-native services deployed on AWS (EC2, S3, RDS) using Docker and Kubernetes",
        "Designed event-driven systems using RabbitMQ and optimized distributed data storage with Cassandra and PostgreSQL"
      ]
    },
    {
      title: "Full Stack Java Developer",
      company: "GEICO",
      location: "Chevy Chase, MD",
      period: "Feb 2017 – Dec 2019",
      achievements: [
        "Developed and modernized enterprise insurance platforms using Java 8, Spring Boot, Spring MVC, and Angular within a microservices architecture",
        "Built secure RESTful APIs to automate policy, claims, and underwriting workflows, ensuring regulatory compliance and scalability",
        "Implemented batch and real-time processing solutions using Spring Batch, ActiveMQ, and WebSocket",
        "Optimized database performance in Oracle through query tuning, indexing, and performance optimization techniques",
        "Streamlined CI/CD pipelines using GitLab, and deployed containerized applications with Docker and Kubernetes on Azure"
      ]
    },
    {
      title: "Java Software Developer",
      company: "CVS Health",
      location: "Woonsocket, RI",
      period: "May 2014 – Nov 2016",
      achievements: [
        "Designed and developed secure healthcare applications using Java 7, Spring Boot, Spring MVC, and AngularJS within service-oriented and microservices architectures",
        "Developed responsive UI components using React, TypeScript, Redux, HTML5, CSS3, integrating with Java-based backend services",
        "Deployed containerized applications on AWS (ECS, Fargate), enabling scalable and resilient cloud-native environments",
        "Optimized database performance in PostgreSQL through query tuning, indexing, and transaction management"
      ]
    },
    {
      title: "Java Developer",
      company: "CVS Health",
      location: "Woonsocket, RI",
      period: "Sep 2013 – May 2014",
      achievements: [
        "Assisted in developing and enhancing enterprise banking applications using Java, Spring Framework, and SQL Server within an Agile environment",
        "Participated in database performance tuning in SQL Server, optimizing queries and supporting stored procedure updates",
        "Assisted in deploying applications on Oracle WebLogic Server and maintaining build automation using Ant",
        "Collaborated with senior developers in code reviews, testing, debugging, and production support activities"
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Software Engineering",
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
              Over a decade of experience building enterprise Java applications across healthcare, insurance, and financial services.
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
