import React from 'react';
import { CheckCircle2, Check } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="beranda" className="pt-8 sm:pt-14 pb-16 sm:pb-24 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left z-10">
          {/* Subtle Category Indicator (Clean typography, no generic capsule / sparkles) */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            <span>Penyedia Website &amp; Solusi Digital Laundry</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.2] text-balance">
            <span>Bisnis Laundry Lebih Praktis</span>{' '}
            <span className="inline-block">
              dengan{' '}
              <span className="text-primary relative inline-block">
                Sistem Pemesanan Online.
                <svg 
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-cyan -z-10 opacity-70" 
                  viewBox="0 0 200 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M2 9.5C50 3 150 2 198 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
            Bangun kehadiran digital bisnis laundry Anda bersama <strong>RuangLaundry</strong>. Kami menyediakan layanan pembuatan website dan sistem pemesanan online yang praktis, modern, dan sesuai kebutuhan bisnis Anda.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md shadow-primary/25 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none"
            >
              Konsultasi Sekarang
            </button>

            <a
              href="#layanan"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-navy bg-surface-muted hover:bg-slate-200/80 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none"
            >
              Lihat Layanan
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
              </div>
              <span>Khusus Bisnis Laundry</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
              </div>
              <span>Branding Identitas Sendiri</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
              </div>
              <span>Responsif HP &amp; Laptop</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockup with Floating Elements (Refined, no bounce loop) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Accent curve */}
          <div className="absolute -top-6 -right-6 w-72 sm:w-80 h-72 sm:h-80 bg-[#c6ea46] rounded-[50px] -rotate-12 -z-0 opacity-90 blur-[1px] transform transition-transform" />
          <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-cyan/20 rounded-full -z-0 blur-2xl" />

          {/* Main Container for Overlapping Mockups */}
          <div className="relative z-10 w-full max-w-md">
            {/* Desktop Mockup Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
              {/* Browser Window Header */}
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white px-3 py-0.5 rounded-md text-[10px] text-slate-500 font-mono flex items-center gap-1 shadow-xs">
                  <span className="text-emerald-500">🔒</span>
                  <span>www.laundry-anda.com/order</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Website Order Mockup Content */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-slate-50/60 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Sistem Pemesanan Online</span>
                    <h4 className="text-sm font-extrabold text-navy">Pilih Layanan Cuci</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">Buka 24 Jam</span>
                </div>

                {/* Service Items Mini Grid */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl border border-primary bg-primary-light/40">
                    <span className="text-[11px] font-bold text-navy block">Cuci Komplit</span>
                    <span className="text-[10px] text-primary font-bold">Mulai Rp7.000/kg</span>
                  </div>
                  <div className="p-2.5 rounded-xl border border-slate-200 bg-white">
                    <span className="text-[11px] font-bold text-slate-700 block">Dry Cleaning</span>
                    <span className="text-[10px] text-slate-500">Satuan &amp; Jas</span>
                  </div>
                </div>

                {/* Form Simulation */}
                <div className="space-y-1.5 text-left text-[11px]">
                  <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-500">Alamat Penjemputan:</span>
                    <span className="font-semibold text-navy">Jl. Mawar No. 12</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-500">Jadwal Jemput:</span>
                    <span className="font-semibold text-primary">Hari ini, 15:00 WIB</span>
                  </div>
                </div>

                {/* Simulated Order Button */}
                <div className="pt-1">
                  <div className="w-full py-2 rounded-xl bg-primary text-white text-center text-xs font-bold shadow-xs">
                    Kirim Pesanan Laundry
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Mobile Mockup (Tilted & Layered) */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-48 bg-navy rounded-3xl p-2 shadow-2xl border-2 border-white transform rotate-3 hover:rotate-0 transition-transform">
              <div className="bg-white rounded-2xl p-3 space-y-2 text-left">
                {/* Mobile top bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[8px] text-white font-bold">R</div>
                    <span className="text-[10px] font-extrabold text-navy">Laundry Anda</span>
                  </div>
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Aktif</span>
                </div>
                
                {/* Status card */}
                <div className="bg-primary-light p-2 rounded-xl border border-primary/20">
                  <span className="text-[9px] font-semibold text-slate-500 block">Status Pesanan:</span>
                  <span className="text-[11px] font-extrabold text-navy block">Cucian Sedang Diproses</span>
                  <div className="w-full bg-white h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-primary h-full w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="text-[9px] text-slate-500 flex justify-between">
                  <span>Estimasi Selesai:</span>
                  <span className="font-bold text-navy">Besok 17:00</span>
                </div>
              </div>
            </div>

            {/* Floating Badge (Static, no repetitive bounce) */}
            <div className="absolute -top-4 -left-6 sm:-left-8 bg-white py-2 px-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-xl bg-cyan-light flex items-center justify-center text-cyan">
                <CheckCircle2 className="w-4 h-4 text-cyan" aria-hidden="true" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-semibold text-slate-400 block">Digitalisasi UMKM</span>
                <span className="text-xs font-bold text-navy">Pemesanan Online 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
