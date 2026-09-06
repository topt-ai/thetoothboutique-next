'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE, DOCTOR } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

export default function DraMelissa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } });
      gsap.fromTo(copyRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-dark py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-[8%]">
        <div ref={imageRef} className="w-full md:w-[45%] aspect-square rounded-[24px] overflow-hidden border border-accent/20">
          <img
            src={SITE.images.doctor}
            alt="Dra. Melissa Reneé, ortodoncista especialista en Invisalign y brackets, San Salvador"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div ref={copyRef} className="w-full md:w-[55%] flex flex-col justify-center">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// La especialista</span>

          <h2 className="font-display font-bold text-[clamp(36px,4vw,60px)] text-[#FAFAF8] leading-[1.1] mb-10">
            {DOCTOR.name}, ortodoncista en San Salvador<br />
            <span className="italic font-normal">Máster en Ortodoncia</span>
          </h2>

          <div className="space-y-6 mb-12">
            <p className="font-body font-light text-[16px] text-[#FAFAF8]/75 leading-[1.8]">
              La Dra. Reneé realizó sus estudios en la Universidad Evangélica de El Salvador y se especializó en la Universidad Francisco Marroquín de Guatemala, donde obtuvo su Máster en Ortodoncia.
            </p>
            <p className="font-body font-light text-[16px] text-[#FAFAF8]/75 leading-[1.8]">
              Desde que fundó The Tooth Boutique en 2020 ha construido una reputación basada en resultados reales y tiempos de tratamiento que superan los estándares del país. Ve cada caso desde la primera consulta hasta el final.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <div className="font-mono text-[11px] text-accent uppercase tracking-wider">Universidad Francisco Marroquín · Máster en Ortodoncia</div>
            <div className="font-mono text-[11px] text-accent uppercase tracking-wider">Invisalign Doctor Provider</div>
            <div className="font-mono text-[11px] text-accent uppercase tracking-wider">Century Tower, Zona Rosa, San Salvador</div>
          </div>

          <Link
            href={DOCTOR.path}
            className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-accent hover:text-white transition-colors self-start"
          >
            Conoce a la doctora
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
