import { SITE, DOCTOR, CLINIC_ID, WEBSITE_ID } from './site';
import type { FAQ } from '@/components/shared/FAQAccordion';
import type { Step } from '@/components/shared/ProcessSteps';

const abs = (path: string) => `${SITE.url}${path}`;
const joinAnswer = (a: string | string[]) => (Array.isArray(a) ? a.join(' ') : a);

// Reseñas visibles en la sección de testimonios de la home.
export const REVIEWS = [
  { name: 'Katherine P.', text: 'Increíble el cambio que he visto en tan poco tiempo con usted, la mejor sin duda' },
  { name: 'Jose N.', text: 'Me gusto mucho la atención personalizada que prestan, y me gustaron mucho las instalaciones, ya que tiene equipos muy modernos. Es una clínica 5 estrellas' },
  { name: 'Isai N.', text: 'Super recomendado. Disfruté mucho mi tratamiento, tuve resultados muy satisfactorios. El tratamiento que en otros lugares me decían que se tardaría entre 2 años y medio o 3, salió en solo un año y medio con ella. Realmente fue una de las mejores decisiones de mi vida.' },
  { name: 'Meybel C.', text: 'Encantada con los resultados' },
  { name: 'Diego C.', text: 'Un lugar muy bonito para la atención de los clientes, está a la vanguardia de la tecnología' },
  { name: 'Geovanny A.', text: 'Un lugar muy bonito para la atención de los clientes, esta a la vanguardia de la tecnología' },
  { name: 'Carlos H.', text: 'Excelente servicio, muy profesionales en todo momento.' },
  { name: 'Eduardo B.', text: 'Muy buena atención y resultados increíbles.' },
  { name: 'Shamby T.', text: 'La mejor clínica de ortodoncia de todo sivar!!' },
];

const address = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

const areaServed = SITE.areas.map((name) => ({ '@type': name === 'San Salvador' ? 'City' : 'Place', name }));

const procedure = (name: string, description: string) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'MedicalProcedure', name, description },
});

// Catálogo en 4 pilares, espejo de la jerarquía visible de la home.
const offerCatalog = {
  '@type': 'OfferCatalog',
  name: 'Servicios de The Tooth Boutique',
  itemListElement: [
    {
      '@type': 'OfferCatalog',
      name: 'Invisalign: ortodoncia invisible',
      itemListElement: [
        procedure('Invisalign', 'Alineadores transparentes Invisalign con escaneo iTero 3D. Invisalign Doctor Provider. Tratamiento promedio de 12 a 18 meses.'),
        procedure('Ortodoncia para Adultos', 'Tratamientos de ortodoncia para adultos y profesionales con opciones discretas como Invisalign y brackets cerámicos.'),
      ],
    },
    {
      '@type': 'OfferCatalog',
      name: 'Brackets: metálicos, cerámicos y autoligados',
      itemListElement: [
        procedure('Brackets Metálicos', 'Brackets metálicos tradicionales, la opción más probada y asequible.'),
        procedure('Brackets Cerámicos', 'Brackets cerámicos estéticos del color del diente.'),
        procedure('Brackets Autoligados', 'Brackets autoligados con menos fricción, para tratamientos más rápidos y menos citas de ajuste.'),
      ],
    },
    {
      '@type': 'OfferCatalog',
      name: 'Blanqueamiento dental y limpieza profesional',
      itemListElement: [
        procedure('Blanqueamiento Dental', 'Blanqueamiento dental profesional con resultados de 5 a 7 tonos más blanco en una sola sesión de 30 minutos.'),
        procedure('Profilaxis Dental', `Limpieza dental profesional que elimina placa, sarro y manchas superficiales. Sesión de 30 a 40 minutos, recomendada cada 6 meses, con un costo de $${SITE.prices.profilaxis}.`),
      ],
    },
    {
      '@type': 'OfferCatalog',
      name: 'Evaluación, diagnóstico y seguimiento',
      itemListElement: [
        {
          '@type': 'Offer',
          price: String(SITE.prices.evaluacion),
          priceCurrency: 'USD',
          itemOffered: { '@type': 'MedicalProcedure', name: 'Consulta de Ortodoncia', description: 'Evaluación inicial con revisión clínica, escaneo 3D iTero, fotografías extraorales e intraorales, radiografía panorámica, cefalométrica y 3D, y plan de tratamiento personalizado.' },
        },
        {
          '@type': 'Offer',
          price: String(SITE.prices.radiografia),
          priceCurrency: 'USD',
          itemOffered: { '@type': 'MedicalProcedure', name: 'Radiografías Dentales', description: 'Radiografía panorámica, cefalométrica y 3D tomadas en la misma clínica. Costo por radiografía.' },
        },
        procedure('Retenedores', 'Retenedores fijos y removibles para mantener la posición de los dientes después del tratamiento de ortodoncia.'),
        procedure('Fotobiomodulación Láser (complemento premium)', 'Complemento opcional al tratamiento de Invisalign o brackets con láser Ultradent, aplicado en las citas de control. Puede ayudar a reducir molestias tras los ajustes y a acortar el tiempo total de ortodoncia. Se cotiza como add-on al plan de tratamiento.'),
      ],
    },
  ],
};

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'es-SV',
    publisher: { '@id': CLINIC_ID },
  };
}

