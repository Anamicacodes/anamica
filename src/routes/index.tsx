import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Gallery } from "@/components/portfolio/Gallery";
import { Journey } from "@/components/portfolio/Journey";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anamica | Computer Science Student, Developer & Community Builder" },
      {
        name: "description",
        content:
          "Explore Anamica's portfolio featuring web development projects, AI learning, hackathons, public speaking, event experiences, community initiatives, and certifications.",
      },
      {
        property: "og:title",
        content: "Anamica | Computer Science Student, Developer & Community Builder",
      },
      {
        property: "og:description",
        content:
          "Web development projects, AI learning, hackathons, public speaking, and community initiatives — Anamica's portfolio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anamica",
          email: "mailto:anamicagupta246@gmail.com",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/ana2406/",
            "https://github.com/Anamicacodes",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Lovely Professional University",
          },
          address: { "@type": "PostalAddress", addressLocality: "Ludhiana", addressRegion: "Punjab", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Journey />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
