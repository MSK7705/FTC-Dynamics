import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { Crosshair, BoxSelect } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-press/pillar-press")({
  component: PillarPressPage,
  head: () => ({
    meta: [{ title: "4-Pillar Hydraulic Press | Fluidtec Controls" }],
  }),
});

function PillarPressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Crosshair className="w-4 h-4" /> Extreme Precision
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            4-Pillar <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Engineered with precision-guided columns for operations requiring perfect parallelism and absolute accuracy across large bed areas.
          </p>
        </section>

        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-card to-background border border-border/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flawless Parallelism</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our 4-pillar (four-column) hydraulic presses provide superior slide guidance. The heavy-duty hard-chrome plated columns ensure that the moving platen remains perfectly parallel to the bed, even under off-center loading conditions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background/50 backdrop-blur border border-border/50 p-5 rounded-xl">
                  <BoxSelect className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Large Bed Area</h4>
                  <p className="text-sm text-muted-foreground">Perfect for accommodating oversized dies and multiple tooling setups.</p>
                </div>
                <div className="bg-background/50 backdrop-blur border border-border/50 p-5 rounded-xl">
                  <Crosshair className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">High Accuracy</h4>
                  <p className="text-sm text-muted-foreground">Minimal friction and wear guarantees consistent long-term precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-muted/30 border-l border-border/50 flex items-center justify-center min-h-[400px]">
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">4-Pillar Press Gallery Placeholder</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
