import { Cpu, Lightbulb, Mic, Users } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading, Tilt } from "./ui";

const brings = [
  {
    Icon: Cpu,
    title: "Technical curiosity",
    text: "Always exploring how things work — from C fundamentals to AI tools.",
  },
  {
    Icon: Lightbulb,
    title: "Creative problem-solving",
    text: "Turning ideas into practical, working solutions through projects and hackathons.",
  },
  {
    Icon: Mic,
    title: "Communication & public speaking",
    text: "Comfortable on stage — anchoring, presenting, and connecting with audiences.",
  },
  {
    Icon: Users,
    title: "Community & event leadership",
    text: "Bringing people together through events, outreach, and student initiatives.",
  },
];

const facts = [
  { label: "Education", value: "B.Tech CSE, LPU" },
  { label: "Class of", value: profile.graduation },
  { label: "CGPA", value: profile.cgpa },
  { label: "Pronouns", value: profile.pronouns },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Curious by default, driven by people"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a first-year B.Tech Computer Science and Engineering student at{" "}
              <span className="font-semibold text-foreground">
                Lovely Professional University
              </span>
              , passionate about transforming ideas into meaningful digital experiences.
            </p>
            <p>
              My world sits at the intersection of technology, AI, events, and community
              growth. I learn best by doing — through practical projects, hackathons,
              workshops, and student initiatives that push me beyond the classroom.
            </p>
            <p>
              Off the keyboard, you'll find me on stage — anchoring events, speaking to
              audiences, and collaborating with communities. I believe technology matters
              most when it connects with real-world needs and real people.
            </p>

            <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="glass rounded-2xl p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-bold text-foreground">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Pocket notes — small personal stickers, no invented facts */}
            <div className="flex flex-wrap gap-2 pt-2" aria-label="A few personal notes">
              {[
                "she/her",
                "happiest on a stage with a mic",
                "hackathon floors > quiet weekends",
                "forever collecting certificates & stories",
              ].map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-dashed border-accent/50 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {brings.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <Tilt className="h-full">
                  <div className="glass glow-card h-full rounded-2xl p-5">
                    <b.Icon className="size-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base font-bold text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
