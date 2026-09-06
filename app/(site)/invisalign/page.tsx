import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import WhyInvisalign from '@/components/invisalign/WhyInvisalign';
import ComparisonTable from '@/components/shared/ComparisonTable';
import TwoPanelList from '@/components/shared/TwoPanelList';
import ProcessSteps from '@/components/shared/ProcessSteps';
import StatementStrip from '@/components/shared/StatementStrip';
import DoctorMini from '@/components/shared/DoctorMini';
import FAQAccordion from '@/components/shared/FAQAccordion';
import RelatedServices from '@/components/shared/RelatedServices';
import CTABanner from '@/components/shared/CTABanner';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { invisalignMeta as m, invisalignHero, invisalignSteps, invisalignComparison, invisalignCases, invisalignDoctor, invisalignFaqs } from '@/lib/content/invisalign';
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
  howPerformed: 'Serie de alineadores transparentes hechos a medida a partir de un escaneo iTero 3D, que se cambian cada una a dos semanas y se usan de 20 a 22 horas al día. Controles cada 4 semanas.',
  followup: 'Retenedores fijos o removibles al terminar el tratamiento para mantener el resultado.',
});

const jsonLd = graph([
  clinicRef(),
  doctorNode(),
  webPageNode({ path: m.path, name: m.title, description: m.description, about: { '@id': service['@id'] } }),
  service,
  faqNode(invisalignFaqs),
  howToNode('Proceso de tratamiento Invisalign en The Tooth Boutique', 'Cómo es el proceso de tratamiento con Invisalign, desde la consulta inicial hasta los controles cada 4 semanas.', invisalignSteps),
  breadcrumbNode([{ name: 'Invisalign', path: m.path }]),
]);

export default function InvisalignPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <ServiceHero {...invisalignHero} />
      <WhyInvisalign />
      <ComparisonTable
        eyebrow="// Invisalign o brackets"
        title="Invisalign frente a los brackets tradicionales"
        intro="Ambos corrigen los mismos problemas. La diferencia está en la estética, la comodidad y cómo encaja el tratamiento en tu vida."
        columns={invisalignComparison.columns}
        rows={invisalignComparison.rows}
        bg="surface"
      />
      <ProcessSteps
        titleLine1="Proceso de Tratamiento"
        titleLine2="Invisalign"
        intro="Del escaneo al último alineador, sin moldes de yeso y con controles cada 4 semanas."
        steps={invisalignSteps}
        bg="bg"
      />
      <TwoPanelList
        eyebrow="// Casos"
        titleLine1="¿Eres candidato"
        titleLine2="para Invisalign?"
        intro="Invisalign trata hoy la mayoría de los casos que antes solo se hacían con brackets."
        left={invisalignCases.left}
        right={invisalignCases.right}
        footnote={invisalignCases.footnote}
      />
      <StatementStrip line1="La mayoría de clínicas te dicen que tardará 5 años o más." line2="Con nosotros, terminas antes." />
      <DoctorMini {...invisalignDoctor} />
      <FAQAccordion title="Preguntas Frecuentes sobre Invisalign" faqs={invisalignFaqs} />
      <RelatedServices current="invisalign" />
      <CTABanner
        line1="¿Listo para empezar?"
        line2="Da el primer paso."
        text="Tu consulta inicial incluye: evaluación clínica, escaneo 3D y fotografías extraorales e intraorales."
        cta="Agenda tu consulta hoy"
      />
    </main>
  );
}
