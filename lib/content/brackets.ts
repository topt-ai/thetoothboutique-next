import type { FAQ } from '@/components/shared/FAQAccordion';
import type { Step } from '@/components/shared/ProcessSteps';
import { SITE } from '@/lib/site';

export const bracketsMeta = {
  path: '/brackets',
  title: 'Brackets en San Salvador | Ortodoncia moderna y rápida – The Tooth Boutique',
  description: 'Brackets metálicos, cerámicos y autoligados en San Salvador. Ortodoncia precisa con la Dra. Melissa Reneé. Zona Rosa, Century Tower. Agenda tu cita.',
  ogTitle: 'Brackets San Salvador | The Tooth Boutique',
  image: '/brackets-san-salvador-clinica.webp',
  serviceName: 'Brackets San Salvador',
  serviceDescription: 'Brackets metálicos, cerámicos y autoligados en San Salvador. Ortodoncia precisa con la Dra. Melissa Reneé en Century Tower, Zona Rosa.',
};

export const bracketsHero = {
  breadcrumb: 'Brackets',
  h1: 'Brackets en San Salvador',
  eyebrow: 'Metálicos · Cerámicos · Autoligados',
  taglineLine1: 'Ortodoncia precisa.',
  taglineLine2: 'Para cada sonrisa.',
  text: 'Brackets metálicos, cerámicos o autoligados. Tres opciones, un mismo objetivo: terminar tu tratamiento antes de lo que esperas, con los resultados que mereces.',
  chips: ['Metálicos y Cerámicos', 'Brackets Autoligados', 'Tratamiento más corto'],
  cta: 'Agenda tu consulta',
  secondary: { label: 'Ver opciones de brackets', href: '#opciones' },
  image: bracketsMeta.image,
  imageAlt: 'Tratamiento de ortodoncia con brackets en The Tooth Boutique, San Salvador',
};

export const bracketsSteps: Step[] = [
  { title: 'Consulta y evaluación', body: 'La doctora examina tu mordida, hace el escaneo 3D y pide las radiografías que hagan falta. Te explica las tres opciones, los tiempos y la inversión.' },
  { title: 'Colocación de brackets', body: 'Cita de 60 a 90 minutos, sin dolor. Limpiamos el esmalte, pegamos cada bracket en su posición y conectamos el primer alambre, delgado y flexible.' },
  { title: 'Controles cada 4 semanas', body: 'Citas de 20 a 40 minutos, sin importar el tipo de bracket. La doctora cambia el alambre, ajusta fuerzas y revisa el avance.' },
  { title: 'Seguimiento del progreso', body: 'Cambios visibles en los primeros 6 meses. Si un bracket se despega, nos llamas, te damos instrucciones y lo reparamos en una cita corta.' },
  { title: 'Retiro y retención', body: 'Retiramos los brackets en una sola cita y pulimos cada diente. Empieza la fase de retenedores, que protege el resultado.' },
];

export const bracketsComparison = {
  columns: ['Metálicos', 'Cerámicos', 'Autoligados'],
  rows: [
    { label: 'Apariencia', values: ['Acero quirúrgico, visibles.', 'Del color del diente. Casi imperceptibles a un metro.', 'Metálicos o cerámicos, según el modelo.'] },
    { label: 'Cómo sostienen el alambre', values: ['Ligas elásticas.', 'Ligas elásticas.', 'Compuerta integrada, sin ligas.'] },
    { label: 'Fricción y comodidad', values: ['Estándar.', 'Estándar.', 'Menos fricción, movimientos más eficientes.'] },
    { label: 'Tiempo de tratamiento', values: ['18 a 24 meses en promedio.', '18 a 24 meses en promedio.', 'Hasta 6 meses menos en casos comparables.'] },
    { label: 'Higiene', values: ['Placa se acumula en las ligas.', 'Placa se acumula en las ligas.', 'Más fáciles de mantener limpios.'] },
    { label: 'Costo', values: ['El más económico.', 'Un poco más que los metálicos.', 'Varía según el sistema.'] },
    { label: 'Ideal para', values: ['Cualquier caso y presupuestos ajustados.', 'Adultos que quieren discreción sin pasarse a Invisalign.', 'Agendas ocupadas y quien quiere terminar antes.'] },
  ],
};

