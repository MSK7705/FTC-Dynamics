import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { Blocks, Waypoints, Droplets } from "lucide-react";

export const Route = createFileRoute("/products/hydraulic-manifold-blocks")({
  component: HydraulicManifoldBlocksPage,
  head: () => ({
    meta: [{ title: "Hydraulic Manifold Blocks | Fluidtec Controls" }],
  }),
});

function HydraulicManifoldBlocksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Blocks className="w-4 h-4" /> Integrated Circuits
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Hydraulic <span className="text-gradient-primary">Manifold Blocks</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Precision CNC-machined blocks that consolidate complex hydraulic circuits, reducing plumbing, eliminating leaks, and saving space.
          </p>
        </section>

        <section className="container mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-muted/20 border border-border/50 flex items-center justify-center group order-2 lg:order-1">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
             <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold z-10 text-center px-8">CNC Machined Manifold Block 3D View Placeholder</p>
           </div>
           
           <div className="order-1 lg:order-2">
             <h2 className="text-3xl md:text-4xl font-bold mb-8">Simplify Your Hydraulics</h2>
             
             <div className="space-y-8">
               <div className="flex gap-5">
                 <div className="mt-1">
                   <Waypoints className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">Reduced Plumbing</h3>
                   <p className="text-muted-foreground leading-relaxed">By integrating multiple valves into a single solid block, we drastically reduce the need for external hoses and fittings, cutting down assembly time and failure points.</p>
                 </div>
               </div>
               
               <div className="flex gap-5">
                 <div className="mt-1">
                   <Droplets className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">Zero Leakage</h3>
                   <p className="text-muted-foreground leading-relaxed">Fewer connections mean fewer opportunities for hydraulic fluid leaks, resulting in a cleaner, safer, and more environmentally friendly workplace.</p>
                 </div>
               </div>
               
               <div className="flex gap-5">
                 <div className="mt-1">
                   <Blocks className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">Compact & Modular</h3>
                   <p className="text-muted-foreground leading-relaxed">Our custom-designed manifolds optimize space and allow for cartridge valves and cetop interfaces to be arranged logically for superior performance.</p>
                 </div>
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
