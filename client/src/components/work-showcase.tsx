"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StatisticsCounter } from "@/components/statistics-counter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// --- Data for Work Items ---
interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced features, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "Biometric Auth", "API Integration"]
  },
  {
    id: "3",
    title: "AI Customer Support",
    description: "Intelligent chatbot system that handles customer inquiries with natural language processing.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI Solutions",
    technologies: ["OpenAI API", "Python", "FastAPI", "Machine Learning"]
  },
  {
    id: "4",
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "SaaS",
    technologies: ["Vue.js", "D3.js", "PostgreSQL", "Redis"]
  },
  {
    id: "5",
    title: "Workflow Automation",
    description: "Custom automation solution that streamlines business processes and reduces manual work.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    technologies: ["Zapier", "Webhooks", "API Integration", "Custom Scripts"]
  },
  {
    id: "6",
    title: "Luxury Fashion E-commerce",
    description: "A high-end online store for a luxury fashion brand, focusing on visual storytelling and user experience.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel"]
  }
];

// --- Reusable WorkShowcase Component ---
function WorkShowcase({ items }: { items: WorkItem[] }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="glass-card rounded-xl overflow-hidden hover-lift smooth-transition"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">{item.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 h-20">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
