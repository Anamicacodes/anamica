import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Award, X, ZoomIn, CalendarDays } from "lucide-react";
import { certificates, certCategories, skillGroups, type Certificate } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

function CertModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
      className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass w-full max-w-lg rounded-3xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <Award className="size-8 shrink-0 text-primary" aria-hidden="true" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate details"
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <X className="size-5" />
          </button>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">{cert.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
        {cert.date && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {cert.date}
          </p>
        )}
        {cert.detail && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
        )}
        {cert.maskedId && (
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Credential: {cert.maskedId}
          </p>
        )}
        {/* TODO: embed certificate PDF/image preview here once files are added to /public/certificates/ */}
        <div className="mt-6 grid h-40 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground">
          Certificate preview available in original document
        </div>
      </div>
    </div>
  );
}

export function Certificates() {
  const [category, setCategory] = useState<(typeof certCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () =>
      certificates.filter(
        (c) =>
          (category === "All" || c.category === category) &&
          c.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [category, query],
  );

  return (
    <section id="certificates" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 size-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-coral), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Proof of curiosity"
          description={`${certificates.length} certificates across development, AI, hackathons, leadership, and community work. Credential IDs are masked for privacy.`}
        />

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Languages I code in
          </span>
          {skillGroups[0].skills.map((lang) => (
            <span
              key={lang}
              className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {lang}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-md">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certificates…"
              aria-label="Search certificates by title"
              className="glass w-full rounded-2xl py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter certificates by category">
            {certCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i, 8) * 60}>
              <article className="glass glow-card flex h-full flex-col rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <Award className="size-6 shrink-0 text-accent" aria-hidden="true" />
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
                    {c.category}
                  </span>
                </div>
                <h3 className="mt-3 flex-1 font-display text-sm font-bold leading-snug text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.issuer}</p>
                {c.date && (
                  <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <CalendarDays className="size-3" aria-hidden="true" />
                    {c.date}
                  </p>
                )}
                {c.maskedId && (
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground">{c.maskedId}</p>
                )}
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ZoomIn className="size-3.5" aria-hidden="true" />
                  View certificate
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No certificates match “{query}” in {category}.
          </p>
        )}
      </div>

      {active && <CertModal cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
