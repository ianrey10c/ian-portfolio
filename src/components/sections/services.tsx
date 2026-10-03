import { FileText, Globe, GraduationCap, Mail, Sparkles, Workflow } from "lucide-react";
import { AppBadge } from "@/components/app/app-badge";
import { AppCard } from "@/components/app/app-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

const icons = {
  globe: Globe,
  workflow: Workflow,
  mail: Mail,
  sparkles: Sparkles,
  graduation: GraduationCap,
  file: FileText,
};

export function Services() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="What I do"
        title="One assistant for the whole funnel."
        description="From the first landing page to the follow-up email, I handle the build, the automation, and the content that keeps it moving."
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <StaggerItem key={service.title} className="h-full">
              <AppCard className="h-full">
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover/app-card:scale-110 group-hover/app-card:-rotate-6">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <AppBadge key={tag}>{tag}</AppBadge>
                    ))}
                  </div>
                </CardContent>
              </AppCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
