"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { AppButton } from "@/components/app/app-button";
import { AppResumeButton } from "@/components/app/app-resume-button";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const headline = ["Websites,", "funnels", "&", "content", "that", "turn", "visitors", "into"];

export function Hero() {
  return (
    <section className="container-page pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
          >
            <span className="text-primary">✦ {profile.role}</span>
            <span className="hidden h-px w-8 bg-foreground/30 sm:block" />
            <span>{profile.focus}</span>
          </motion.p>

          <h1 className="mt-6 font-heading text-[2.75rem] leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-[4.75rem]">
            {headline.map((word, index) => (
              <span key={index} className="mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.06, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pr-[0.08em] pb-[0.14em] align-bottom">
              <motion.span
                className="accent-word marker inline-block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + headline.length * 0.06, ease }}
              >
                clients.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            Hi, I&apos;m <span className="font-semibold text-foreground">{profile.name}</span>. {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <AppButton href="/experience">
              See my experience
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </AppButton>
            <AppResumeButton />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-col gap-3 border-t border-foreground/15 pt-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="size-4 text-primary" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone className="size-4 text-primary" />
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm"
        >
          <motion.div
            aria-hidden
            initial={{ x: 0, y: 0 }}
            animate={{ x: 14, y: 14 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="absolute inset-0 rounded-t-full rounded-b-3xl bg-primary"
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-3xl border border-foreground bg-secondary">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 640px) 384px, 304px"
              className="object-cover object-top"
            />
          </div>

          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-6 size-28 rounded-full border border-foreground bg-butter sm:-left-12 sm:size-32"
          >
            <svg viewBox="0 0 100 100" className="size-full">
              <defs>
                <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-foreground font-mono text-[6.6px] tracking-[0.16em] uppercase">
                <textPath href="#badge-circle">Virtual Assistant ✦ Davao City ✦ Since 2020 ✦</textPath>
              </text>
            </svg>
          </motion.div>
          <span
            aria-hidden
            className="absolute -bottom-8 -left-6 flex size-28 items-center justify-center font-heading text-3xl text-primary sm:-left-12 sm:size-32"
          >
            ✦
          </span>

          <motion.p
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 5, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.2 }}
            className="shadow-print absolute top-16 -right-3 rounded-lg border border-foreground bg-card px-3 py-2 font-mono text-[0.7rem] font-medium tracking-wide uppercase sm:-right-8"
          >
            GHL · WordPress · AI
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
