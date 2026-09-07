import type { FAQ } from '@/components/shared/FAQAccordion';
import type { Step } from '@/components/shared/ProcessSteps';
import { SITE } from '@/lib/site';

export const blanqueamientoMeta = {
  path: '/blanqueamiento',
  title: 'Blanqueamiento Dental San Salvador | De 5 a 7 tonos más blanco en una sola sesión – The Tooth Boutique',
  description: 'Blanqueamiento dental en San Salvador en una sola sesión de 30 minutos. Resultados de 5 a 7 tonos más blanco. Century Tower, Zona Rosa. Agenda tu cita.',
  ogTitle: 'Blanqueamiento Dental San Salvador | The Tooth Boutique',
  image: '/blanqueamiento-dental-san-salvador.webp',
  serviceName: 'Blanqueamiento Dental San Salvador',
  serviceDescription: 'Blanqueamiento dental profesional en San Salvador. De 5 a 7 tonos más blanco en una sola sesión de 30 minutos en The Tooth Boutique.',
};

export const blanqueamientoHero = {
  breadcrumb: 'Blanqueamiento Dental',
  h1: 'Blanqueamiento Dental en San Salvador',
  eyebrow: 'Una sola sesión',
  taglineLine1: 'Una sonrisa más blanca.',
  taglineLine2: 'En una sola sesión.',
  text: 'Dale a tu sonrisa un nuevo comienzo. De 5 a 7 tonos más blanco después de una sola sesión.',
  chips: ['Una sola sesión', '30 minutos', '5 a 7 tonos más blanco'],
  cta: 'Agenda tu cita',
  secondary: { label: 'Ver cómo funciona', href: '#como-funciona' },
  image: blanqueamientoMeta.image,
  imageAlt: 'Equipo de blanqueamiento dental profesional en The Tooth Boutique, San Salvador',
};

export const blanqueamientoSteps: Step[] = [
  { title: 'Llegas', body: 'Protegemos encías y labios para que el gel actúe solo sobre el esmalte.' },
  { title: 'Aplicamos', body: 'Gel blanqueador en concentración profesional activado con luz LED durante 30 minutos. Sin dolor.' },
  { title: 'Ves el resultado', body: 'Te entregamos un espejo. De 5 a 7 tonos más blanco ese mismo día. Sin esperas, sin varias sesiones.' },
];

export const blanqueamientoCandidates = {
  left: {
    title: 'Mejor esperar o evaluar primero',
    tone: 'negative' as const,
    items: ['Caries sin tratar o encías inflamadas', 'Restauraciones grandes en dientes frontales', 'Embarazo o lactancia', 'Sensibilidad dental severa sin tratar', 'Brackets colocados: se hace antes o al terminar'],
  },
  right: {
    title: 'Candidato ideal',
    tone: 'positive' as const,
    items: ['Dientes naturales sanos y encías en buen estado', 'Manchas por café, té, vino, tabaco o alimentos', 'Tono amarillento por envejecimiento natural del esmalte', 'Antes de empezar ortodoncia o al retirar los brackets'],
  },
  footnote: 'Las manchas de nacimiento, por medicamentos o por golpes responden parcialmente al gel: el blanqueamiento mejora el tono general pero puede no eliminarlas por completo. Eso lo evaluamos en la consulta.',
};

export const blanqueamientoAftercare = {
  columns: ['Primeras 48 horas', 'Después'],
  rows: [
    { label: 'Qué evitar', values: ['Café, té negro, vino tinto, refrescos oscuros, salsas con tomate, mostaza, curry y sobre todo tabaco.', 'Nada prohibido. Cuanto menos pigmento ingieres, más dura el resultado.'] },
    { label: 'Qué sí', values: ['Dieta blanca: arroz, pollo, pescado, lácteos, manzana, banano, agua o leche.', 'Bebidas pigmentadas con pajilla y enjuague con agua después.'] },
    { label: 'Sensibilidad', values: ['Leve al frío en algunos pacientes. Desaparece sola en uno o dos días.', 'Una pasta para dientes sensibles ayuda si molesta.'] },
    { label: 'Mantenimiento', values: ['Cepillarte 30 minutos después de comer.', 'Profilaxis cada 6 meses y, si quieres el máximo, una sesión corta cada 12 a 18 meses.'] },
  ],
};

