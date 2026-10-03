import { ArrowUpRight, Phone } from "lucide-react";
import { AppButton } from "@/components/app/app-button";
import { AppResumeButton } from "@/components/app/app-resume-button";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/lib/data";

export function ContactCta() {
  return (
    <section className="container-page pt-10 pb-20 sm:pb-28">
      <Reveal>
        <div className="rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 sm:py-20 lg:px-16">
          <p className="font-mono text-xs tracking-[0.2em] text-butter uppercase">✦ Let&apos;s work together</p>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            Need a reliable hand behind your <span className="text-butter italic">website and funnels?</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-pretty text-background/70 sm:text-lg">
            Tell me what you&apos;re building and where you&apos;re stuck. I&apos;ll get back to you with how I can help.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AppButton href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </AppButton>
            <AppButton href={profile.phoneHref} variant="inverse">
              <Phone />
              {profile.phone}
            </AppButton>
            <AppResumeButton variant="inverse" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
