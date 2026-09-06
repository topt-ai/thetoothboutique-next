import React, { useEffect } from 'react';
import BlanqueamientoHero from '../components/blanqueamiento/BlanqueamientoHero';
import NumbersSection from '../components/blanqueamiento/NumbersSection';
import ProcessSection from '../components/blanqueamiento/ProcessSection';
import WhyDifferent from '../components/blanqueamiento/WhyDifferent';
import StatementStrip from '../components/blanqueamiento/StatementStrip';
import DraMelissaMini from '../components/blanqueamiento/DraMelissaMini';
import FAQSection from '../components/blanqueamiento/FAQSection';
import CTABanner from '../components/blanqueamiento/CTABanner';

// Title, meta, canonical y JSON-LD viven en blanqueamiento.html (única fuente de verdad).
export default function Blanqueamiento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BlanqueamientoHero />
      <NumbersSection />
      <ProcessSection />
      <WhyDifferent />
      <StatementStrip />
      <DraMelissaMini />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
