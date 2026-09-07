// Qué incluye la primera consulta. Sin precios: esos viven en el FAQ.
const items = [
  {
    title: 'Evaluación clínica',
    body: 'La doctora revisa tu mordida, tu sonrisa y tu perfil, y conversa contigo sobre lo que quieres cambiar.',
  },
  {
    title: 'Escaneo 3D',
    body: 'Modelo digital exacto de tu boca en minutos, sin moldes de yeso. Ves en pantalla cómo puede quedar tu sonrisa.',
  },
  {
    title: 'Fotografías y radiografías',
    body: 'Fotografías extraorales e intraorales, y radiografía panorámica, cefalométrica y 3D, tomadas en la misma clínica.',
  },
  {
    title: 'Diagnóstico y plan',
    body: 'Sales con un plan de tratamiento personalizado, con las opciones y los tiempos estimados para tu caso.',
  },
];

export default function FirstVisit() {
  return (
    <section id="evaluacion" className="bg-bg py-[100px] md:py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Tu primera consulta</span>
        <h2 className="font-display font-bold text-[clamp(36px,4vw,60px)] text-text leading-[1.1] mb-6">
          Qué incluye<br />
          <span className="italic font-normal">la evaluación inicial</span>
        </h2>
        <p className="font-body font-light text-[17px] text-muted max-w-[640px] leading-[1.7] mb-14">
          Todo lo necesario para analizar tu caso en detalle y darte una respuesta clara el mismo día.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="bg-surface rounded-[20px] p-8 border border-dark/5 shadow-[0_2px_24px_rgba(15,76,92,0.06)] flex flex-col">
              <span className="font-mono text-[11px] text-accent tracking-[0.12em] mb-5">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display font-semibold text-[22px] text-text leading-tight mb-3">{item.title}</h3>
              <p className="font-body font-light text-[14px] text-muted leading-[1.6]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
