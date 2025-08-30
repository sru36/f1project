import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      ring.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div ref={ringRef} className="absolute w-8 h-8 rounded-full border border-primary/60 shadow-[0_0_40px_hsl(var(--primary))] mix-blend-screen" />
      <div ref={dotRef} className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
    </div>
  );
}
