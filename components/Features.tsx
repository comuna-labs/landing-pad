import { Globe2, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';

const features = [
  [UsersRound, 'Team-owned from day one', 'No more tools trapped in one person’s account. Every tool belongs to the team.'],
  [Sparkles, 'Anyone can contribute', 'Request changes in plain English. AI handles the technical work.'],
  [ShieldCheck, 'Safe and governed', 'Built-in review and approval flows keep your tools secure and reliable.'],
  [Globe2, 'Works with your stack', 'Connect tools from Replit, Lovable, Claude, and more. One home for all your apps.']
];
export function Features() { return <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-14 sm:py-20"><h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">Why teams love commons.</h2><div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, title, description]) => { const FeatureIcon = Icon as typeof UsersRound; return <article key={title as string} className="text-center"><span className="mx-auto grid h-[60px] w-[60px] place-items-center rounded-2xl bg-indigo-50 text-indigo-500"><FeatureIcon className="h-7 w-7" /></span><h3 className="mt-5 text-sm font-semibold text-ink">{title as string}</h3><p className="mx-auto mt-2 max-w-[220px] text-sm leading-5 text-slate-600">{description as string}</p></article>; })}</div></section>; }
