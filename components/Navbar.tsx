'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE, DOCTOR } from '@/lib/site';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/invisalign', label: 'Invisalign' },
  { href: '/brackets', label: 'Brackets' },
  { href: '/blanqueamiento', label: 'Blanqueamiento' },
  { href: DOCTOR.path, label: 'Dra. Melissa' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto rounded-full px-7 py-3 flex items-center justify-between md:justify-center gap-8 transition-all duration-300 bg-dark/85 backdrop-blur-[20px] border border-accent/15">
        <Link href="/" className="flex items-center justify-center" aria-label="The Tooth Boutique, inicio">
          <img
            src={SITE.images.logo}
            alt="The Tooth Boutique"
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body font-normal text-[13px] text-white tracking-[0.08em] hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-accent text-dark font-body font-medium text-[13px] px-5 py-2 rounded-full hover:bg-white transition-colors whitespace-nowrap"
        >
          Agendar cita
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-body text-2xl text-white tracking-widest"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-dark font-body font-medium text-lg px-8 py-3 rounded-full mt-4"
          >
            Agendar cita
          </a>
        </div>
      )}
    </>
  );
}
