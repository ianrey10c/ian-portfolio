"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

export function PageHeader({ eyebrow, title, highlight, description }: PageHeaderProps) {
  return (
    <header className="container-page pt-28 pb-12 sm:pt-36 sm:pb-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary uppercase"
      >
        <span>✦</span>
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="mt-5 max-w-4xl font-heading text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
      >
        {title} <span className="accent-word">{highlight}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
      >
        {description}
      </motion.p>
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease }}
        className="mt-10 h-px origin-left bg-foreground sm:mt-14"
      />
    </header>
  );
}
