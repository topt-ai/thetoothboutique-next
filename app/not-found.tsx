import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="bg-bg min-h-screen text-text font-body">
      <Navbar />
      <main className="min-h-[70vh] flex items-center px-8 md:px-[8%] pt-40 pb-24">
        <div className="max-w-[720px]">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Error 404</span>
          <h1 className="font-display font-bold text-[clamp(36px,5vw,64px)] text-text leading-[1.1] mb-6">
            Esta página no existe.
          </h1>
          <p className="font-body font-light text-[17px] text-muted leading-[1.7] mb-10">
            Puede que el enlace esté mal escrito o que la página se haya movido. Estos son los tratamientos que ofrecemos en Zona Rosa, San Salvador.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn-glass inline-flex items-center justify-center font-body font-semibold text-[14px] px-7 py-3 rounded-full">Inicio</Link>
            <Link href="/invisalign" className="font-body text-[14px] text-dark underline underline-offset-4 decoration-muted/40 self-center">Invisalign</Link>
            <Link href="/brackets" className="font-body text-[14px] text-dark underline underline-offset-4 decoration-muted/40 self-center">Brackets</Link>
            <Link href="/blanqueamiento" className="font-body text-[14px] text-dark underline underline-offset-4 decoration-muted/40 self-center">Blanqueamiento</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-dark underline underline-offset-4 decoration-muted/40 self-center">WhatsApp</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
