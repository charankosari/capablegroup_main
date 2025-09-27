import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metric1: string;
  metric2: string;
  index: number;
}

export function CaseStudyCard({ 
  title, 
  description, 
  image, 
  tags, 
  metric1, 
  metric2, 
  index 
}: CaseStudyCardProps) {
  return (
    <motion.div 
      className="bg-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`case-study-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
        data-testid={`case-study-image-${index}`}
      />
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between text-sm">
          <span className="text-primary" data-testid={`metric-1-${index}`}>{metric1}</span>
          <span className="text-primary" data-testid={`metric-2-${index}`}>{metric2}</span>
        </div>
      </div>
    </motion.div>
  );
}
