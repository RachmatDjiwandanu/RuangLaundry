import { DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp.js';

/**
 * Pricing packages data.
 * Follows PRD.md FR-08 and TECHNICAL.md Section 8.2.
 */
export const pricingPackages = [
  {
    id: 'ruangstart',
    name: 'RuangStart',
    price: 'Rp400.000',
    billingNote: 'Paket Pembuatan Awal',
    description: 'Solusi awal bagi pemilik bisnis laundry yang ingin segera mulai menerima pemesanan online secara terorganisir.',
    featured: false,
    badge: 'Paket Dasar',
    features: [
      'Website pemesanan laundry online',
      'Termasuk Domain & Hosting resmi',
      'Formulir pemesanan online praktis',
      'Pilihan layanan Regular & Express',
      'Perhitungan tarif berbasis berat',
      'Informasi nomor rekening pembayaran',
      'Tombol kontak langsung ke WhatsApp admin',
      'Tampilan responsif di smartphone & PC',
    ],
    ctaText: 'Pilih RuangStart',
    message: DEFAULT_WHATSAPP_MESSAGES.ruangStart,
  },
  {
    id: 'ruangcustom',
    name: 'RuangCustom',
    price: 'Rp1.000.000',
    billingNote: 'Paket Kustomisasi Penuh',
    description: 'Paket pengembangan website dengan penyesuaian tampilan, identitas brand mendalam, dan alur fitur sesuai kesepakatan.',
    featured: true,
    badge: 'Paling Populer',
    features: [
      'Semua fitur pada paket RuangStart',
      'Termasuk Domain & Hosting resmi',
      'Penyesuaian desain & warna sesuai brand',
      'Struktur fitur disesuaikan alur operasional',
      'Sistem pelacakan status laundry (tracking)',
      'Setup konten & katalog harga layanan',
      'Prioritas bantuan konfigurasi awal',
      'Panduan lengkap operasional website',
    ],
    ctaText: 'Pilih RuangCustom',
    message: DEFAULT_WHATSAPP_MESSAGES.ruangCustom,
  },
  {
    id: 'ruangcare',
    name: 'RuangCare',
    price: 'Rp200.000',
    billingNote: 'Per Layanan (Bukan Biaya Bulanan)',
    description: 'Layanan dukungan teknis dan pemeliharaan website saat Anda membutuhkan pembaruan informasi atau penyesuaian berkala.',
    featured: false,
    badge: 'Dukungan & Perawatan',
    isMaintenance: true,
    features: [
      'Biaya berlaku per satu kali layanan pengerjaan',
      'Bukan biaya langganan bulanan mengikat',
      'Pembaruan daftar harga & layanan laundry',
      'Pembaruan informasi kontak & jam operasional',
      'Pemeriksaan kestabilan & performa website',
      'Bantuan penanganan kendala teknis',
      'Cakupan disepakati sebelum pengerjaan',
    ],
    ctaText: 'Pilih RuangCare',
    message: DEFAULT_WHATSAPP_MESSAGES.ruangCare,
  },
];

