import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonHref: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small projects",
    features: [
      "Landing Page",
      "Responsive Design", 
      "Basic SEO",
      "30-day Support"
    ],
    buttonText: "Choose Starter",
    buttonHref: "/contact"
  },
  {
    name: "Professional",
    price: "$15,000",
    description: "For growing businesses",
    features: [
      "Full Website/App",
      "Custom Design",
      "CMS Integration", 
      "90-day Support",
      "Performance Optimization"
    ],
    popular: true,
    buttonText: "Choose Professional",
    buttonHref: "/contact"
  },
  {
    name: "Enterprise",
    price: "$50,000+",
    description: "For complex solutions",
    features: [
      "Custom Development",
      "AI Integration",
      "Dedicated Team",
      "1-year Support", 
      "Priority Updates"
    ],
    buttonText: "Contact Sales",
    buttonHref: "/contact"
  }
];

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {pricingTiers.map((tier, index) => (
        <Card 
          key={tier.name}
          className={`relative ${tier.popular ? 'border-2 border-primary' : 'border border-border'}`}
          data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            </div>
          )}
          
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-heading">{tier.name}</CardTitle>
            <div className="text-3xl font-bold mb-1">{tier.price}</div>
            <p className="text-muted-foreground">{tier.description}</p>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href={tier.buttonHref}>
              <Button 
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
                data-testid={`pricing-button-${tier.name.toLowerCase()}`}
              >
                {tier.buttonText}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
