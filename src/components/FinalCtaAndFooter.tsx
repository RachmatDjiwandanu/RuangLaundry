import React from 'react';
import { MessageCircle, Mail, Globe } from 'lucide-react';

interface FinalCtaAndFooterProps {
  onOpenConsultation: () => void;
}

export const FinalCtaAndFooter: React.FC<FinalCtaAndFooterProps> = ({ onOpenConsultation }) => {
  return (
    <div>
      {/* FINAL CTA SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-surface-bg border-t border-slate-100">
        <div className="max-w-5xl mx-auto bg-navy rounded-4xl sm:rounded-5xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan block">
              Langkah Selanjutnya
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Siap Membawa Bisnis Laundry Anda ke Era Digital?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Mulai bangun website laundry profesional bersama RuangLaundry.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm sm:text-base font-bold text-navy bg-white hover:bg-slate-100 shadow-md transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus:outline-none"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white px-6 sm:px-12 pt-14 pb-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-100">
            {/* Brand info */}
            <div className="md:col-span-5 space-y-4 text-left">
              <img 
                src="/ruanglaundry-logo-light.png" 
                alt="Logo RuangLaundry - Penyedia Website & Solusi Digital" 
                className="h-10 w-auto object-contain"
              />

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                RuangLaundry membantu UMKM dan pemilik bisnis laundry bertransformasi digital melalui website dan sistem pemesanan online yang praktis dan berkarakter.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Konsultasi &amp; Pemesanan Terbuka</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-3 text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">
                Navigasi
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li><a href="#beranda" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Tentang Kami</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Layanan</a></li>
                <li><a href="#produk" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Preview Sistem</a></li>
                <li><a href="#keunggulan" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Keunggulan</a></li>
                <li><a href="#harga" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Pilihan Harga</a></li>
              </ul>
            </div>

            {/* Service Packages */}
            <div className="md:col-span-2 space-y-3 text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">
                Layanan
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li><a href="#harga" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">RuangStart (Rp400k)</a></li>
                <li><a href="#harga" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">RuangCustom (Rp1jt)</a></li>
                <li><a href="#harga" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">RuangCare (Rp200k)</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Website Template</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Website Custom</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded">Website Maintenance</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-3 space-y-3 text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">
                Hubungi Kami
              </h4>
              <div className="space-y-2.5 text-xs text-slate-500">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20RuangLaundry,%20saya%20ingin%20konsultasi%20pembuatan%20website%20laundry"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-bg hover:bg-primary-light hover:text-primary transition-colors border border-slate-100 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span className="font-bold">WhatsApp: 0812-3456-7890</span>
                </a>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-bg border border-slate-100">
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>halo@ruanglaundry.com</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-bg border border-slate-100">
                  <Globe className="w-4 h-4 text-cyan" aria-hidden="true" />
                  <span>www.ruanglaundry.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>© {new Date().getFullYear()} RuangLaundry. Penyedia Website &amp; Solusi Digital. All rights reserved.</p>
            <p className="font-medium text-slate-500">Digital Solutions for Modern Laundry Businesses</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
