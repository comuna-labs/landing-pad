import { Globe2, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';

const features = [
  {
    icon: UsersRound,
    number: '01',
    title: 'Team-owned\nfrom day one',
    description: 'No more tools trapped in one person’s account. Every tool belongs to the team.',
    accent: 'bg-indigo-600 text-white',
    iconStyle: 'bg-white/15 text-white',
    copyStyle: 'text-indigo-100',
    numberStyle: 'text-indigo-200/70',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'Anyone can\ncontribute',
    description: 'Request changes in plain English. AI handles the technical work.',
    accent: 'bg-[#F1F0FF] text-ink',
    iconStyle: 'bg-white text-indigo-600',
    copyStyle: 'text-slate-600',
    numberStyle: 'text-indigo-300',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Safe and\ngoverned',
    description: 'Built-in review and approval flows keep your tools secure and reliable.',
    accent: 'bg-[#F4F7F9] text-ink',
    iconStyle: 'bg-white text-emerald-600',
    copyStyle: 'text-slate-600',
    numberStyle: 'text-emerald-300',
  },
  {
    icon: Globe2,
    number: '04',
    title: 'Works with\nyour stack',
    description: 'Connect tools from Replit, Lovable, Claude, and more. One home for all your apps.',
    accent: 'bg-[#FEF8EE] text-ink',
    iconStyle: 'bg-white text-amber-600',
    copyStyle: 'text-slate-600',
    numberStyle: 'text-amber-300',
  }
];

export function Features() {
  return <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
      <div>
        <h2 className="font-display mt-4 max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-ink sm:text-5xl">Why teams<br />love <span className="italic text-indigo-600">commons.</span></h2>
      </div>
      <p className="ml-auto max-w-lg text-right text-base leading-7 text-slate-600 lg:pb-1 sm:text-lg">Great internal tools shouldn’t disappear when their creator leaves. commons gives every team a shared, safe place to build what they need.</p>
    </div>

    <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4">
      {features.map(({ icon: Icon, number, title, description, accent, iconStyle, copyStyle, numberStyle }) => <article key={number} className={`relative min-h-[272px] overflow-hidden rounded-2xl p-6 sm:min-h-[300px] sm:p-7 ${accent}`}>
        <span className={`absolute right-5 top-2 select-none text-7xl font-bold tracking-[-0.1em] sm:text-8xl ${numberStyle}`}>{number}</span>
        <div className={`grid h-14 w-14 place-items-center rounded-2xl shadow-sm ${iconStyle}`}><Icon className="h-7 w-7" strokeWidth={1.8} /></div>
        <div className="absolute inset-x-6 bottom-6 sm:inset-x-7 sm:bottom-7">
          <h3 className="whitespace-pre-line text-2xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-[28px]">{title}</h3>
          <p className={`mt-4 max-w-[350px] text-[15px] leading-5 ${copyStyle}`}>{description}</p>
        </div>
      </article>)}
    </div>
  </section>;
}
