import { useEffect, useRef } from "react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2Ffa4676227ecb4b2e8d2d1df83933299e?format=webp&width=800";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    play();
    window.addEventListener("click", play, { once: true });
    return () => window.removeEventListener("click", play);
  }, []);

  return (
    <section id="top" className="relative min-h-[86vh] w-full overflow-hidden">
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover opacity-50" autoPlay loop muted playsInline poster="/robots.txt">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_60%_40%,rgba(225,6,0,0.25),transparent)]"/>
      <div className="relative z-10 container pt-28 pb-24 md:pt-36 md:pb-36">
        <div className="max-w-4xl">
          <img src={LOGO_URL} alt="F1" className="h-14 md:h-20 w-auto drop-shadow-[0_8px_40px_rgba(225,6,0,0.35)]"/>
          <h1 className="mt-6 font-braven text-4xl leading-tight md:text-7xl md:leading-[1.05]">
            Experience the Thrill of <span className="text-primary">Formula 1</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            A premium, cinematic showcase of teams, tracks and technology — fusing the elegance of future design with the raw speed of motorsport.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#teams" className="uiverse-btn"><span>Teams →</span></a>
            <a href="#tracks" className="uiverse-btn"><span>Tracks →</span></a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.9))]"/>
    </section>
  );
}
