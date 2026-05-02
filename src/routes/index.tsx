import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";
import { WhatsAppFab } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fluidtec Controls — Hydraulic Presses, Power Packs & Cylinders" },
      {
        name: "description",
        content:
          "Fluidtec Controls manufactures high-precision hydraulic presses, power packs and cylinders for industrial applications across India since 2002.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Industries />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
