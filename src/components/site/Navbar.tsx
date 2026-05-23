import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cog, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SubItem = {
  label: string;
  to: string;
};

type DropdownItem = {
  label: string;
  to: string;
  subItems?: SubItem[];
};

type NavLink = {
  to: string;
  label: string;
  dropdown?: DropdownItem[];
};

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/products",
    label: "Products",
    dropdown: [
      {
        label: "Hydraulic press",
        to: "/products/hydraulic-press",
        subItems: [
          { label: "C-Frame Press", to: "/products/hydraulic-press/c-frame-press" },
          { label: "H-Frame Press", to: "/products/hydraulic-press/h-frame-press" },
          { label: "Pillar press", to: "/products/hydraulic-press/pillar-press" },
        ],
      },
      { label: "Hydraulic cylinder", to: "/products/hydraulic-cylinder" },
      { label: "Hydraulic power packs", to: "/products/hydraulic-power-packs" },
      { label: "Hydraulic Manifold blocks", to: "/products/hydraulic-manifold-blocks" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

function MobileNavDropdownItem({
  drop,
  setOpen,
}: {
  drop: DropdownItem;
  setOpen: (v: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!drop.subItems) {
    return (
      <Link
        to={drop.to}
        onClick={() => setOpen(false)}
        className="py-1.5 text-sm font-medium text-foreground/70 hover:text-primary"
      >
        {drop.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-1 px-1">
        <Link
          to={drop.to}
          onClick={() => setOpen(false)}
          className="hover:text-primary py-2 text-sm font-medium text-foreground/70"
        >
          {drop.label}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 -mr-2 text-foreground/70 flex items-center justify-center">
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 flex flex-col gap-1 border-l border-border/30 ml-2 mt-1"
          >
            {drop.subItems.map((sub) => (
              <Link
                key={sub.to}
                to={sub.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/60 hover:text-primary"
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavLink({
  l,
  setOpen,
}: {
  l: NavLink;
  setOpen: (v: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!l.dropdown) {
    return (
      <Link
        to={l.to}
        onClick={() => setOpen(false)}
        className="px-3 py-2.5 text-base font-medium text-foreground/90 hover:text-primary"
      >
        {l.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-3 py-1">
        <Link
          to={l.to}
          onClick={() => setOpen(false)}
          className="hover:text-primary py-2 text-base font-medium text-foreground/90"
        >
          {l.label}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 -mr-2 text-foreground/90 flex items-center justify-center">
          <ChevronDown
            className={`w-6 h-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 flex flex-col gap-1 border-l-2 border-border/50 ml-4 mt-1"
          >
            {l.dropdown.map((drop) => (
              <MobileNavDropdownItem
                key={drop.to}
                drop={drop}
                setOpen={setOpen}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Controls
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <div key={l.to} className="relative group/nav">
              <Link
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 group/link"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
                {l.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover/nav:rotate-180" />
                )}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </Link>

              {l.dropdown && (
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 translate-y-2 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-300">
                  <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl py-2 flex flex-col">
                    {l.dropdown.map((drop) => (
                      <div key={drop.to} className="relative group/subnav">
                        <Link
                          to={drop.to}
                          className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors flex items-center justify-between w-full"
                          activeProps={{
                            className: "text-primary bg-muted/30",
                          }}
                        >
                          {drop.label}
                          {drop.subItems && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </Link>

                        {drop.subItems && (
                          <div className="absolute top-0 left-full pl-1 w-56 opacity-0 translate-x-2 invisible group-hover/subnav:opacity-100 group-hover/subnav:translate-x-0 group-hover/subnav:visible transition-all duration-300">
                            <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl py-2 flex flex-col">
                              {drop.subItems.map((sub) => (
                                <Link
                                  key={sub.to}
                                  to={sub.to}
                                  className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                                  activeProps={{
                                    className: "text-primary bg-muted/30",
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
                <MobileNavLink key={l.to} l={l} setOpen={setOpen} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}