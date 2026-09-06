import type { FAQ } from '@/components/shared/FAQAccordion';
import type { Step } from '@/components/shared/ProcessSteps';
import { SITE } from '@/lib/site';

export const invisalignMeta = {
  path: '/invisalign',
  title: 'Invisalign en San Salvador | Alineadores transparentes cerca de ti – The Tooth Boutique',
  description: 'Invisalign en San Salvador: alineadores transparentes, cómodos y efectivos. Tratamientos más rápidos y con menos molestias. Agenda tu cita en The Tooth Boutique, Zona Rosa, San Salvador.',
  ogTitle: 'Invisalign San Salvador | The Tooth Boutique',
  image: '/invisalign-san-salvador-clinica.webp',
  serviceName: 'Invisalign San Salvador',
  serviceDescription: 'Alineadores transparentes Invisalign en San Salvador. Resultados rápidos y discretos con la Dra. Melissa Reneé, Invisalign Doctor Provider.',
};

export const invisalignHero = {
  breadcrumb: 'Invisalign',
  h1: 'Invisalign en San Salvador',
  eyebrow: '// Alineadores invisibles · Invisalign Doctor',
  taglineLine1: 'Transforma tu sonrisa',
  taglineLine2: 'sin que nadie lo note.',
  text: 'Invisalign es el sistema de alineadores más avanzado del mundo. Discreto, cómodo y con resultados que se ven antes de lo que esperas.',
  chips: ['Invisalign Doctor Provider', 'Tecnología iTero 3D', 'Sin alambres'],
  cta: 'Agenda tu consulta',
  secondary: { label: 'Ver el proceso', href: '#proceso' },
  image: invisalignMeta.image,
  imageAlt: 'Tratamiento Invisalign con alineadores transparentes en The Tooth Boutique, San Salvador',
};

export const invisalignSteps: Step[] = [
  { title: 'Consulta y evaluación', body: 'Revisamos tu sonrisa, hacemos el escaneo 3D con iTero y te decimos si eres candidato. Sin moldes de yeso.' },
  { title: 'Planificación digital', body: 'Diseñamos tu plan y te mostramos en pantalla cómo se moverán tus dientes mes a mes y cómo quedará tu sonrisa al final.' },
  { title: 'Fabricación de alineadores', body: 'Align Technology fabrica tus alineadores a medida. Los recibimos en la clínica entre 2 y 4 semanas después.' },
  { title: 'Inicio del tratamiento', body: 'Te entregamos el primer juego, te explicamos cómo usarlos de 20 a 22 horas al día y resolvemos cada duda.' },
  { title: 'Controles cada 4 semanas', body: 'La doctora confirma que los movimientos van según el plan y te entrega los siguientes juegos. En algunos casos, cada 6 semanas.' },
];

export const invisalignComparison = {
  columns: ['Invisalign', 'Brackets tradicionales'],
  rows: [
    { label: 'Apariencia', values: ['Alineadores transparentes. Nadie nota que llevas ortodoncia.', 'Brackets y alambres visibles. Los cerámicos son más discretos.'] },
    { label: 'Comer y cepillarse', values: ['Te los quitas. Comes lo que quieras y te cepillas como siempre.', 'Fijos. Hay alimentos duros y pegajosos que conviene evitar.'] },
    { label: 'Comodidad', values: ['Sin roces de alambres en mejillas ni labios. Ligera presión los primeros días de cada alineador.', 'Molestias leves los primeros días después de cada ajuste.'] },
    { label: 'Controles', values: ['Normalmente cada 4 semanas, a veces cada 6.', 'Aproximadamente cada 4 semanas.'] },
    { label: 'Duración promedio', values: ['12 a 18 meses. Cambios visibles entre el mes 3 y el 6.', '18 a 24 meses. Menos con autoligados.'] },
    { label: 'Ideal para', values: ['Adultos y profesionales que no quieren cambiar su imagen durante el tratamiento.', 'Casos de cualquier complejidad y presupuestos más ajustados.'] },
  ],
};

export const invisalignCases = {
  left: {
    title: 'Puede necesitar un plan combinado',
    tone: 'negative' as const,
    items: ['Problemas esqueléticos severos', 'Dientes que necesitan rotaciones extremas', 'Extracciones múltiples con cierre completo de espacios'],
  },
  right: {
    title: 'Invisalign trata',
    tone: 'positive' as const,
    items: ['Dientes apiñados', 'Espacios entre dientes', 'Mordida abierta', 'Sobremordida', 'Submordida', 'Mordida cruzada'],
  },
  footnote: 'Aun en los casos de la izquierda, muchas veces se puede iniciar con Invisalign y ajustar el plan según avanza el tratamiento. La única forma de saberlo con certeza es la evaluación: revisamos tu mordida, hacemos el escaneo 3D y te damos una respuesta directa.',
};

