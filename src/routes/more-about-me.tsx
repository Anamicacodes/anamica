import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Music4, PenLine, Palette, Trophy, Heart, Sparkles } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Contact";
import { CursorGlow, Reveal, SectionHeading, Tilt } from "@/components/portfolio/ui";

export const Route = createFileRoute("/more-about-me")({
  head: () => ({
    meta: [
      { title: "More About Me | Anamica — Dance, Writing & Everyday Life" },
      {
        name: "description",
        content:
          "Beyond code: 12 years of Kathak, Bharatanatyam and classical dance, stage performances and prizes, spiritual poetry, sketching, and the little things that make up Anamica's personal life.",
      },
      { property: "og:title", content: "More About Me | Anamica" },
      {
        property: "og:description",
        content:
          "Dance, poetry, painting and the personal side of Anamica — 12 years of classical dance, state-level wins, and quiet creative habits.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/more-about-me" }],
  }),
  component: MoreAboutMePage,
});

const hobbies = [
  {
    Icon: Music4,
    title: "Dance — 12 years of it",
    lead: "Kathak, Bharatanatyam and classical dance through my whole school life.",
    points: [
      "Twelve years of learning, practising and performing on stage.",
      "Won prizes at school competitions across those years in Kathak, Bharatanatyam and classical dance.",
      "Performed Luddi at my school's annual function in my final years of school.",
      "1st position in the inter-hostel state representation competition, where we represented Punjab.",
    ],
  },
  {
    Icon: PenLine,
    title: "Writing",
    lead: "Nothing major — just poems that show up when a thought needs somewhere to go.",
    points: [
      "Mostly spiritual and self-expressive poetry.",
      "Written for myself first; shared only when a piece feels honest.",
    ],
  },
  {
    Icon: Palette,
    title: "Painting & sketching",
    lead: "My favourite way to switch off — I just need to make time for it more often.",
    points: [
      "Pencil sketching and painting whenever a free evening allows.",
      "Currently my most-missed hobby, and the one I keep coming back to.",
    ],
  },
];

const personal = [
  {
    Icon: Trophy,
    title: "Stage is home",
    text: "Years of dance made stages feel familiar long before I ever anchored an event or spoke at one.",
  },
  {
    Icon: Heart,
    title: "Rooted in Punjab",
    text: "Ludhiana girl — folk beats like Luddi and Punjabi warmth are part of how I show up anywhere.",
  },
  {
    Icon: Sparkles,
    title: "Learning by doing",
    text: "Whether it's a classical composition, a poem or a project, I learn by starting and refining.",
  },
];

function MoreAboutMePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to portfolio
          </Link>
        </div>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="More about me"
              title="The parts of me that aren't on a résumé"
            />

            <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              <p>
                Before laptops and hackathons, there was ghungroo, chalk-dust stages and school
                auditoriums. A lot of who I am today — the discipline, the comfort with an
                audience, the love for expression — came from dance, words and colour.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {hobbies.map((h, i) => (
                <Reveal key={h.title} delay={i * 90}>
                  <Tilt className="h-full" max={6}>
                    <article className="glass glow-card h-full rounded-2xl p-6">
                      <h.Icon className="size-6 text-primary" aria-hidden="true" />
                      <h2 className="mt-4 font-display text-lg font-bold text-foreground">
                        {h.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-accent-foreground">{h.lead}</p>
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                        {h.points.map((p) => (
                          <li key={p} className="flex gap-2.5">
                            <span
                              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden="true"
                            />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Tilt>
                </Reveal>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground">
                A little personal
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {personal.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="glass h-full rounded-2xl p-5">
                      <p.Icon className="size-5 text-accent" aria-hidden="true" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-14">
              <div className="glass rounded-2xl p-6 text-center">
                <p className="font-display text-lg font-bold text-foreground">
                  Currently on my wish-list
                </p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Getting back to regular riyaaz, finishing a sketchbook end to end, and writing
                  one poem a month — however small.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
