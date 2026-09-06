'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BrandsCarousel from '@/components/BrandsCarousel';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up for text elements
      gsap.fromTo(
        '.hero-text-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Image slide-in (desktop only)
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.4,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-[100dvh] md:h-[100dvh] bg-bg flex flex-col md:flex-row overflow-hidden"
    >
      {/* Mobile Background Image + Overlay */}
      <div
        className="absolute inset-0 md:hidden z-0"
        style={{
          backgroundImage: 'url(/main%20tooth.webp)',
          backgroundSize: 'auto 130%',
          backgroundPosition: 'right 30% top 75%',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(15,76,92,0.15) 0%, rgba(15,76,92,0.6) 60%, rgba(15,76,92,0.85) 100%)',
          }}
        />
      </div>

      {/* Left Copy */}
      <div
        ref={textRef}
        className="w-full md:w-[55%] flex flex-col justify-end md:justify-center px-[6%] md:pl-[8%] pt-28 md:pt-24 pb-[88px] md:pb-24 z-10 min-h-[100dvh] md:min-h-0 md:h-full"
      >
        {/* H1 semántico (categoría + ciudad) con el estilo del eyebrow; el slogan grande es un <p>. */}
        <h1 className="hero-text-element font-mono font-normal text-[11px] text-white/70 md:text-accent tracking-[0.12em] uppercase mb-5 before:content-['//_']">
          Ortodoncista en San Salvador
        </h1>

        <p className="hero-text-element font-display font-bold text-[clamp(44px,6vw,88px)] text-[#FAFAF8] md:text-text leading-[1.05] mb-5">
          Sonríe Antes<br />
          <span className="italic font-normal">de lo que Imaginas</span>
        </p>

        <p className="hero-text-element font-body font-light text-[16px] md:text-[18px] text-[rgba(250,250,248,0.75)] md:text-muted max-w-[480px] leading-[1.6] mb-6">
          La Dra. Melissa Reneé y su equipo combinan tecnología de primer nivel con tratamientos que terminan antes de lo que esperas.
        </p>

        <div className="hero-text-element flex flex-wrap items-center gap-3 font-mono text-[11px] text-[rgba(250,250,248,0.75)] md:text-muted mb-7">
          <span>Invisalign Doctor</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(250,250,248,0.3)] md:bg-muted/50"></span>
          <span>iTero Digital</span>
        </div>

        <div className="hero-text-element flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/50379056000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center justify-center font-body font-semibold text-[15px] px-9 py-4 rounded-full"
          >
            Agenda tu cita por WhatsApp
          </a>
          <a
            href="#tratamientos"
            className="font-body font-normal text-[14px] text-[#FAFAF8] md:text-muted hover:text-dark underline decoration-[rgba(250,250,248,0.3)] md:decoration-muted/30 hover:decoration-dark underline-offset-4 transition-all"
          >
            Ver tratamientos
          </a>
        </div>

      </div>

      {/* Right Image - Desktop Only */}
      <div className="hidden md:block w-full md:w-[45%] h-full relative">
        <div
          ref={imageRef}
          className="w-full h-full md:rounded-bl-[40px] overflow-hidden relative z-10"
        >
          <img
            src="/main tooth.webp"
            alt="Dra. Melissa Reneé, ortodoncista en The Tooth Boutique, San Salvador"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
        {/* Organic Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-dark opacity-[0.06] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl z-0 pointer-events-none mix-blend-multiply"></div>
      </div>

      {/* Brands Carousel - Full Width */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <BrandsCarousel />
      </div>
    </section>
  );
}
