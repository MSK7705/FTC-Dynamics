import { motion } from "framer-motion";

export function MapLocation() {
  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border border-border/60 shadow-elegant bg-card/50 backdrop-blur-sm p-2 md:p-4"
      >
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden relative bg-muted">
          <iframe
            title="Fluidtec Controls Location"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=13.0989747,80.1627976&z=16&output=embed"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
