const TRACKS = [
  {
    name: "Monza",
    location: "Monza, Italy",
    stats: { laps: 53, lengthKm: 5.793, topSpeed: 360 },
    path: "M10 70 Q60 15 120 20 Q180 25 220 40 Q260 55 290 70 L280 80 Q240 60 200 50 Q160 40 120 40 Q80 40 40 60 Z",
  },
  {
    name: "Monaco",
    location: "Monte Carlo, Monaco",
    stats: { laps: 78, lengthKm: 3.337, topSpeed: 290 },
    path: "M10 60 L60 30 Q80 20 110 30 L140 45 Q170 60 205 58 L240 55 Q260 54 280 70 L260 80 Q230 70 205 70 Q180 70 150 55 Q120 40 90 45 L60 60 Z",
  },
  {
    name: "Silverstone",
    location: "Silverstone, UK",
    stats: { laps: 52, lengthKm: 5.891, topSpeed: 330 },
    path: "M15 65 Q80 20 150 30 Q220 40 280 60 L260 75 Q210 60 150 58 Q90 56 40 70 Z",
  },
  {
    name: "Suzuka",
    location: "Suzuka, Japan",
    stats: { laps: 53, lengthKm: 5.807, topSpeed: 330 },
    path: "M20 70 Q60 40 100 50 Q140 60 170 40 Q200 20 240 35 Q260 42 285 60 L265 75 Q240 55 210 50 Q180 45 160 60 Q140 75 100 70 Q60 65 40 75 Z",
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover opacity-30" autoPlay loop muted playsInline>
        <source src="https://cdn.builder.io/o/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2Fd1e081a1cb834eb1b8123288097cc962?alt=media&token=6c2b21a3-3d73-4235-afcf-84d3db197e77&apiKey=0d68dce6c99045fc980ec4bed2ae11cf" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.9))]"/>
      <div className="container relative">
        <header className="mb-10 md:mb-14 animate-reveal">
          <h2 className="font-braven text-3xl md:text-5xl tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Tracks</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl">Hover to draw the racing line and view quick stats.</p>
        </header>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TRACKS.map((t) => (
            <article key={t.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <header className="flex items-start justify-between">
                <h3 className="font-f1 text-xl">{t.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white/10">{t.location}</span>
              </header>
              <div className="mt-4">
                <svg viewBox="0 0 300 100" className="w-full h-28">
                  <path d={t.path} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" strokeLinecap="round"/>
                  <path d={t.path} fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" className="stroke-dasharray-[1000] [stroke-dasharray:1000] [stroke-dashoffset:1000] group-hover:animate-draw"/>
                </svg>
              </div>
              <p className="mt-3 text-white/70 text-sm">Laps: {t.stats.laps} • Length: {t.stats.lengthKm} km • Top speed: {t.stats.topSpeed} km/h</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
