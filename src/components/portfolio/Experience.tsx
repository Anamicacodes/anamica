import { MapPin, CalendarDays, Award } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've contributed"
          description="Roles where I've represented brands, supported communities, and built real skills."
        />

        <ol className="relative mt-16 space-y-10 border-l border-border pl-8 sm:pl-12">
          {experiences.map((exp, i) => (
            <li key={exp.role} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1 grid size-6 place-items-center rounded-full border border-primary bg-background sm:-left-[57px]"
              >
                <span className="size-2 rounded-full bg-primary" />
              </span>

              <Reveal delay={i * 100}>
                <article className="glass glow-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start gap-4">
                    {/* TODO: replace initial with organization logo */}
                    <span
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary font-display text-lg font-bold text-primary"
                    >
                      {exp.logoInitial}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-primary">{exp.org}</p>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-3.5" aria-hidden="true" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                    {exp.certificate && (
                      <a
                        href="#certificates"
                        className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Award className="size-3.5" aria-hidden="true" />
                        View certificate
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
