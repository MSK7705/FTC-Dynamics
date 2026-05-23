import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { CheckCircle2, Settings, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-press/")({
  component: HydraulicPressPage,
  head: () => ({
    meta: [{ title: "Custom Hydraulic Presses | Fluidtec Controls" }],
  }),
});

function HydraulicPressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Heavy Duty Equipment
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Custom <span className="text-gradient-primary">Hydraulic Presses</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Engineered for high-force applications. Our comprehensive range of hydraulic presses delivers unmatched precision, safety, and reliability for your manufacturing needs.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-muted/30 border border-border/50 flex items-center justify-center group">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50"></div>
             <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold z-10">Hydraulic Press Range Image</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Presses?</h2>
            <div className="space-y-6">
              {[
                { icon: Shield, title: "Robust Construction", desc: "Built with high-grade steel frames to withstand extreme operational stresses without deflection." },
                { icon: Settings, title: "Customizable Tonnage", desc: "Available in various capacities tailored specifically to your deep drawing, stamping, or forming needs." },
                { icon: Zap, title: "Energy Efficient", desc: "Advanced hydraulic circuits minimize energy consumption while maximizing output force." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
