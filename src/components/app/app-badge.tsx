import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AppBadgeProps = {
  children: React.ReactNode;
  variant?: "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
};

export function AppBadge({ children, variant = "secondary", size = "sm", className }: AppBadgeProps) {
  return (
    <Badge variant={variant} className={cn(size === "sm" ? "h-6 px-2.5" : "h-7 px-3 text-sm", className)}>
      {children}
    </Badge>
  );
}
