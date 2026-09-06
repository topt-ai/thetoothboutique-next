'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NumbersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stat1 = { val: 0 };
      gsap.to(stat1, {
        val: 10,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        onUpdate: () => {
          const el = document.getElementById('blanq-stat-1');
          if (el) el.textContent = `${Math.round(stat1.val)} min`;
        },
      });

      const stat2 = { val: 0 };
      gsap.to(stat2, {
        val: 5,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        onUpdate: () => {
          const el = document.getElementById('blanq-stat-2');
          if (el) el.textContent = `${Math.round(stat2.val)} a 7`;
        },
      });

      const stat3 = { val: 0 };
      gsap.to(stat3, {
        val: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        onUpdate: () => {
          const el = document.getElementById('blanq-stat-3');
          if (el) el.textContent = `${Math.round(stat3.val)}`;
        },
      });

      gsap.fromTo(
        '.blanq-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-dark py-[100px] px-8 md:px-[8%]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        <div className="blanq-stat-item text-center">
          <div
            id="blanq-stat-1"
            className="font-display font-bold text-[clamp(64px,8vw,120px)] text-accent leading-none"
          >
            0 min
          </div>
          <div className="font-mono text-[11px] text-white/60 tracking-[0.1em] uppercase mt-4">
            Duración de la sesión
          </div>
        </div>

        <div className="blanq-stat-item text-center">
          <div
            id="blanq-stat-2"
            className="font-display font-bold text-[clamp(64px,8vw,120px)] text-accent leading-none"
          >
            0 a 7
          </div>
          <div className="font-mono text-[11px] text-white/60 tracking-[0.1em] uppercase mt-4">
            Tonos más blanco
          </div>
        </div>

        <div className="blanq-stat-item text-center">
          <div
            id="blanq-stat-3"
            className="font-display font-bold text-[clamp(64px,8vw,120px)] text-accent leading-none"
          >
            0
          </div>
          <div className="font-mono text-[11px] text-white/60 tracking-[0.1em] uppercase mt-4">
            Sola visita
          </div>
        </div>
      </div>
    </section>
  );
}
