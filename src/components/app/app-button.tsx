import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sizes = {
  md: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-sm",
};

const variants = {
  default: "",
  outline: "border-foreground/30 bg-transparent hover:border-foreground hover:bg-foreground hover:text-background",
  inverse: "border-background/35 bg-transparent text-background hover:bg-background hover:text-foreground",
};

type AppButtonProps = {
  children: React.ReactNode;
  href?: string;
  download?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  onClick?: () => void;
};

export function AppButton({
  children,
  href,
  download,
  variant = "default",
  size = "lg",
  className,
  onClick,
}: AppButtonProps) {
  const base = variant === "default" ? "default" : "outline";
  const styles = cn("group rounded-full font-semibold", sizes[size], variants[variant], className);

  if (href?.startsWith("/") && !download) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant: base }), styles)} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} download={download} className={cn(buttonVariants({ variant: base }), styles)} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Button variant={base} className={styles} onClick={onClick}>
      {children}
    </Button>
  );
}
