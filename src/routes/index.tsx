import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Studio } from "@/components/portfolio/Studio";
import { TornBand } from "@/components/portfolio/TornBand";
import { Work } from "@/components/portfolio/Work";

const title = "Kuyilraj — Designer & Illustrator Portfolio";
const description =
  "Portfolio of Kuyilraj, a graphic designer and illustrator working on brand identity, packaging, editorial and motion design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
          name: "Kuyilraj",
          jobTitle: "Graphic Designer & Illustrator",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <TornBand />
      <Studio />
      <Work />
      <Contact />
    </main>
  );
}
