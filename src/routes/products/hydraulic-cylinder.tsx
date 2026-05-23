import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { Cylinder, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-cylinder")({
  component: HydraulicCylinderPage,
  head: () => ({
    meta: [{ title: "Industrial Hydraulic Cylinders | Fluidtec Controls" }],
  }),
});

function HydraulicCylinderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Cylinder className="w-4 h-4" /> Linear Actuation
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Hydraulic <span className="text-gradient-primary">Cylinders</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Custom-built tie-rod, welded, and specialized hydraulic cylinders providing immense push/pull force for industrial machinery.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="bg-muted/20 border border-border/50 rounded-3xl aspect-[4/5] flex items-center justify-center p-8 text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">3D Render of Hydraulic Cylinder components (Bore, Rod, Seals)</p>
             </div>
             
             <div>
                <h2 className="text-3xl font-bold mb-6">Built to Outlast</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our hydraulic cylinders are manufactured using precision-honed tubes and hard-chrome plated rods. Equipped with world-class sealing systems, they guarantee leak-free performance even under high-pressure spikes and abrasive environments.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Key Specifications & Features</h3>
                <ul className="space-y-4">
                  {[
                    "Custom bore and stroke lengths.",
                    "High-pressure polyurethane sealing systems.",
                    "Hard-chrome plated, induction hardened piston rods.",
                    "Cushioning options for smooth deceleration.",
                    "Various mounting styles (Clevis, Trunnion, Flange)."
                  ].map((spec, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="text-foreground/80">{spec}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
