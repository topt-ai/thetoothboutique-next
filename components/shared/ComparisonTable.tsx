type Row = { label: string; values: string[] };

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  columns: string[];
  rows: Row[];
  footnote?: string;
  bg?: 'bg' | 'surface' | 'dark';
};

// Tabla de comparación compacta: la "capa de lectura rápida" de cada servicio.
export default function ComparisonTable({ id, eyebrow, title, intro, columns, rows, footnote, bg = 'bg' }: Props) {
  const dark = bg === 'dark';
  const wrap = dark ? 'bg-dark' : bg === 'surface' ? 'bg-surface' : 'bg-bg';
  const heading = dark ? 'text-white' : 'text-text';
  const body = dark ? 'text-white/70' : 'text-muted';
  const cell = dark ? 'border-white/10' : 'border-dark/10';
  const card = dark ? 'bg-white/5 border-white/10' : 'bg-white border-dark/5 shadow-[0_2px_24px_rgba(15,76,92,0.06)]';

  return (
    <section id={id} className={`${wrap} py-[100px] px-8 md:px-[8%]`}>
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">{eyebrow}</span>
        <h2 className={`font-display font-bold text-[clamp(32px,3.5vw,52px)] ${heading} leading-[1.1] mb-6`}>{title}</h2>
        {intro && <p className={`font-body font-light text-[17px] ${body} max-w-[640px] leading-[1.7] mb-12`}>{intro}</p>}

        <div className={`rounded-[20px] border ${card} overflow-x-auto`}>
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className={`font-mono text-[10px] uppercase tracking-[0.12em] ${body} font-normal p-5 border-b ${cell}`}></th>
                {columns.map((c) => (
                  <th key={c} className={`font-display font-semibold text-[16px] ${heading} p-5 border-b ${cell}`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className={`font-body font-medium text-[14px] ${heading} p-5 border-b ${cell} align-top w-[22%]`}>{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={`font-body font-light text-[14px] ${body} p-5 border-b ${cell} align-top leading-[1.6]`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footnote && <p className={`font-body font-light text-[13px] ${body} mt-6`}>{footnote}</p>}
      </div>
    </section>
  );
}
