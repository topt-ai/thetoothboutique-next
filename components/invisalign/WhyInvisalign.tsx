'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyInvisalign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      number: '01',
      title: 'Invisible',
      body: 'Nadie notará que llevas ortodoncia. Perfecto para adultos y profesionales que no quieren cambiar su imagen durante el tratamiento.',
    },
    {
      number: '02',
      title: 'Removible',
      body: 'Come lo que quieras. Retíralos para comer y cepillarte los dientes. Tu rutina diaria no cambia.',
    },
    {
      number: '03',
      title: 'Rápido',
      body: 'Resultados visibles desde los primeros meses. Tratamientos completos en promedio de 12 a 18 meses, muchos casos menos.',
    },
    {
      number: '04',
      title: 'Preciso',
      body: 'Tecnología 3D que planifica cada movimiento con precisión milimétrica antes de que empiece tu tratamiento.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-[120px] px-8 md:px-[8%] bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Por qué Invisalign
          </span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1]">
            ¿Por Qué Elegir Invisalign?
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="why-card bg-white rounded-[20px] p-10 border border-[#0F4C5C]/[0.06] shadow-[0_2px_24px_rgba(15,76,92,0.06)]"
            >
              <h3 className="font-display font-semibold text-[24px] text-text mb-4">
                {card.title}
              </h3>
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