export const bracketsCare = {
  left: {
    title: 'Mejor evitar o partir antes',
    tone: 'negative' as const,
    items: ['Hielo, hueso de aceituna, nueces enteras', 'Caramelos masticables y chicle', 'Manzana entera o mazorca mordida de frente'],
  },
  right: {
    title: 'Sigue en el menú',
    tone: 'positive' as const,
    items: ['Pizza, pasta, arroz y carne', 'Frutas partidas en trozos', 'Prácticamente todo lo que comías antes'],
  },
  footnote: 'La rutina diaria: cepillado después de cada comida, hilo dental para ortodoncia y enjuague con flúor. Te enseñamos la técnica el día de la colocación y te entregamos un kit con todo lo necesario, incluida cera de ortodoncia por si un alambre molesta.',
};

export const bracketsDoctor = {
  eyebrow: '// La especialista',
  subtitle: 'Máster en Ortodoncia',
  text: 'La Dra. Melissa Reneé calcula la posición de cada bracket con base en tu plan digital y ve tu caso desde la primera cita hasta el retiro. No pasas de mano en mano. Tratamientos que terminan antes de lo que otras clínicas te dicen, sin comprometer el resultado.',
  bullets: ['Máster en Ortodoncia · Universidad Francisco Marroquín', 'Metálicos, cerámicos y autoligados', 'Controles cortos cada 4 semanas'],
};

