import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Fluidtec Controls" },
      { name: "description", content: "Get in touch with Fluidtec Controls for hydraulic press, power pack and cylinder enquiries." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold">
            Get in <span className="text-gradient-primary">Touch</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project — our engineers will get back within one business day.
          </p>
        </section>

        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 98417 27799", href: "tel:+919841727799" },
              { icon: Mail, label: "Email", value: "info@fluidteccontrols.com", href: "mailto:info@fluidteccontrols.com" },
              { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-semibold mt-1">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-elegant space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {sent && (
              <p className="text-sm text-primary">Thanks! We'll be in touch shortly.</p>
            )}
          </motion.form>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}