import { motion } from "framer-motion";
import { Car, Cpu, Drill, Factory, Hammer, Plane, Ship, Wrench } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive" },
  { icon: Plane, name: "Aerospace" },
  { icon: Ship, name: "Marine" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Hammer, name: "Steel & Forging" },
  { icon: Cpu, name: "Electronics" },
  { icon: Drill, name: "Construction" },
  { icon: Wrench, name: "Heavy Engineering" },
];

export function Industries() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Trusted Across</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Industries We <span className="text-gradient-primary">Serve</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card transition-all flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all">
                <it.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-semibold text-sm">{it.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}