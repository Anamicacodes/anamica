import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-2", "rotate-1", "-rotate-1"];
const heights = ["h-56", "h-72", "h-64", "h-52", "h-68", "h-60", "h-72", "h-56"];

export function Gallery() {
  const [category, setCategory] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => galleryItems.filter((g) => category === "All" || g.category === category),
    [category],
  );

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const active = index !== null ? filtered[index] : null;

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & milestones"
          description="Stages, hackathon floors, workshops, and community days — photos coming soon."
        />

        <Reveal className="mt-12 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                category === c
                  ? "bg-accent text-accent-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {/* Masonry via CSS columns; playful polaroid tilt on each card */}
        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {filtered.map((g, i) => {
            const globalIndex = filtered.indexOf(g);
            return (
              <Reveal key={g.label} delay={Math.min(i, 6) * 70} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setIndex(globalIndex)}
                  aria-label={`Open ${g.label}`}
                  className={`glass group block w-full overflow-hidden rounded-2xl p-2 pb-3 text-left transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.04] ${rotations[i % rotations.length]}`}
                >
                  {g.src ? (
                    <img
                      src={g.src}
                      alt={g.label}
                      loading="lazy"
                      className={`w-full rounded-xl object-cover ${heights[i % heights.length]}`}
                    />
                  ) : (
                    <div
                      className={`grid w-full place-items-center rounded-xl bg-secondary/60 ${heights[i % heights.length]}`}
                    >
                      <Camera
                        className="size-8 text-muted-foreground transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <p className="mt-2.5 px-1.5 text-xs font-semibold text-foreground">{g.label}</p>
                  <p className="px-1.5 text-[11px] text-muted-foreground">
                    {g.category}
                    {g.date ? ` · ${g.date}` : ""}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
          onClick={close}
        >
          <div
            className="glass w-full max-w-2xl rounded-3xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="px-2 font-display text-sm font-bold text-foreground">
                {active.label}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close lightbox"
                className="grid size-10 place-items-center rounded-xl border border-border text-foreground hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </div>
            {active.src ? (
              <img
                src={active.src}
                alt={active.label}
                className="mt-3 max-h-[60vh] w-full rounded-2xl object-contain"
              />
            ) : (
              <div className="mt-3 grid h-72 place-items-center rounded-2xl bg-secondary/60">
                <Camera className="size-12 text-muted-foreground" aria-hidden="true" />
              </div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="grid size-11 place-items-center rounded-xl border border-border text-foreground hover:bg-secondary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <p className="text-xs text-muted-foreground">
                {active.category}
                {active.date ? ` · ${active.date}` : ""}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="grid size-11 place-items-center rounded-xl border border-border text-foreground hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
