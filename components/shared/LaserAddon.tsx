import { Check } from 'lucide-react';
import { SITE } from '@/lib/site';

// Complemento opcional al tratamiento de ortodoncia. Sin marcas: al paciente le importa
// el resultado, no el equipo. Lo elige el paciente, no queda a criterio de la doctora.
export default function LaserAddon() {
  return (
    <section className="bg-surface py-[90px] md:py-[110px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto rounded-[24px] bg-dark px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-10 md:gap-[8%]">
        <div className="w-full md:w-[55%]">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-5 block">// Opcional · Versión premium</span>
          <h2 className="font-display font-bold text-[clamp(30px,3.4vw,50px)] text-[#FAFAF8] leading-[1.1] mb-5">
            Láser para terminar antes<br />
            <span className="italic font-normal">y con menos dolor.</span>
          </h2>
          <p className="font-body font-light text-[16px] text-[#FAFAF8]/75 leading-[1.7] max-w-[520px]">
            Un complemento que puedes agregar a tu tratamiento de Invisalign o brackets. Se aplica en tus citas de control y tú decides si lo incluyes en tu plan.
          </p>
        </div>
        <div className="w-full md:w-[45%] flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {['Acelera el tratamiento', 'Reduce el dolor después de cada ajuste', 'Sin citas extra: se aplica en tus controles'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-accent mt-[3px] shrink-0" />
                <span className="font-body font-normal text-[15px] text-[#FAFAF8]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-light inline-flex items-center justify-center self-start text-white font-body font-semibold text-[14px] px-8 py-3.5 rounded-full"
          >
            Pregunta por el láser
          </a>
        </div>
      </div>
    </section>
  );
}
