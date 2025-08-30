import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2Ffa4676227ecb4b2e8d2d1df83933299e?format=webp&width=800";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("glide", open);
    return () => { document.body.style.overflow = ""; document.body.classList.remove("glide"); };
  }, [open]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <ul className="flex flex-col gap-6 font-semibold">
      <li><a href="#teams" onClick={onClick} className="hover:text-primary transition-colors">Teams</a></li>
      <li><a href="#car" onClick={onClick} className="hover:text-primary transition-colors">Car</a></li>
      <li><a href="#tracks" onClick={onClick} className="hover:text-primary transition-colors">Tracks</a></li>
      <li><a href="#tyres" onClick={onClick} className="hover:text-primary transition-colors">Tyre Type</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="F1" className="h-7 w-auto"/>
          <span className="sr-only">F1 Showcase</span>
        </a>
        <button aria-label="Menu" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/0 hover:border-white/10 transition-colors" onClick={() => setOpen(true)}>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white my-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Off-canvas drawer */}
      <div className={cn("fixed inset-0 z-50 transition-opacity", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
           onClick={() => setOpen(false)}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <aside className={cn("absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-[#0a0a0a] border-l border-white/10 p-6 transition-transform", open ? "translate-x-0" : "translate-x-full")}
               onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <img src={LOGO_URL} alt="F1" className="h-6 w-auto"/>
            <button aria-label="Close" className="w-9 h-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20" onClick={() => setOpen(false)}>
              <span className="sr-only">Close</span>
              <span className="block w-4 h-0.5 bg-white rotate-45 translate-y-0.5"></span>
              <span className="block w-4 h-0.5 bg-white -rotate-45 -translate-y-0.5 -mt-0.5"></span>
            </button>
          </div>
          <div className="mt-8">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </aside>
      </div>
    </header>
  );
}