// Nodo completo de la clínica (solo en home).
export function clinicNode() {
  return {
    '@type': ['Dentist', 'LocalBusiness'],
    '@id': CLINIC_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    logo: abs(SITE.images.logo),
    image: abs(SITE.images.og),
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$',
    foundingDate: SITE.founded,
    founder: { '@id': DOCTOR.id },
    employee: { '@id': DOCTOR.id },
    medicalSpecialty: 'Dentistry',
    address,
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ],
    hasOfferCatalog: offerCatalog,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '124', bestRating: '5', worstRating: '1' },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@id': CLINIC_ID },
    })),
    hasMap: SITE.mapUrl,
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.tiktok],
  };
}

// Nodo mínimo de la clínica para que provider/@id resuelva en páginas interiores.
export function clinicRef() {
  return {
    '@type': ['Dentist', 'LocalBusiness'],
    '@id': CLINIC_ID,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address,
    image: abs(SITE.images.og),
  };
}

// Persona: la doctora. En schema.org Physician y Dentist son tipos de organización,
// por eso la persona va como Person con ocupación y credenciales.
export function doctorNode() {
  return {
    '@type': 'Person',
    '@id': DOCTOR.id,
    name: DOCTOR.name,
    url: DOCTOR.url,
    image: DOCTOR.image,
    jobTitle: DOCTOR.jobTitle,
    worksFor: { '@id': CLINIC_ID },
    hasOccupation: { '@type': 'Occupation', name: 'Ortodoncista', occupationLocation: { '@type': 'City', name: 'San Salvador' } },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: DOCTOR.credentials.undergradUniversity },
      { '@type': 'CollegeOrUniversity', name: DOCTOR.credentials.masterUniversity },
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: DOCTOR.credentials.master, recognizedBy: { '@type': 'CollegeOrUniversity', name: DOCTOR.credentials.masterUniversity } },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: DOCTOR.credentials.invisalign, recognizedBy: { '@type': 'Organization', name: 'Align Technology' } },
    ],
    knowsAbout: ['Ortodoncia', 'Invisalign', 'Brackets autoligados', 'Ortodoncia para adultos', 'Escaneo intraoral iTero'],
    sameAs: [SITE.social.tiktok],
  };
}

type PageArgs = { path: string; name: string; description: string; about?: object; lastReviewed?: string };

export function webPageNode({ path, name, description, about, lastReviewed = '2026-09-06' }: PageArgs) {
  return {
    '@type': 'MedicalWebPage',
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    inLanguage: 'es-SV',
    isPartOf: { '@id': WEBSITE_ID },
    about: about ?? { '@id': CLINIC_ID },
    reviewedBy: { '@id': DOCTOR.id },
    lastReviewed,
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
      ...items.map((it, i) => ({ '@type': 'ListItem', position: i + 2, name: it.name, item: abs(it.path) })),
    ],
  };
}

export function faqNode(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: joinAnswer(f.answer) },
    })),
  };
}

export function howToNode(name: string, description: string, steps: Step[]) {
  return {
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })),
  };
}

type ServiceArgs = { path: string; name: string; description: string; image?: string; howPerformed?: string; followup?: string };

export function serviceNode({ path, name, description, image, howPerformed, followup }: ServiceArgs) {
  return {
    '@type': 'MedicalProcedure',
    '@id': `${abs(path)}#service`,
    name,
    description,
    url: abs(path),
    image: image ? abs(image) : undefined,
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    howPerformed,
    followup,
    provider: { '@id': CLINIC_ID },
    areaServed,
    offers: {
      '@type': 'Offer',
      name: 'Evaluación inicial de ortodoncia',
      price: String(SITE.prices.evaluacion),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: abs(path),
    },
  };
}

export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
