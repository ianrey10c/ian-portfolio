"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { AppBadge } from "@/components/app/app-badge";
import { AppCard } from "@/components/app/app-card";
import { CardContent } from "@/components/ui/card";
import type { Experience } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative space-y-10 pl-10 sm:pl-14">
      <span aria-hidden className="absolute top-2 bottom-2 left-[11px] w-px bg-border sm:left-[15px]" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-primary sm:left-[15px]"
      />

      {items.map((job) => (
        <motion.li
          key={job.client}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <motion.span
            aria-hidden
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
            className="absolute top-7 -left-10 flex size-6 items-center justify-center rounded-full border border-primary/50 bg-background sm:-left-14 sm:size-8"
          >
            <span className="size-2 rounded-full bg-primary sm:size-2.5" />
          </motion.span>

          <AppCard lift={false}>
            <CardContent>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-heading text-2xl leading-tight font-semibold">{job.role}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Client · <span className="font-medium text-foreground">{job.client}</span>
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tool) => (
                  <AppBadge key={tool}>{tool}</AppBadge>
                ))}
              </div>
            </CardContent>
          </AppCard>
        </motion.li>
      ))}
    </ol>
  );
}
