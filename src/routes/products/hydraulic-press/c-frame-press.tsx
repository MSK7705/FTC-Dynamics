import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { ArrowRightCircle, Maximize, Activity } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-press/c-frame-press")({
  component: CFramePressPage,
  head: () => ({
    meta: [{ title: "C-Frame Hydraulic Press | Fluidtec Controls" }],
  }),
});

function CFramePressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Maximize className="w-4 h-4" /> Open-Gap Design
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            C-Frame <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Compact, versatile, and easily accessible from three sides. The ideal choice for stamping, riveting, punching, and assembly operations where space and speed are critical.
          </p>
        </section>

        <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Space-Saving & Accessible</h2>
            <p className="text-muted-foreground text-lg mb-8">
              The C-Frame (or gap-frame) press is characterized by its unique "C" shape, which allows unobstructed access to the die area from the front and both sides. This makes it incredibly efficient for loading and unloading complex parts.
            </p>
            <ul className="space-y-4">
              {["Compact footprint perfect for smaller factory floors.", "Rapid approach and return speeds for high-volume production.", "Highly rigid frame design to minimize angular deflection.", "Easily integrated with automated feeding systems."].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <ArrowRightCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted/20 border border-border/50 flex items-center justify-center">
            <Activity className="w-16 h-16 text-muted-foreground/30 absolute" />
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold z-10 relative">C-Frame Press Showcase</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
