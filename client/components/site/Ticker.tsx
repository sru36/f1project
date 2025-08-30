import { useEffect, useRef, useState } from "react";

type Update = { id: string; title: string; time: string };

export function Ticker() {
  const [items, setItems] = useState<Update[]>([]);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    fetch("/api/f1/updates").then(r => r.json()).then((d: Update[]) => setItems(d)).catch(() => {
      setItems([
        { id: "1", title: "Welcome to the F1 Showcase — racing news ticker is live.", time: new Date().toISOString() },
      ]);
    });
  }, []);

  // duplicate list for seamless scroll
  const content = [...items, ...items];

  return (
    <div aria-live="polite" className="w-full overflow-hidden bg-black">
      <div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap py-3 text-sm text-white/80 animate-[scroll_30s_linear_infinite]"
        style={{
          // keyframes inlined to avoid global pollution
          ['--tw-keyframes' as any]: '@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }',
        }}
      >
        {content.map((u, i) => (
          <span key={u.id + i} className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]"></span>
            <span className="font-semibold text-white">{new Date(u.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="opacity-80">{u.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
