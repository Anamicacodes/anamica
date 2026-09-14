import { Github, ExternalLink, ShoppingBag, Sparkles, Gamepad2, DoorOpen } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading, Tilt } from "./ui";

function projectIcon(title: string) {
  if (/game|tic-tac-toe|snake|rock/i.test(title)) return Gamepad2;
  if (/classroom|touch/i.test(title)) return DoorOpen;
  return ShoppingBag;
}

function MajorCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  const ProjectIcon = projectIcon(p.title);
  return (
    <Tilt className="h-full" max={5}>
      <article
        className={`glass glow-card flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${
          featured ? "ring-2 ring-primary/40" : ""
        }`}
      >
        <div
          className={`relative grid place-items-center overflow-hidden border-b border-border bg-secondary/50 ${
            featured ? "h-64" : "h-48"
          }`}
        >
          <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <ProjectIcon
            className={`relative text-primary transition-transform duration-500 group-hover:scale-110 ${
              featured ? "size-16" : "size-12"
            }`}
            aria-hidden="true"
          />
          {featured && (
            <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
              Featured
            </span>
          )}
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-coral-foreground">
            <Sparkles className="size-3" aria-hidden="true" />
            {p.status}
          </span>
        </div>


        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          <ul className="mt-4 grid grid-cols-1 gap-1.5 text-xs text-muted-foreground sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-coral" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3 pt-2">
            {p.liveUrl ? (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <ExternalLink className="size-4" aria-hidden="true" /> Live demo
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2 text-sm font-medium text-muted-foreground">
                <ExternalLink className="size-4" aria-hidden="true" /> Demo coming soon
              </span>
            )}
            {p.githubUrl ? (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2 text-sm font-medium text-muted-foreground">
                <Github className="size-4" aria-hidden="true" /> Repo coming soon
              </span>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}

function MiniCard({ p }: { p: Project }) {
  const ProjectIcon = projectIcon(p.title);
  return (
    <article className="glass flex h-full flex-col rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary">
          <ProjectIcon className="size-4 text-primary" aria-hidden="true" />
        </span>
        <h4 className="font-display text-sm font-bold text-foreground">{p.title}</h4>
      </div>
      <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-medium text-secondary-foreground"
          >
            {t}
          </span>
        ))}
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {p.status}
        </span>
      </div>
    </article>
  );
}

export function Projects() {
  const major = projects.filter((p) => p.tier !== "mini");
  const mini = projects.filter((p) => p.tier === "mini");

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I'm building"
          description="Real work in progress — built to learn, designed to be useful."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {major.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <MajorCard p={p} featured={i === 0} />
            </Reveal>
          ))}
        </div>


        {mini.length > 0 && (
          <>
            <Reveal className="mt-14">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Small builds & browser games
              </h3>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mini.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <MiniCard p={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
