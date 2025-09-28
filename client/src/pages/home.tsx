import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { PricingTable } from "@/components/pricing-table";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Smartphone, Globe, Bot, ServerCog } from "lucide-react";
import { CompaniesMarquee } from "@/components/companies-marquee";
import { MarqueeDemo } from "@/components/marquee";
export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native iOS and Android apps, React Native, and Progressive Web Apps",
      features: [
        "iOS & Android Native",
        "Cross-platform Solutions",
        "App Store Optimization",
      ],
      variant: "featured" as const,
    },
    {
      icon: Globe,
      title: "Websites",
      description:
        "Modern, responsive websites with exceptional performance and SEO",
      features: [
        "Next.js & React",
        "E-commerce Solutions",
        "Performance Optimization",
      ],
      variant: "default" as const,
    },
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Intelligent automation and AI-powered solutions for your business",
      features: [
        "Custom AI Solutions",
        "Chatbots & Assistants",
        "Machine Learning",
      ],
      variant: "default" as const,
    },
    {
      icon: ServerCog,
      title: "Automations",
      description:
        "Workflow automation and system integrations to boost productivity",
      features: [
        "Workflow Automation",
        "API Integrations",
        "Business Process Optimization",
      ],
      variant: "compact" as const,
    },
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer Platform",
      description:
        "Complete e-commerce solution with inventory management and analytics",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tags: ["E-commerce", "Next.js"],
      metric1: "+250% Sales",
      metric2: "12 weeks",
    },
    {
      title: "Analytics SaaS Platform",
      description:
        "Real-time data visualization and business intelligence dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["SaaS", "React"],
      metric1: "10k+ Users",
      metric2: "16 weeks",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobile app with AI-powered workout recommendations",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Mobile", "React Native"],
      metric1: "4.8★ Rating",
      metric2: "8 weeks",
    },
  ];

  const clientLogos = [
    "Acme Inc",
    "TechFlow",
    "Innovate Co",
    "DataSync",
    "CloudBase",
    "NextGen",
  ];

  return (
    <div>
      <HeroSection />

      <CompaniesMarquee />

      {/* Services Section */}
      <section className="py-20" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent projects that showcase our expertise and attention to
              detail
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Transparent Pricing
            </h2>
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it - hear from some of our satisfied
              clients
            </p>
          </div>

          <MarqueeDemo />
        </div>
      </section>
    </div>
  );
}
