import React from 'react';
import { 
  Layers, 
  Smartphone, 
  Search, 
  Scale, 
  MessageSquare, 
  CreditCard, 
  Check, 
  Clock 
} from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 sm:py-24 lg:py-28 bg-surface border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Kemudahan Sistem Pemesanan"
          badgeIcon={Layers}
          badgeVariant="blue"
          title="Fitur Sistem yang Ringkas, Jelas, dan Mudah Digunakan"
          subtitle="Dirancang khusus mengikuti alur operasional laundry di Indonesia. Tanpa instalasi aplikasi berat, langsung berfungsi dari browser ponsel pelanggan."
        />

        {/* Primary Showcase: 2 Flagship Interactive UI Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-10">
          
          {/* Showcase 1: Formulir Pemesanan Mandiri (Mini Form UI Preview) */}
          <div className="lg:col-span-6 bg-surface-bg rounded-2xl p-6 sm:p-8 border border-border/80 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-3">
                <Smartphone className="w-4 h-4" />
                <span>Antarmuka Pelanggan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-primary mb-2.5">
                Formulir Pemesanan Mandiri & Cepat
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Pelanggan dapat langsung mengisi data pemesanan cucian dari browser ponsel. Data terstruktur otomatis dan langsung terkirim ke WhatsApp toko Anda.
              </p>
            </div>

            {/* Realistic Mini UI Form Preview */}
            <div className="bg-surface rounded-xl p-4 sm:p-5 border border-border shadow-sm space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-border/60 text-xs">
                <span className="font-semibold text-navy-primary">Formulir Order Online</span>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Ringan & Cepat
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-content-secondary block mb-1">Data Pelanggan</span>
                  <div className="flex items-center justify-between bg-surface-muted/60 border border-border/80 rounded-lg px-3 py-2 text-navy-primary font-medium">
                    <span>Siti Rahmawati</span>
                    <span className="text-[11px] text-content-muted">0812-3456-7890</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-content-secondary block mb-1">Pilihan Layanan</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-brand-blue/5 border border-brand-blue/40 text-brand-blue font-semibold flex items-center justify-between text-[11px]">
                      <span>Cuci Regular (2 Hari)</span>
                      <Check className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                    <div className="p-2 rounded-lg bg-surface-muted/40 border border-border/60 text-content-secondary text-[11px] flex items-center justify-between">
                      <span>Cuci Express (1 Hari)</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-navy-deep text-white flex items-center justify-between text-xs mt-1">
                  <div>
                    <span className="text-[11px] text-surface-muted/80 block">Estimasi (4.5 kg x Rp 7.000)</span>
                    <span className="font-bold text-sm text-brand-accent">Rp 31.500</span>
                  </div>
                  <span className="text-[11px] bg-white/10 px-2 py-1 rounded text-white font-medium">
                    Kirim ke WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase 2: Pelacakan Status Cucian Real-Time (Mini Tracking Stepper Preview) */}
          <div className="lg:col-span-6 bg-surface-bg rounded-2xl p-6 sm:p-8 border border-border/80 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-3">
                <Search className="w-4 h-4" />
                <span>Transparansi Layanan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-primary mb-2.5">
                Pelacakan Status Cucian Real-Time
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Mengurangi pesan chat berulang dari pelanggan yang menanyakan status. Cukup masukkan nomor nota unik untuk memantau progres cucian saat itu juga.
              </p>
            </div>

            {/* Realistic Mini UI Tracking Stepper */}
            <div className="bg-surface rounded-xl p-4 sm:p-5 border border-border shadow-sm space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-border/60 text-xs">
                <div>
                  <span className="font-bold text-navy-primary block">Nota #RL-8921</span>
                  <span className="text-[11px] text-content-secondary">Cuci Komplit Regular (4.5 kg)</span>
                </div>
                <span className="text-[11px] font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full">
                  Dalam Proses
                </span>
              </div>

              {/* Step Flow */}
              <div className="space-y-2.5 text-xs pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-medium text-navy-primary">Pakaian Diterima & Ditimbang</span>
                    <span className="text-[11px] text-content-muted">09:30 WIB</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-brand-blue block">Sedang Dicuci & Pengeringan</span>
                      <span className="text-[11px] text-content-secondary">Mesin cuci no. 03</span>
                    </div>
                    <span className="text-[11px] font-medium text-brand-blue">Proses Aktif</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-surface-muted text-content-muted flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-content-secondary">Penyetrikaan & Packing Rapi</span>
                    <span className="text-[11px] text-content-muted">Estimasi 15:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 opacity-40">
                  <div className="w-5 h-5 rounded-full bg-surface-muted text-content-muted flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-content-muted" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-content-secondary">Siap Diambil / Diantar</span>
                    <span className="text-[11px] text-content-muted">Selesai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Capabilities: 3 Meaningful Feature Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-surface-bg rounded-xl p-6 border border-border/80 shadow-sm hover:shadow-card transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-primary mb-2">
              Kalkulasi Biaya Timbangan Akurat
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
              Perhitungan tarif kiloan otomatis sesuai bobot aktual, mencegah salah hitung manual oleh kasir atau staf outlet Anda.
            </p>
            <span className="inline-block text-[11px] font-semibold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-md border border-brand-blue/20">
              Kiloan & Satuan Transparan
            </span>
          </div>

          <div className="bg-surface-bg rounded-xl p-6 border border-border/80 shadow-sm hover:shadow-card transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-primary mb-2">
              Terhubung Otomatis ke WhatsApp
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
              Data pesanan, alamat antar-jemput, dan kontak pelanggan langsung masuk ke WhatsApp toko dalam format teks siap baca.
            </p>
            <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Format Chat Siap Kirim
            </span>
          </div>

          <div className="bg-surface-bg rounded-xl p-6 border border-border/80 shadow-sm hover:shadow-card transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-primary mb-2">
              Instruksi Pembayaran & Arsip Data
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
              Menampilkan nomor rekening atau QRIS resmi laundry Anda, sekaligus mencatat riwayat pesanan pelanggan setia.
            </p>
            <span className="inline-block text-[11px] font-semibold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-md border border-brand-blue/20">
              Bebas Biaya Potongan Komisi
            </span>
          </div>

        </div>

      </Container>
    </section>
  );
}
