import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AppCardProps = {
  children: React.ReactNode;
  className?: string;
  lift?: boolean;
};

export function AppCard({ children, className, lift = true }: AppCardProps) {
  return (
    <Card
      className={cn(
        "group/app-card rounded-2xl bg-card ring-foreground/15 transition-[transform,box-shadow] duration-300 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(7)]",
        lift && "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--foreground)] hover:ring-foreground",
        className
      )}
    >
      {children}
    </Card>
  );
}
