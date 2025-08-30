import { useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F0d68dce6c99045fc980ec4bed2ae11cf%2F0fc2557771c149278e9429c5d557520d?format=webp&width=800";

export function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 font-semibold">
      <li><a href="#teams" className="hover:text-primary transition-colors">Teams</a></li>
      <li><a href="#tracks" className="hover:text-primary transition-colors">Tracks</a></li>
      <li><a href="#technology" className="hover:text-primary transition-colors">Technology</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="F1" className="h-7 w-auto"/>
          <span className="sr-only">F1 Showcase</span>
        </a>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
        <button aria-label="Menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 hover:border-white/20 transition-colors" onClick={() => setOpen(v => !v)}>
          <span className={cn("block w-5 h-0.5 bg-white transition-all", open && "rotate-45 translate-y-1")}></span>
          <span className={cn("block w-5 h-0.5 bg-white my-1 transition-opacity", open && "opacity-0")}></span>
          <span className={cn("block w-5 h-0.5 bg-white transition-all", open && "-rotate-45 -translate-y-1")}></span>
        </button>
      </div>
      {/* mobile */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="container py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