export const invisalignDoctor = {
  eyebrow: '// Invisalign Doctor Provider',
  subtitle: 'Especialista certificada en Invisalign',
  text: 'El programa Invisalign Doctor Provider es una certificación que Align Technology otorga a los profesionales con experiencia comprobada y un volumen mínimo de casos completados al año. Para ti significa planes que funcionan desde la primera entrega, acceso a herramientas como Invisalign Comprehensive y una doctora que ya vio antes lo que podría pasar en tu caso.',
  bullets: ['Máster en Ortodoncia · Universidad Francisco Marroquín', 'Invisalign Doctor Provider · Casos complejos', 'Trata casos con Invisalign todos los días en The Tooth Boutique'],
};

export const invisalignFaqs: FAQ[] = [
  {
    question: '¿Cuánto tiempo dura el tratamiento con Invisalign?',
    answer: 'El tratamiento promedio dura entre 12 y 18 meses, pero muchos pacientes ven resultados significativos en los primeros 3 a 6 meses. El tiempo exacto depende de la complejidad de tu caso.',
  },
  {
    question: '¿Es doloroso el tratamiento con Invisalign?',
    answer: 'Invisalign es mucho más cómodo que los brackets tradicionales. Puedes sentir una ligera presión los primeros días con cada nuevo alineador, pero es mínima y desaparece rápidamente.',
  },
  {
    question: '¿Cuántas horas al día debo usar los alineadores?',
    answer: 'Debes usar los alineadores 20 a 22 horas al día, retirándolos solo para comer y beber (excepto agua).',
  },
  {
    question: '¿Qué casos puede tratar Invisalign y cuáles no?',
    answer: [
      'Invisalign trata la mayoría de los casos que tradicionalmente se hacían con brackets: dientes apiñados, espacios entre dientes, mordida abierta, sobremordida, submordida y mordida cruzada. La tecnología ha evolucionado tanto en los últimos años que hoy puede manejar casos complejos que antes solo se trataban con ortodoncia fija.',
      'Los casos que pueden requerir un enfoque combinado o brackets tradicionales son aquellos con problemas esqueléticos severos, dientes que necesitan rotaciones extremas o cuando se requieren extracciones múltiples con cierre completo de espacios. Aun en esos casos, muchas veces se puede iniciar con Invisalign y ajustar el plan según avanza el tratamiento.',
      'La única forma de saber con certeza si eres candidato es con una evaluación clínica completa. En la consulta inicial revisamos tu mordida, hacemos el escaneo 3D y te damos una respuesta directa: sí, no, o un plan combinado.',
    ],
  },
  {
    question: '¿Cuánto cuesta el tratamiento con Invisalign?',
    answer: `El costo de Invisalign varía según la complejidad de cada caso. Para darte un precio exacto, hacemos una evaluación inicial de $${SITE.prices.evaluacion} que incluye escaneo 3D, fotos y diagnóstico completo, donde te entregamos un plan de tratamiento con el costo específico para tu caso.`,
  },
  {
    question: '¿Qué hace diferente a Invisalign frente a los brackets tradicionales?',
    answer: [
      'Invisalign cambió la ortodoncia moderna porque elimina los alambres y los brackets fijos. En lugar de eso, el tratamiento se basa en una serie de alineadores transparentes hechos a la medida que vas cambiando cada una a dos semanas. Cada férula mueve los dientes una fracción de milímetro siguiendo un plan digital diseñado desde el primer día.',
      'La diferencia más obvia es estética: nadie nota que estás usando ortodoncia. Pero hay otras ventajas igual de importantes. Los alineadores son removibles, así que comes lo que quieras y te cepillas como siempre. No hay heridas en mejillas o labios por roces de alambres. Y como cada alineador está diseñado por computadora con base en tu escaneo 3D, los movimientos son más predecibles que con un arco metálico tradicional.',
      'Las consultas de control son normalmente cada 4 semanas, con controles ocasionales cada 6 semanas según el caso. Eso libera tiempo para vida real, trabajo y viajes sin tener que ajustar tu agenda al ritmo del consultorio.',
    ],
  },
  {
    question: '¿Cómo es el proceso paso a paso en The Tooth Boutique?',
    answer: [
      'Tu tratamiento empieza con una consulta en nuestra clínica de Century Tower, Zona Rosa, San Salvador. La Dra. Melissa Reneé revisa tu sonrisa, conversa contigo sobre lo que quieres cambiar y evalúa si Invisalign es la mejor opción para tu caso.',
      'Si decides avanzar, el siguiente paso es el escaneo digital con tecnología iTero. Este escaneo 3D reemplaza los moldes incómodos de yeso de antes: en pocos minutos tenemos un modelo digital exacto de tu boca. Con esa información diseñamos tu plan de tratamiento y te mostramos en pantalla, antes de empezar, cómo se moverán tus dientes mes a mes y cómo se verá tu sonrisa al final.',
      'Una vez apruebas el plan, Align Technology fabrica tus alineadores en sus laboratorios y los recibimos en la clínica entre dos y cuatro semanas. En la cita de entrega te explicamos cómo usarlos, te damos el primer juego y resolvemos cada duda. A partir de ahí vienes a controles cada 4 semanas aproximadamente para que la doctora confirme que los movimientos van según lo planeado.',
    ],
  },
  {
    question: '¿Por qué importa que tu ortodoncista sea Invisalign Doctor Provider?',
    answer: [
      'El programa Invisalign Doctor Provider es una certificación que Align Technology otorga a los profesionales con experiencia comprobada y un volumen mínimo de casos completados al año. No cualquier ortodoncista en El Salvador califica: el nivel se gana con casos reales y formación continua en la tecnología.',
      'Para ti como paciente eso se traduce en tres cosas. Primero, mayor experiencia interpretando escaneos y diseñando planes de tratamiento que funcionan desde la primera entrega. Segundo, acceso a herramientas avanzadas como Invisalign Comprehensive y técnicas que requieren entrenamiento específico. Y tercero, un manejo más fluido de imprevistos, porque la doctora ya vio antes lo que podría pasar.',
      'La Dra. Melissa Reneé es Invisalign Doctor Provider y trata casos en The Tooth Boutique todos los días. Eso significa que el plan que diseña para tu boca se basa en cientos de casos previos, no en suposiciones.',
    ],
  },
  {
    question: '¿Qué puedo esperar mes a mes con Invisalign?',
    answer: [
      'El primer mes es el de adaptación. Aprendes a poner y quitar los alineadores, te acostumbras a hablar con ellos puestos y al ritmo de cambiarlos cada una a dos semanas. La mayoría de pacientes sienten los alineadores como parte de su día a día en una a dos semanas.',
      'Entre los meses 3 y 6 ya hay cambios visibles. Dientes que estaban torcidos empiezan a alinearse, los espacios se cierran y la mordida cambia. Es el período más motivador del tratamiento porque ves los resultados de tu compromiso. Si tu plan incluye attachments, pequeños puntos de composite del color del diente que ayudan a mover dientes específicos, se colocan al inicio y se retiran al final.',
      'Del mes 6 al 12 los movimientos se vuelven más sutiles pero el resultado total se va consolidando. Hacia el final del tratamiento se hacen los ajustes finos, y muchas veces se piden alineadores adicionales (refinamientos) para perfeccionar detalles. Cuando llega el último alineador empiezas con retenedores, esenciales para mantener los resultados a largo plazo.',
    ],
  },
  {
    question: '¿Necesito venir a controles muy seguido?',
    answer: 'Los controles con Invisalign son normalmente cada 4 semanas, con controles ocasionales cada 6 semanas según el caso. La Dra. Melissa Reneé revisa que los dientes estén siguiendo el plan y te entrega los siguientes juegos de alineadores.',
  },
  {
    question: '¿Qué pasa si pierdo o daño un alineador?',
    answer: 'Lo primero es contactarnos. Dependiendo de en qué etapa del juego estés, te indicaremos si puedes volver al alineador anterior temporalmente o avanzar al siguiente mientras llega el reemplazo. Por eso es importante guardar siempre el alineador previo y los siguientes en sus cajas correspondientes.',
  },
  {
    question: '¿Puedo comer y tomar bebidas con los alineadores puestos?',
    answer: 'Solo agua. Los alineadores deben retirarse para comer y para tomar cualquier otra bebida (café, té, refrescos, jugos). Tomar líquidos calientes con los alineadores puestos puede deformarlos, y los líquidos con color o azúcar pueden mancharlos o causar caries. Después de comer, te cepillas y vuelves a colocar los alineadores.',
  },
  {
    question: '¿Se puede combinar Invisalign con el láser de fotobiomodulación?',
    answer: 'Sí. El láser Ultradent es un complemento opcional que se aplica en las citas de control y puede ayudar a reducir las molestias de cada cambio de alineador y a acortar el tiempo total del tratamiento. Se cotiza como versión premium de tu plan y la doctora te indica si aplica para tu caso.',
  },
];
