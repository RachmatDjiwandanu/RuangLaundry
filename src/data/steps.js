import { 
  UserCheck, 
  Clock, 
  Scale, 
  CreditCard, 
  SearchCheck,
  PackageSearch,
  MessageCircle,
  Code2,
  CheckCircle2
} from 'lucide-react';

/**
 * How the Online Laundry System Works (from customer perspective).
 * Follows PRD.md FR-06 and Antislop R-04.
 */
export const laundrySystemSteps = [
  {
    step: 1,
    title: 'Isi Data Pemesanan',
    description: 'Pelanggan memasukkan nama, alamat penjemputan/pengantaran, nomor WhatsApp aktif, serta berat cucian (opsional).',
    icon: UserCheck,
    tag: 'Input Mandiri',
  },
  {
    step: 2,
    title: 'Pilih Jenis Layanan',
    description: 'Pelanggan memilih paket pengerjaan yang diinginkan: Layanan Regular atau Express sesuai kebutuhan waktu.',
    icon: Clock,
    tag: 'Regular / Express',
  },
  {
    step: 3,
    title: 'Kalkulasi Biaya',
    description: 'Estimasi total biaya muncul otomatis jika berat diisi, atau dihitung akurat setelah penimbangan oleh admin.',
    icon: Scale,
    tag: 'Transparan',
  },
  {
    step: 4,
    title: 'Konfirmasi Tagihan',
    description: 'Pelanggan melihat rincian biaya dan instruksi pembayaran sesuai metode transfer yang disediakan toko laundry.',
    icon: CreditCard,
    tag: 'Rincian Jelas',
  },
  {
    step: 5,
    title: 'Pantau Status Laundry',
    description: 'Pelanggan memperoleh kode unik pesanan untuk melacak progres pencucian mulai dari dicuci hingga siap diambil.',
    icon: SearchCheck,
    tag: 'Live Tracking',
  },
];

/**
 * How to Order RuangLaundry Services (from laundry business owner perspective).
 * Follows PRD.md FR-07 and DESIGN.md Section 10.8.
 */
export const orderRuangLaundrySteps = [
  {
    step: 1,
    title: 'Pilih Paket Layanan',
    description: 'Pilih paket yang paling sesuai dengan kebutuhan usaha Anda: paket awal RuangStart atau paket lengkap RuangCustom.',
    icon: PackageSearch,
  },
  {
    step: 2,
    title: 'Konsultasi via WhatsApp',
    description: 'Hubungi tim RuangLaundry untuk mendiskusikan nama domain yang diinginkan, logo bisnis, serta daftar layanan laundry Anda.',
    icon: MessageCircle,
  },
  {
    step: 3,
    title: 'Proses Pengerjaan',
    description: 'Tim kami mengonfigurasi website, domain, hosting, dan menyusun sistem pemesanan online sesuai identitas brand Anda.',
    icon: Code2,
  },
  {
    step: 4,
    title: 'Pengujian & Serah Terima',
    description: 'Website diuji menyeluruh dan diserahkan kepada Anda, lengkap dengan panduan penggunaan agar siap langsung beroperasi.',
    icon: CheckCircle2,
  },
];
