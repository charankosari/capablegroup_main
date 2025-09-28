import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  duration?: number;
}

export function MorphingText({
  texts,
  className = "",
  duration = 3000,
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
