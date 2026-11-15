import { 
  FileText, 
  Zap, 
  Scale, 
  CreditCard, 
  PackageCheck, 
  History 
} from 'lucide-react';

/**
 * System Features introduced in the company profile.
 * Follows PRD.md Section 6 FR-05 and TECHNICAL.md Section 5.3.
 */
export const featuresData = [
  {
    id: 'f1',
    title: 'Formulir Pemesanan Online',
    description: 'Pelanggan mengisi nama, alamat penjemputan/pengantaran, nomor WhatsApp aktif, dan estimasi berat pakaian secara instan.',
    icon: FileText,
    badge: 'Mudah & Cepat',
  },
  {
    id: 'f2',
    title: 'Pilihan Layanan Regular & Express',
    description: 'Menyediakan opsi durasi pengerjaan reguler maupun kilat (express) sesuai fleksibilitas tarif dan kapasitas operasional laundry Anda.',
    icon: Zap,
    badge: 'Fleksibel',
  },
  {
    id: 'f3',
    title: 'Kalkulasi Tarif Berbasis Berat',
    description: 'Perhitungan estimasi otomatis jika berat diisi oleh pelanggan, atau dikalkulasikan secara akurat setelah penimbangan oleh admin.',
    icon: Scale,
    badge: 'Transparan',
  },
  {
    id: 'f4',
    title: 'Informasi Tagihan & Pembayaran',
    description: 'Rincian total biaya layanan dan instruksi transfer pembayaran yang transparan dan dapat dikonfigurasi sesuai rekening bisnis Anda.',
    icon: CreditCard,
    badge: 'Terintegrasi',
  },
  {
    id: 'f5',
    title: 'Pelacakan Status Laundry (Tracking)',
    description: 'Fitur cek status real-time mulai dari diterima, dicuci, dikeringkan, disetrika, hingga pakaian siap diambil oleh pelanggan.',
    icon: PackageCheck,
    badge: 'Fitur Favorit',
  },
  {
    id: 'f6',
    title: 'Riwayat & Manajemen Pesanan',
    description: 'Catatan terstruktur data transaksi sebelumnya yang memudahkan pengecekan histori pesanan pelanggan kapan pun dibutuhkan.',
    icon: History,
    badge: 'Terstruktur',
  },
];

