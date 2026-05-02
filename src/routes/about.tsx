import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { WhatsAppFab } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Fluidtec Controls" },
      { name: "description", content: "20+ years of engineering precision hydraulic systems trusted by Indian industries." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            About <span className="text-gradient-primary">Fluidtec</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Engineering hydraulic excellence since 2002.
          </p>
        </section>
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}