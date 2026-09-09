import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsApp";
import { ShieldAlert, Layers, Hammer } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/hydraulic-press/h-frame-press")({
  component: HFramePressPage,
  head: () => ({
    meta: [{ title: "H-Frame Hydraulic Press | Fluidtec Controls" }],
  }),
});

const specsData = [
  {
    model: "PTHP 10",
    capacity: "10",
    power: "5",
    tableSize: "400X400",
    stroke: "200",
    daylight: "400",
    workingHeight: "800",
    approach: "70",
    pressing: "25",
    returnSpeed: "100",
    dcTableSize: "Nill",
    dcCapacity: "Nill",
    dcApproach: "Nill",
    dcReturn: "Nill",
  },
  {
    model: "PTHP 25",
    capacity: "25",
    power: "7.5",
    tableSize: "500X500",
    stroke: "300",
    daylight: "500",
    workingHeight: "850",
    approach: "80",
    pressing: "15",
    returnSpeed: "100",
    dcTableSize: "200X200",
    dcCapacity: "8",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 40",
    capacity: "40",
    power: "10",
    tableSize: "600X500",
    stroke: "300",
    daylight: "500",
    workingHeight: "850",
    approach: "140",
    pressing: "16",
    returnSpeed: "150",
    dcTableSize: "250X250",
    dcCapacity: "12",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 60",
    capacity: "60",
    power: "15",
    tableSize: "600X600",
    stroke: "400",
    daylight: "700",
    workingHeight: "850",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "400X400",
    dcCapacity: "20",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 100",
    capacity: "100",
    power: "20",
    tableSize: "750X750",
    stroke: "400",
    daylight: "700",
    workingHeight: "80",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "450X450",
    dcCapacity: "30",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 150",
    capacity: "150",
    power: "30",
    tableSize: "800X800",
    stroke: "400",
    daylight: "700",
    workingHeight: "850",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "480X480",
    dcCapacity: "50",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 200",
    capacity: "200",
    power: "30",
    tableSize: "1000X1000",
    stroke: "500",
    daylight: "1000",
    workingHeight: "1000",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "600X600",
    dcCapacity: "60",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 250",
    capacity: "250",
    power: "40",
    tableSize: "1000X1000",
    stroke: "500",
    daylight: "1000",
    workingHeight: "1000",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "600X600",
    dcCapacity: "80",
    dcApproach: "60",
    dcReturn: "80",
  },
  {
    model: "PTHP 300",
    capacity: "300",
    power: "50",
    tableSize: "1000X1000",
    stroke: "700",
    daylight: "1100",
    workingHeight: "1100",
    approach: "140",
    pressing: "12",
    returnSpeed: "140",
    dcTableSize: "600X600",
    dcCapacity: "100",
    dcApproach: "60",
    dcReturn: "80",
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
  { isCategory: true, title: "Main Cylinder Speeds:" },
  { label: "APPROACH", unit: "MM/Sec", key: "approach", speed: true },
  { label: "PRESSING", unit: "MM/Sec", key: "pressing", speed: true, bold: true },
  { label: "RETURN", unit: "MM/Sec", key: "returnSpeed", speed: true },
  { isCategory: true, title: "Die-Cushion Cylinder Details & Speeds:" },
  { label: "DIECUSHION TABLE SIZE", unit: "MM", key: "dcTableSize", mono: true },
  { label: "CAPACITY", unit: "TON", key: "dcCapacity", highlight: true },
  { label: "APPROACH", unit: "MM/Sec", key: "dcApproach", speed: true },
  { label: "RETURN", unit: "MM/Sec", key: "dcReturn", speed: true },
];

function HFramePressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Hammer className="w-4 h-4" /> Heavy Duty Forming
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            H-Frame <span className="text-gradient-primary">Hydraulic Press</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Uncompromising strength and zero deflection. Designed for heavy tonnage applications,
            molding, and large-scale metal forming operations.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: ShieldAlert,
              title: "Closed-Frame Rigidity",
              desc: "The H-frame design ensures that pressure is evenly distributed, completely eliminating the deflection issues found in open-gap presses under heavy loads.",
            },
            {
              icon: Layers,
              title: "High Tonnage Capacity",
              desc: "Built to deliver massive force, making it the perfect solution for deep drawing, coining, and compressing tough materials.",
            },
            {
              icon: Hammer,
              title: "Versatile Bed Adjustments",
              desc: "Features highly adjustable daylights and bed configurations to accommodate tooling of various heights and complex molds.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>

        <section className="container mx-auto px-6 mb-24 animate-fade-in">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-elegant backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Technical Specifications</h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Comprehensive performance metrics, dimensions, speeds, and die-cushion details for
                the PTHP series H-Frame deep drawing presses.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border/40 bg-black/60">
                <Table>
                  <TableHeader className="bg-muted/40">
                    <TableRow className="border-b border-border/50 hover:bg-transparent">
                      <TableHead
                        colSpan={2}
                        className="font-bold text-center text-primary border-r border-border/10 py-3 uppercase tracking-wider text-xs md:text-sm"
                      >
                        H-Frame Deep Drawing Press – PTHP
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
