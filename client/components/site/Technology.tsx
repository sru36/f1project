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
    <div className="relative grid place-items-center aspect-square rounded-2xl border border-white/10 bg-black/40 transition-transform duration-300 hover:scale-[1.04]">
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

export function TyreType() {
  return (
    <Section id="tyres" title={<span>Tyre Type</span>} subtitle={<span>Pirelli compounds visualized with interactive hover—soft to wet.</span>}>
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
    </Section>
  );
}
