import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Gallery } from "@/components/portfolio/Gallery";
import { Footer } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/ui";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Anamica" },
      {
        name: "description",
        content:
          "Every photo from Anamica's Community Development Project, hackathons, stages, workshops and campus days — filterable by category.",
      },
      { property: "og:title", content: "Photo Gallery | Anamica" },
      {
        property: "og:description",
        content:
          "Community Development Project sessions, hackathons, stages, workshops and campus days.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
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
        <Gallery full />
      </main>
      <Footer />
    </div>
  );
}
