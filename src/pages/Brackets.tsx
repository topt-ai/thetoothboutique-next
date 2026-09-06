import React, { useEffect } from 'react';
import BracketsHero from '../components/brackets/BracketsHero';
import TypesOfBrackets from '../components/brackets/TypesOfBrackets';
import Advantages from '../components/brackets/Advantages';
import ProcessSection from '../components/brackets/ProcessSection';
import StatementStrip from '../components/brackets/StatementStrip';
import DraMelissaMini from '../components/brackets/DraMelissaMini';
import FAQSection from '../components/brackets/FAQSection';
import CTABanner from '../components/brackets/CTABanner';

// Title, meta, canonical y JSON-LD viven en brackets.html (única fuente de verdad).
export default function Brackets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BracketsHero />
      <TypesOfBrackets />
      <Advantages />
      <ProcessSection />
      <StatementStrip />
      <DraMelissaMini />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
