import React from 'react';
import { MessageSquare, ArrowDown, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function HeroSection() {
  return (
    <section id="beranda" className="relative bg-navy-deep text-white overflow-hidden border-b border-white/10 min-h-screen desktop-wide:flex desktop-wide:flex-col desktop-wide:justify-center">
      
      {/* ================= DESKTOP LAYOUT (>= 960px AND Orientation Landscape) ================= */}
      <div className="hidden desktop-wide:flex flex-col justify-center relative min-h-screen w-full">
        
        {/* Right Geometric Accent Wedge */}
        <div 
          className="absolute top-0 right-0 w-[42%] h-full bg-gradient-to-br from-brand-blue/30 via-brand-blue/15 to-navy-darker pointer-events-none -z-0"
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 20% 100%)' }}
          aria-hidden="true"
        />

        {/* Diagonal Photo Slice - Pushed slightly right to give ample whitespace to the text */}
        <div 
          className="absolute top-0 right-0 w-[50%] xl:w-[52%] h-full z-10 overflow-hidden"
          style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <img
            src="/assets/team-ruanglaundry.png"
            alt="Tim RuangLaundry - Penyedia Website & Solusi Digital Bisnis Laundry"
            width="1536"
            height="1024"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[center_top] scale-105"
          />
          {/* Soft gradient edge along the diagonal cut for a luxurious, natural blend */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/20 to-transparent pointer-events-none" 
            aria-hidden="true" 
          />
        </div>

        {/* Content Container (Left side with generous whitespace & breathing room) */}
        <div className="relative z-20 py-12 lg:py-16 xl:py-20 w-full">
          <Container>
            <div className="max-w-[580px] xl:max-w-[640px]">
              
              {/* Brand Logo - Direct and clean */}
              <div className="mb-10 xl:mb-12">
                <a 
                  href="#beranda" 
                  className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg" 
                  aria-label="RuangLaundry Beranda"
                >
                  <img
                    src="/assets/logo-ruanglaundry.png"
                    alt="Logo RuangLaundry"
                    width="160"
                    height="36"
                    className="h-9 xl:h-10 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Main Headline H1 - Spacious leading, no cluttering badge above it */}
              <h1 className="text-4xl xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.16] mb-6">
                Digitalisasikan Bisnis Laundry Anda,{' '}
                <span className="text-brand-accent">Kelola Pesanan Lebih Mudah.</span>
              </h1>

              {/* Subheadline Description */}
              <p className="text-base xl:text-lg text-surface-muted/90 leading-relaxed mb-10 max-w-lg">
                RuangLaundry menyediakan sistem pemesanan laundry berbasis website untuk membantu bisnis Anda mengelola pesanan dan memberikan pengalaman layanan yang lebih praktis bagi pelanggan.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex items-center gap-4 mb-10">
                <Button
                  variant="primary"
                  size="lg"
                  href={getWhatsAppUrl()}
                  leftIcon={MessageSquare}
                  className="shadow-lg px-7"
                >
                  Konsultasi Gratis
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#fitur"
                  rightIcon={ArrowDown}
                  className="!bg-white !text-navy-primary hover:!bg-white/90 shadow-md font-bold px-7"
                >
                  Pelajari Fitur
                </Button>
              </div>

              {/* Clean Single-Line Trust Checklist (No heavy redundant thumbnail box) */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-surface-muted/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Termasuk Domain & Hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sistem Pemesanan Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pendampingan Sampai Siap Pakai</span>
                </div>
              </div>

            </div>
          </Container>
        </div>

      </div>

      {/* ================= MOBILE / PORTRAIT LAYOUT (< 960px OR Portrait Orientation) ================= */}
      <div className="desktop-wide:hidden flex flex-col justify-between min-h-screen">
        
        {/* Top Text Content */}
        <div className="pt-8 pb-4 px-4 sm:px-6">
          <Container>
            {/* Logo */}
            <div className="mb-5 sm:mb-6">
              <a href="#beranda" className="inline-block" aria-label="RuangLaundry">
                <img
                  src="/assets/logo-ruanglaundry.png"
                  alt="Logo RuangLaundry"
                  width="160"
                  height="36"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.18] mb-4">
              Digitalisasikan Bisnis Laundry Anda,{' '}
              <span className="text-brand-accent">Kelola Pesanan Lebih Mudah.</span>
            </h1>

            <p className="text-sm sm:text-base text-surface-muted/90 leading-relaxed mb-6">
              RuangLaundry menyediakan sistem pemesanan laundry berbasis website untuk membantu bisnis Anda mengelola pesanan dan memberikan pengalaman layanan yang lebih praktis bagi pelanggan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
              <Button
                variant="primary"
                size="md"
                href={getWhatsAppUrl()}
                leftIcon={MessageSquare}
                className="w-full sm:w-auto"
              >
                Konsultasi Gratis
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#fitur"
                rightIcon={ArrowDown}
                className="w-full sm:w-auto !bg-white !text-navy-primary hover:!bg-white/90 font-bold"
              >
                Pelajari Fitur
              </Button>
            </div>

            {/* Mobile Trust Checklist */}
            <div className="flex flex-col sm:flex-row gap-2.5 text-xs text-surface-muted/80 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Termasuk Domain & Hosting Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pendampingan Sistem Hingga Siap Pakai</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Dynamic Angled Photo Section on Mobile */}
        <div className="relative w-full flex-1 min-h-[260px] max-h-[380px] overflow-hidden mt-2">
          <div 
            className="w-full h-full"
            style={{ clipPath: 'polygon(0 0, 100% 4%, 100% 100%, 0 96%)' }}
          >
            <img
              src="/assets/team-ruanglaundry.png"
              alt="Tim RuangLaundry"
              width="1536"
              height="1024"
              loading="eager"
              className="w-full h-full object-cover object-[center_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/50 pointer-events-none" />
          </div>
        </div>

      </div>

    </section>
  );
}
