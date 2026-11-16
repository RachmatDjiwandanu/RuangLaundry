import React from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import Container from '../ui/Container.jsx';
import { navigationLinks } from '../../data/navigation.js';
import { getWhatsAppUrl } from '../../utils/whatsapp.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-deep text-surface-muted/80 border-t border-white/10 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a
              href="#beranda"
              className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
              aria-label="RuangLaundry Beranda"
            >
              <img
                src="/assets/logo-ruanglaundry.webp"
                alt="Logo RuangLaundry"
                width="160"
                height="32"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-surface-muted/90 leading-relaxed mb-6 max-w-sm">
              RuangLaundry adalah penyedia website dan solusi digital yang berfokus pada pengembangan sistem pemesanan laundry online untuk membantu pemilik usaha mengelola pesanan lebih terorganisir dan profesional.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Layanan Konsultasi Online Aktif</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-surface-muted/80 hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak Resmi
            </h3>
            <p className="text-xs sm:text-sm text-surface-muted/90 leading-relaxed mb-4">
              Ada pertanyaan seputar paket layanan atau sistem pemesanan? Hubungi tim kami langsung melalui WhatsApp:
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/50 text-white transition-all duration-200 group w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-surface-muted/80">WhatsApp Resmi</p>
                <p className="text-sm font-bold text-white tracking-wide">0895-0579-9964</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-muted/80">
          <p>© {new Date().getFullYear()} RuangLaundry. Seluruh hak cipta dilindungi.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-surface-muted/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
