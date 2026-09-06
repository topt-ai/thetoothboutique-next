// Pilar 4: evaluación, diagnóstico y seguimiento. Reúne consulta, radiografías,
// profilaxis, retenedores y el láser como complemento, sin leer como tarifario.
const cards = [
  {
    label: 'Consulta de ortodoncia',
    title: 'Evaluación inicial',
    items: ['Análisis facial y revisión clínica', 'Escaneo 3D con iTero', 'Fotografías extraorales e intraorales', 'Diagnóstico y plan de tratamiento personalizado'],
  },
  {
    label: 'Radiografías dentales',
    title: 'Panorámica, cefalométrica y 3D',
    items: ['Se toman en la misma clínica', 'La panorámica muestra dientes, mandíbula y estructuras', 'La cefalométrica analiza el perfil y los maxilares', 'La 3D es una tomografía de alta precisión'],
  },
  {
    label: 'Profilaxis dental',
    title: 'Limpieza profesional',
    items: ['Sesión de 30 a 40 minutos', 'Elimina placa, sarro y manchas superficiales', 'Recomendada cada 6 meses', 'Con o sin tratamiento de ortodoncia'],
  },
  {
    label: 'Después del tratamiento',
    title: 'Retenedores y complementos',
    items: ['Retenedores fijos y removibles para proteger el resultado', 'Láser de fotobiomodulación Ultradent como complemento premium a Invisalign o brackets', 'Puede ayudar a reducir molestias tras los ajustes y a acortar el tratamiento', 'La doctora te dice si aplica para tu caso'],
  },
];

export default function FirstVisit() {
  return (
    <section id="evaluacion" className="bg-bg py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Tu primera visita</span>
        <h2 className="font-display font-bold text-[clamp(36px,4vw,60px)] text-text leading-[1.1] mb-6">
          Tu primera consulta:<br />
          <span className="italic font-normal">qué incluye y qué sigue</span>
        </h2>
        <p className="font-body font-light text-[17px] text-muted max-w-[640px] leading-[1.7] mb-16">
          Todo empieza con una evaluación completa. Después, lo que hace falta para cuidar el resultado. El costo exacto de cada tratamiento lo recibes en tu consulta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-surface rounded-[20px] p-8 border border-dark/5 shadow-[0_2px_24px_rgba(15,76,92,0.06)] flex flex-col">
              <span className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase mb-4">{card.label}</span>
              <h3 className="font-display font-semibold text-[22px] text-text leading-tight mb-1">{card.title}</h3>
              <div className="mb-6"></div>
              <ul className="flex flex-col gap-3 mt-auto">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-[8px] shrink-0"></span>
                    <span className="font-body font-light text-[14px] text-muted leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
