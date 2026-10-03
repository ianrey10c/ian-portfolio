import { Download } from "lucide-react";
import { AppButton } from "@/components/app/app-button";
import { resume } from "@/lib/data";

type AppResumeButtonProps = {
  variant?: "default" | "outline" | "inverse";
  size?: "md" | "lg";
  className?: string;
};

export function AppResumeButton({ variant = "outline", size = "lg", className }: AppResumeButtonProps) {
  return (
    <AppButton href={resume.href} download={resume.fileName} variant={variant} size={size} className={className}>
      <Download className="transition-transform group-hover:translate-y-0.5" />
      Download résumé
    </AppButton>
  );
}
