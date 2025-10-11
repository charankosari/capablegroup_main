"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FollowerPointerCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}

export function FollowerPointerCard({
  children,
  className,
  title,
}: FollowerPointerCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}

      {/* Following Pointer */}
      <motion.div
        className="pointer-events-none fixed z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
        style={{
          left: 0,
          top: 0,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{
              scale: isHovering ? 1.2 : 1,
            }}
            transition={{
              duration: 0.2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Title Tooltip */}
      {title && isHovering && (
        <motion.div
          className="pointer-events-none fixed z-50"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 20,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
            {title}
          </div>
        </motion.div>
      )}
    </div>
  );
}
