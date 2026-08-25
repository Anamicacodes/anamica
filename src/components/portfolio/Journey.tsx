import { useRef } from "react";
import { ChevronLeft, ChevronRight, Milestone as MilestoneIcon } from "lucide-react";
import { milestones } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export function Journey() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section id="journey" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 size-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-blue), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title="The road so far"
          description="From first semester to ambassador stages and internship desks — a sliding timeline of milestones."
        />

        <Reveal className="mt-10 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll milestones left"
            className="grid size-11 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll milestones right"
            className="grid size-11 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-5" />
          </button>
        </Reveal>

        <div
          ref={scroller}
          tabIndex={0}
          role="region"
          aria-label="Milestones timeline, horizontally scrollable"
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={Math.min(i, 5) * 80} className="snap-start">
              <article className="glass glow-card flex h-full w-72 shrink-0 flex-col rounded-3xl p-6 sm:w-80">
                <div className="flex items-center justify-between">
                  <MilestoneIcon className="size-6 text-coral" aria-hidden="true" />
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary-foreground">
                    {m.period}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-auto pt-6 font-display text-4xl font-bold text-border"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
