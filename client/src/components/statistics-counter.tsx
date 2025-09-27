import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 150, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 24, label: "Support Hours", suffix: "/7" },
];

export function StatisticsCounter() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
            Numbers that speak to our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-8 rounded-xl hover-lift smooth-transition"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Counter 
                  end={stat.value} 
                  duration={2.5}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </motion.div>
              <motion.h3
                className="text-lg font-semibold text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {stat.label}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
