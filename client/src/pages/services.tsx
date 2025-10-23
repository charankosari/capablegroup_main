import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Smartphone,
  Globe,
  Bot,
  ServerCog,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Business Transformation",
      description:
        "At INFT Solutions, we believe in unlocking the power of transformation for our clients.",
      features: [
        "Strategic Business Planning",
        "Process Optimization",
        "Change Management",
        "Performance Metrics",
        "Digital Strategy Development",
        "Organizational Restructuring",
      ],
      technologies: [
        "Business Intelligence",
        "Analytics",
        "Process Mapping",
        "KPI Tracking",
        "Change Management",
      ],
      pricing: "Custom Pricing",
    },
    {
      icon: ServerCog,
      title: "Digital Transformation",
      description:
        "At INFT Solutions, we are constantly pushing the boundaries of innovation and technology.",
      features: [
        "Legacy System Modernization",
        "Cloud Migration",
        "Digital Workflow Implementation",
        "Data Analytics & Insights",
        "Customer Experience Enhancement",
        "Operational Efficiency",
      ],
      technologies: [
        "Cloud Computing",
        "Microservices",
        "API Integration",
        "Data Analytics",
        "DevOps",
      ],
      pricing: "Starting at $2500",
    },
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description:
        "We are living in an era of unprecedented technological transformation and AI is driving this revolution.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Intelligent Automation",
        "AI-Powered Decision Making",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Hugging Face",
        "AWS AI Services",
      ],
      pricing: "Starting at $3000",
    },
    // {
    //   icon: Globe,
    //   title: "Technology",
    //   description:
    //     "Are you looking for a partner who can help you advance your enterprise...",
    //   features: [
    //     "Enterprise Software Development",
    //     "System Integration",
    //     "Infrastructure Management",
    //     "Security Solutions",
    //     "Performance Optimization",
    //     "Technical Support",
    //   ],
    //   technologies: [
    //     "Java",
    //     "Python",
    //     "Node.js",
    //     "AWS",
    //     "Azure",
    //     "Docker",
    //     "Kubernetes",
    //   ],
    //   pricing: "Starting at $2000",
    // },
    {
      icon: ServerCog,
      title: "Solutions",
      description:
        "We are a leading digital solutions provider with a team of highly experienced subject...",
      features: [
        "Custom Application Development",
        "Database Design & Management",
        "API Development & Integration",
        "User Interface Design",
        "Quality Assurance & Testing",
        "Deployment & Maintenance",
      ],
      technologies: [
        "React",
        "Angular",
        "Vue.js",
        "Spring Boot",
        "Django",
        "PostgreSQL",
        "MongoDB",
      ],
      pricing: "Starting at $1500",
    },
    {
      icon: Globe,
      title: "IT Consulting",
      description:
        "Technology has become an integral part of business success in the modern world...",
      features: [
        "Technology Assessment",
        "IT Strategy Development",
        "System Architecture Design",
        "Technology Selection",
        "Implementation Planning",
        "Risk Assessment",
      ],
      technologies: [
        "Enterprise Architecture",
        "Cloud Strategy",
        "Security Assessment",
        "Compliance",
        "Best Practices",
      ],
      pricing: "Starting at $2000",
    },
    {
      icon: ServerCog,
      title: "IT Staffing",
      description:
        "Develop a global, consistent, and scalable hiring process...",
      features: [
        "Talent Acquisition",
        "Technical Recruitment",
        "Contract Staffing",
        "Permanent Placement",
        "Skill Assessment",
        "Onboarding Support",
      ],
      technologies: [
        "Full-Stack Development",
        "DevOps",
        "Data Science",
        "Cloud Engineering",
        "Cybersecurity",
      ],
      pricing: "Custom Rates",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description:
        "We begin by assessing your current technology landscape and business objectives to develop a comprehensive transformation strategy.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Our expert team designs custom solutions tailored to your specific needs, leveraging the latest technologies and best practices.",
    },
    {
      step: "03",
      title: "Implementation & Integration",
      description:
        "We implement your solution with minimal disruption to your operations, ensuring seamless integration with existing systems.",
    },
    {
      step: "04",
      title: "Training & Support",
      description:
        "We provide comprehensive training for your team and ongoing support to ensure successful adoption and continuous improvement.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are the premier provider of Application services, IT staffing and
            emerging technology solutions. From Business Transformation to AI
            solutions, we help businesses unlock their potential.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="services-hero-cta">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-card overflow-hidden"
                data-testid={`service-detail-${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl">
                          {service.title}
                        </h3>
                        <p className="text-primary font-semibold">
                          {service.pricing}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button data-testid={`service-cta-${index}`}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="p-8 bg-muted/50">
                    <h4 className="font-semibold mb-4">Technologies We Use:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-card p-4 rounded-lg">
                      <h5 className="font-medium mb-2">
                        Why Choose This Service?
                      </h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Industry best practices</li>
                        <li>• Scalable architecture</li>
                        <li>• Ongoing support included</li>
                        <li>• 30-day warranty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered
              on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} data-testid={`process-step-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact INFT Solutions today to discuss how we can help unlock the
            power of transformation for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="services-cta-contact">
                Contact Us
              </Button>
            </Link>
            <Link href="/fees">
              <Button
                variant="outline"
                size="lg"
                data-testid="services-cta-pricing"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
