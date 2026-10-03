import { Quote } from "lucide-react";
import { AppCard } from "@/components/app/app-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardFooter } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="Client reviews"
        title="What clients say."
        description="Words from the people I've worked alongside."
      />

      <Stagger className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_1.35fr]">
        {testimonials.map((review) => (
          <StaggerItem key={review.name}>
            <AppCard lift={false}>
              <CardContent>
                <Quote className="size-8 fill-butter text-primary" />
                <div className="mt-5 space-y-4">
                  {review.quote.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        review.quote.length === 1
                          ? "font-heading text-xl leading-snug font-medium text-pretty sm:text-2xl"
                          : "text-sm leading-relaxed text-pretty text-muted-foreground first:text-base first:text-foreground"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4 bg-muted/40">
                <Avatar className="size-12">
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs leading-snug text-muted-foreground">{review.title}</p>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-widest text-primary uppercase">
                    {review.source}
                  </p>
                </div>
              </CardFooter>
            </AppCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
