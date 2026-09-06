'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.advantage-card',
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

  const advantages = [
    {
      number: '01',
      title: 'Efectividad comprobada',
      body: 'Décadas de resultados respaldan la efectividad de los brackets para casos de todo nivel de complejidad.',
    },
    {
      number: '02',
      title: 'Control preciso',
      body: 'Permiten movimientos dentales milimétricos y controlados. La Dra. Reneé planifica cada detalle antes de colocarlos.',
    },
    {
      number: '03',
      title: 'Versatilidad',
      body: 'Tratan desde los casos más simples hasta los más complejos. Ningún caso queda fuera de las opciones con brackets.',
    },
    {
      number: '04',
      title: 'Resultados rápidos',
      body: 'Cambios visibles en los primeros meses. Con brackets autoligados, el tiempo de tratamiento se reduce aún más.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-[120px] px-8 md:px-[8%] bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Por qué brackets
          </span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-white leading-[1.1]">
            Ventajas de la Ortodoncia<br />
            <span className="italic font-normal">con Brackets</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="advantage-card bg-white/5 rounded-[20px] p-10 border border-white/10"
            >
              <h3 className="font-display font-semibold text-[24px] text-white mb-4">
                {adv.title}
              </h3>
              <p className="font-body font-light text-[15px] text-white/65 leading-[1.6]">
                {adv.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
