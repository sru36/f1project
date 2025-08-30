import { Section } from "./Section";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CAR_IMG = "https://cdn.builder.io/api/v1/image/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2F6f29d9ed302641e2b170a7be004d391b?format=webp&width=1200";

type Callout = { x: number; y: number; label: string };
const CALLOUTS: Callout[] = [
  { x: 17, y: 66, label: "Rear Wing" },
  { x: 34, y: 58, label: "Airbox / Intake" },
  { x: 47, y: 72, label: "Sidepod" },
  { x: 70, y: 78, label: "Floor / Venturi" },
  { x: 86, y: 70, label: "Front Wing" },
];

export function Car() {
  return (
    <Section id="car" title={<span>The Car</span>} subtitle={<span>Annotated diagram highlighting key aero surfaces and components.</span>}>
      <TooltipProvider>
        <div className="relative glass overflow-hidden rounded-2xl p-4 md:p-8">
          <img src={CAR_IMG} alt="F1 Car" className="w-full h-auto object-contain" />
          {CALLOUTS.map((c) => (
            <Tooltip key={c.label}>
              <TooltipTrigger asChild>
                <button className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/90 shadow-[0_0_0_6px_rgba(225,6,0,0.25)] animate-pulse" style={{ left: `${c.x}%`, top: `${c.y}%` }} aria-label={c.label}></button>
              </TooltipTrigger>
              <TooltipContent side="top" className="px-3 py-2 text-xs">
                <span className="font-semibold">{c.label}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
