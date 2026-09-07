'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type Step = { title: string; body: string };

type Props = {
  id?: string;
  eyebrow?: string;
  titleLine1: string;
  titleLine2?: string;
  intro?: string;
  steps: Step[];
  bg?: 'surface' | 'bg';
};

export default function ProcessSteps({ id = 'proceso', eyebrow = '// El proceso', titleLine1, titleLine2, intro, steps, bg = 'surface' }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`py-[120px] px-8 md:px-[8%] ${bg === 'surface' ? 'bg-surface' : 'bg-bg'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">{eyebrow}</span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1]">
            {titleLine1}
            {titleLine2 && (
              <>
                <br />
                <span className="italic font-normal">{titleLine2}</span>
              </>
            )}
          </h2>
          {intro && (
            <p className="font-body font-light text-[17px] text-muted max-w-[640px] leading-[1.7] mt-6">{intro}</p>
          )}
        </div>

        <div ref={stepsRef} className="relative">
          <div className="hidden md:block absolute top-[20px] left-0 w-full border-t border-dashed border-[#4ABFBF]/30 z-0"></div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="process-step flex-1 flex flex-col items-start relative">
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[48px] left-[19px] w-[1px] h-[calc(100%-8px)] border-l border-dashed border-[#4ABFBF]/30 z-0"></div>
                )}
                <div className="w-10 h-10 rounded-full bg-[#EAF7F7] flex items-center justify-center font-mono font-semibold text-[14px] text-accent mb-6 relative z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-body font-semibold text-[15px] text-dark mb-3">{step.title}</h3>
                <p className="font-body font-light text-[13px] text-muted leading-[1.6]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
