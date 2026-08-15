import { Check, Sparkles, X } from 'lucide-react';

const traditional = ['Built by individuals', 'Permissions added later', 'Code-first', 'Hard to discover', 'Breaks when creator leaves'];
const commons = ['Built by the team', 'Ownership from the start', 'AI-powered, no code needed', 'Easy to discover and share', 'Lives on, no matter what'];
const docs = ['Not built for software', 'Static, not executable', 'No AI to build with you', 'Can’t deploy or run', 'Not a system of record'];

function List({ title, entries, good = false }: { title: string; entries: string[]; good?: boolean }) {
  return <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-7 ${good ? 'bg-indigo-600 text-white shadow-[0_20px_45px_rgba(79,70,229,0.25)]' : 'border border-slate-200 bg-white'}`}>
    {good && <><span className="absolute -right-3 -top-9 select-none text-[132px] font-bold leading-none tracking-[-0.12em] text-white/10">✓</span><span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-100"><Sparkles className="h-3 w-3" />Built for teams</span></>}
    <div className={good ? 'relative mt-5' : ''}>
      <h3 className={`text-xl font-bold tracking-[-0.04em] ${good ? 'text-white' : 'text-ink'}`}>{title}</h3>
    </div>
    <ul className={`relative mt-6 ${good ? 'border-white/15' : 'border-slate-100'}`}>
      {entries.map((entry) => <li className={`flex items-center gap-3 border-t py-3 text-sm ${good ? 'border-white/15 text-white' : 'border-slate-100 text-slate-600'}`} key={entry}>
        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${good ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>{good ? <Check className="h-3 w-3 stroke-[3]" /> : <X className="h-3 w-3 stroke-[2.5]" />}</span>{entry}
      </li>)}
    </ul>
  </div>;
}

export function Comparison() {
  return <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
    <div className="overflow-hidden rounded-3xl bg-[#F5F5FF] px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">A different foundation</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-ink sm:text-5xl">Built for the<br /><span className="italic text-indigo-600">whole team.</span></h2>
        </div>
        <p className="ml-auto max-w-xl text-right text-base leading-7 text-slate-600 sm:text-lg">The tools your team depends on should belong to the team, stay easy to improve, and work after their creator moves on.</p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
        <List title="Traditional builders" entries={traditional} />
        <List title="commons." entries={commons} good />
        <List title="Docs & design tools" entries={docs} />
      </div>
    </div>
  </section>;
}
