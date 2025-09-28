import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <div className={cn("p-2", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

