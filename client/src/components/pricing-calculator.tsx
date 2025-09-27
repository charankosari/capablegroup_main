import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { usePricingCalculator } from "@/hooks/use-pricing-calculator";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function PricingCalculator() {
  const { toast } = useToast();
  const {
    serviceType,
    setServiceType,
    complexity,
    setComplexity,
    timeline,
    setTimeline,
    addons,
    toggleAddon,
    pricing
  } = usePricingCalculator();

  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const saveQuoteMutation = useMutation({
    mutationFn: async (quoteData: any) => {
      return await apiRequest('POST', '/api/quotes', quoteData);
    },
    onSuccess: () => {
      toast({
        title: "Quote Saved!",
        description: "We'll be in touch with a detailed proposal soon.",
      });
      setShowQuoteModal(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save quote. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleRequestQuote = () => {
    const quoteData = {
      serviceType,
      complexity: complexity.toString(),
      timeline: `${timeline} weeks`,
      addons,
      basePrice: pricing.basePrice.toString(),
      totalPrice: pricing.totalPrice.toString(),
    };

    saveQuoteMutation.mutate(quoteData);
  };

  const complexityLabels = ['Simple', 'Basic', 'Medium', 'Advanced', 'Complex'];
  const complexityLabel = complexityLabels[complexity - 1];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-heading">Project Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="service-type" className="text-sm font-medium mb-2 block">
                Service Type
              </Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger data-testid="select-service-type">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="ai">AI Agent</SelectItem>
                  <SelectItem value="automation">Automation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">
                Project Complexity - {complexityLabel}
              </Label>
              <Slider
                value={[complexity]}
                onValueChange={(value) => setComplexity(value[0])}
                max={5}
                min={1}
                step={1}
                className="mb-2"
                data-testid="complexity-slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Simple</span>
                <span>Medium</span>
                <span>Complex</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">
                Timeline - {timeline} weeks
              </Label>
              <Slider
                value={[timeline]}
                onValueChange={(value) => setTimeline(value[0])}
                max={24}
                min={2}
                step={1}
                data-testid="timeline-slider"
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">Add-ons</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="addon-seo"
                    checked={addons.includes('seo')}
                    onCheckedChange={() => toggleAddon('seo')}
                    data-testid="addon-seo"
                  />
                  <Label htmlFor="addon-seo" className="text-sm">
                    SEO Optimization (+$2,000)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="addon-maintenance"
                    checked={addons.includes('maintenance')}
                    onCheckedChange={() => toggleAddon('maintenance')}
                    data-testid="addon-maintenance"
                  />
                  <Label htmlFor="addon-maintenance" className="text-sm">
                    3-month Support (+$1,500)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="addon-analytics"
                    checked={addons.includes('analytics')}
                    onCheckedChange={() => toggleAddon('analytics')}
                    data-testid="addon-analytics"
                  />
                  <Label htmlFor="addon-analytics" className="text-sm">
                    Analytics Setup (+$800)
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Estimated Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Base Development</span>
                <span data-testid="base-price">${pricing.basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Complexity Multiplier</span>
                <span data-testid="complexity-multiplier">{pricing.complexityMultiplier.toFixed(1)}x</span>
              </div>
              <div className="flex justify-between">
                <span>Add-ons</span>
                <span data-testid="addons-total">${pricing.addonsTotal.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Estimate</span>
                <span className="text-primary" data-testid="total-price">
                  ${pricing.totalPrice.toLocaleString()}
                </span>
              </div>
              
              <Button 
                className="w-full mt-6" 
                onClick={handleRequestQuote}
                disabled={saveQuoteMutation.isPending}
                data-testid="request-quote-button"
              >
                {saveQuoteMutation.isPending ? 'Saving...' : 'Request Detailed Quote'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
