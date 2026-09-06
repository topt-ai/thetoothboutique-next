
const Card = ({ name, text, image }: { name: string; text: string; image?: string }) => (
  <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_20px_rgba(15,76,92,0.06)] border border-dark/5 mb-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-display font-semibold text-[20px] text-accent overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          name.charAt(0)
        )}
      </div>
      <div>
        <h4 className="font-body font-semibold text-[15px] text-dark leading-tight">
          {name}
        </h4>
        <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
          Paciente
        </span>
      </div>
    </div>
    <p className="font-body font-light text-[14px] text-muted leading-[1.7] mb-4">
      "{text}"
    </p>
    <div className="flex text-gold text-[14px]">
      ★★★★★
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Katherine P.',
      text: 'Increíble el cambio que he visto en tan poco tiempo con usted, la mejor sin duda',
      image: '/katherine-p-testimonio-paciente.webp',
    },
    {
      name: 'Jose N.',
      text: 'Me gusto mucho la atención personalizada que prestan, y me gustaron mucho las instalaciones, ya que tiene equipos muy modernos. Es una clínica 5 estrellas',
      image: '/jose-n-testimonio-paciente.webp',
    },
    {
      name: 'Isai N.',
      text: 'Super recomendado. Disfruté mucho mi tratamiento, tuve resultados muy satisfactorios. El tratamiento que en otros lugares me decían que se tardaría entre 2 años y medio o 3, salió en solo un año y medio con ella. Realmente fue una de las mejores decisiones de mi vida.',
      image: '/isai-n-testimonio-paciente.webp',
    },
    {
      name: 'Meybel C.',
      text: 'Encantada con los resultados',
      image: '/meybel-c-testimonio-paciente.webp',
    },
    {
      name: 'Diego C.',
      text: 'Un lugar muy bonito para la atención de los clientes, está a la vanguardia de la tecnología',
      image: '/diego-c-testimonio-paciente.webp',
    },
    {
      name: 'Geovanny A.',
      text: 'Un lugar muy bonito para la atención de los clientes, esta a la vanguardia de la tecnología',
      image: '/geovanny-a-testimonio-paciente.webp',
    },
    {
      name: 'Carlos H.',
      text: 'Excelente servicio, muy profesionales en todo momento.',
      image: '/carlos-h-testimonio-paciente.webp',
    },
    {
      name: 'Eduardo B.',
      text: 'Muy buena atención y resultados increíbles.',
      image: '/eduardo-b-testimonio-paciente.webp',
    },
    {
      name: 'Shamby T.',
      text: 'La mejor clínica de ortodoncia de todo sivar!!',
      image: '/shamby-t-testimonio-paciente.webp',
    },
  ];

  // Distribute into 3 columns
  const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const col3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

  return (
    <section className="bg-bg py-[120px] px-8 md:px-[8%] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
          // Pacientes reales
        </span>

        <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-text leading-[1.1]">
          Sonrisas para impresionar
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto relative h-[600px] overflow-hidden">
        {/* Gradients for smooth fade */}
        <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {/* Column 1: Scroll Up */}
          <div className="group h-full overflow-hidden hidden md:block">
            <div className="animate-[scrollUp_35s_linear_infinite] group-hover:[animation-play-state:paused] flex flex-col">
              {col1.map((t, i) => <Card key={i} {...t} />)}
            </div>
          </div>

          {/* Column 2: Scroll Down */}
          <div className="group h-full overflow-hidden">
            <div className="animate-[scrollDown_35s_linear_infinite] group-hover:[animation-play-state:paused] flex flex-col">
              {col2.map((t, i) => <Card key={i} {...t} />)}
            </div>
          </div>

          {/* Column 3: Scroll Up */}
          <div className="group h-full overflow-hidden hidden md:block">
            <div className="animate-[scrollUp_40s_linear_infinite] group-hover:[animation-play-state:paused] flex flex-col">
              {col3.map((t, i) => <Card key={i} {...t} />)}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
