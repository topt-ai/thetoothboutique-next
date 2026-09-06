'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blanq-diff-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[120px] px-8 md:px-[8%] bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="blanq-diff-element font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Por qué es diferente
          </span>
          <h2 className="blanq-diff-element font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1] mb-6">
            No es el blanqueamiento<br />
            <span className="italic font-normal">que ya conoces.</span>
          </h2>
          <p className="blanq-diff-element font-body font-light text-[17px] text-muted max-w-[560px] leading-[1.7]">
            Los blanqueamientos tradicionales toman 45 minutos o más, a veces en varias sesiones. Este no.
          </p>
        </div>

        <div className="blanq-diff-element grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel - Traditional */}
          <div className="bg-bg rounded-[20px] p-10 border border-dark/5">
            <h3 className="font-body font-bold text-[16px] text-muted mb-8">
              Blanqueamiento tradicional
            </h3>
            <div className="flex flex-col gap-5">
              {[
                '45 minutos o más por sesión',
                'Varias sesiones para ver resultado',
                'Sensibilidad frecuente después de la sesión',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-muted/60 font-body font-medium text-[15px] mt-[1px]">&times;</span>
                  <span className="font-body font-light text-[15px] text-muted leading-[1.5]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Tooth Boutique */}
          <div className="bg-white rounded-[20px] p-10 border border-dark/5 shadow-[0_2px_24px_rgba(15,76,92,0.06)]">
            <h3 className="font-body font-bold text-[16px] text-accent mb-8">
              The Tooth Boutique
            </h3>
            <div className="flex flex-col gap-5">
              {[
                '10 minutos por sesión',
                'Una sola visita, resultado inmediato',
                'Hasta 7 tonos más blanco ese mismo día',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent font-body font-medium text-[15px] mt-[1px]">&#10003;</span>
                  <span className="font-body font-light text-[15px] text-dark leading-[1.5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
