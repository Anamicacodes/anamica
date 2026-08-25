import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, Heart } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

type Status = "idle" | "error" | "ready";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();

    if (!name || !email || !body) {
      setStatus("error");
      setMessage("Please fill in all fields before sending.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("That email address doesn't look right — mind checking it?");
      return;
    }
    // No backend configured: open the visitor's mail client with a prefilled draft.
    const subject = encodeURIComponent(`Portfolio hello from ${name}`);
    const mailBody = encodeURIComponent(`${body}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${mailBody}`;
    setStatus("ready");
    setMessage("Opening your email app with a ready-to-send draft.");
  }

  return (
    <section id="contact" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-96 opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(to top, var(--glow-violet), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful."
          description="Whether you're a recruiter, a collaborator, an event organizer, or a student community — I'd love to hear from you."
        />

        <Reveal className="mt-12">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </div>

            <div className="my-8 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                or write a note
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea, event, or opportunity…"
                  className="w-full resize-y rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div aria-live="polite">
                {status === "error" && (
                  <p className="text-sm font-medium text-destructive">{message}</p>
                )}
                {status === "ready" && (
                  <p className="text-sm font-medium text-primary">{message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" aria-hidden="true" />
                Send via email
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-display text-sm font-bold text-foreground">Anamica</p>
        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          Made with <Heart className="size-3.5 text-coral" aria-label="love" /> curiosity,
          chai, and a lot of learning — © {new Date().getFullYear()}
        </p>
        <a href="#home" className="text-xs font-semibold text-primary hover:underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
