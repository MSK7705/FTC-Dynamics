import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-hero border border-primary/30 p-12 md:p-16 text-center shadow-elegant"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/30 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Ready to power your <span className="text-gradient-primary">next project?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Talk to our engineers about custom hydraulic solutions tailored to your application.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919841727799"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-card/50 backdrop-blur-sm font-semibold hover:bg-card transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 98417 27799
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}