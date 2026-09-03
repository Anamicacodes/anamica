import { useState } from "react";
import { Mic, Terminal, Hammer, Sparkles } from "lucide-react";
import { facets, photos, profile, rightNow } from "@/data/portfolio";
import { Reveal, SectionHeading, Tilt } from "./ui";

const facetIcons = [Mic, Terminal, Hammer, Sparkles];

const facts = [
  { label: "Education", value: "B.Tech CSE, LPU" },
  { label: "Class of", value: profile.graduation },
  { label: "CGPA", value: profile.cgpa },
  { label: "Pronouns", value: profile.pronouns },
];

export function About() {
  const [activeId, setActiveId] = useState(facets[0]?.id ?? "");
  const active = facets.find((f) => f.id === activeId) ?? facets[0];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Curious by default, driven by people"
          description="Four sides of me — hover or tap to look closer."
        />

        {/* Right now — a compact ticker strip, not another card grid */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-border/70 py-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Right now
            </span>
            {rightNow.map((r) => (
              <span key={r.verb} className="group text-sm">
                <span className="font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                  {r.verb}
                </span>
                <span className="mx-1.5 text-muted-foreground/60">→</span>
                <span className="font-display font-bold text-foreground">{r.value}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground">
                First-year B.Tech CSE student at{" "}
                <span className="font-display font-bold">Lovely Professional University</span> —
                living at the intersection of technology, AI, events and community.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                I learn by doing: projects, hackathons, workshops and stages.
              </p>
            </Reveal>

            {/* Facet explorer */}
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {facets.map((f, i) => {
                  const Icon = facetIcons[i % facetIcons.length] ?? Sparkles;
                  const isActive = f.id === active?.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onMouseEnter={() => setActiveId(f.id)}
                      onFocus={() => setActiveId(f.id)}
                      onClick={() => setActiveId(f.id)}
                      aria-pressed={isActive}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "border border-border text-muted-foreground hover:-translate-y-0.5 hover:text-foreground"
                      }`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {f.label}
                    </button>
                  );
                })}
              </div>

              {active && (
                <div key={active.id} className="mt-5 animate-fade-in border-l-2 border-primary/60 pl-5">
                  <p className="font-display text-base font-bold text-foreground">
                    {active.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.detail}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                {facts.map((f) => (
                  <div key={f.label} className="group">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <a
                  href="/#gallery"
                  className="story-link font-semibold text-primary"
                >
                  Community Development Project photos
                </a>
                <a href="/more-about-me" className="story-link font-semibold text-primary">
                  Dance, poetry &amp; personal life
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Tilt max={6}>
              <figure className="glass glow-card -rotate-1 rounded-3xl p-3 pb-4 transition-transform duration-300 hover:rotate-0">
                <img
                  src={photos.teaching}
                  alt="Anamica leading a critical-thinking session for school students in a classroom"
                  loading="lazy"
                  className="h-80 w-full rounded-2xl object-cover sm:h-[26rem]"
                  style={{ objectPosition: "50% 30%" }}
                />
                <figcaption className="mt-3 px-1 text-center text-xs font-medium text-muted-foreground">
                  Hi, that's me — teaching critical thinking to a room full of curious kids.
                </figcaption>
              </figure>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
