import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";
import { WhatsAppFab } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Hydraulic Presses, Power Packs, Cylinders | Fluidtec" },
      { name: "description", content: "Browse our range of hydraulic presses, power packs and cylinders engineered for industrial precision." },
    ],
  }),
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="container mx-auto px-6 text-center pb-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            Our <span className="text-gradient-primary">Products</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Industrial-grade hydraulic equipment built to perform.
          </p>
        </section>
        <Products />
        <Industries />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}