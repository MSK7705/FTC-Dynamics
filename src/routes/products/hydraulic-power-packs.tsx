import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { BatteryCharging, Droplet, ThermometerSnowflake } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-power-packs")({
  component: HydraulicPowerPacksPage,
  head: () => ({
    meta: [{ title: "Hydraulic Power Packs | Fluidtec Controls" }],
  }),
});

function HydraulicPowerPacksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BatteryCharging className="w-4 h-4" /> Power Generation
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Hydraulic <span className="text-gradient-primary">Power Packs</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Custom engineered Hydraulic Power Units (HPUs) designed to provide reliable, efficient, and continuous fluid power to your machinery.
          </p>
        </section>

        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 bg-card border border-border/50 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6">The Heart of Your System</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our power packs are built with premium quality pumps, motors, and integrated manifold blocks. Designed with serviceability in mind, they feature logical layouts for easy access to filters, breathers, and valves, ensuring maintenance downtime is kept to an absolute minimum.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium border border-border/50">Low Noise Emissions</span>
                <span className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium border border-border/50">Compact Designs</span>
                <span className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium border border-border/50">Energy Efficient</span>
              </div>
            </div>
            <div className="col-span-1 bg-muted/30 border border-border/50 rounded-3xl flex items-center justify-center min-h-[300px]">
               <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold px-6 text-center">HPU System Image Placeholder</p>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Superior Filtration</h3>
                <p className="text-muted-foreground">High-capacity return line and pressure line filters keep the hydraulic fluid clean, significantly extending the life of pumps and valves.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ThermometerSnowflake className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Integrated Cooling</h3>
                <p className="text-muted-foreground">Optional air or water heat exchangers with thermostatic controls to maintain optimal fluid viscosity during continuous operation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
