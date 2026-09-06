'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQ = { question: string; answer: string | string[] };

type Props = {
  eyebrow?: string;
  title: string;
  faqs: FAQ[];
  id?: string;
};

// Acordeón de preguntas. Las respuestas completas están en el HTML aunque estén
// colapsadas, así que Google y los answer engines las leen tal cual.
export default function FAQAccordion({ eyebrow = '// Preguntas frecuentes', title, faqs, id = 'faq' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-[100px] px-8 md:px-[8%] bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">{eyebrow}</span>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-white leading-[1.1]">{title}</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const paragraphs = Array.isArray(faq.answer) ? faq.answer : [faq.answer];
            return (
              <div key={index} className="border-b border-white/10 pb-4">
                <h3 className="m-0">
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className="font-body font-medium text-[16px] text-white group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`text-accent shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    {paragraphs.map((p, i) => (
                      <p key={i} className="font-body font-light text-[15px] text-white/65 leading-[1.6] pr-8 mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
