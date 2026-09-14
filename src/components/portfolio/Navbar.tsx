import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { moreLinks, navLinks, whatsappUrl } from "@/data/portfolio";
import { Monogram } from "./ui";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "mx-3 py-2 sm:mx-auto" : "mx-3 py-3 sm:mx-auto"
        }`}
      >
        <a href="/#home" className="flex items-center gap-3" aria-label="Anamica — home">
          <Monogram size="sm" />
          <span
            className={`font-display font-bold tracking-tight text-foreground transition-all ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            Anamica
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Desktop "More" menu for secondary destinations */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-label="More sections"
              className="grid size-10 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
            >
              {moreOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
            <div
              className={`glass absolute right-0 top-12 w-60 origin-top-right rounded-2xl p-2 transition-all duration-200 ${
                moreOpen
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                More
              </p>
              <ul className="grid gap-0.5">
                {moreLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMoreOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ThemeToggle />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            Let's connect
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-3 mt-2 rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Let's connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
