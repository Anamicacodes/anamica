import { Camera, MessageCircle, Sparkles } from "lucide-react";
import { brandWork, photos, whatsappUrl } from "@/data/portfolio";
import { Reveal, Tilt } from "./ui";

const roles = ["Model", "Brand Face", "UGC", "Event Promotion"];

export function BrandCollabs() {
  return (
    <section id="collaborate" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 size-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-violet), transparent 65%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Tilt max={5}>
            <figure className="relative rotate-1 overflow-hidden rounded-[2rem] transition-transform duration-300 hover:rotate-0">
              <img
                src={photos.portrait}
                alt="Anamica at a promotional shoot"
                loading="lazy"
                className="h-[24rem] w-full object-cover sm:h-[30rem]"
              />
              <figcaption className="glass absolute bottom-3 left-3 right-3 rounded-2xl px-4 py-3 text-xs font-semibold text-foreground">
                Available for collaborations · {new Date().getFullYear()}
              </figcaption>
            </figure>
          </Tilt>
        </Reveal>

        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Brand collaborations
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Available for brand collaborations
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="font-display text-sm font-bold text-foreground/90 transition-colors hover:text-primary"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Brands, startups, cafés, clothing labels and event companies — I shoot, host and
              represent.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {brandWork.map((w) => (
                <li
                  key={w}
                  className="group flex items-center gap-3 text-sm text-foreground/90"
                >
                  <Camera
                    className="size-4 shrink-0 text-coral transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Discuss a collaboration
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
