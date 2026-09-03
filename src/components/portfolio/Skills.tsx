import { Code2, Database, BarChart3, Wrench, HeartHandshake, Sprout } from "lucide-react";
import { currentlyLearning, skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const icons = [Code2, BarChart3, Database, Wrench, HeartHandshake];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-violet), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I'm working with"
          description="No percentages, no progress bars — just an honest toolkit."
        />

        <div className="mt-14 space-y-8">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 70}>
                <div className="group/row grid gap-3 border-b border-border/60 pb-7 sm:grid-cols-[13rem_1fr] sm:items-start">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="size-5 text-accent transition-transform duration-300 group-hover/row:scale-110"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-base font-bold text-foreground">
                      {group.title}
                    </h3>
                    {group.note && (
                      <span className="rounded-full border border-dashed border-coral/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-coral">
                        {group.note}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        tabIndex={0}
                        className="cursor-default rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={80}>
            <div className="grid gap-3 sm:grid-cols-[13rem_1fr] sm:items-start">
              <div className="flex items-center gap-2.5">
                <Sprout className="size-5 text-coral" aria-hidden="true" />
                <h3 className="font-display text-base font-bold text-foreground">
                  Currently learning
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {currentlyLearning.map((s) => (
                  <li
                    key={s}
                    tabIndex={0}
                    className="inline-flex cursor-default items-center gap-2 rounded-full border border-dashed border-coral/60 bg-coral/10 px-4 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-solid hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
