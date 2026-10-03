export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-6 pr-6 font-heading text-xl font-medium text-muted-foreground sm:text-2xl"
              >
                <span>{item}</span>
                <span className="text-sm text-primary">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
