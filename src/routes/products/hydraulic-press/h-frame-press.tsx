import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { ShieldAlert, Layers, Hammer } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-press/h-frame-press")({
  component: HFramePressPage,
  head: () => ({
    meta: [{ title: "H-Frame Hydraulic Press | Fluidtec Controls" }],
  }),
});

function HFramePressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Hammer className="w-4 h-4" /> Heavy Duty Forming
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            H-Frame <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Uncompromising strength and zero deflection. Designed for heavy tonnage applications, molding, and large-scale metal forming operations.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: ShieldAlert,
              title: "Closed-Frame Rigidity",
              desc: "The H-frame design ensures that pressure is evenly distributed, completely eliminating the deflection issues found in open-gap presses under heavy loads."
            },
            {
              icon: Layers,
              title: "High Tonnage Capacity",
              desc: "Built to deliver massive force, making it the perfect solution for deep drawing, coining, and compressing tough materials."
            },
            {
              icon: Hammer,
              title: "Versatile Bed Adjustments",
              desc: "Features highly adjustable daylights and bed configurations to accommodate tooling of various heights and complex molds."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>
        
        <section className="container mx-auto px-6">
          <div className="w-full h-80 rounded-3xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center">
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">H-Frame Tech Specs & Diagram Placeholder</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
