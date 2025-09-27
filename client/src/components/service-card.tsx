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
      className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="text-sm text-muted-foreground space-y-1">
        {features.map((feature, idx) => (
          <li key={idx}>• {feature}</li>
        ))}
      </ul>
    </motion.div>
  );
}
