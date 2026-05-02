import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Cog className="w-6 h-6 text-primary-foreground animate-spin [animation-duration:8s]" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight">Fluidtec</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Controls</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-base font-medium text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}