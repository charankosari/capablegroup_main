import { motion } from "framer-motion";
import { LucideIcon, Code, Smartphone, Brain, Zap } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  size: "small" | "medium" | "large";
}

const services: ServiceItem[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    size: "large"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Swift", "Kotlin"],
    size: "medium"
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Intelligent automation solutions powered by artificial intelligence.",
    features: ["ChatGPT API", "Custom AI", "Automation", "Machine Learning"],
    size: "medium"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with custom automation solutions.",
    features: ["Workflow Automation", "API Integration", "Data Processing", "Task Automation"],
    size: "small"
  }
];

export function ServicesBentoGrid() {
  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
            Comprehensive development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`glass-card p-6 rounded-xl hover-lift smooth-transition ${getGridClasses(service.size)}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-full flex flex-col">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <service.icon className="text-primary h-6 w-6" />
                </motion.div>
                
                <motion.h3 
                  className="font-heading font-semibold text-xl mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-4 flex-grow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.7 + idx * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
