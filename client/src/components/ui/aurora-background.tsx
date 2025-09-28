import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-white overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-aurora bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
        </div>
        {showRadialGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        )}
      </div>
      {children}
    </div>
  );
};

