import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return <main className="overflow-hidden"><Navbar /><Hero /><Features /><Comparison /><CTA /><Footer /></main>;
}
