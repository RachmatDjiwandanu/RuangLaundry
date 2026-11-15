import { 
  ClipboardCheck, 
  Smartphone, 
  Layers, 
  Search, 
  Award, 
  Globe 
} from 'lucide-react';

/**
 * Benefits of Online Laundry System.
 * Follows PRD.md Section 6 FR-04 and Antislop R-04 (no generic Sparkles glyphs).
 */
export const benefitsData = [
  {
    id: 'b1',
    title: 'Kurangi Pencatatan Manual',
    description: 'Tinggalkan pencatatan nota kertas yang rentan hilang atau tercecer. Semua data pesanan tersimpan secara digital dan rapi.',
    icon: ClipboardCheck,
  },
  {
    id: 'b2',
    title: 'Pemesanan Praktis Kapan Saja',
    description: 'Pelanggan dapat melakukan pemesanan cuci pakaian dengan mudah langsung melalui website tanpa perlu mengantre.',
    icon: Smartphone,
  },
  {
    id: 'b3',
    title: 'Pengelolaan Lebih Terorganisir',
    description: 'Membantu pemilik dan staf laundry memilah pesanan reguler, ekspres, hingga status penyelesaian cucian secara jelas.',
    icon: Layers,
  },
  {
    id: 'b4',
    title: 'Pelacakan Status Mandiri',
    description: 'Pelanggan dapat mengecek sendiri progres laundry menggunakan kode pesanan, mengurangi pertanyaan berulang ke WhatsApp admin.',
    icon: Search,
  },
  {
    id: 'b5',
    title: 'Tingkatkan Kredibilitas Bisnis',
    description: 'Website dengan domain dan brand laundry sendiri menghadirkan citra usaha yang jauh lebih profesional dan terpercaya.',
    icon: Award,
  },
  {
    id: 'b6',
    title: 'Akses Pasar Lebih Luas',
    description: 'Memperluas jangkauan calon pelanggan di area sekitar melalui identitas digital yang mudah ditemukan dan dibagikan.',
    icon: Globe,
  },
];
