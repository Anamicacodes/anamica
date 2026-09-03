import { useState } from "react";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export function Achievements() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Moments worth framing"
          description="Hover or tap to read the story behind each one."
        />

        <ol className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {achievements.map((a, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={a.title} delay={i * 70} as="li">
                <button
                  type="button"
                  onMouseEnter={() => setOpen(i)}
                  onMouseLeave={() => setOpen((v) => (v === i ? null : v))}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-4 px-1 py-6 text-left transition-colors hover:bg-secondary/40"
                >
                  <span className="mt-0.5 font-display text-xs font-bold tabular-nums text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Trophy
                    className="mt-0.5 size-4 shrink-0 text-coral transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-base font-bold text-foreground sm:text-lg">
                      {a.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold uppercase tracking-widest text-primary">
                      {a.meta}
                    </span>
                    <span
                      className={`grid transition-all duration-300 ${
                        isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        {a.detail}
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
