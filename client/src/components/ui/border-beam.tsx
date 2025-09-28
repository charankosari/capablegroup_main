import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "[background:linear-gradient(transparent,transparent),conic-gradient(from_calc(var(--anchor)*1deg),transparent_0_calc(var(--anchor)*1deg),var(--color-from)_calc(var(--anchor)*1deg)_calc((var(--anchor)+var(--size))*1deg),var(--color-to)_calc((var(--anchor)+var(--size))*1deg)_calc((var(--anchor)+2*var(--size))*1deg),transparent_calc((var(--anchor)+2*var(--size))*1deg)_calc((var(--anchor)+3*var(--size))*1deg))] [background-clip:padding-box,border-box] [background-origin:border-box]",

        // animation
        "animate-[border-dance_calc(var(--duration)*1s)_linear_infinite]",
        className
      )}
    />
  );
};

