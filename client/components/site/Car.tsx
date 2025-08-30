import { Section } from "./Section";

const CAR_IMG = "https://cdn.builder.io/api/v1/image/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2F6f29d9ed302641e2b170a7be004d391b?format=webp&width=1200";

type Callout = { x: number; y: number; label: string; lx: number; ly: number };
const CALLOUTS: Callout[] = [
  { x: 24, y: 68, label: "Rear Tyre", lx: 12, ly: 92 },
  { x: 77, y: 68, label: "Front Tyre", lx: 90, ly: 92 },
  { x: 55, y: 58, label: "Engine", lx: 62, ly: 22 },
  { x: 60, y: 50, label: "Driver's Seat", lx: 70, ly: 12 },
  { x: 87, y: 63, label: "Front Wing", lx: 96, ly: 40 },
];

export function Car() {
  return (
    <Section id="car" title={<span>The Car</span>} subtitle={<span>Annotated diagram highlighting tyres, engine, driver’s seat and aero components.</span>}>
      <div className="relative glass overflow-hidden rounded-2xl p-4 md:p-8">
        <div className="relative">
          <img src={CAR_IMG} alt="F1 Car" className="mx-auto w-[86%] md:w-[80%] h-auto object-contain" />
          {/* Overlay SVG arrows */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))"/>
              </marker>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="1.8" floodColor="rgba(225,6,0,0.9)"/>
              </filter>
            </defs>
            {CALLOUTS.map((c) => (
              <g key={c.label}>
                <line x1={c.x} y1={c.y} x2={c.lx} y2={c.ly} stroke="hsl(var(--primary))" strokeWidth="0.8" markerEnd="url(#arrow)" filter="url(#glow)" className="[stroke-dasharray:100] [stroke-dashoffset:100] animate-draw" />
                <circle cx={c.x} cy={c.y} r="1.5" fill="hsl(var(--primary))" filter="url(#glow)"></circle>
              </g>
            ))}
          </svg>

          {CALLOUTS.map((c) => (
            <div key={c.label} className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 text-xs" style={{ left: `${c.lx}%`, top: `${c.ly}%` }}>
              <span className="text-white/90">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
