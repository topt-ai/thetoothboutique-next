'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Differentiators() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      num: '01',
      title: 'La mitad del tiempo',
      body: 'Nuestros tratamientos terminan antes que en cualquier otra clínica. Sin comprometer resultados. Sin atajos.',
    },
    {
      num: '02',
      title: 'Tu caso, tu plan',
      body: 'No hay un tratamiento estándar aquí. Cada plan se diseña para tu sonrisa específica desde el primer día.',
    },
    {
      num: '03',
      title: 'Tecnología de primer nivel',
      body: 'Escaneo 3D, planificación digital y equipos de última generación que hacen tu tratamiento más preciso y más corto.',
    },
    {
      num: '04',
      title: 'Una doctora, tu caso',
      body: 'La Dra. Melissa ve tu caso desde el inicio hasta el final. No pasas de mano en mano.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-bg py-[120px] px-8 md:px-[8%]"
    >
      <div className="max-w-[1400px] mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
          // Por qué elegirnos
        </span>

        <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1] mb-16">
          No es solo ortodoncia.<br />
          <span className="italic font-normal">Es precisión.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-surface rounded-[20px] shadow-[0_2px_24px_rgba(15,76,92,0.06)] border border-dark/5 p-10 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="font-display font-semibold text-[24px] text-text mb-4">
                  {card.title}
                </h3>
              </div>
              <p className="font-body font-light text-[15px] text-muted leading-[1.6]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
