import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'invisalign',
      image: '/invisalign-tratamiento-card.webp',
      tag: 'Alineadores Invisibles',
      title: 'Invisalign',
      body: 'Alineadores invisibles con resultados rápidos y discretos. Sin alambres. Sin molestias. Ideal para adultos que quieren sonreír con confianza desde el primer mes.',
      bullets: [
        'Sin alambres ni molestias',
        'Comodidad total',
        'Resultados rápidos',
      ],
      link: '/invisalign',
    },
    {
      id: 'brackets',
      image: '/brackets-tratamiento-card.webp',
      tag: 'Ortodoncia Tradicional',
      title: 'Brackets Metálicos y Cerámicos',
      body: 'Ortodoncia precisa y efectiva. Metálicos, cerámicos o autoligados. Opciones para cada caso y cada presupuesto, con los mismos tiempos de tratamiento reducidos.',
      bullets: [
        'Metálicos y cerámicos',
        'Autoligados disponibles',
        'Tratamiento más corto',
      ],
      link: '/brackets',
    },
    {
      id: 'blanqueamiento',
      image: '/blanqueamiento-dental-tratamiento-card.webp',
      tag: 'Estética Dental',
      title: 'Blanqueamiento Dental',
      body: 'Una sola sesión de 10 minutos para una sonrisa hasta 7 tonos más blanca. Sin varias visitas, sin largas esperas. Resultados inmediatos ese mismo día.',
      bullets: [
        'Una sola sesión',
        '10 minutos',
        '5 a 7 tonos más blanco',
      ],
      link: '/blanqueamiento',
    },
  ];

  return (
    <section id="tratamientos" className="bg-surface py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
          // Tratamientos
        </span>

        <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1] mb-16">
          Nuestros Servicios<br />
          <span className="italic font-normal text-[24px] text-muted">de Ortodoncia y Estética Dental en San Salvador</span>
        </h2>

        <div className="flex flex-col gap-24 md:gap-32 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-[8%]`}
            >
              <div className="w-full md:w-[45%] aspect-[4/5] md:aspect-square rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(15,76,92,0.08)] border border-dark/5">
                <img
                  src={service.image}
                  alt={`${service.title} en The Tooth Boutique, San Salvador`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <span className="inline-block self-start font-mono text-[10px] text-accent tracking-[0.12em] uppercase bg-accent/10 px-4 py-2 rounded-full mb-6">
                  {service.tag}
                </span>

                <h3 className="font-display font-bold text-[clamp(32px,3vw,48px)] text-text leading-tight mb-6">
                  {service.title}
                </h3>

                <p className="font-body font-light text-[16px] text-muted leading-[1.8] mb-8">
                  {service.body}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-1 shrink-0" />
                      <span className="font-body font-normal text-[15px] text-text">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-gold hover:text-gold/80 transition-colors self-start"
                >
                  Ver tratamiento
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
