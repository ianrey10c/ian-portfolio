import { Marquee } from "@/components/motion/marquee";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { tools } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section aria-label="Tools" className="border-y border-border py-7">
        <Marquee items={tools} />
      </section>
      <Stats />
      <Services />
      <ExperiencePreview />
      <Testimonials />
      <ContactCta />
    </>
  );
}
