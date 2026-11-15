import React from 'react';
import { Users } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 sm:py-24 lg:py-28 bg-surface-bg border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Profil Tim & Komitmen"
          badgeIcon={Users}
          badgeVariant="blue"
          title="Di Balik RuangLaundry: Tim Spesialis Solusi Digital"
          subtitle="Kami berdedikasi mendampingi pemilik usaha laundry menghadirkan sistem pemesanan online yang mandiri, rapi, dan mudah dioperasikan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Visual Column: Full Team Photo (5 members, wide landscape ratio) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-surface border border-border shadow-card p-2.5 sm:p-3">
              <div className="rounded-xl overflow-hidden bg-surface-muted aspect-[1672/941]">
                <img
                  src="/assets/full-team-ruanglaundry.png"
                  alt="Seluruh Tim Profesional RuangLaundry (5 Orang)"
                  width="1672"
                  height="941"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 pb-1 px-1.5 flex items-center justify-between text-xs text-content-secondary">
                <span className="font-semibold text-navy-primary">Tim Resmi RuangLaundry</span>
                <span>5 Tenaga Spesialis Digital</span>
              </div>
            </div>
          </div>

          {/* Narrative Column: Human, grounded, and vertically balanced */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-primary mb-3">
              Membangun Sistem yang Benar-Benar Memahami Kebutuhan Usaha Laundry
            </h3>

            <p className="text-content-secondary leading-relaxed text-sm sm:text-base mb-6">
              RuangLaundry bukan sekadar pembuat template website umum. Kami fokus mendalami alur operasional laundry kiloan maupun satuan, mulai dari penimbangan berat cucian, nota digital, hingga pelacakan progres cucian yang transparan bagi pelanggan.
            </p>

            {/* 3 Clean Editorial Points - No generic grey card outlines */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-blue font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-primary">Sistem Mandiri Tanpa Potongan Komisi</h4>
                  <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                    Semua data pelanggan, riwayat transaksi, dan keuntungan penjualan 100% menjadi milik bisnis Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-blue font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-primary">Pendampingan Penuh Hingga Siap Pakai</h4>
                  <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                    Termasuk penyediaan nama domain, server hosting cepat, input menu layanan laundry Anda, dan panduan operasional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-blue font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-primary">Dukungan Teknis Berkelanjutan</h4>
                  <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                    Jika butuh pembaruan harga atau penyesuaian teknis di kemudian hari, tim kami siap dihubungi secara langsung.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                href={getWhatsAppUrl()}
                className="w-full sm:w-auto"
              >
                Konsultasikan Kebutuhan Anda
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
