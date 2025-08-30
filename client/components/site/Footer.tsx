import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <Ticker />
      <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} F1 Showcase. Unofficial fan project.</p>
        <a href="#top" className="hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
