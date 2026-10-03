import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
        <span>✦</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
