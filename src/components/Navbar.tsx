import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Preview Sistem', href: '#produk' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Harga', href: '#harga' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200/80 py-3.5 px-6 sm:px-10 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo RuangLaundry (Mengikuti Warna Navbar Putih) */}
        <a 
          href="#beranda" 
          className="flex items-center group focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-xl"
        >
          <img 
            src="/ruanglaundry-logo-light.png" 
            alt="Logo RuangLaundry - Penyedia Website & Solusi Digital" 
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy/80 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-md px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none"
          >
            Konsultasi Sekarang
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-navy hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden pt-4 pb-2 border-t border-slate-100 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-navy/80 hover:text-primary hover:bg-primary-light transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
