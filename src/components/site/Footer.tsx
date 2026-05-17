import { Link } from "@tanstack/react-router";
import { Cog, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40 mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Cog className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold">Fluidtec Controls</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase">Since 2002</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Manufacturer, supplier and service provider of high-precision Hydraulic Power Packs,
            Presses and Cylinders engineered for industrial reliability.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +91 98417 27799</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> fluidteccontrols@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Chennai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fluidtec Controls. All rights reserved.
      </div>
    </footer>
  );
}