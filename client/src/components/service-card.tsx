import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div 
      className="glass-card p-6 rounded-xl hover-lift smooth-transition"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div 
        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.15 + 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Icon className="text-primary h-6 w-6" />
      </motion.div>
      <motion.h3 
        className="font-heading font-semibold text-xl mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-muted-foreground mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {description}
      </motion.p>
      <motion.ul 
        className="text-sm text-muted-foreground space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {features.map((feature, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.15 + 0.6 + idx * 0.1,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            • {feature}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
