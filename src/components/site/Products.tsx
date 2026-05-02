import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import press from "@/assets/product-press.jpg";
import powerpack from "@/assets/product-powerpack.jpg";
import cylinder from "@/assets/product-cylinder.jpg";

const products = [
  { title: "Hydraulic Press", desc: "High-tonnage precision presses for forming, stamping and assembly.", img: press },
  { title: "Hydraulic Power Pack", desc: "Compact, efficient power units for diverse industrial applications.", img: powerpack },
  { title: "Hydraulic Cylinder", desc: "Robust cylinders engineered for high pressure and long service life.", img: cylinder },
];

export function Products() {
  return (
    <section className="relative py-28 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Range</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground">
            Engineered hydraulic equipment designed to deliver reliability, precision and power.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-border/60 bg-card hover:border-primary/40 transition-all hover:-translate-y-2 shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}