"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={cn(
        "group relative w-full h-full rounded-xl",
        "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
        "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50",
        "transition-all duration-300 ease-out"
      )}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Simple Card Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Simple CTA */}
      </div>
    </motion.div>
  );
}
