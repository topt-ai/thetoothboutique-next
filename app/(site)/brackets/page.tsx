import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TypesOfBrackets from '@/components/brackets/TypesOfBrackets';
import ComparisonTable from '@/components/shared/ComparisonTable';
import Advantages from '@/components/brackets/Advantages';
import ProcessSteps from '@/components/shared/ProcessSteps';
import TwoPanelList from '@/components/shared/TwoPanelList';
import StatementStrip from '@/components/shared/StatementStrip';
import LaserAddon from '@/components/shared/LaserAddon';
import DoctorMini from '@/components/shared/DoctorMini';
import FAQAccordion from '@/components/shared/FAQAccordion';
import RelatedServices from '@/components/shared/RelatedServices';
import CTABanner from '@/components/shared/CTABanner';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { bracketsMeta as m, bracketsHero, bracketsSteps, bracketsComparison, bracketsCare, bracketsDoctor, bracketsFaqs } from '@/lib/content/brackets';
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
  howPerformed: 'Brackets metálicos, cerámicos o autoligados adheridos al esmalte y conectados con un alambre que aplica fuerzas controladas. Colocación de 60 a 90 minutos y controles cada 4 semanas.',
  followup: 'Retiro en una sola cita y fase de retención con retenedores fijos o removibles.',
});

const jsonLd = graph([
  clinicRef(),
  doctorNode(),
  webPageNode({ path: m.path, name: m.title, description: m.description, about: { '@id': service['@id'] } }),
  service,
  faqNode(bracketsFaqs),
  howToNode('Proceso de tratamiento con Brackets en The Tooth Boutique', 'Cómo es el proceso de tratamiento con brackets, desde la consulta inicial hasta el retiro y la retención.', bracketsSteps),
  breadcrumbNode([{ name: 'Brackets', path: m.path }]),
]);

export default function BracketsPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <ServiceHero {...bracketsHero} />
      <TypesOfBrackets />
      <ComparisonTable
        eyebrow="// Comparación"
        title="Metálicos, cerámicos o autoligados: diferencias"
        intro="Los tres corrigen los mismos problemas. La diferencia está en la apariencia, la tecnología del sistema y, en algunos casos, el tiempo total."
        columns={bracketsComparison.columns}
        rows={bracketsComparison.rows}
        bg="surface"
      />
      <Advantages />
      <ProcessSteps
        titleLine1="Proceso de Tratamiento"
        titleLine2="con Brackets"
        intro="De la primera cita al retiro. Sin dolor en la colocación y con controles cortos cada 4 semanas."
        steps={bracketsSteps}
        bg="bg"
      />
      <TwoPanelList
        eyebrow="// Cuidados y alimentación"
        titleLine1="Qué comer"
        titleLine2="con brackets"
        intro="Nada está prohibido. Solo hay que partir algunas cosas antes y cuidar la higiene."
        left={bracketsCare.left}
        right={bracketsCare.right}
        footnote={bracketsCare.footnote}
      />
      <LaserAddon />
      <StatementStrip line1="En otros lugares te dicen que tardará 5 años o más." line2="Aquí terminamos antes." />
      <DoctorMini {...bracketsDoctor} />
      <FAQAccordion title="Preguntas Frecuentes sobre Brackets" faqs={bracketsFaqs} />
      <RelatedServices current="brackets" />
      <CTABanner
        line1="¿Quieres saber qué bracket"
        line2="es mejor para ti?"
        text="Tu consulta inicial incluye: evaluación clínica, escaneo 3D, fotografías y radiografías."
        cta="Agenda tu consulta hoy"
      />
    </main>
  );
}
