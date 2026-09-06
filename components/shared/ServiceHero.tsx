'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import BrandsCarousel from '@/components/BrandsCarousel';
import { SITE } from '@/lib/site';

type Props = {
  breadcrumb: string;
  h1: string;
  eyebrow: string;
  taglineLine1: string;
  taglineLine2: string;
  text: string;
  chips: string[];
  cta: string;
  secondary: { label: string; href: string };
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

// Hero de página interior. El H1 (servicio + ciudad) va en la línea pequeña tipo eyebrow,
// igual que en la home; la frase grande es un <p>. La sección mide exactamente una
// pantalla en escritorio para que el brand strip quede al filo sin hacer scroll.
export default function ServiceHero({
  breadcrumb, h1, eyebrow, taglineLine1, taglineLine2, text, chips, cta, secondary, image, imageAlt, imagePosition = 'center top',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-element', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2 });
      if (imageRef.current) {
        gsap.fromTo(imageRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] md:h-[100dvh] bg-bg flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Background Image + Overlay */}
      <div
        className="absolute inset-0 md:hidden z-0"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: imagePosition }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15,76,92,0.15) 0%, rgba(15,76,92,0.6) 60%, rgba(15,76,92,0.85) 100%)' }}
        />
      </div>

      {/* Left Copy */}
      <div className="w-full md:w-[55%] flex flex-col justify-end md:justify-center px-[6%] md:pl-[8%] pt-28 md:pt-16 pb-[88px] md:pb-16 z-10 min-h-[100dvh] md:min-h-0 md:h-full">
        <nav aria-label="Migas de pan" className="hero-text-element font-mono text-[10px] text-[rgba(250,250,248,0.6)] md:text-muted uppercase tracking-wider mb-4">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link> / {breadcrumb}
        </nav>

        <h1 className="hero-text-element font-mono font-normal text-[11px] text-white/70 md:text-accent tracking-[0.12em] uppercase mb-5 before:content-['//_']">
          {h1} · {eyebrow}
        </h1>

        <p className="hero-text-element font-display font-bold text-[clamp(38px,3.9vw,72px)] text-[#FAFAF8] md:text-text leading-[1.05] mb-5">
          {taglineLine1}<br />
          <span className="italic font-normal">{taglineLine2}</span>
        </p>

        <p className="hero-text-element font-body font-light text-[16px] md:text-[17px] text-[rgba(250,250,248,0.75)] md:text-muted max-w-[480px] leading-[1.6] mb-6">
          {text}
        </p>

        <div className="hero-text-element flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] text-[rgba(250,250,248,0.75)] md:text-muted mb-7">
          {chips.map((chip, i) => (
            <span key={chip} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[rgba(250,250,248,0.3)] md:bg-muted/50"></span>}
              <span>{chip}</span>
            </span>
          ))}
        </div>

        <div className="hero-text-element flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center justify-center font-body font-semibold text-[15px] px-9 py-4 rounded-full"
          >
            {cta}
          </a>
          <a
            href={secondary.href}
            className="font-body font-normal text-[14px] text-[#FAFAF8] md:text-muted hover:text-dark underline decoration-[rgba(250,250,248,0.3)] md:decoration-muted/30 hover:decoration-dark underline-offset-4 transition-all"
          >
            {secondary.label}
          </a>
        </div>
      </div>

      {/* Right Image - Desktop Only */}
      <div className="hidden md:block w-full md:w-[45%] h-full relative">
        <div ref={imageRef} className="w-full h-full md:rounded-bl-[40px] overflow-hidden relative z-10">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover object-center" fetchPriority="high" />
          <div className="absolute inset-0 bg-dark/15 pointer-events-none"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-dark opacity-[0.06] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl z-0 pointer-events-none mix-blend-multiply"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-30">
        <BrandsCarousel />
      </div>
    </section>
  );
}
