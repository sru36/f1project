import { Section } from "./Section";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TIRES = [
  { name: "Soft", code: "C5", color: "#FF2D2D", tip: "Fastest grip, shortest life. Ideal for qualifying and short stints." },
  { name: "Medium", code: "C3", color: "#FFD12D", tip: "Balanced pace and durability for flexible strategies." },
  { name: "Hard", code: "C1", color: "#FFFFFF", tip: "Longest life, slower warm-up; perfect for endurance stints." },
  { name: "Intermediate", code: "INT", color: "#39D353", tip: "Green-walled tire for light rain and drying conditions." },
  { name: "Wet", code: "WET", color: "#2D6BFF", tip: "Blue-walled full wet tire for heavy rain and standing water." },
];

function Tire({ color, name, code }: { color: string; name: string; code: string }) {
  return (
    <div className="relative grid place-items-center aspect-square rounded-2xl border border-white/10 bg-black/40 hover:scale-[1.02] transition-transform">
      <div className="relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-[10px]" style={{ borderColor: color, boxShadow: `0 0 0 1px #000 inset, 0 12px 40px ${color}33` }} />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-xs uppercase tracking-wider text-white/70">{name}</span>
          <span className="font-bold text-white/90">{code}</span>
        </div>
      </div>
    </div>
  );
}

export function Technology() {
  return (
    <Section id="technology" title={<span>Technology</span>} subtitle={<span>Pirelli tire compounds and hybrid power units visualized with interactive cards.</span>}>
      <div className="grid md:grid-cols-5 gap-6">
        <TooltipProvider delayDuration={0}>
          {TIRES.map((t) => (
            <Tooltip key={t.name}>
              <TooltipTrigger asChild>
                <div>
                  <Tire color={t.color} name={t.name} code={t.code} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-[18rem] text-sm">{t.tip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <article className="relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
          <h3 className="font-f1 text-xl">Hybrid Power Unit</h3>
          <p className="mt-2 text-white/70 text-sm">1.6L turbocharged V6 with advanced ERS (MGU‑K and MGU‑H). Over 1000hp combined with energy recovery and deployment.</p>
          <div className="mt-4">
            <svg viewBox="0 0 320 120" className="w-full h-28">
              <defs>
                <linearGradient id="metal" x1="0" x2="1">
                  <stop offset="0%" stopColor="#bbb"/>
                  <stop offset="50%" stopColor="#eee"/>
                  <stop offset="100%" stopColor="#bbb"/>
                </linearGradient>
              </defs>
              <rect x="20" y="30" width="180" height="60" rx="12" fill="url(#metal)" opacity="0.6" />
              <rect x="210" y="45" width="90" height="30" rx="8" fill="#e10600" opacity="0.8" />
              <circle cx="70" cy="95" r="10" fill="#888" />
              <circle cx="170" cy="95" r="10" fill="#888" />
              <path d="M210 60 L200 60" stroke="#fff" strokeWidth="3"/>
            </svg>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-primary/10 to-transparent">
          <h3 className="font-f1 text-xl">Aero & Chassis</h3>
          <p className="mt-2 text-white/70 text-sm">Ground‑effect floors, complex endplates, and refined suspension deliver downforce and precision at extreme speeds.</p>
          <div className="mt-4">
            <svg viewBox="0 0 320 120" className="w-full h-28">
              <path d="M10 70 Q80 40 150 45 Q220 50 300 60" stroke="#fff" strokeOpacity="0.6" strokeWidth="5" fill="none" />
              <path d="M10 80 Q80 65 150 70 Q220 75 300 80" stroke="#e10600" strokeWidth="3" fill="none" className="animate-float"/>
            </svg>
          </div>
        </article>
      </div>
    </Section>
  );
}
