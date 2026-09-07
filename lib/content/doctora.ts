import type { FAQ } from '@/components/shared/FAQAccordion';
import { SITE, DOCTOR } from '@/lib/site';

export const doctoraMeta = {
  path: DOCTOR.path,
  title: 'Dra. Melissa Reneé | Ortodoncista en San Salvador con Máster en Ortodoncia e Invisalign Doctor Provider | The Tooth Boutique',
  description: 'Conoce a la Dra. Melissa Reneé, ortodoncista en San Salvador. Máster en Ortodoncia por la Universidad Francisco Marroquín, Invisalign Doctor Provider y fundadora de The Tooth Boutique en Zona Rosa. Agenda tu evaluación.',
  ogTitle: 'Dra. Melissa Reneé, Ortodoncista en San Salvador | The Tooth Boutique',
  image: SITE.images.doctor,
};

// Solo datos confirmados: formación, certificación, año de fundación, tecnología de la clínica.
export const doctoraBio = [
  'La Dra. Melissa Reneé es ortodoncista y fundadora de The Tooth Boutique. Realizó sus estudios de odontología en la Universidad Evangélica de El Salvador y se especializó en la Universidad Francisco Marroquín de Guatemala, donde obtuvo su Máster en Ortodoncia.',
  'Es Invisalign Doctor Provider, una certificación que Align Technology otorga a los profesionales con experiencia comprobada y un volumen mínimo de casos completados al año. En la práctica significa que planifica y trata casos con Invisalign todos los días, incluidos los casos complejos del sistema, y que el plan que diseña para tu boca se basa en casos reales, no en suposiciones.',
  'Fundó The Tooth Boutique en 2020 con una idea clara: tratamientos de ortodoncia que terminan antes de lo que el paciente espera, sin comprometer el resultado. Desde entonces ha construido una reputación basada en resultados reales y tiempos de tratamiento que superan los estándares del país.',
];

export const doctoraApproach = [
  {
    title: 'Una doctora, tu caso',
    body: 'La Dra. Melissa ve cada caso desde la primera consulta hasta el retiro de los brackets o el último alineador. No pasas de mano en mano.',
  },
  {
    title: 'Tu caso, tu plan',
    body: 'No hay un tratamiento estándar. Cada plan se diseña para tu sonrisa desde el primer día, con escaneo iTero 3D, fotografías y radiografías tomadas en la misma clínica.',
  },
  {
    title: 'Terminar antes',
    body: 'Invisalign en promedio de 12 a 18 meses, brackets de 18 a 24 y menos con autoligados. Controles cada 4 semanas para que nada se atrase.',
  },
  {
    title: 'Tecnología de punta',
    body: 'Un centro moderno con la mejor tecnología para planificar y transformar tu sonrisa: escaneo 3D, planificación digital y equipos que hacen el tratamiento más preciso y más corto.',
  },
];

export const doctoraCredentials = [
  { label: 'Especialidad', value: 'Máster en Ortodoncia, Universidad Francisco Marroquín, Guatemala' },
  { label: 'Formación', value: 'Odontología, Universidad Evangélica de El Salvador' },
  { label: 'Certificación', value: 'Invisalign Doctor Provider, Align Technology' },
  { label: 'Clínica', value: `Fundadora de The Tooth Boutique, ${SITE.founded}` },
];

export const doctoraFaqs: FAQ[] = [
  {
    question: '¿La Dra. Melissa Reneé es especialista en ortodoncia?',
    answer: 'Sí. Es odontóloga por la Universidad Evangélica de El Salvador y obtuvo su Máster en Ortodoncia en la Universidad Francisco Marroquín de Guatemala. Su práctica en The Tooth Boutique está enfocada en ortodoncia: Invisalign, brackets metálicos, cerámicos y autoligados, además de blanqueamiento dental.',
  },
  {
    question: '¿Qué significa que sea Invisalign Doctor Provider?',
    answer: 'Es la certificación que Align Technology otorga a los profesionales con experiencia comprobada y un volumen mínimo de casos completados al año con Invisalign. Para el paciente se traduce en más experiencia interpretando escaneos, acceso a herramientas como Invisalign Comprehensive y un manejo más fluido de imprevistos durante el tratamiento.',
  },
  {
    question: '¿Atiende personalmente todos los casos?',
    answer: 'Sí. La Dra. Melissa ve tu caso desde la evaluación inicial hasta el final del tratamiento. Los controles, los ajustes y las decisiones sobre tu plan las toma ella, no un asistente ni un doctor distinto en cada cita.',
  },
  {
    question: '¿Dónde atiende la Dra. Melissa Reneé?',
    answer: `En The Tooth Boutique, ${SITE.address.street}, San Salvador. Horario: ${SITE.hours.weekdays}, ${SITE.hours.saturday}.`,
  },
  {
    question: '¿Qué incluye la primera consulta con la doctora?',
    answer: `La evaluación inicial incluye revisión clínica completa, escaneo 3D con tecnología iTero, fotografías extraorales e intraorales, radiografía panorámica, cefalométrica y 3D, diagnóstico y entrega del plan de tratamiento. Tiene un valor de $${SITE.prices.evaluacion}; las radiografías se toman en la misma clínica a $${SITE.prices.radiografia} cada una.`,
  },
  {
    question: '¿Cómo agendo una cita?',
    answer: `Por WhatsApp al ${SITE.phoneDisplay} o llamando al mismo número. También puedes escribir a ${SITE.email}. Te confirmamos fecha y hora el mismo día.`,
  },
];
