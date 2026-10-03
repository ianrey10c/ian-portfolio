import { Counter } from "@/components/motion/counter";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="container-page py-16 sm:py-20">
      <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="bg-background p-6 sm:p-8">
            <p className="font-heading text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
