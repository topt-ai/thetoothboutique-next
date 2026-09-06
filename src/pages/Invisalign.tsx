import React, { useEffect } from 'react';
import InvisalignHero from '../components/invisalign/InvisalignHero';
import WhyInvisalign from '../components/invisalign/WhyInvisalign';
import ProcessSection from '../components/invisalign/ProcessSection';
import StatementStrip from '../components/invisalign/StatementStrip';
import DraMelissaMini from '../components/invisalign/DraMelissaMini';
import FAQSection from '../components/invisalign/FAQSection';
import CTABanner from '../components/invisalign/CTABanner';

// Title, meta, canonical y JSON-LD viven en invisalign.html (única fuente de verdad).
export default function Invisalign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <InvisalignHero />
      <WhyInvisalign />
      <ProcessSection />
      <StatementStrip />
      <DraMelissaMini />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
