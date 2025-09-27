import { useState, useMemo } from "react";

type ServiceType = "website" | "mobile" | "ai" | "automation";

const BASE_PRICES = {
  website: 8000,
  mobile: 15000,
  ai: 12000,
  automation: 10000,
};

const ADDON_PRICES = {
  seo: 2000,
  maintenance: 1500,
  analytics: 800,
};

export function usePricingCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("website");
  const [complexity, setComplexity] = useState(3); // 1-5 scale
  const [timeline, setTimeline] = useState(8); // weeks
  const [addons, setAddons] = useState<string[]>([]);

  const toggleAddon = (addon: string) => {
    setAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const pricing = useMemo(() => {
    const basePrice = BASE_PRICES[serviceType];
    const complexityMultiplier = 0.5 + (complexity - 1) * 0.25; // 0.5x to 1.5x
    
    const addonsTotal = addons.reduce((total, addon) => {
      return total + (ADDON_PRICES[addon as keyof typeof ADDON_PRICES] || 0);
    }, 0);

    const developmentCost = basePrice * complexityMultiplier;
    const totalPrice = Math.round(developmentCost + addonsTotal);

    return {
      basePrice,
      complexityMultiplier,
      addonsTotal,
      developmentCost,
      totalPrice,
    };
  }, [serviceType, complexity, addons]);

  return {
    serviceType,
    setServiceType,
    complexity,
    setComplexity,
    timeline,
    setTimeline,
    addons,
    toggleAddon,
    pricing,
  };
}
