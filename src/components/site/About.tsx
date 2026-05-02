import { motion } from "framer-motion";
import { CheckCircle2, Award, Factory, Shield } from "lucide-react";

const features = [
  { icon: Award, title: "20+ Years Experience", desc: "Trusted hydraulic engineering since 2002." },
  { icon: Factory, title: "In-House Manufacturing", desc: "End-to-end production and quality control." },
  { icon: Shield, title: "ISO Quality Standards", desc: "Built to industrial-grade reliability." },
  { icon: CheckCircle2, title: "Pan-India Service", desc: "Installation, support & spares nationwide." },
];

export function About() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Welcome to</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Fluidtec <span className="text-gradient-primary">Controls</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Incepted in the year 2002, Fluidtec Controls is a manufacturer, supplier, distributor,
            service provider and trader of a qualitative assortment of Hydraulic Power Packs,
            Cylinders and Pumps. Our offered range includes Hydraulic Power Packs, Hydraulic Presses
            and Hydraulic Cylinders engineered for the most demanding industrial environments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We combine precision craftsmanship with rigorous quality control to deliver hydraulic
            systems that perform — every cycle, every shift, every year.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}