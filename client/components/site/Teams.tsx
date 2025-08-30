import { Section } from "./Section";

type Team = {
  name: string;
  colors: { primary: string; secondary: string };
  driver: { name: string; number: number; image?: string };
  stats: { titles: number; base: string };
};

const TEAMS: Team[] = [
  {
    name: "Red Bull Racing",
    colors: { primary: "#1E41FF", secondary: "#E10600" },
    driver: {
      name: "Max Verstappen",
      number: 1,
      image: "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.jpg/1667484000000.jpg",
    },
    stats: { titles: 6, base: "Milton Keynes, UK" },
  },
  {
    name: "Scuderia Ferrari",
    colors: { primary: "#E10600", secondary: "#000000" },
    driver: {
      name: "Charles Leclerc",
      number: 16,
    },
    stats: { titles: 16, base: "Maranello, Italy" },
  },
  {
    name: "Mercedes-AMG",
    colors: { primary: "#00D2BE", secondary: "#111111" },
    driver: {
      name: "Lewis Hamilton",
      number: 44,
    },
    stats: { titles: 8, base: "Brackley, UK" },
  },
  {
    name: "McLaren",
    colors: { primary: "#FF8700", secondary: "#111111" },
    driver: {
      name: "Lando Norris",
      number: 4,
    },
    stats: { titles: 8, base: "Woking, UK" },
  },
];

function CarSilhouette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 300 90" className="w-full h-24 md:h-28" aria-hidden>
      <path d="M10 60 Q60 40 90 40 L140 40 Q170 40 200 55 Q230 65 260 62 L290 60" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" className="drop-shadow-[0_4px_24px_rgba(225,6,0,0.25)]"/>
      <circle cx="95" cy="62" r="10" fill={color} />
      <circle cx="230" cy="62" r="10" fill={color} />
    </svg>
  );
}

export function Teams() {
  return (
    <Section id="teams" title={<span>Teams</span>} subtitle={<span>Iconic constructors in their signature colors. Hover to reveal stats.</span>}>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {TEAMS.map((t) => (
          <article key={t.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: `radial-gradient(600px 160px at 20% -10%, ${t.colors.primary}22, transparent)`}}/>
            <div className="p-6">
              <header className="flex items-center justify-between">
                <h3 className="font-f1 text-xl leading-tight max-w-[14ch]">{t.name}</h3>
                <span className="text-white/60 font-semibold">#{t.driver.number}</span>
              </header>
              <div className="mt-4">
                <CarSilhouette color={t.colors.primary} />
              </div>
              <div className="mt-4 flex items-center gap-4">
                {t.driver.image ? (
                  <img src={t.driver.image} alt={t.driver.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
                ) : (
                  <div className="h-12 w-12 rounded-full grid place-items-center bg-white/10 ring-2 ring-white/20 font-bold" aria-label={t.driver.name}>
                    {t.driver.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold leading-tight">{t.driver.name}</p>
                  <p className="text-white/60 text-sm">Titles: {t.stats.titles} • Base: {t.stats.base}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{background: `linear-gradient(90deg, ${t.colors.primary}, ${t.colors.secondary})`}}/>
          </article>
        ))}
      </div>
    </Section>
  );
}
