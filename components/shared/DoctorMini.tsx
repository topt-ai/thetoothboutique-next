'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE, DOCTOR } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  eyebrow: string;
  subtitle: string;
  text: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  cta?: string;
  bg?: 'bg' | 'surface';
};

export default function DoctorMini({
  eyebrow,
  subtitle,
  text,
  bullets = [],
  image = '/radiografia.webp',
  imageAlt = 'Radiografía panorámica usada para planificación de ortodoncia en The Tooth Boutique, San Salvador',
  cta = 'Agenda tu consulta',
  bg = 'bg',
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo(
        '.dra-text-element',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`py-[100px] px-8 md:px-[8%] ${bg === 'surface' ? 'bg-surface' : 'bg-bg'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div ref={imageRef} className="w-full md:w-[40%] h-[480px] rounded-[20px] overflow-hidden">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover object-center" loading="lazy" />
        </div>

        <div ref={contentRef} className="w-full md:w-[60%] flex flex-col justify-center">
          <span className="dra-text-element font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6">{eyebrow}</span>

          <h3 className="dra-text-element font-display font-bold text-[clamp(32px,3vw,52px)] text-text leading-[1.1] mb-2">
            {DOCTOR.name}
          </h3>

          <p className="dra-text-element font-display italic font-normal text-[20px] text-muted mb-8">{subtitle}</p>

          <p className="dra-text-element font-body font-light text-[16px] text-muted leading-[1.8] max-w-[540px] mb-10">{text}</p>

          {bullets.length > 0 && (
            <ul className="dra-text-element flex flex-col gap-[14px] mb-12">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-[11px] text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="dra-text-element flex flex-wrap items-center gap-6">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center justify-center font-body font-semibold text-[14px] px-8 py-3.5 rounded-full"
            >
              {cta}
            </a>
            <Link
              href={DOCTOR.path}
              className="font-body font-normal text-[14px] text-muted hover:text-dark underline decoration-muted/30 hover:decoration-dark underline-offset-4 transition-all"
            >
              Conoce a la doctora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
