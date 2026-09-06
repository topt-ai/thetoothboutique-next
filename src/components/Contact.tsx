import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="bg-dark py-[100px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-[#FAFAF8] leading-[1.1] mb-16 text-center">
          Ubicación y Contacto
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-[8%]">
          {/* Left Column */}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-8 block">
              // NAP
            </span>

            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-2">
                  CLÍNICA
                </span>
                <p className="font-body font-normal text-[16px] text-[#FAFAF8]">
                  Century Tower, Zona Rosa, San Salvador
                </p>
              </div>

              <div className="border-b border-white/10 pb-6">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-2">
                  TELÉFONO
                </span>
                <a href="tel:+50379056000" className="font-body font-normal text-[16px] text-[#FAFAF8] hover:text-accent transition-colors">
                  +503 7905 6000
                </a>
              </div>

              <div className="border-b border-white/10 pb-6">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-2">
                  HORARIO
                </span>
                <p className="font-body font-normal text-[16px] text-[#FAFAF8]">
                  Lun a Vie 9:30 a 6:00 p.m. · Sáb 9:00 a 1:00 p.m.
                </p>
              </div>

              <div className="border-b border-white/10 pb-6">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-2">
                  WHATSAPP
                </span>
                <a href="https://wa.me/50379056000" target="_blank" rel="noopener noreferrer" className="font-body font-normal text-[16px] text-[#FAFAF8] hover:text-accent transition-colors">
                  Agendar cita
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-8">
              <a href="https://www.instagram.com/thetoothboutique/" target="_blank" rel="noopener noreferrer" className="text-[#FAFAF8]/50 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/thetoothboutique" target="_blank" rel="noopener noreferrer" className="text-[#FAFAF8]/50 hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.tiktok.com/@dramelissarenee" target="_blank" rel="noopener noreferrer" className="text-[#FAFAF8]/50 hover:text-accent transition-colors flex items-center justify-center w-6 h-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://ul.waze.com/ul?place=ChIJx2ygEgAxY48RnHlQz5Fv2gI&ll=13.69125810%2C-89.23737730&navigate=yes" target="_blank" rel="noopener noreferrer" className="text-[#FAFAF8]/50 hover:text-accent transition-colors">
                <MapPin size={24} />
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full md:w-[55%] h-[360px] md:h-auto min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=The+Tooth+Boutique+Century+Tower+San+Salvador&output=embed"
              title="Ubicación de The Tooth Boutique en Century Tower, Zona Rosa, San Salvador"
              className="w-full h-full rounded-[20px] border border-accent/15"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
