'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { CheckCircle2, CircleAlert, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function showToast(message: string, type: 'error' | 'success') {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ message, type });
    timeoutRef.current = setTimeout(() => setToast(null), 5000);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { showToast('Enter a valid email address.', 'error'); return; }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Waitlist submission failed');
    } catch {
      showToast('We could not save your email. Please try again.', 'error');
      return;
    }

    setEmail('');
    showToast("Thanks, we'll be in touch about beta access!", 'success');
  }
  return <>
    <form onSubmit={submit} noValidate className="w-full">
      <div className="flex flex-col gap-2 rounded-xl border border-slate-300 bg-white p-1.5 shadow-[0_8px_24px_rgba(15,23,42,.06)] sm:flex-row">
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your work email" aria-label="Work email" className="w-full border border-slate-200 bg-slate-50 py-3 focus:bg-white focus:ring-2" />
        <Button type="submit" className="shrink-0 px-6">Request access</Button>
      </div>
    </form>
    {toast && <div className="fixed inset-x-4 top-5 z-50 flex justify-center" role="status" aria-live="polite">
      <div className={`flex max-w-sm items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-xl ${toast.type === 'success' ? 'border-emerald-100 bg-white text-slate-800' : 'border-rose-100 bg-white text-slate-800'}`}>
        {toast.type === 'success' ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> : <CircleAlert className="h-5 w-5 shrink-0 text-rose-500" />}
        <span>{toast.message}</span>
        <button type="button" onClick={() => setToast(null)} className="ml-1 rounded p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="Dismiss notification"><X className="h-4 w-4" /></button>
      </div>
    </div>}
  </>;
}
