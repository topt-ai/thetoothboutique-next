import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/shared/FAQAccordion';
import RelatedServices from '@/components/shared/RelatedServices';
import CTABanner from '@/components/shared/CTABanner';
import JsonLd from '@/components/JsonLd';
import { SITE, DOCTOR } from '@/lib/site';
import { doctoraMeta as m, doctoraBio, doctoraApproach, doctoraCredentials, doctoraFaqs } from '@/lib/content/doctora';
import { graph, clinicRef, doctorNode, webPageNode, faqNode, breadcrumbNode } from '@/lib/schema';

export const metadata: Metadata = {
  title: m.title,
  description: m.description,
  alternates: { canonical: DOCTOR.url },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: { title: m.ogTitle, description: m.description, url: DOCTOR.url, images: [m.image], type: 'profile' },
  twitter: { title: m.ogTitle, description: m.description, images: [m.image] },
};

const jsonLd = graph([
  clinicRef(),
  { ...doctorNode(), mainEntityOfPage: `${DOCTOR.url}#webpage` },
  webPageNode({ path: m.path, name: m.title, description: m.description, about: { '@id': DOCTOR.id } }),
  faqNode(doctoraFaqs),
  breadcrumbNode([{ name: DOCTOR.name, path: m.path }]),
]);

export default function DoctoraPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <ServiceHero
        breadcrumb={DOCTOR.name}
        h1={`${DOCTOR.name}, ortodoncista en San Salvador`}
        eyebrow="Máster en Ortodoncia"
        taglineLine1="Una doctora."
        taglineLine2="Tu caso, de principio a fin."
        text="Fundadora de The Tooth Boutique. Ve cada caso personalmente desde la primera consulta hasta el último control."
        chips={['Universidad Francisco Marroquín', 'Invisalign Doctor Provider', 'Desde 2020']}
        cta="Agenda tu evaluación"
        secondary={{ label: 'Conocer su formación', href: '#formacion' }}
        image={SITE.images.doctor}
        imageAlt="Dra. Melissa Reneé, ortodoncista en The Tooth Boutique, San Salvador"
        imagePosition="center 20%"
      />

      {/* Bio */}
      <section id="formacion" className="bg-bg py-[120px] px-8 md:px-[8%]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-[8%]">
          <div className="w-full md:w-[55%]">
            <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Formación y trayectoria</span>
            <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-text leading-[1.1] mb-10">
              Máster en Ortodoncia<br />
              <span className="italic font-normal">e Invisalign Doctor Provider</span>
            </h2>
            <div className="space-y-6">
              {doctoraBio.map((p, i) => (
                <p key={i} className="font-body font-light text-[16px] text-muted leading-[1.8]">{p}</p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col gap-4">
            {doctoraCredentials.map((c) => (
              <div key={c.label} className="bg-surface rounded-[20px] p-7 border border-dark/5 shadow-[0_2px_24px_rgba(15,76,92,0.06)]">
                <span className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase block mb-2">{c.label}</span>
                <p className="font-body font-normal text-[15px] text-text leading-[1.5]">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabaja */}
      <section className="bg-dark py-[120px] px-8 md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">// Cómo trabaja</span>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-[#FAFAF8] leading-[1.1] mb-16">
            Ortodoncia de precisión,<br />
            <span className="italic font-normal">sin pasar de mano en mano.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctoraApproach.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-[20px] p-10 border border-white/10">
                <h3 className="font-display font-semibold text-[24px] text-white mb-4">{item.title}</h3>
                <p className="font-body font-light text-[15px] text-white/65 leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <Link href="/invisalign" className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-accent hover:text-white transition-colors">
              Invisalign <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/brackets" className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-accent hover:text-white transition-colors">
              Brackets <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/blanqueamiento" className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-accent hover:text-white transition-colors">
              Blanqueamiento dental <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <VideoSection />
      <Testimonials />
      <FAQAccordion title="Preguntas frecuentes sobre la Dra. Melissa Reneé" faqs={doctoraFaqs} />
      <RelatedServices current="doctora" />
      <CTABanner
        line1="Tu caso, evaluado"
        line2="por la doctora."
        text="La evaluación inicial incluye escaneo 3D, fotografías, radiografías, diagnóstico y plan de tratamiento con el costo exacto para tu caso."
        cta="Agenda tu evaluación"
      />
    </main>
  );
}
