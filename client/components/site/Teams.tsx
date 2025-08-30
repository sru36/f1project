import { Section } from "./Section";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Team = {
  key: string;
  name: string;
  theme: string; // hex color
  secondary: string; // secondary accent
  driver: { name: string; number: number; image?: string };
  stats: { titles: number; base: string };
};

const TEAMS: Team[] = [
  {
    key: "ferrari",
    name: "Scuderia Ferrari",
    theme: "#E10600",
    secondary: "#000000",
    driver: { name: "Charles Leclerc", number: 16 },
    stats: { titles: 16, base: "Maranello, Italy" },
  },
  {
    key: "redbull",
    name: "Red Bull Racing",
    theme: "#1E41FF",
    secondary: "#E10600",
    driver: {
      name: "Max Verstappen",
      number: 1,
      image:
        "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.jpg/1667484000000.jpg",
    },
    stats: { titles: 6, base: "Milton Keynes, UK" },
  },
  {
    key: "mclaren",
    name: "McLaren",
    theme: "#FF8700",
    secondary: "#111111",
    driver: { name: "Lando Norris", number: 4 },
    stats: { titles: 8, base: "Woking, UK" },
  },
  {
    key: "mercedes",
    name: "Mercedes-AMG",
    theme: "#00D2BE",
    secondary: "#111111",
    driver: { name: "Lewis Hamilton", number: 44 },
    stats: { titles: 8, base: "Brackley, UK" },
  },
];

function CarSilhouette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 300 90" className="w-full h-24 md:h-28" aria-hidden>
      <path
        d="M10 60 Q60 40 90 40 L140 40 Q170 40 200 55 Q230 65 260 62 L290 60"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        className="drop-shadow-[0_4px_24px_rgba(225,6,0,0.25)]"
      />
      <circle cx="95" cy="62" r="10" fill={color} />
      <circle cx="230" cy="62" r="10" fill={color} />
    </svg>
  );
}

export function Teams() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const theme = TEAMS[index % TEAMS.length];

  return (
    <Section
      id="teams"
      title={<span>Teams</span>}
      subtitle={<span>Swipe to explore each team. The theme adapts to the team colors.</span>}
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{
          background:
            `radial-gradient(800px 200px at 10% -10%, ${theme.theme}22, transparent), radial-gradient(600px 200px at 110% 120%, ${theme.theme}22, transparent)`,
        }}
      >
        <div className="p-4 md:p-6 flex items-center justify-between">
          <div className="flex gap-2">
            {TEAMS.map((t, i) => (
              <span
                key={t.key}
                aria-hidden
                className={`h-1.5 w-6 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              className="w-9 h-9 grid place-items-center rounded-md border border-white/10 hover:border-white/30"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              className="w-9 h-9 grid place-items-center rounded-md border border-white/10 hover:border-white/30"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {TEAMS.map((t) => (
              <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_80%] px-4 md:px-6" key={t.key}>
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
                  <header className="flex items-center justify-between">
                    <h3 className="font-f1 text-2xl md:text-3xl" style={{ color: t.theme }}>
                      {t.name}
                    </h3>
                    <span className="text-white/70 font-semibold">#{t.driver.number}</span>
                  </header>
                  <div className="mt-4">
                    <CarSilhouette color={t.theme} />
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    {t.driver.image ? (
                      <img
                        src={t.driver.image}
                        alt={t.driver.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                      />
                    ) : (
                      <div
                        className="h-12 w-12 rounded-full grid place-items-center bg-white/10 ring-2 ring-white/20 font-bold"
                        aria-label={t.driver.name}
                      >
                        {t.driver.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </div>
                    )}
                    <div>
                      <p className="text-white font-semibold leading-tight">{t.driver.name}</p>
                      <p className="text-white/60 text-sm">
                        Titles: {t.stats.titles} • Base: {t.stats.base}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
