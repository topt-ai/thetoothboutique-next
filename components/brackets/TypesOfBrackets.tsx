'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Check } from 'lucide-react';

export default function TypesOfBrackets() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.type-card',
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

  const types = [
    {
      number: '01',
      title: 'Brackets Metálicos',
      subtext: 'La opción más económica y efectiva.',
      body: 'Resistentes, duraderos y efectivos para todos los casos. Los más utilizados en el mundo y los que generan tratamientos más rápidos.',
      items: [
        'Más económicos',
        'Muy resistentes',
        'Efectivos para todos los casos',
        'Tratamiento más rápido'
      ]
    },
    {
      number: '02',
      title: 'Brackets Estéticos',
      subtext: 'Discretos, del color del diente.',
      body: 'Brackets transparentes o del color del diente. Menos visibles que los metálicos. Ideales para adultos que quieren discreción sin renunciar a la precisión.',
      items: [
        'Menos visibles',
        'Material cerámico',
        'No se manchan',
        'Ideales para adultos'
      ]
    },
    {
      number: '03',
      title: 'Brackets Autoligados',
      subtext: 'Tecnología que reduce el tiempo de tratamiento.',
      body: 'No necesitan ligaduras elásticas. Generan menos fricción, son más cómodos y permiten terminar el tratamiento en menos tiempo.',
      items: [
        'Tratamiento más rápido',
        'Menos fricción',
        'Mayor comodidad'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="opciones" className="py-[120px] px-8 md:px-[8%] bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Opciones disponibles
          </span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1]">
            Tipos de Brackets Disponibles
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="type-card bg-white rounded-[20px] p-10 border border-[#0F4C5C]/[0.06] shadow-[0_2px_24px_rgba(15,76,92,0.06)] flex flex-col"
            >
              <h3 className="font-display font-semibold text-[28px] text-text mb-2">
                {type.title}
              </h3>
              <p className="font-body italic font-light text-[15px] text-muted mb-4">
                {type.subtext}
              </p>
              <p className="font-body font-light text-[15px] text-muted leading-[1.6] mb-8">
                {type.body}
              </p>
              
              <div className="mt-auto">
                <ul className="flex flex-col gap-3">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="font-body font-normal text-[14px] text-text leading-[1.4]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
