import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/FilmSite/Hero";
import { Story } from "@/components/FilmSite/Story";
import { Films } from "@/components/FilmSite/Films";
import { WhyUs } from "@/components/FilmSite/WhyUs";
import { Process } from "@/components/FilmSite/Process";
import { Testimonials } from "@/components/FilmSite/Testimonials";
import { FinalCta } from "@/components/FilmSite/FinalCta";
import { Footer } from "@/components/FilmSite/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "pellikatha.films — Every Pelli, a Katha. Every Katha, a Film." },
      {
        name: "description",
        content:
          "A luxury wedding film studio. Cinematic, emotional, timeless — we craft feature-worthy films of your wedding story.",
      },
      { property: "og:title", content: "pellikatha.films" },
      {
        property: "og:description",
        content: "Every Pelli, a Katha. Every Katha, a Film. Cinematic wedding films, crafted like features.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-[color:var(--ink)] text-[color:var(--cream)] film-grain overflow-x-hidden">
      <Hero />
      <Story />
      <Films />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
