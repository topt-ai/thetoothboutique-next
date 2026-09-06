import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DOCTOR } from '@/lib/site';

type Key = 'home' | 'invisalign' | 'brackets' | 'blanqueamiento' | 'doctora';

const ALL: { key: Key; href: string; title: string; text: string }[] = [
  { key: 'invisalign', href: '/invisalign', title: 'Invisalign en San Salvador', text: 'Alineadores transparentes con Invisalign Doctor Provider. Tratamientos de 12 a 18 meses en promedio.' },
  { key: 'brackets', href: '/brackets', title: 'Brackets en San Salvador', text: 'Metálicos, cerámicos y autoligados. Controles cada 4 semanas y opciones para cada presupuesto.' },
  { key: 'blanqueamiento', href: '/blanqueamiento', title: 'Blanqueamiento dental en San Salvador', text: 'De 5 a 7 tonos más blanco en una sola sesión de 10 minutos.' },
  { key: 'doctora', href: DOCTOR.path, title: 'Dra. Melissa Reneé, ortodoncista', text: 'Máster en Ortodoncia e Invisalign Doctor Provider. Ve tu caso de principio a fin.' },
];

// Enlaces visibles entre servicios. Antes solo existían en el bloque oculto.
export default function RelatedServices({ current }: { current: Key }) {
  const items = ALL.filter((i) => i.key !== current);
  return (
    <section className="bg-surface py-[100px] px-8 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// También en The Tooth Boutique</span>
        <h2 className="font-display font-bold text-[clamp(32px,3.5vw,52px)] text-text leading-[1.1] mb-12">
          Otros tratamientos en Zona Rosa, San Salvador
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group bg-bg rounded-[20px] p-8 border border-dark/5 hover:border-accent/40 transition-colors flex flex-col"
            >
              <h3 className="font-display font-semibold text-[20px] text-text mb-3">{item.title}</h3>
              <p className="font-body font-light text-[14px] text-muted leading-[1.6] mb-6">{item.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-body font-medium text-[14px] text-gold">
                Ver más
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="font-body font-light text-[14px] text-muted mt-10">
          Estamos en Century Tower, Zona Rosa. Atendemos pacientes de San Benito, Escalón, Maquilishuat, Antiguo Cuscatlán, Santa Tecla y Santa Elena.{' '}
          <Link href="/#contacto" className="text-dark underline underline-offset-4 decoration-muted/40 hover:decoration-dark">Cómo llegar a la clínica</Link>.
        </p>
      </div>
    </section>
  );
}
