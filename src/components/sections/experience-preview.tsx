import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { experience } from "@/lib/data";

export function ExperiencePreview() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Experience" title="Clients I've worked with." />
        <Link
          href="/experience"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-primary"
        >
          Full work history
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <Stagger className="mt-12 border-t border-border">
        {experience.map((job) => (
          <StaggerItem key={job.client}>
            <Link
              href="/experience"
              className="group relative grid gap-2 border-b border-border py-6 transition-[padding] duration-300 hover:px-4 sm:grid-cols-[9rem_1fr_auto] sm:items-center sm:gap-6"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-card transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative font-mono text-xs tracking-wider text-muted-foreground">{job.period}</span>
              <span className="relative">
                <span className="block font-heading text-xl font-semibold transition-colors group-hover:text-primary sm:text-2xl">
                  {job.role}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{job.client}</span>
              </span>
              <ArrowUpRight className="relative hidden size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary sm:block" />
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
