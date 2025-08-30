import { ReactNode } from "react";

export function Section({ id, title, subtitle, children }: { id?: string; title: ReactNode; subtitle?: ReactNode; children: ReactNode; }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <header className="mb-10 md:mb-14 animate-reveal">
          <h2 className="font-f1 text-3xl md:text-5xl tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>}
        </header>
        <div className="animate-reveal [animation-delay:120ms]">
          {children}
        </div>
      </div>
    </section>
  );
}