export const bracketsFaqs: FAQ[] = [
  {
    question: '¿Duele ponerse brackets?',
    answer: 'La colocación de brackets no duele. Puedes sentir molestias leves los primeros días después de cada ajuste, pero desaparecen rápidamente.',
  },
  {
    question: '¿Cuánto tiempo dura el tratamiento con brackets?',
    answer: 'El tratamiento promedio dura entre 18 y 24 meses, pero puede variar según la complejidad del caso. Muchos pacientes ven mejoras significativas en los primeros 6 meses. Con brackets autoligados, los tiempos se reducen aún más.',
  },
  {
    question: '¿Cuál es la diferencia entre brackets metálicos, cerámicos y autoligados?',
    answer: [
      'Los tres tipos de brackets corrigen los mismos problemas: dientes apiñados, espacios, mordida desalineada y rotaciones. La diferencia está en la apariencia, la tecnología detrás del sistema y, en algunos casos, en el tiempo total de tratamiento.',
      'Los metálicos son los más conocidos. Son piezas de acero quirúrgico que se adhieren al esmalte y se conectan con un alambre que aplica fuerzas controladas. Son los más resistentes, los más económicos y los que tienen el historial clínico más largo. Los cerámicos funcionan exactamente igual pero las piezas son del color del diente, casi imperceptibles a un metro de distancia. Cuestan un poco más pero son la opción favorita de pacientes adultos en San Salvador que prefieren algo discreto sin pasarse a Invisalign.',
      'Los autoligados eliminan las ligas elásticas que sostienen el alambre. En su lugar, cada bracket tiene una compuerta integrada que mantiene el alambre en su sitio. Eso reduce la fricción, permite movimientos más eficientes y suele acortar el tratamiento. Además son más fáciles de mantener limpios porque no se acumula placa en las ligas.',
    ],
  },
  {
    question: '¿Cómo es el proceso desde la primera cita hasta el retiro?',
    answer: [
      'Todo empieza con una consulta de evaluación en The Tooth Boutique, Century Tower, Zona Rosa, San Salvador. La Dra. Melissa Reneé examina tu mordida, hace un escaneo 3D y, si es necesario, solicita radiografías adicionales para ver hueso y raíces. Con esa información construye un plan de tratamiento detallado y te explica las tres opciones de brackets, los tiempos estimados y la inversión.',
      'El día de la colocación es indoloro. Limpiamos el esmalte, aplicamos un adhesivo dental y colocamos cada bracket en una posición específica que la doctora calcula con base en tu plan. Después se conecta el primer alambre, que es delgado y flexible para que el cambio inicial sea suave. La cita dura entre 60 y 90 minutos y sales listo para retomar tu día.',
      'A partir de ahí vienes a controles aproximadamente cada 4 semanas, sin importar el tipo de bracket. En cada visita la doctora cambia el alambre, ajusta fuerzas y revisa el avance. Cuando los dientes llegan a su posición final, retiramos los brackets en una sola cita. Es rápido, no duele y al final pulimos cada diente para dejarlo liso.',
    ],
  },
  {
    question: '¿Qué puedo comer con brackets?',
    answer: [
      'Puedes comer la mayoría de alimentos. La regla principal es simple: cuidar la higiene y evitar lo que pueda romper o despegar un bracket.',
      'Evita los muy duros (hielo, hueso de aceituna, nueces enteras), los muy pegajosos (caramelos masticables, chicles) y los que muerden con fuerza frontal (manzana entera, mazorca). No están prohibidos, solo hay que partirlos antes y comerlos con muelas. La pizza, la pasta, la carne, el arroz, las frutas y prácticamente todo lo que comías antes sigue en el menú. Te damos la lista completa de recomendaciones desde el primer día.',
    ],
  },
  {
    question: '¿Cómo mantengo la higiene con brackets?',
    answer: 'Cepillado después de cada comida, hilo dental especial para ortodoncia y enjuague con flúor son la base diaria. Te enseñamos las técnicas el día de la colocación y te entregamos un kit con todo lo necesario para empezar.',
  },
  {
    question: '¿Cuál tipo de bracket me conviene?',
    answer: 'Depende de tu caso, tu presupuesto y tu preferencia estética. En la consulta evaluamos tu caso y te explicamos cuál opción te da el mejor resultado en el menor tiempo posible.',
  },
  {
    question: '¿Por qué los brackets autoligados son más rápidos?',
    answer: [
      'El sistema autoligado nació para resolver una limitación de los brackets tradicionales: la fricción entre el alambre y la liga elástica que lo sostiene. Esa fricción frena los movimientos. Al eliminar la liga y reemplazarla por una compuerta deslizante, el alambre se mueve con menos resistencia y los dientes responden más rápido.',
      'En la práctica eso se traduce en tratamientos que pueden ser hasta 6 meses más cortos en casos comparables y citas de control más espaciadas. Como el sistema requiere menos ajustes mecánicos, las visitas mensuales pueden pasar a ser bimestrales, lo cual es una ventaja real para gente con agendas ocupadas.',
      'Hay un detalle importante: la rapidez también depende del paciente. Asistir a tus citas, mantener la higiene y cuidar los brackets sigue siendo lo que más impacta el tiempo final. Los autoligados aceleran el sistema, no eliminan tu parte del trabajo.',
    ],
  },
  {
    question: '¿Cuánto cuesta el tratamiento de brackets en San Salvador?',
    answer: `El costo de los brackets varía según la complejidad de cada caso. Para darte un precio exacto, hacemos una evaluación inicial de $${SITE.prices.evaluacion} que incluye escaneo 3D, fotos y diagnóstico completo, donde te entregamos un plan de tratamiento con las opciones para tu caso.`,
  },
  {
    question: '¿Cuántas veces vengo a control durante el tratamiento?',
    answer: 'Los controles son aproximadamente cada 4 semanas, sin importar el tipo de bracket. Las citas son cortas: en general entre 20 y 40 minutos.',
  },
  {
    question: '¿Se notan mucho los brackets cerámicos?',
    answer: 'Son mucho más discretos que los metálicos. Las piezas son del color del diente y a distancia conversacional pasan desapercibidas. Los alambres siguen siendo visibles, aunque hay opciones de alambres estéticos para quienes quieren máxima discreción.',
  },
  {
    question: '¿Qué pasa si se rompe o se despega un bracket?',
    answer: 'No es una emergencia. Llámanos lo antes posible para agendarte una cita de reparación. Mientras tanto, si el bracket está suelto pero todavía sostenido por el alambre, déjalo en su lugar. Si un alambre se sale o pincha, puedes colocar cera de ortodoncia (te la entregamos al inicio) en la zona molesta hasta que llegues a la clínica. Pasa más seguido de lo que parece y se resuelve rápido.',
  },
  {
    question: '¿Qué pasa después de retirar los brackets?',
    answer: [
      'El día que te retiramos los brackets no termina el tratamiento, empieza una fase nueva: la retención. Los dientes recién posicionados tienen tendencia natural a regresar a su lugar original durante los primeros dos años. Por eso usar retenedores es lo que asegura que la inversión y el tiempo dedicado se mantengan.',
      'Hay dos tipos principales: retenedores fijos, que son un alambre delgado pegado por dentro de los dientes inferiores y a veces superiores; y retenedores removibles, transparentes, parecidos a férulas que se usan principalmente de noche. La mayoría de nuestros pacientes terminan con una combinación de los dos.',
      'El compromiso con los retenedores nocturnos es de largo plazo: pasados los dos años, puedes reducir el uso a 2 o 3 veces por semana en la noche, pero no lo abandones. Esa pequeña costumbre es lo que mantiene tu sonrisa alineada para siempre.',
    ],
  },
  {
    question: '¿Se puede combinar el tratamiento con brackets con el láser de fotobiomodulación?',
    answer: 'Sí. Es un complemento opcional que puedes agregar a tu plan. Se aplica en las citas de control, ayuda a acelerar el tratamiento y a reducir el dolor después de cada ajuste. Tú decides si lo incluyes.',
  },
];
