import { Github, Linkedin, Mail, Download, ArrowDown, User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Doodle, Monogram, Reveal, Tilt, useMagnetic } from "./ui";

const floatingTags = [
  { label: "Code", className: "left-[6%] top-[18%]", delay: "0s", rot: "-6deg" },
  { label: "AI", className: "right-[8%] top-[24%]", delay: "1.2s", rot: "5deg" },
  { label: "Events", className: "left-[10%] bottom-[22%]", delay: "2s", rot: "4deg" },
  { label: "Community", className: "right-[6%] bottom-[18%]", delay: "0.6s", rot: "-5deg" },
];

export function Hero() {
  const primaryCta = useMagnetic();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Backdrop: grid + glows */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-blue), transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 size-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-coral), transparent 65%)" }}
      />

      {/* Floating tags */}
      {floatingTags.map((t) => (
        <span
          key={t.label}
          aria-hidden="true"
          className={`glass animate-float-slow absolute hidden rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground lg:block ${t.className}`}
          style={
            { animationDelay: t.delay, "--float-rot": t.rot } as React.CSSProperties
          }
        >
          {t.label}
        </span>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="relative mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Anamica.</span>
              <Doodle
                kind="sparkle"
                className="animate-pulse-glow absolute -right-8 -top-4 size-7 text-coral sm:-right-12"
              />
            </h1>
            <Doodle kind="squiggle" className="mt-3 h-4 w-40 text-primary/70" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 font-display text-xl font-medium text-foreground/90 sm:text-2xl">
              I build, communicate, and create meaningful digital experiences.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A first-year Computer Science student at Lovely Professional University,
              exploring software development, AI, events, public speaking, and community
              building — learning by doing, one project and one stage at a time.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                ref={primaryCta}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-[0_0_40px_-8px_var(--glow-blue)]"
              >
                View my work
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              {profile.cvUrl ? (
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download CV
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-dashed border-border px-7 py-3.5 font-semibold text-muted-foreground"
                  title="CV file coming soon"
                >
                  <Download className="size-4" aria-hidden="true" />
                  CV coming soon
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-8 flex items-center gap-3">
              {[
                { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: profile.github, label: "GitHub", Icon: Github },
                { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid size-11 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
              <span className="ml-2 hidden text-xs text-muted-foreground sm:block">
                {profile.headline.split("|").slice(0, 2).join("|").trim()}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Visual: rotating monogram ring + profile photo placeholder */}
        <Reveal delay={250} className="relative mx-auto">
          <Tilt max={10}>
          <div className="relative grid size-72 place-items-center sm:size-80">
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="animate-spin-slower absolute inset-0 size-full opacity-70"
            >
              <defs>
                <path id="circlePath" d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
              </defs>
              <text className="fill-muted-foreground" style={{ fontSize: 7.5, letterSpacing: 2.5 }}>
                <textPath href="#circlePath">
                  CODE · AI · EVENTS · COMMUNITY · SPEAK · BUILD ·
                </textPath>
              </text>
            </svg>
            {/* TODO: replace this placeholder with Anamica's uploaded profile photo */}
            <div className="glass glow-card grid size-52 place-items-center rounded-full sm:size-60">
              <div className="grid size-44 place-items-center rounded-full border border-dashed border-border sm:size-52">
                <div className="text-center">
                  <User className="mx-auto size-10 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-2 px-6 text-xs text-muted-foreground">
                    Profile photo placeholder
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Monogram size="md" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
