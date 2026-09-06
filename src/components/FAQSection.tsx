import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuál es la diferencia entre Invisalign y brackets?',
      answer: 'Invisalign usa alineadores transparentes removibles, sin alambres ni brackets visibles. Los brackets son fijos y pueden ser metálicos, cerámicos o autoligados. Ambos corrigen los mismos problemas; la diferencia está en la estética, la comodidad y el estilo de vida de cada paciente.',
    },
    {
      question: '¿Hacen blanqueamiento dental en la misma clínica?',
      answer: 'Sí. Ofrecemos blanqueamiento dental profesional con resultados de 5 a 7 tonos más blanco en una sola sesión de 10 minutos.',
    },
    {
      question: '¿Qué incluye la evaluación inicial?',
      answer: 'La evaluación incluye revisión clínica completa, escaneo 3D con tecnología iTero y fotografías extraorales e intraorales para analizar tu caso en detalle. Las radiografías necesarias (panorámica, cefalométrica o 3D) se toman en la misma clínica con un costo de $20 cada una.',
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
      answer: 'Estamos en Century Tower, Zona Rosa, Local 2A, frente a Centro Comercial Bambú, San Salvador.',
    },
    {
      question: '¿Cuánto cuesta la primera consulta o evaluación en The Tooth Boutique?',
      answer: 'La evaluación inicial incluye escaneo dental en 3D, fotos extraorales e intraorales, diagnóstico y entrega del plan de tratamiento, con un valor de $65. Adicionalmente se requieren dos radiografías, con un costo de $20 cada una, tomadas en la misma clínica.',
    },
    {
      question: '¿Cada cuánto debo hacerme una limpieza dental profesional?',
      answer: 'Se recomienda una profilaxis o limpieza dental profesional cada 6 meses. En The Tooth Boutique la sesión dura entre 30 y 40 minutos, tiene un costo de $50.',
    },
    {
      question: '¿La profilaxis dental quita las manchas de los dientes?',
      answer: 'Sí. La limpieza profesional remueve las manchas superficiales causadas por café, té, tabaco y alimentos, además de eliminar placa y sarro. Para aclarar el color natural del diente varios tonos, el tratamiento indicado es el blanqueamiento dental.',
    },
    {
      question: '¿Puedo hacerme una limpieza dental si ya tengo ortodoncia?',
      answer: 'Sí. Se recomienda una limpieza dental cada 4 a 6 meses, ya sea que tengas tratamiento de brackets o Invisalign, para mantener las encías sanas y los dientes limpios durante la ortodoncia.',
    },
  ];

  return (
    <section id="faq" className="py-[100px] px-8 md:px-[8%] bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-white leading-[1.1]">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-body font-medium text-[16px] text-white group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-accent flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[200px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-body font-light text-[15px] text-white/65 leading-[1.6] pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
