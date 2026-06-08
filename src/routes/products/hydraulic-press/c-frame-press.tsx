import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { ArrowRightCircle, Maximize } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export const Route = createFileRoute("/products/hydraulic-press/c-frame-press")({
  component: CFramePressPage,
  head: () => ({
    meta: [{ title: "C-Frame Hydraulic Press | Fluidtec Controls" }],
  }),
});

const specsData = [
  { model: "PTCP 05", capacity: "5", power: "3", tableSize: "400X400", stroke: "250", daylight: "550", workingHeight: "800", approach: "70", pressing: "7", returnSpeed: "90" },
  { model: "PTCP 10", capacity: "10", power: "5", tableSize: "400X400", stroke: "250", daylight: "550", workingHeight: "800", approach: "100", pressing: "10", returnSpeed: "100" },
  { model: "PTCP 15", capacity: "15", power: "5", tableSize: "500X400", stroke: "400", daylight: "700", workingHeight: "800", approach: "120", pressing: "15", returnSpeed: "120" },
  { model: "PTCP 20", capacity: "20", power: "7.5", tableSize: "500X400", stroke: "400", daylight: "550", workingHeight: "800", approach: "120", pressing: "15", returnSpeed: "150" },
  { model: "PTCP 30", capacity: "30", power: "15", tableSize: "550X450", stroke: "450", daylight: "550", workingHeight: "800", approach: "140", pressing: "18", returnSpeed: "160" },
  { model: "PTCP 40", capacity: "40", power: "10", tableSize: "800X500", stroke: "400", daylight: "750", workingHeight: "900", approach: "110", pressing: "18", returnSpeed: "150" },
  { model: "PTCP 50", capacity: "50", power: "15", tableSize: "800X600", stroke: "450", daylight: "800", workingHeight: "900", approach: "150", pressing: "18", returnSpeed: "150" },
  { model: "PTCP 60", capacity: "60", power: "20", tableSize: "800X600", stroke: "500", daylight: "800", workingHeight: "900", approach: "150", pressing: "18", returnSpeed: "160" },
  { model: "PTCP 100", capacity: "100", power: "25", tableSize: "800X600", stroke: "400", daylight: "700", workingHeight: "900", approach: "140", pressing: "15", returnSpeed: "160" },
  { model: "PTCP 200", capacity: "200", power: "40", tableSize: "800X600", stroke: "400", daylight: "800", workingHeight: "900", approach: "140", pressing: "15", returnSpeed: "160" },
];

function CFramePressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Maximize className="w-4 h-4" /> Open-Gap Design
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            C-Frame <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Compact, versatile, and easily accessible from three sides. The ideal choice for stamping, riveting, punching, and assembly operations where space and speed are critical.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Space-Saving & Accessible</h2>
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
            The C-Frame (or gap-frame) press is characterized by its unique "C" shape, which allows unobstructed access to the die area from the front and both sides. This makes it incredibly efficient for loading and unloading complex parts.
          </p>
          <ul className="grid md:grid-cols-2 gap-6">
            {["Compact footprint perfect for smaller factory floors.", "Rapid approach and return speeds for high-volume production.", "Highly rigid frame design to minimize angular deflection.", "Easily integrated with automated feeding systems."].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-colors duration-300">
                <ArrowRightCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="container mx-auto px-6 mb-24 animate-fade-in">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-elegant backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Technical Specifications</h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Comprehensive performance metrics, dimensions, and speed values for the PTCP series C-Frame hydraulic presses.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border/40 bg-background/50">
                <Table>
                  <TableHeader className="bg-muted/40">
                    <TableRow className="border-b border-border/50 hover:bg-transparent">
                      <TableHead className="font-semibold text-center border-r border-border/10 py-3"></TableHead>
                      <TableHead colSpan={3} className="font-bold text-center text-primary border-r border-border/10 py-3 uppercase tracking-wider text-xs md:text-sm">
                        C-Frame Press – PTCP
                      </TableHead>
                      <TableHead colSpan={3} className="font-semibold text-center border-r border-border/10 py-3"></TableHead>
                      <TableHead colSpan={3} className="font-bold text-center text-primary py-3 uppercase tracking-wider text-xs md:text-sm">
                        Speeds:
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-b border-border/50 hover:bg-transparent">
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">MODEL</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">CAPACITY</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">POWER</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">TABLE SIZE</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">STROKE</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">DAYLIGHT</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">WORKING</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">APPROACH</TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 text-xs md:text-sm">PRESSING</TableHead>
                      <TableHead className="font-bold text-foreground text-center py-2.5 text-xs md:text-sm">RETURN</TableHead>
                    </TableRow>
                    <TableRow className="border-b border-border/50 hover:bg-transparent text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground bg-muted/10">
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">CODE</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">TON</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">HP</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">MM</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">MM</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">MM</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">HEIGHT</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">MM/Sec</TableHead>
                      <TableHead className="text-center border-r border-border/10 py-2 font-medium">MM/Sec</TableHead>
                      <TableHead className="text-center py-2 font-medium">MM/Sec</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specsData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-primary/5 transition-colors border-b border-border/20">
                        <TableCell className="font-bold text-center border-r border-border/10 py-3 text-xs md:text-sm text-primary">{row.model}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm font-medium text-foreground">{row.capacity}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm text-muted-foreground">{row.power}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm font-mono text-foreground/90">{row.tableSize}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm text-muted-foreground">{row.stroke}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm text-muted-foreground">{row.daylight}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm font-medium text-foreground">{row.workingHeight}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm text-primary/80 font-medium">{row.approach}</TableCell>
                        <TableCell className="text-center border-r border-border/10 py-3 text-xs md:text-sm text-primary font-bold">{row.pressing}</TableCell>
                        <TableCell className="text-center py-3 text-xs md:text-sm text-primary/80 font-medium">{row.returnSpeed}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
