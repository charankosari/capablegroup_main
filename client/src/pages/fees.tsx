import { PricingCalculator } from "@/components/pricing-calculator";
import { PricingTable } from "@/components/pricing-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calculator, DollarSign, Clock, Shield, Zap, HeartHandshake } from "lucide-react";

export default function Fees() {
  const pricingFeatures = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise costs. What you see is what you get."
    },
    {
      icon: Clock,
      title: "Fixed Timeline",
      description: "Clear project milestones with guaranteed delivery dates."
    },
    {
      icon: Shield,
      title: "30-Day Warranty",
      description: "All projects come with comprehensive post-launch support."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Most projects completed within 2-12 weeks depending on complexity."
    }
  ];

  const faqs = [
    {
      question: "What's included in the base price?",
      answer: "Base prices include full development, testing, deployment, and 30 days of support. Design, project management, and basic SEO optimization are also included."
    },
    {
      question: "Are there any additional costs?",
      answer: "Additional costs may include premium third-party services, custom integrations, or ongoing maintenance beyond the included support period."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We typically work with a 50% deposit to start, with the remainder due upon completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes! We offer monthly maintenance plans starting at $500/month, including updates, monitoring, backups, and technical support."
    },
    {
      question: "What if I need changes during development?",
      answer: "Minor changes are included. Major scope changes are handled through a change order process with transparent pricing."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-primary">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get an instant quote with our pricing calculator or choose from our 
            pre-built packages. No hidden fees, no surprises.
          </p>
          <div className="flex justify-center">
            <Calculator className="h-12 w-12 text-primary animate-bounce-gentle" />
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20" data-testid="pricing-calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Service Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted packages or get a custom quote for your unique needs.
            </p>
          </div>
          
          <PricingTable />
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Why Our Pricing Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in fair, transparent pricing that delivers exceptional value for your investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFeatures.map((feature, index) => (
              <Card key={index} className="text-center" data-testid={`pricing-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} data-testid={`faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <HeartHandshake className="h-16 w-16 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Investment That Pays Off
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our clients typically see a 300-500% ROI within the first year. 
            Let's build something that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="fees-cta-contact">
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" data-testid="fees-cta-portfolio">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
