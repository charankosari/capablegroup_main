import { CaseStudyCard } from "@/components/case-study-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "e-commerce", label: "E-commerce" },
    { id: "saas", label: "SaaS" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Solutions" },
    { id: "automation", label: "Automation" }
  ];

  const projects = [
    {
      id: 1,
      title: "Fashion Retailer Platform",
      description: "Complete e-commerce solution with inventory management, customer analytics, and multi-payment gateway integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tags: ["E-commerce", "Next.js", "Stripe", "Analytics"],
      category: "e-commerce",
      metric1: "+250% Sales",
      metric2: "12 weeks",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
      results: [
        "250% increase in online sales",
        "40% reduction in cart abandonment", 
        "99.9% uptime since launch",
        "Mobile conversion rate improved by 180%"
      ]
    },
    {
      id: 2,
      title: "Analytics SaaS Platform",
      description: "Real-time data visualization and business intelligence dashboard with custom reporting and team collaboration features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["SaaS", "React", "D3.js", "PostgreSQL"],
      category: "saas", 
      metric1: "10k+ Users",
      metric2: "16 weeks",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "AWS", "Docker"],
      results: [
        "10,000+ active monthly users",
        "99.95% uptime reliability",
        "Processing 1M+ data points daily",
        "Average load time under 2 seconds"
      ]
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app with AI-powered workout recommendations, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Mobile", "React Native", "AI", "Health"],
      category: "mobile",
      metric1: "4.8★ Rating",
      metric2: "8 weeks", 
      technologies: ["React Native", "Expo", "TensorFlow.js", "Firebase", "Stripe"],
      results: [
        "4.8/5 star rating on app stores",
        "50,000+ downloads in first month",
        "85% user retention after 30 days",
        "Featured in App Store health category"
      ]
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Intelligent content creation platform powered by GPT-4, with custom training for brand voice and automated workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "GPT-4", "SaaS", "Automation"],
      category: "ai",
      metric1: "95% Time Saved",
      metric2: "10 weeks",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Celery"],
      results: [
        "95% reduction in content creation time",
        "1000+ pieces of content generated daily",
        "99.2% customer satisfaction score",
        "$2M+ saved in copywriting costs"
      ]
    },
    {
      id: 5,
      title: "Supply Chain Automation",
      description: "End-to-end supply chain management system with automated ordering, inventory tracking, and supplier integration.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Automation", "ERP", "Integration", "Dashboard"],
      category: "automation",
      metric1: "60% Cost Reduction",
      metric2: "14 weeks",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Docker", "Kubernetes"],
      results: [
        "60% reduction in operational costs",
        "Zero stockouts in 6 months", 
        "Automated 90% of manual processes",
        "Real-time visibility across 50+ suppliers"
      ]
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "Comprehensive property marketplace with virtual tours, mortgage calculator, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Marketplace", "Real Estate", "Next.js", "Maps"],
      category: "e-commerce",
      metric1: "$50M+ Listings",
      metric2: "18 weeks",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google Maps", "Vercel"],
      results: [
        "$50M+ in property listings",
        "2000+ active real estate agents",
        "300% increase in lead generation", 
        "Average time on site: 8+ minutes"
      ]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects that have helped businesses 
            scale, innovate, and achieve their digital transformation goals.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <CaseStudyCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                metric1={project.metric1}
                metric2={project.metric2}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Showcase */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Project Spotlight</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dive into one of our most successful projects and see the impact we delivered.
            </p>
          </div>

          <Card className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex gap-2 mb-4">
                  {projects[0].tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-3xl mb-4">{projects[0].title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{projects[0].description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Key Results:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {projects[0].results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button data-testid="project-details">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </Button>
                  <Button variant="outline" data-testid="project-code">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
              
              <div className="relative lg:min-h-[500px]">
                <img 
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase the success of our partnership with clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "$10M+", label: "Revenue Generated" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <Card key={index} className="text-center" data-testid={`stat-${index}`}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together. Start your project today and join our portfolio of successful launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="work-cta-contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/fees">
              <Button variant="outline" size="lg" data-testid="work-cta-pricing">
                Get Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
