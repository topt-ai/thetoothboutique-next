import type { FAQ } from '@/components/shared/FAQAccordion';
import { SITE } from '@/lib/site';

export const homeMeta = {
  title: 'Mejor Ortodoncista San Salvador - Tooth Boutique - Invisalign, Brackets Metálicos y Cerámicos, Blanqueamiento Dental y Alineadores Invisibles cerca de mí',
  description: 'Clínica de ortodoncia en San Salvador especializada en Invisalign, brackets metálicos, cerámicos, autoligados y blanqueamiento dental. Zona Rosa, Century Tower. Agenda tu consulta.',
  ogTitle: 'Ortodoncista San Salvador | Invisalign, Brackets y Blanqueamiento – The Tooth Boutique',
  ogDescription: 'Clínica de ortodoncia en San Salvador especializada en Invisalign, brackets y blanqueamiento dental. Zona Rosa, Century Tower.',
  twitterTitle: 'Ortodoncista San Salvador | The Tooth Boutique',
  twitterDescription: 'Invisalign, brackets y blanqueamiento dental en San Salvador. Zona Rosa, Century Tower.',
};

export const homeFaqs: FAQ[] = [
  {
    question: '¿Cuál es la diferencia entre Invisalign y brackets?',
    answer: 'Invisalign usa alineadores transparentes removibles, sin alambres ni brackets visibles. Los brackets son fijos y pueden ser metálicos, cerámicos o autoligados. Ambos corrigen los mismos problemas; la diferencia está en la estética, la comodidad y el estilo de vida de cada paciente.',
  },
  {
    question: '¿Hacen blanqueamiento dental en la misma clínica?',
    answer: 'Sí. Ofrecemos blanqueamiento dental profesional con resultados de 5 a 7 tonos más blanco en una sola sesión de 30 minutos.',
  },
  {
    question: '¿Qué incluye la evaluación inicial?',
    answer: `La evaluación incluye revisión clínica completa, escaneo 3D con tecnología iTero y fotografías extraorales e intraorales para analizar tu caso en detalle. Las radiografías necesarias (panorámica, cefalométrica o 3D) se toman en la misma clínica con un costo de $${SITE.prices.radiografia} cada una.`,
  },
  {
    question: '¿Puedo iniciar tratamiento si ya tengo uno comenzado en otro lugar?',
    answer: 'Sí. Realizamos todos los estudios necesarios para analizar tu caso a fondo y te damos un plan de tratamiento detallado con las opciones disponibles para continuar o retomar tu ortodoncia.',
  },
  {
    question: '¿Puedo cambiar a Invisalign si ya empecé con brackets?',
    answer: 'Sí es posible. Los tratamientos con Invisalign suelen ser más rápidos y cómodos, y en muchos casos se puede hacer la transición dependiendo de la etapa del tratamiento actual.',
  },
  {
    question: '¿Dónde está ubicada The Tooth Boutique?',
    answer: 'Estamos en Century Tower, Zona Rosa, San Salvador.',
  },
  {
    question: '¿Cuánto cuesta la primera consulta o evaluación en The Tooth Boutique?',
    answer: `La evaluación inicial incluye escaneo dental en 3D, fotos extraorales e intraorales, diagnóstico y entrega del plan de tratamiento, con un valor de $${SITE.prices.evaluacion}. Adicionalmente se requieren dos radiografías, con un costo de $${SITE.prices.radiografia} cada una, tomadas en la misma clínica.`,
  },
  {
    question: '¿Cada cuánto debo hacerme una limpieza dental profesional?',
    answer: `Se recomienda una profilaxis o limpieza dental profesional cada 6 meses. En The Tooth Boutique la sesión dura entre 30 y 40 minutos y tiene un costo de $${SITE.prices.profilaxis}.`,
  },
  {
    question: '¿La profilaxis dental quita las manchas de los dientes?',
    answer: 'Sí. La limpieza profesional remueve las manchas superficiales causadas por café, té, tabaco y alimentos, además de eliminar placa y sarro. Para aclarar el color natural del diente varios tonos, el tratamiento indicado es el blanqueamiento dental.',
  },
  {
    question: '¿Puedo hacerme una limpieza dental si ya tengo ortodoncia?',
    answer: 'Sí. Se recomienda una limpieza dental cada 4 a 6 meses, ya sea que tengas tratamiento de brackets o Invisalign, para mantener las encías sanas y los dientes limpios durante la ortodoncia.',
  },
  {
    question: '¿Qué es el láser de fotobiomodulación y cuándo se usa?',
    answer: 'Es un complemento opcional al tratamiento de Invisalign o brackets. Se aplica con láser Ultradent en las citas de control y puede ayudar a reducir las molestias después de cada ajuste y a acortar el tiempo total del tratamiento. No es un tratamiento por sí solo: se cotiza como versión premium de tu plan de ortodoncia y la Dra. Melissa Reneé te indica si aplica para tu caso.',
  },
];
