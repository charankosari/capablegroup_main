import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Smartphone, Globe, Bot, ServerCog, ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies for optimal performance and user experience.",
      features: [
        "React & Next.js Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
        "SEO Best Practices",
        "Accessibility Compliance"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      pricing: "Starting at $8,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android Native",
        "React Native & Expo",
        "Progressive Web Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Expo", "Firebase"],
      pricing: "Starting at $15,000"
    },
    {
      icon: Bot,
      title: "AI Agents & Solutions",
      description: "Intelligent automation powered by cutting-edge AI technologies to streamline your business processes.",
      features: [
        "Custom AI Models",
        "Chatbots & Virtual Assistants",
        "Natural Language Processing",
        "Computer Vision",
        "Machine Learning Integration",
        "API Development"
      ],
      technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "Hugging Face"],
      pricing: "Starting at $12,000"
    },
    {
      icon: ServerCog,
      title: "Workflow Automation",
      description: "Streamline your operations with custom automation solutions that save time and reduce manual errors.",
      features: [
        "Process Automation",
        "API Integrations",
        "Data Pipeline Development",
        "Workflow Orchestration",
        "Business Intelligence",
        "Custom Dashboards"
      ],
      technologies: ["Zapier", "n8n", "Python", "Node.js", "AWS Lambda"],
      pricing: "Starting at $10,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements through detailed consultations."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and interactive prototypes to visualize the user experience before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using modern technologies with continuous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support", 
      description: "After deployment, we provide ongoing support, monitoring, and updates to keep your solution running smoothly."
    }
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
            From web development to AI solutions, we offer comprehensive digital services 
            that help businesses scale and succeed in today's competitive landscape.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="services-hero-cta">
              Start Your Project
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
                data-testid={`service-detail-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl">{service.title}</h3>
                        <p className="text-primary font-semibold">{service.pricing}</p>
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
                      <h5 className="font-medium mb-2">Why Choose This Service?</h5>
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} data-testid={`process-step-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create a solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="services-cta-contact">
                Start Your Project
              </Button>
            </Link>
            <Link href="/fees">
              <Button variant="outline" size="lg" data-testid="services-cta-pricing">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
