import Link from 'next/link';
import { SITE, DOCTOR } from '@/lib/site';

const linkClass = 'font-body font-light text-[13px] text-[#FAFAF8]/60 hover:text-accent transition-colors';

export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left */}
          <div>
            <img
              src={SITE.images.logo}
              alt="The Tooth Boutique"
              className="h-16 md:h-20 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="font-body font-light text-[13px] text-muted">
              Ortodoncia de precisión en San Salvador
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-3">
            <Link href="/" className={linkClass}>Inicio</Link>
            <Link href="/invisalign" className={linkClass}>Invisalign</Link>
            <Link href="/brackets" className={linkClass}>Brackets</Link>
            <Link href="/blanqueamiento" className={linkClass}>Blanqueamiento Dental</Link>
            <Link href={DOCTOR.path} className={linkClass}>Dra. Melissa Reneé</Link>
            <Link href="/#contacto" className={linkClass}>Ubicación</Link>
            <a href={SITE.reviewUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>Dejar Review</a>
          </div>

          {/* Right: NAP */}
          <div className="flex flex-col gap-2">
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">{SITE.name}</p>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">{SITE.address.street}</p>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50">{SITE.address.locality}, {SITE.address.countryName}</p>
            <a href={`tel:${SITE.phone}`} className="font-body font-light text-[12px] text-[#FAFAF8]/50 hover:text-accent transition-colors">{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="font-body font-light text-[12px] text-[#FAFAF8]/50 hover:text-accent transition-colors">{SITE.email}</a>
            <p className="font-body font-light text-[12px] text-[#FAFAF8]/50 mt-2">{SITE.hours.short}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body font-light text-[12px] text-[#FAFAF8]/40">
            © {new Date().getFullYear()} The Tooth Boutique. Todos los derechos reservados.
          </p>
          <p className="font-body font-light text-[12px] text-[#FAFAF8]/40">
            Creada por <a href="https://www.tommyhq.com/es-sv" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TommyHQ</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
