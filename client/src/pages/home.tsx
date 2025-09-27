import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { PricingTable } from "@/components/pricing-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Smartphone, Globe, Bot, ServerCog, Star, User } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps, React Native, and Progressive Web Apps",
      features: [
        "iOS & Android Native",
        "Cross-platform Solutions", 
        "App Store Optimization"
      ]
    },
    {
      icon: Globe,
      title: "Websites",
      description: "Modern, responsive websites with exceptional performance and SEO",
      features: [
        "Next.js & React",
        "E-commerce Solutions",
        "Performance Optimization"
      ]
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent automation and AI-powered solutions for your business",
      features: [
        "Custom AI Solutions",
        "Chatbots & Assistants",
        "Machine Learning"
      ]
    },
    {
      icon: ServerCog,
      title: "Automations",
      description: "Workflow automation and system integrations to boost productivity",
      features: [
        "Workflow Automation",
        "API Integrations", 
        "Business Process Optimization"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer Platform",
      description: "Complete e-commerce solution with inventory management and analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tags: ["E-commerce", "Next.js"],
      metric1: "+250% Sales",
      metric2: "12 weeks"
    },
    {
      title: "Analytics SaaS Platform", 
      description: "Real-time data visualization and business intelligence dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["SaaS", "React"],
      metric1: "10k+ Users",
      metric2: "16 weeks"
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app with AI-powered workout recommendations",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Mobile", "React Native"],
      metric1: "4.8★ Rating",
      metric2: "8 weeks"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      content: "Capable Labs delivered our e-commerce platform ahead of schedule. The attention to detail and code quality exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "CTO, DataSync",
      content: "The AI automation they built has saved us 20 hours per week. ROI was immediate and the solution scales perfectly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Innovate Co",
      content: "Professional, responsive, and technically excellent. They transformed our vision into a beautiful, functional reality.",
      rating: 5
    }
  ];

  const clientLogos = ["Acme Inc", "TechFlow", "Innovate Co", "DataSync", "CloudBase", "NextGen"];

  return (
    <div>
      <HeroSection />
      
      {/* Client Logos */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">Trusted by forward-thinking companies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center font-bold text-lg" data-testid={`client-logo-${index}`}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-muted" data-testid="work-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent projects that showcase our expertise and attention to detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/work">
              <Button size="lg" data-testid="view-all-projects">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our service packages or get a custom quote
            </p>
          </div>
          
          <PricingTable />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <User className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-primary">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
