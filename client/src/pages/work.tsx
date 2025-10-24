"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StatisticsCounter } from "@/components/statistics-counter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

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
    description:
      "A modern e-commerce solution with advanced features, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "2",
    title: "Luxury Fashion Store",
    description:
      "A high-end online store for a luxury fashion brand, focusing on visual storytelling and user experience.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel"],
  },
  {
    id: "3",
    title: "Electronics Marketplace",
    description:
      "Comprehensive electronics marketplace with advanced search, reviews, and multi-vendor support.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
  },
  {
    id: "4",
    title: "Analytics SaaS Platform",
    description:
      "Comprehensive analytics dashboard with real-time data visualization and reporting features.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "SaaS",
    technologies: ["React", "D3.js", "PostgreSQL", "Redis"],
  },
  {
    id: "5",
    title: "Project Management SaaS",
    description:
      "Team collaboration platform with task management, time tracking, and project analytics.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: "6",
    title: "CRM SaaS Solution",
    description:
      "Customer relationship management platform with sales pipeline, contact management, and reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "SaaS",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: "7",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Apps",
    technologies: [
      "React Native",
      "Firebase",
      "Biometric Auth",
      "API Integration",
    ],
  },
  {
    id: "8",
    title: "Fitness Tracking App",
    description:
      "Cross-platform fitness app with workout tracking, social features, and health analytics.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Apps",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
  },
  {
    id: "10",
    title: "AI Customer Support",
    description:
      "Intelligent chatbot system that handles customer inquiries with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI Solutions",
    technologies: ["OpenAI API", "Python", "FastAPI", "Machine Learning"],
  },
  {
    id: "11",
    title: "AI Content Generator",
    description:
      "Intelligent content creation platform powered by GPT-4 with custom training for brand voice.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI Solutions",
    technologies: ["Python", "OpenAI API", "React", "PostgreSQL"],
  },
  {
    id: "12",
    title: "AI Document Processor",
    description:
      "Automated document analysis and data extraction system using computer vision and NLP.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI Solutions",
    technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
  },
  {
    id: "13",
    title: "Workflow Automation",
    description:
      "Custom automation solution that streamlines business processes and reduces manual work.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    technologies: ["Zapier", "Webhooks", "API Integration", "Custom Scripts"],
  },
  {
    id: "14",
    title: "Email Marketing Automation",
    description:
      "Automated email marketing platform with segmentation, A/B testing, and analytics.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    technologies: ["Node.js", "SendGrid", "MongoDB", "Redis"],
  },
  {
    id: "15",
    title: "Inventory Management Automation",
    description:
      "Automated inventory tracking system with real-time updates and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    technologies: ["Python", "Django", "PostgreSQL", "Celery"],
  },
];

// --- Reusable WorkShowcase Component ---
function WorkShowcase({ items }: { items: WorkItem[] }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The 'layout' prop has been removed from this container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            // The `layout` prop has been removed here to disable the animation
            <motion.div
              key={item.id}
              className="glass-card rounded-xl overflow-hidden hover-lift smooth-transition"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
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
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 h-20">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "E-commerce", label: "E-commerce" },
    { id: "SaaS", label: "SaaS" },
    { id: "Mobile Apps", label: "Mobile Apps" },
    { id: "AI Solutions", label: "AI Solutions" },
    { id: "Automation", label: "Automation" },
  ];

  const filteredWorkItems =
    selectedCategory === "all"
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-16">
      <Helmet>
        <title>Our Work - Capable Groups | Portfolio & Case Studies</title>
        <meta
          name="description"
          content="Explore Capable Groups' portfolio of successful IT projects. View our case studies in business transformation, digital transformation, AI solutions, and software development."
        />
        <meta
          name="keywords"
          content="capable groups portfolio, IT projects, software development projects, business transformation projects, digital transformation case studies, AI solutions portfolio"
        />
        <meta
          property="og:title"
          content="Our Work - Capable Groups | Portfolio & Case Studies"
        />
        <meta
          property="og:description"
          content="Explore Capable Groups' portfolio of successful IT projects and case studies."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Work - Capable Groups | Portfolio & Case Studies"
        />
        <meta
          name="twitter:description"
          content="Explore Capable Groups' portfolio of successful IT projects and case studies."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-delay-1">
            Explore our portfolio of successful projects that have helped
            businesses scale, innovate, and achieve their digital transformation
            goals.
          </p>
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in-delay-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="hover-lift smooth-transition"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Work Showcase */}
      <WorkShowcase items={filteredWorkItems} />

      <StatisticsCounter />

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-delay-1">
            Let's create something amazing together. Start your project today
            and join our portfolio of successful launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/contact">
              <Button size="lg" className="hover-lift smooth-transition">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/fees">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift smooth-transition"
              >
                Get Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
