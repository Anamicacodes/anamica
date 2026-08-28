import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Images, ArrowRight } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-2", "rotate-1", "-rotate-1"];
const heights = ["h-56", "h-72", "h-64", "h-52", "h-68", "h-60", "h-72", "h-56"];

interface Card {
  key: string;
  label: string;
  category: string;
  date?: string;
  src?: string;
  photos: GalleryItem[];
  count: number;
}

const toCard = (g: GalleryItem): Card => ({
  key: g.label,
  label: g.label,
  category: g.category,
  date: g.date,
  src: g.src,
  photos: [g],
  count: 1,
});

export function Gallery({ full = false }: { full?: boolean }) {
  const [category, setCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<{ photos: GalleryItem[]; index: number } | null>(null);

  const cards = useMemo<Card[]>(() => {
    if (full) {
      return galleryItems
        .filter((g) => category === "All" || g.category === category)
        .map(toCard);
    }
    // Preview: collapse the CDP set into a single album card, keep 8 cards total.
    const cdp = galleryItems.filter((g) => g.category === "CDP");
    const rest = galleryItems.filter((g) => g.category !== "CDP");
    const album: Card = {
      key: "cdp-album",
      label: "Community Development Project",
      category: "CDP",
      date: cdp[0]?.date,
      src: cdp[0]?.src,
      photos: cdp,
      count: cdp.length,
    };
    return [album, ...rest.map(toCard)].slice(0, 8);
  }, [full, category]);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((l) =>
        l ? { ...l, index: (l.index + dir + l.photos.length) % l.photos.length } : l,
      ),
    [],
  );

  useEffect(() => {
    if (!lightbox) return;
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
  }, [lightbox, close, step]);

  const active = lightbox ? lightbox.photos[lightbox.index] : null;

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={full ? "The full album" : "Moments & milestones"}
          description="Community Development Project sessions, stages, hackathon floors, workshops and campus days."
        />

        {full && (
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
        )}

        {/* Masonry via CSS columns; playful polaroid tilt on each card */}
        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={Math.min(i, 6) * 70} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox({ photos: c.photos, index: 0 })}
                aria-label={c.count > 1 ? `Open ${c.label} album (${c.count} photos)` : `Open ${c.label}`}
                className={`glass group block w-full overflow-hidden rounded-2xl p-2 pb-3 text-left transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.04] ${rotations[i % rotations.length]}`}
              >
                <div className="relative">
                  {c.src ? (
                    <img
                      src={c.src}
                      alt={c.label}
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
                  {c.count > 1 && (
                    <span className="glass absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold text-foreground">
                      <Images className="size-3.5" aria-hidden="true" />
                      {c.count} photos
                    </span>
                  )}
                </div>
                <p className="mt-2.5 px-1.5 text-xs font-semibold text-foreground">{c.label}</p>
                <p className="px-1.5 text-[11px] text-muted-foreground">
                  {c.category}
                  {c.date ? ` · ${c.date}` : ""}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        {!full && (
          <Reveal className="mt-10 flex justify-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Open full gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>

      {/* Lightbox */}
      {active && lightbox && (
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
              <p className="px-2 font-display text-sm font-bold text-foreground">{active.label}</p>
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
                {lightbox.photos.length > 1
                  ? ` · ${lightbox.index + 1}/${lightbox.photos.length}`
                  : ""}
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
            {lightbox.photos.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {lightbox.photos.map((p, i) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setLightbox({ photos: lightbox.photos, index: i })}
                    aria-label={`Show ${p.label}`}
                    className={`size-14 shrink-0 overflow-hidden rounded-lg border transition-opacity ${
                      i === lightbox.index ? "border-accent" : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    {p.src ? (
                      <img src={p.src} alt="" className="size-full object-cover" />
                    ) : (
                      <span className="grid size-full place-items-center bg-secondary/60">
                        <Camera className="size-4 text-muted-foreground" aria-hidden="true" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
