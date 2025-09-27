import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-delay-1">
              We Build <span className="text-primary">Exceptional</span> Digital Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-2">
              Apps, websites, AI agents, automations, and workplace tools that drive results. 
              From concept to deployment, we deliver premium development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <Link href="/contact">
                <Button size="lg" data-testid="hero-cta-primary" className="hover-lift smooth-transition">
                  Get Quote
                </Button>
              </Link>
              <Link href="/fees">
                <Button variant="outline" size="lg" data-testid="hero-cta-secondary" className="hover-lift smooth-transition">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern development workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto hover-lift smooth-transition"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