export const blanqueamientoDoctor = {
  eyebrow: '// La especialista',
  subtitle: 'Máster en Ortodoncia',
  text: 'En The Tooth Boutique el blanqueamiento es parte de una visión completa de tu sonrisa. La Dra. Reneé evalúa cada caso antes de aplicar el tratamiento: si tienes caries, restauraciones, sensibilidad extrema o manchas que no responden al gel, te lo dice antes.',
  bullets: ['Evaluación previa incluida en cada caso', 'Blanqueamiento antes o después de tu ortodoncia', 'Una sola sesión, resultado el mismo día'],
};

export const blanqueamientoFaqs: FAQ[] = [
  {
    question: '¿Duele el tratamiento?',
    answer: 'No. El procedimiento es completamente indoloro. Algunos pacientes pueden sentir una leve sensibilidad temporal después, pero desaparece rápido.',
  },
  {
    question: '¿Cuánto dura el resultado?',
    answer: 'Depende de tus hábitos. Con café, té o tabaco el resultado dura menos. Evitando estos factores, los resultados pueden durar entre 1 y 2 años.',
  },
  {
    question: '¿Cómo funciona el blanqueamiento dental en detalle?',
    answer: [
      'El blanqueamiento profesional usa un gel blanqueador en concentración alta que solo un odontólogo puede manejar de forma segura. El gel se aplica directamente sobre el esmalte, penetra el diente y deshace las manchas que causan el color amarillento u oscuro de los dientes. El resultado es un blanco más claro, sin alterar la estructura del diente.',
      'En The Tooth Boutique, en Century Tower, Zona Rosa, San Salvador, usamos un sistema de blanqueamiento que combina el gel con luz LED activadora. La luz acelera la acción del gel y permite obtener resultados de 5 a 7 tonos más blanco en una sola sesión de 30 minutos. Otros sistemas requieren varias citas repartidas en semanas para llegar al mismo nivel, y el cambio después de la primera suele ser poco visible.',
      'Antes del tratamiento protegemos las encías y los labios para que el gel solo actúe sobre el esmalte. No hay dolor: es uno de los procedimientos más sencillos que ofrecemos.',
    ],
  },
  {
    question: '¿Qué diferencia hay entre el blanqueamiento profesional y los kits caseros?',
    answer: [
      'Los kits caseros que se venden en farmacias o por internet usan un gel mucho más suave porque están pensados para ser manejados sin supervisión. Por seguridad, el cambio que producen es lento y limitado: meses de uso para uno o dos tonos, en el mejor de los casos.',
      'El blanqueamiento profesional usa un gel mucho más concentrado, aplicado en un ambiente controlado donde el odontólogo protege los tejidos blandos antes de empezar. Eso lo hace seguro a corto plazo y mucho más efectivo: lo que un kit casero logra en meses, una sesión profesional lo logra en 30 minutos. Y como el procedimiento se hace una vez, no hay riesgo de uso prolongado, sensibilidad acumulada o lesiones en las encías por un mal ajuste.',
      'Otra diferencia importante: el blanqueamiento profesional incluye una evaluación previa con la Dra. Melissa Reneé. Si tienes caries, restauraciones, sensibilidad extrema o manchas que no responden al gel, te avisamos antes de gastar tiempo y dinero. Los kits caseros no tienen ese filtro.',
    ],
  },
  {
    question: '¿Qué puedo esperar el mismo día y los días siguientes?',
    answer: [
      'El cambio se ve apenas terminamos. Te entregamos un espejo y vas a notar la diferencia inmediatamente. Los pacientes suelen reaccionar con una sonrisa grande: el resultado es real y visible, no algo que tienes que imaginarte después.',
      'Las primeras 24 a 48 horas son las más sensibles porque el diente absorbe pigmentos con más facilidad. Por eso recomendamos seguir una "dieta blanca" durante 48 horas: evita café, té negro, vino tinto, refrescos oscuros, salsas con tomate, mostaza, curry y, sobre todo, tabaco. Come arroz blanco, pollo, pescado, lácteos, manzana, banano, agua o leche.',
      'Después de 48 horas puedes volver a tu dieta normal con una recomendación general: cuanto menos pigmento ingieres, más tiempo se mantiene el resultado. Algunos pacientes sienten leve sensibilidad al frío durante uno o dos días; es normal y desaparece sola. Si la sensibilidad molesta, una pasta dental para dientes sensibles ayuda mucho.',
    ],
  },
  {
    question: '¿Quién es buen candidato para el blanqueamiento y quién no?',
    answer: [
      'El candidato ideal tiene dientes naturales sanos, sin caries activas, con encías en buen estado y manchas causadas por alimentos, bebidas, tabaco o el envejecimiento normal del esmalte. En esos casos el resultado es excelente y predecible.',
      'No se recomienda hacer blanqueamiento si hay caries sin tratar, restauraciones grandes en dientes frontales (porque las resinas y porcelanas no blanquean), embarazo o lactancia, o sensibilidad dental severa sin tratar. Tampoco se recomienda en pacientes muy jóvenes cuyos dientes aún están en formación.',
      'Las manchas de nacimiento, por medicamentos o por golpes responden parcialmente al gel. En esos casos el blanqueamiento puede mejorar el tono general pero no eliminar las manchas por completo, y en algunos casos el paciente puede necesitar otro tipo de procedimiento estético que no realizamos en la clínica. Eso te lo decimos con claridad en la consulta inicial.',
    ],
  },
  {
    question: '¿Puedo hacerme el blanqueamiento si tengo brackets?',
    answer: 'No recomendamos blanqueamiento con brackets colocados. El tratamiento no actúa de manera uniforme debajo y alrededor de los brackets, lo que puede generar diferencias de tono al retirarlos. Lo ideal es hacerlo antes de comenzar ortodoncia o al finalizar el tratamiento.',
  },
  {
    question: '¿Aplica para cualquier tipo de mancha?',
    answer: 'El blanqueamiento es efectivo para manchas causadas por alimentos, bebidas y envejecimiento natural. Para manchas por golpes, de nacimiento o por medicamentos, la efectividad varía. En tu consulta evaluamos tu caso específico.',
  },
  {
    question: '¿Cuánto cuesta el blanqueamiento dental?',
    answer: `El costo del blanqueamiento dental varía según cada caso. Para darte un precio exacto, hacemos una evaluación inicial de $${SITE.prices.evaluacion} dólares que incluye escaneo 3D, fotos y diagnóstico completo, donde te entregamos un plan de tratamiento con las opciones para tu caso.`,
  },
  {
    question: '¿Cuántos tonos puedo blanquear realmente?',
    answer: 'En promedio entre 5 y 7 tonos en una sola sesión. El resultado exacto depende del tono inicial, del tipo de manchas y de la respuesta individual del esmalte. En la consulta usamos una guía de tonos para mostrarte el punto de partida y la meta esperada.',
  },
  {
    question: '¿El blanqueamiento daña el esmalte?',
    answer: 'No, cuando se hace de forma profesional. El gel actúa sobre las manchas, no sobre la estructura del diente. Los estudios clínicos confirman que blanqueamientos supervisados por un odontólogo no debilitan el esmalte. Lo que sí daña es el uso excesivo de productos abrasivos o blanqueamientos caseros mal aplicados.',
  },
  {
    question: '¿Puedo hacerme el blanqueamiento si tengo coronas o carillas?',
    answer: 'El gel solo blanquea esmalte natural. Las coronas, carillas y resinas mantienen su color original. Si tienes trabajos en dientes frontales y quieres blanquear, lo hablamos antes: te explicamos qué dientes van a responder, cómo quedaría el contraste con tus restauraciones y, si hace falta renovarlas para que combinen, te orientamos sobre ese paso aunque no lo realicemos en la clínica.',
  },
  {
    question: '¿Cómo mantengo el resultado por más tiempo?',
    answer: [
      'El blanqueamiento dura entre 1 y 2 años en promedio, pero el rango real depende mucho de tus hábitos. Los principales enemigos del blanco son el café diario, el vino tinto, el tabaco, las salsas oscuras, los refrescos de cola y, en general, cualquier líquido que mancha una taza blanca.',
      'No tienes que eliminar el café para siempre, pero sí puedes hacer pequeños ajustes que ayudan: tomar bebidas pigmentadas con pajilla, enjuagarte con agua después de tomarlas, cepillarte 30 minutos después de comer y mantener tu profilaxis dental cada 6 meses. Esos cuatro hábitos extienden el resultado considerablemente.',
      'Si quieres mantener el blanco al máximo, puedes hacer una sesión de mantenimiento corta cada 12 a 18 meses. Es más rápida y económica que la sesión inicial porque parte de un nivel mucho más alto. La Dra. Melissa Reneé te indica el momento exacto basándose en cómo evoluciona tu sonrisa.',
    ],
  },
];
