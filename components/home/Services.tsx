import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'invisalign',
    image: '/invisalign-tratamiento-card.webp',
    tag: 'Alineadores Invisibles',
    title: 'Invisalign',
    body: 'Alineadores transparentes con resultados rápidos y discretos. Sin alambres, sin molestias. Ideal para adultos y profesionales que quieren sonreír con confianza desde el primer mes.',
    bullets: [
      'Invisalign Doctor Provider',
      'Escaneo iTero 3D: ves el resultado antes de empezar',
      'Tratamientos de 12 a 18 meses en promedio',
    ],
    link: '/invisalign',
  },
  {
    id: 'brackets',
    image: '/brackets-tratamiento-card.webp',
    tag: 'Ortodoncia Tradicional',
    title: 'Brackets',
    body: 'Ortodoncia precisa y efectiva. Metálicos, cerámicos o autoligados. Opciones para cada caso y cada presupuesto, con los mismos tiempos de tratamiento reducidos.',
    bullets: [
      'Metálicos, cerámicos y autoligados',
      'Controles cada 4 semanas',
      'Láser de fotobiomodulación como complemento premium',
    ],
    link: '/brackets',
  },
  {
    id: 'blanqueamiento',
    image: '/blanqueamiento-dental-tratamiento-card.webp',
    tag: 'Estética Dental',
    title: 'Blanqueamiento Dental',
    body: 'Una sola sesión para una sonrisa hasta 7 tonos más blanca. Sin varias visitas, sin esperar semanas. Resultado visible ese mismo día.',
    bullets: ['Una sola sesión de 30 minutos', 'Resultado el mismo día', 'De 5 a 7 tonos más blanco'],
    link: '/blanqueamiento',
  },
];

// Cada servicio principal es un H2. El título de la sección es decorativo.
export default function Services() {
  return (
    <section id="tratamientos" className="bg-surface py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Tratamientos</span>

        <p className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1] mb-16">
          Nuestros Servicios<br />
          <span className="italic font-normal text-[24px] text-muted">de Ortodoncia y Estética Dental</span>
        </p>

        <div className="flex flex-col gap-24 md:gap-32 mt-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-[8%]`}
            >
              <div className="w-full md:w-[45%] aspect-[4/5] md:aspect-square rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(15,76,92,0.08)] border border-dark/5">
                <img
                  src={service.image}
                  alt={`${service.title}, The Tooth Boutique`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <span className="inline-block self-start font-mono text-[10px] text-accent tracking-[0.12em] uppercase bg-accent/10 px-4 py-2 rounded-full mb-6">
                  {service.tag}
                </span>

                <h2 className="font-display font-bold text-[clamp(32px,3vw,48px)] text-text leading-tight mb-6">{service.title}</h2>

                <p className="font-body font-light text-[16px] text-muted leading-[1.8] mb-8">{service.body}</p>

                <ul className="space-y-4 mb-10">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-1 shrink-0" />
                      <span className="font-body font-normal text-[15px] text-text">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-gold hover:text-gold/80 transition-colors self-start"
                >
                  Ver tratamiento
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
