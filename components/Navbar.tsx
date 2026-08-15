export function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur">
    <nav className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-6">
      <a href="#top" aria-label="commons. home" className="text-xl font-bold tracking-tight text-ink">commons.</a>
      <a href="mailto:hi@kenf.dev" className="text-sm font-medium text-slate-600 transition hover:text-ink">contact us</a>
    </nav>
  </header>;
}
