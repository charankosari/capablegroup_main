"use client";

import { motion } from "framer-motion";
import {
  SiGoogle,
  SiApple,
  SiAmazon,
  SiMeta,
  SiNetflix,
  SiSpotify,
  SiUber,
  SiAirbnb,
  SiTesla,
  SiSlack,
  SiZoom,
} from "react-icons/si";
import React, { useEffect, useState } from "react";

const companies = [
  { name: "Google", logo: <SiGoogle size={28} /> },
  { name: "Apple", logo: <SiApple size={28} /> },
  { name: "Amazon", logo: <SiAmazon size={28} /> },
  { name: "Meta", logo: <SiMeta size={28} /> },
  { name: "Netflix", logo: <SiNetflix size={28} /> },
  { name: "Spotify", logo: <SiSpotify size={28} /> },
  { name: "Uber", logo: <SiUber size={28} /> },
  { name: "Airbnb", logo: <SiAirbnb size={28} /> },
  { name: "Tesla", logo: <SiTesla size={28} /> },
  { name: "Slack", logo: <SiSlack size={28} /> },
  { name: "Zoom", logo: <SiZoom size={28} /> },
];

export function CompaniesMarquee() {
  const duplicatedCompanies = [...companies, ...companies];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This code now runs only in the browser
    setMounted(true);
  }, []);

  // Before the component has mounted in the browser, we can return null or a placeholder
  if (!mounted) {
    return null;
  }

  // Now that we are in the browser, we can safely check the window width
  const duration = window.innerWidth < 768 ? 20 : 80; // Set mobile duration to 20 (5 is very fast)

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 animate-fade-in">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground animate-fade-in-delay-1">
            We've helped these companies build exceptional digital products
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              ease: "linear",
              duration: duration,
              repeat: Infinity,
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center space-x-4 mx-8 text-muted-foreground hover:text-foreground smooth-transition"
                style={{ minWidth: "160px" }}
              >
                <div className="text-3xl">{company.logo}</div>
                <span className="font-medium text-lg">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
