import { Code2, Database, BarChart3, Wrench, HeartHandshake } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading, Tilt } from "./ui";

const icons = [Code2, BarChart3, Database, Wrench, HeartHandshake];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-violet), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I'm working with"
          description="A growing toolkit — grouped honestly, with no inflated percentages. Some of it I'm confident in, some of it I'm actively exploring."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={group.title}
                delay={i * 80}
                className={i === skillGroups.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Tilt className="h-full">
                  <div className="glass glow-card h-full rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-accent" aria-hidden="true" />
                      {group.note && (
                        <span className="rounded-full border border-dashed border-coral/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coral">
                          {group.note}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                      {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                      {group.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
