import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { Crosshair, BoxSelect } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import productPillarPressImg from "@/assets/product-pillar-press.jpg";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/hydraulic-press/pillar-press")({
  component: PillarPressPage,
  head: () => ({
    meta: [{ title: "4-Pillar Hydraulic Press | Fluidtec Controls" }],
  }),
});

const specsData = [
  {
    model: "PTPP 10",
    capacity: "10",
    power: "5",
    tableSize: "400X300",
    stroke: "200",
    daylight: "350",
    workingHeight: "900",
    approach: "80",
    pressing: "15",
    returnSpeed: "120",
  },
  {
    model: "PTPP 20",
    capacity: "20",
    power: "7.5",
    tableSize: "500X400",
    stroke: "300",
    daylight: "450",
    workingHeight: "900",
    approach: "80",
    pressing: "15",
    returnSpeed: "120",
  },
  {
    model: "PTPP 50",
    capacity: "50",
    power: "15",
    tableSize: "600X500",
    stroke: "400",
    daylight: "650",
    workingHeight: "900",
    approach: "100",
    pressing: "15",
    returnSpeed: "120",
  },
  {
    model: "PTPP 100",
    capacity: "100",
    power: "20",
    tableSize: "800X700",
    stroke: "400",
    daylight: "750",
    workingHeight: "900",
    approach: "120",
    pressing: "15",
    returnSpeed: "120",
  },
  {
    model: "PTPP 150",
    capacity: "150",
    power: "25",
    tableSize: "800X700",
    stroke: "400",
    daylight: "750",
    workingHeight: "900",
    approach: "120",
    pressing: "15",
    returnSpeed: "120",
  },
];

interface SpecRow {
  label?: string;
  unit?: string;
  key?: keyof (typeof specsData)[number];
  isCategory?: boolean;
  title?: string;
  highlight?: boolean;
  mono?: boolean;
  speed?: boolean;
  bold?: boolean;
}

const specRows: SpecRow[] = [
  { label: "CAPACITY", unit: "TON", key: "capacity", highlight: true },
  { label: "POWER", unit: "HP", key: "power" },
  { label: "TABLE SIZE", unit: "MM", key: "tableSize", mono: true },
  { label: "STROKE", unit: "MM", key: "stroke" },
  { label: "DAYLIGHT", unit: "MM", key: "daylight" },
  { label: "WORKING HEIGHT", unit: "MM", key: "workingHeight", highlight: true },
  { isCategory: true, title: "Speeds:" },
  { label: "APPROACH", unit: "MM/Sec", key: "approach", speed: true },
  { label: "PRESSING", unit: "MM/Sec", key: "pressing", speed: true, bold: true },
  { label: "RETURN", unit: "MM/Sec", key: "returnSpeed", speed: true },
];

function PillarPressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Crosshair className="w-4 h-4" /> Extreme Precision
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            4-Pillar <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Engineered with precision-guided columns for operations requiring perfect parallelism
            and absolute accuracy across large bed areas.
          </p>
        </section>

        <section className="container mx-auto px-6 mb-20">
          <div className="bg-gradient-to-br from-card to-background border border-border/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flawless Parallelism</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our 4-pillar (four-column) hydraulic presses provide superior slide guidance. The
                heavy-duty hard-chrome plated columns ensure that the moving platen remains
                perfectly parallel to the bed, even under off-center loading conditions.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background/50 backdrop-blur border border-border/50 p-5 rounded-xl">
                  <BoxSelect className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Large Bed Area</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for accommodating oversized dies and multiple tooling setups.
                  </p>
                </div>
                <div className="bg-background/50 backdrop-blur border border-border/50 p-5 rounded-xl">
                  <Crosshair className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">High Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimal friction and wear guarantees consistent long-term precision.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-muted/30 border-l border-border/50 relative overflow-hidden min-h-[400px]">
              <img
                src={productPillarPressImg}
                alt="4-Pillar Hydraulic Press"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 mb-24 animate-fade-in">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-elegant backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Technical Specifications</h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Comprehensive performance metrics, dimensions, and speed values for the PTPP series
                4-Pillar hydraulic presses.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border/40 bg-black/60">
                <Table>
                  <TableHeader className="bg-muted/40">
                    <TableRow className="border-b border-border/50 hover:bg-transparent">
                      <TableHead
                        colSpan={2}
                        className="font-bold text-center text-primary border-r border-border/10 py-3 uppercase tracking-wider text-xs md:text-sm"
                      >
                        Pillar Press – PTPP
                      </TableHead>
                      <TableHead
                        colSpan={specsData.length}
                        className="font-bold text-center text-primary py-3 uppercase tracking-wider text-xs md:text-sm"
                      >
                        Models & Capacities
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-b border-border/50 hover:bg-transparent">
                      <TableHead className="font-bold text-foreground text-left border-r border-border/10 py-2.5 px-4 text-xs md:text-sm whitespace-nowrap bg-muted/20">
                        MODEL
                      </TableHead>
                      <TableHead className="font-bold text-foreground text-center border-r border-border/10 py-2.5 px-3 text-xs md:text-sm whitespace-nowrap bg-muted/10">
                        CODE
                      </TableHead>
                      {specsData.map((item, index) => (
                        <TableHead
                          key={index}
                          className="font-bold text-center border-r border-border/10 py-2.5 px-4 text-xs md:text-sm text-primary whitespace-nowrap"
                        >
                          {item.model}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specRows.map((row, index) => {
                      if (row.isCategory) {
                        return (
                          <TableRow
                            key={index}
                            className="bg-muted/30 border-y border-border/40 hover:bg-muted/40"
                          >
                            <TableCell
                              colSpan={specsData.length + 2}
                              className="font-bold text-left text-primary py-2.5 px-4 uppercase tracking-wider text-xs md:text-sm"
                            >
                              {row.title}
                            </TableCell>
                          </TableRow>
                        );
                      }
                      return (
                        <TableRow
                          key={index}
                          className="hover:bg-primary/5 transition-colors border-b border-border/20"
                        >
                          <TableCell className="font-bold text-foreground text-left border-r border-border/10 py-3 px-4 text-xs md:text-sm whitespace-nowrap bg-muted/20">
                            {row.label}
                          </TableCell>
                          <TableCell className="text-center border-r border-border/10 py-3 px-3 text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap bg-muted/10">
                            {row.unit}
                          </TableCell>
                          {specsData.map((col, colIdx) => (
                            <TableCell
                              key={colIdx}
                              className={cn(
                                "text-center border-r border-border/10 py-3 px-4 text-xs md:text-sm whitespace-nowrap",
                                row.highlight && "font-medium text-foreground",
                                row.mono && "font-mono text-foreground/90",
                                row.speed &&
                                  (row.bold
                                    ? "text-primary font-bold"
                                    : "text-primary/80 font-medium"),
                                !row.highlight &&
                                  !row.mono &&
                                  !row.speed &&
                                  "text-muted-foreground",
                              )}
                            >
                              {row.key ? col[row.key] : ""}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
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
