import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Users,
  Briefcase,
  GraduationCap,
  FileText,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Building,
  UserPlus,
  Code,
  Database,
  Cloud,
  Smartphone,
  Server,
} from "lucide-react";

export default function Careers() {
  const jobOpportunities = [
    {
      id: 1,
      title: "Java Full Stack Developer",
      type: "Contract",
      location: "Remote",
      description:
        "We are looking for an experienced Java Full Stack Developer to join our team and work on exciting projects.",
      requirements: [
        "5+ years of Java development experience",
        "Experience with Spring Boot and Spring Framework",
        "Frontend development with React or Angular",
        "Database design and optimization",
        "RESTful API development",
        "Agile/Scrum experience",
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS", "Docker"],
      icon: Code,
    },
    {
      id: 2,
      title: ".NET Full Stack Developer",
      type: "Direct Hire",
      location: "Atlanta, GA",
      description:
        "Join our team as a .NET Full Stack Developer and work on cutting-edge enterprise applications.",
      requirements: [
        "4+ years of .NET development experience",
        "C# and ASP.NET Core expertise",
        "Entity Framework and SQL Server",
        "Frontend development with React or Vue.js",
        "Azure cloud services experience",
        "Strong problem-solving skills",
      ],
      technologies: [
        ".NET Core",
        "C#",
        "React",
        "SQL Server",
        "Azure",
        "Entity Framework",
      ],
      icon: Code,
    },
    {
      id: 3,
      title: "Python Developer",
      type: "Contract",
      location: "Remote",
      description:
        "We need a skilled Python Developer to work on data processing and web application projects.",
      requirements: [
        "3+ years of Python development experience",
        "Experience with Django or Flask frameworks",
        "Database management with PostgreSQL or MongoDB",
        "API development and integration",
        "Data processing and analysis",
        "Version control with Git",
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "FastAPI",
        "Pandas",
        "NumPy",
      ],
      icon: Code,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      description:
        "Looking for a DevOps Engineer to help us build and maintain our cloud infrastructure.",
      requirements: [
        "3+ years of DevOps experience",
        "Docker and Kubernetes expertise",
        "AWS or Azure cloud platforms",
        "CI/CD pipeline development",
        "Infrastructure as Code (Terraform/CloudFormation)",
        "Monitoring and logging tools",
      ],
      technologies: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Terraform",
        "Jenkins",
        "Prometheus",
      ],
      icon: Server,
    },
    {
      id: 5,
      title: "AWS Architect",
      type: "Contract",
      location: "Remote",
      description:
        "We're seeking an AWS Architect to design and implement scalable cloud solutions.",
      requirements: [
        "5+ years of AWS experience",
        "AWS Solutions Architect certification preferred",
        "Experience with microservices architecture",
        "Security and compliance knowledge",
        "Cost optimization strategies",
        "Team leadership experience",
      ],
      technologies: ["AWS", "Lambda", "EC2", "RDS", "S3", "CloudFormation"],
      icon: Cloud,
    },
    {
      id: 6,
      title: "Mobile Developer",
      type: "Contract",
      location: "Remote",
      description:
        "Join our team as a Mobile Developer and create innovative mobile applications.",
      requirements: [
        "3+ years of mobile development experience",
        "React Native or Flutter expertise",
        "iOS and Android development",
        "RESTful API integration",
        "Mobile UI/UX design principles",
        "App store deployment experience",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "iOS",
        "Android",
        "JavaScript",
        "TypeScript",
      ],
      icon: Smartphone,
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Flexible working arrangements",
    "Professional development opportunities",
    "Health and wellness benefits",
    "Remote work options",
    "Career growth opportunities",
    "Collaborative team environment",
    "Cutting-edge technology projects",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are the premier provider of Application services, IT staffing and
            emerging technology solutions. Join our talent group and explore
            exciting career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="careers-hero-talent-group">
              Join Talent Group
              <UserPlus className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" data-testid="careers-hero-jobs">
              View Open Positions
              <Briefcase className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Talent Group Registration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Join Our Talent Group
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register with our talent group to be considered for future
              opportunities and stay updated on new positions.
            </p>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter your location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    placeholder="Enter your current job title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" placeholder="Enter desired position" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary</Label>
                  <Input id="salary" placeholder="Enter expected salary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education-title">Title</Label>
                    <Input
                      id="education-title"
                      placeholder="e.g., Bachelor's Degree"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree</Label>
                    <Input id="degree" placeholder="e.g., Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institute">Institute</Label>
                    <Input id="institute" placeholder="Enter institute name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" placeholder="e.g., 2020" />
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Save Your Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect position for
              your skills and career goals.
            </p>
          </div>

          <div className="grid gap-8">
            {jobOpportunities.map((job) => (
              <Card
                key={job.id}
                className="glass-card"
                data-testid={`job-${job.id}`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                            <job.icon className="text-primary h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-2xl">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge
                                variant="secondary"
                                className="flex items-center"
                              >
                                <Briefcase className="mr-1 h-3 w-3" />
                                {job.type}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="flex items-center"
                              >
                                <MapPin className="mr-1 h-3 w-3" />
                                {job.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg mb-6">
                        {job.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {job.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                              <span className="text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button data-testid={`apply-job-${job.id}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive benefits package and a supportive work
              environment that helps you grow professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} data-testid={`benefit-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{benefit}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join INFT Solutions today and be part of a team that's transforming
            businesses through technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="careers-cta-talent-group">
              Join Talent Group
              <UserPlus className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="careers-cta-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
