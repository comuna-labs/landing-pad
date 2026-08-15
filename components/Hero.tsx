import type { ReactNode } from 'react';
import Image from 'next/image';
import { CheckCircle2, ChevronDown, ClipboardList, Home, LayoutGrid, Users, Wand2 } from 'lucide-react';
import { Badge } from './ui/Badge';
import { WaitlistForm } from './WaitlistForm';

const tools = [
  ['▣', 'Enterprise Onboarding', 'Revenue Ops', 'Healthy', 'green'],
  ['▤', 'Lead Tracker', 'Sales', 'Healthy', 'green'],
  ['◈', 'Customer Portal', 'Customer Success', 'Needs review', 'amber'],
  ['▣', 'Renewal Forecast', 'Finance', 'Healthy', 'green']
];

export function Hero() {
  return <section id="top" className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-20">
    <div className="relative z-10 max-w-xl">
      <Badge><Wand2 className="h-3 w-3" />Closed beta</Badge>
      <h1 className="font-display mt-7 text-[46px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[64px]">Software your<br className="hidden lg:block" /> team builds<br /><span className="relative isolate inline-block italic text-indigo-600"><span className="absolute inset-x-[-0.08em] bottom-[0.03em] -z-10 h-[0.38em] -rotate-1 rounded-sm bg-indigo-200/80" />together.</span></h1>
      <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">Meet commons. A shared workspace for teams to create, own, and improve internal tools with AI. No code required.</p>
      <div id="waitlist" className="mt-8 max-w-md"><WaitlistForm /></div>
      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500"><CheckCircle2 className="h-4 w-4" /> Request access to the closed beta. Open beta is coming soon.</p>
    </div>
    <Dashboard />
  </section>;
}

function Dashboard() {
  return <div className="relative mx-auto w-full max-w-[570px]">
    <div className="absolute -inset-10 -z-10 rounded-full bg-indigo-100/60 blur-3xl" />
    <div className="grid min-h-[470px] overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-glow sm:grid-cols-[150px_1fr]">
      <aside className="hidden border-r border-slate-100 px-3 py-5 sm:flex sm:flex-col">
        <span className="mb-6 text-sm font-bold tracking-tight text-ink">commons.</span>
        <div className="space-y-1 text-[11px] text-slate-600">
          <Side icon={<Home />} text="Home" active /><Side icon={<LayoutGrid />} text="Tools" /><Side icon={<ClipboardList />} text="Requests" /><Side icon={<ChevronDown />} text="Activity" /><Side icon={<Users />} text="Teams" />
        </div>
        <div className="mt-auto flex items-center gap-2 text-[9px] text-slate-500"><span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full"><Image src="/images/ruby-duck-avatar.png" alt="Ruby Duck" fill sizes="24px" className="object-cover" /></span><span><b className="block text-slate-700">Ruby Duck</b>Revenue Ops</span></div>
      </aside>
      <div className="p-5 sm:p-7">
        <h2 className="text-lg font-bold tracking-tight text-ink">Welcome back, Ruby</h2><p className="mt-1 text-[11px] text-slate-500">Here&apos;s what&apos;s happening in your team</p>
        <h3 className="mt-7 text-xs font-bold text-ink">Team tools</h3>
        <div className="mt-3 space-y-2">
          {tools.map(([icon, title, subtitle, status, tone]) => <div key={title} className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2.5 shadow-sm"><span className="grid h-7 w-7 place-items-center rounded-md bg-indigo-50 text-xs text-indigo-600">{icon}</span><span className="min-w-0 flex-1 leading-none"><b className="block truncate text-[10px] leading-none text-ink">{title}</b><small className="mt-1 block text-[9px] leading-none text-slate-500">{subtitle}</small></span><span className={`rounded-full px-2 py-1 text-[9px] font-medium ${tone === 'green' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{status}</span></div>)}
        </div>
        <h3 className="mt-7 text-xs font-bold text-ink">Recent change request</h3>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-100 p-3 shadow-sm"><p className="flex-1 text-[10px] font-medium text-ink">Add a CSV export to the leads table</p><span className="rounded-full bg-violet-50 px-2 py-1 text-[9px] text-indigo-600">In review</span><span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full"><Image src="/images/ruby-duck-avatar.png" alt="Ruby Duck" fill sizes="20px" className="object-cover" /></span></div>
      </div>
    </div>
  </div>;
}
function Side({ icon, text, active = false }: { icon: ReactNode; text: string; active?: boolean }) { return <div className={`flex items-center gap-2 rounded-md px-2 py-2 ${active ? 'bg-indigo-50 font-medium text-ink' : ''}`}><span className="h-3.5 w-3.5 [&_svg]:h-full [&_svg]:w-full">{icon}</span>{text}</div>; }
