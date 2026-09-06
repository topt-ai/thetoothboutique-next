type Panel = { title: string; items: string[]; tone: 'positive' | 'negative' };

type Props = {
  id?: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2?: string;
  intro?: string;
  left: Panel;
  right: Panel;
  footnote?: string;
};

// Dos paneles con listas cortas (sí / no, antes / ahora). Lectura en 10 segundos.
export default function TwoPanelList({ id, eyebrow, titleLine1, titleLine2, intro, left, right, footnote }: Props) {
  const render = (panel: Panel, highlighted: boolean) => (
    <div className={`${highlighted ? 'bg-white shadow-[0_2px_24px_rgba(15,76,92,0.06)]' : 'bg-bg'} rounded-[20px] p-10 border border-dark/5`}>
      <h3 className={`font-body font-bold text-[16px] ${highlighted ? 'text-accent' : 'text-muted'} mb-8`}>{panel.title}</h3>
      <ul className="flex flex-col gap-5">
        {panel.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={`${panel.tone === 'positive' ? 'text-accent' : 'text-muted/60'} font-body font-medium text-[15px] mt-[1px]`}>
              {panel.tone === 'positive' ? '✓' : '×'}
            </span>
            <span className={`font-body font-light text-[15px] ${highlighted ? 'text-dark' : 'text-muted'} leading-[1.5]`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id={id} className="py-[120px] px-8 md:px-[8%] bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">{eyebrow}</span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1] mb-6">
            {titleLine1}
            {titleLine2 && (
              <>
                <br />
                <span className="italic font-normal">{titleLine2}</span>
              </>
            )}
          </h2>
          {intro && <p className="font-body font-light text-[17px] text-muted max-w-[560px] leading-[1.7]">{intro}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {render(left, false)}
          {render(right, true)}
        </div>
        {footnote && <p className="font-body font-light text-[14px] text-muted mt-8 max-w-[720px] leading-[1.6]">{footnote}</p>}
      </div>
    </section>
  );
}
