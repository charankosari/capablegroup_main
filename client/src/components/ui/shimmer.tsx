import { cn } from "@/lib/utils";

interface ShimmerProps {
  className?: string;
  children: React.ReactNode;
}

export const Shimmer = ({ className, children }: ShimmerProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

