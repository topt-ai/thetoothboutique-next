import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import NumbersSection from '@/components/blanqueamiento/NumbersSection';
import ProcessSteps from '@/components/shared/ProcessSteps';
import WhyDifferent from '@/components/blanqueamiento/WhyDifferent';
import TwoPanelList from '@/components/shared/TwoPanelList';
import ComparisonTable from '@/components/shared/ComparisonTable';
import StatementStrip from '@/components/shared/StatementStrip';
import DoctorMini from '@/components/shared/DoctorMini';
import FAQAccordion from '@/components/shared/FAQAccordion';
import RelatedServices from '@/components/shared/RelatedServices';
import CTABanner from '@/components/shared/CTABanner';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { blanqueamientoMeta as m, blanqueamientoHero, blanqueamientoSteps, blanqueamientoCandidates, blanqueamientoAftercare, blanqueamientoDoctor, blanqueamientoFaqs } from '@/lib/content/blanqueamiento';
import { graph, clinicRef, doctorNode, webPageNode, serviceNode, faqNode, howToNode, breadcrumbNode } from '@/lib/schema';

export const metadata: Metadata = {
  title: m.title,
  description: m.description,
  alternates: { canonical: `${SITE.url}${m.path}` },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: { title: m.ogTitle, description: m.description, url: `${SITE.url}${m.path}`, images: [SITE.images.og] },
  twitter: { title: m.ogTitle, description: m.description, images: [SITE.images.og] },
};

const service = serviceNode({
  path: m.path,
  name: m.serviceName,
  description: m.serviceDescription,
  image: m.image,
  howPerformed: 'Gel de peróxido en concentración profesional aplicado sobre el esmalte con encías y labios protegidos, activado con luz LED durante una sola sesión de 30 minutos.',
  followup: 'Dieta blanca durante 48 horas y profilaxis cada 6 meses. Sesión de mantenimiento opcional cada 12 a 18 meses.',
});

const jsonLd = graph([
  clinicRef(),
  doctorNode(),
  webPageNode({ path: m.path, name: m.title, description: m.description, about: { '@id': service['@id'] } }),
  service,
  faqNode(blanqueamientoFaqs),
  howToNode('Proceso de blanqueamiento dental en The Tooth Boutique', 'Cómo funciona el blanqueamiento dental en una sola sesión de 30 minutos.', blanqueamientoSteps),
  breadcrumbNode([{ name: 'Blanqueamiento Dental', path: m.path }]),
]);

export default function BlanqueamientoPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <ServiceHero {...blanqueamientoHero} />
      <NumbersSection />
      <ProcessSteps
        id="como-funciona"
        titleLine1="Así de simple."
        titleLine2="Así de rápido."
        intro="Una sola sesión de 30 minutos. Gel profesional, luz LED y resultado el mismo día."
        steps={blanqueamientoSteps}
        bg="bg"
      />
      <WhyDifferent />
      <TwoPanelList
        eyebrow="// Candidatos"
        titleLine1="¿Es para ti"
        titleLine2="el blanqueamiento?"
        intro="El resultado es excelente y predecible cuando el punto de partida es el correcto."
        left={blanqueamientoCandidates.left}
        right={blanqueamientoCandidates.right}
        footnote={blanqueamientoCandidates.footnote}
      />
      <ComparisonTable
        eyebrow="// Después de la sesión"
        title="Cómo cuidar el resultado"
        intro="El blanqueamiento dura entre 1 y 2 años en promedio. Lo que hagas las primeras 48 horas y tus hábitos después marcan la diferencia."
        columns={blanqueamientoAftercare.columns}
        rows={blanqueamientoAftercare.rows}
        bg="bg"
      />
      <StatementStrip line1="Antes necesitabas varias sesiones para notar algo." line2="Aquí solo necesitas una sesión." />
      <DoctorMini {...blanqueamientoDoctor} bg="surface" />
      <FAQAccordion title="Preguntas frecuentes sobre blanqueamiento" faqs={blanqueamientoFaqs} />
      <RelatedServices current="blanqueamiento" />
      <CTABanner
        line1="Tu sonrisa más blanca"
        line2="te espera."
        text="Una sola sesión de 30 minutos. Sin varias visitas, sin esperar semanas. Escríbenos y agendamos."
        cta="Agendar cita por WhatsApp"
      />
    </main>
  );
}
