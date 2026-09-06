import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left */}
          <div>
            <img 
              src="/tooth-logo-v2.webp" 
              alt="The Tooth Boutique" 
              className="h-16 md:h-20 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="font-body font-light text-[13px] text-muted">
              Ortodoncia de precisión en San Salvador
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-3">
            <a href="/" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Inicio</a>
            <a href="/invisalign" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Invisalign en San Salvador</a>
            <a href="/brackets" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Brackets en San Salvador</a>
            <a href="/blanqueamiento" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Blanqueamiento Dental</a>
            <a href="/#contacto" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Ubicación en Zona Rosa</a>
            <a href="https://review.thetoothboutique.com" target="_blank" rel="noopener noreferrer" className="font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors">Dejar Review</a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2">
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">
              The Tooth Boutique
            </p>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">
              Century Tower, Zona Rosa, San Salvador
            </p>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">
              +503 7905 6000
            </p>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">
              hola@thetoothboutique.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body font-light text-[12px] text-[#FAFAF8]/40">
            © 2026 The Tooth Boutique. Todos los derechos reservados.
          </p>
          <p className="font-body font-light text-[12px] text-[#FAFAF8]/40">
            Creada por <a href="https://www.tuwebsv.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TuWebSV</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
