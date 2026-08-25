import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Certificates } from "@/components/portfolio/Certificates";
import { Footer } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/ui";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates | Anamica" },
      {
        name: "description",
        content:
          "All of Anamica's certificates across development, AI, hackathons, leadership, and community work — searchable and filterable.",
      },
      { property: "og:title", content: "Certificates | Anamica" },
      {
        property: "og:description",
        content:
          "Certificates across development, AI, hackathons, leadership, and community work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
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
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
