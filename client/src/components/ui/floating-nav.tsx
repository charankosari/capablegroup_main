import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  children: React.ReactNode;
  className?: string;
}

export const FloatingNav = ({ children, className }: FloatingNavProps) => {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};
