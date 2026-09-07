import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import SmilePreview from '@/components/home/SmilePreview';
import Differentiators from '@/components/home/Differentiators';
import Services from '@/components/home/Services';
import FirstVisit from '@/components/home/FirstVisit';
import LaserAddon from '@/components/shared/LaserAddon';
import DraMelissa from '@/components/home/DraMelissa';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/shared/FAQAccordion';
import Contact from '@/components/Contact';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { homeMeta, homeFaqs } from '@/lib/content/home';
import { graph, websiteNode, clinicNode, doctorNode, webPageNode, faqNode } from '@/lib/schema';

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: { title: homeMeta.ogTitle, description: homeMeta.ogDescription, url: SITE.url, images: [SITE.images.og] },
  twitter: { title: homeMeta.twitterTitle, description: homeMeta.twitterDescription, images: [SITE.images.og] },
};

const jsonLd = graph([
  websiteNode(),
  clinicNode(),
  doctorNode(),
  webPageNode({ path: '/', name: homeMeta.title, description: homeMeta.description }),
  faqNode(homeFaqs),
]);

export default function HomePage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <Hero />
      <SmilePreview />
      <Differentiators />
      <Services />
      <FirstVisit />
      <LaserAddon />
      <DraMelissa />
      <VideoSection />
      <Testimonials />
      <FAQAccordion title="Preguntas Frecuentes" faqs={homeFaqs} />
      <Contact />
    </main>
  );
}
