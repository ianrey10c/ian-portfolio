import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { PageHeader } from "@/components/site/page-header";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history of Ian Rey Cordova across web development, WordPress support, marketing automation, and AI content.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work experience"
        title="Six years of keeping client businesses"
        highlight="online and growing."
        description="Since 2020 I've supported five clients across websites, funnels, email automation, social media, and admin work. Here is what each role involved."
      />
      <section className="container-page pb-12">
        <div className="mx-auto max-w-4xl">
          <ExperienceTimeline items={experience} />
        </div>
      </section>
      <Testimonials />
      <ContactCta />
    </>
  );
}
