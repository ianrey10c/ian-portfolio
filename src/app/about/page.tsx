import type { Metadata } from "next";
import { Languages, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { AppBadge } from "@/components/app/app-badge";
import { AppCard } from "@/components/app/app-card";
import { AppResumeButton } from "@/components/app/app-resume-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { CardContent } from "@/components/ui/card";
import { profile, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ian Rey Cordova: profile, skills, tools, and languages of a web-focused virtual assistant based in Davao City.",
};

const contact = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Languages, label: "Languages", value: profile.languages.join(" · ") },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="The person behind the"
        highlight="pages and pipelines."
        description="A virtual assistant from Davao City who builds the website, wires up the funnel, and makes the content that fills it."
      />

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal x={-30} y={0} className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-card">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <ul className="mx-auto mt-6 max-w-sm space-y-4">
            {contact.map((entry) => (
              <li key={entry.label} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <entry.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                    {entry.label}
                  </span>
                  {entry.href ? (
                    <a href={entry.href} className="text-sm font-medium break-all transition-colors hover:text-primary">
                      {entry.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium">{entry.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-7 max-w-sm">
            <AppResumeButton variant="default" className="w-full" />
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Profile" title="Web first, marketing minded." />
          <div className="mt-8 space-y-5">
            {profile.summary.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground first-letter:text-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use every day."
          description="Twenty platforms across web, funnels, email, AI, design, and social."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title} className="h-full">
              <AppCard className="h-full">
                <CardContent>
                  <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <AppBadge key={skill} variant="outline" size="md">
                        {skill}
                      </AppBadge>
                    ))}
                  </div>
                </CardContent>
              </AppCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ContactCta />
    </>
  );
}
