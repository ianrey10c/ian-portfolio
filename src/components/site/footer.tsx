import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-heading text-xl font-semibold">
              {profile.name}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.role} for websites, funnels, automations, and AI-powered content.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="transition-colors hover:text-primary">
                  {profile.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, shadcn/ui & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
