import { Github, ExternalLink, ShoppingBag, Sparkles, Image as ImageIcon, Gamepad2, DoorOpen } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading, Tilt } from "./ui";

function projectIcon(title: string) {
  if (/game|tic-tac-toe|snake|rock/i.test(title)) return Gamepad2;
  if (/classroom|touch/i.test(title)) return DoorOpen;
  return ShoppingBag;
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I'm building"
          description="Real work in progress — built to learn, designed to be useful."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const ProjectIcon = projectIcon(p.title);
            return (
            <Reveal key={p.title} delay={i * 100}>
              <Tilt className="h-full" max={5}>
                <article className="glass glow-card flex h-full flex-col overflow-hidden rounded-3xl">
                  {/* TODO: replace with project screenshots */}
                  <div className="relative grid h-48 place-items-center overflow-hidden border-b border-border bg-secondary/50">
                    <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
                    <ProjectIcon className="relative size-12 text-primary" aria-hidden="true" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-coral-foreground">
                      <Sparkles className="size-3" aria-hidden="true" />
                      {p.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
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
            </Reveal>
            );
          })}

          {/* Placeholder for future projects */}
          <Reveal delay={200}>
            <div className="grid h-full min-h-72 place-items-center rounded-3xl border-2 border-dashed border-border p-8 text-center">
              <div>
                <ImageIcon className="mx-auto size-10 text-muted-foreground" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  More projects coming soon
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Currently exploring new ideas in web development and AI — watch this space.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
