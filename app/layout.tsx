import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'commons. | Software your team builds together',
  description: 'A shared workspace for software teams to create, own, and improve internal tools with AI.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${lora.variable} font-sans`}>{children}</body></html>;
}
