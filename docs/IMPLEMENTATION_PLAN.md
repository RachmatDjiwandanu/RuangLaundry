# IMPLEMENTATION_PLAN.md
## RuangLaundry Company Profile Website

**Versi:** 1.0  
**Status:** Implementation Planning  
**Dokumen Acuan:** PRD.md, DESIGN.md, TECHNICAL.md

---

## 1. Tujuan Implementasi

Dokumen ini menjadi panduan teknis dan tahapan pengerjaan website company profile RuangLaundry.

Implementasi harus mengikuti kebutuhan bisnis, desain visual, dan ketentuan teknis yang telah ditetapkan.

Pengerjaan dilakukan secara bertahap agar:
- Struktur proyek tetap rapi dan mudah dikembangkan.
- Tampilan konsisten dengan DESIGN.md.
- Fitur sesuai dengan PRD.md.
- Kode tidak menumpuk dalam satu file.
- Setiap tahap dapat diuji sebelum melanjutkan ke tahap berikutnya.

## 2. Aturan Utama Implementasi

AI Agent wajib mengikuti aturan berikut:

1. Baca dan pahami PRD.md, DESIGN.md, dan TECHNICAL.md sebelum menulis kode.
2. Jangan mengubah kebutuhan bisnis yang sudah ditetapkan.
3. Jangan membuat fitur di luar ruang lingkup PRD tanpa persetujuan.
4. Jangan membuat seluruh website dalam satu tahap.
5. Gunakan React, Vite, JavaScript, Tailwind CSS, dan Lucide React.
6. Gunakan komponen reusable dan struktur folder sesuai TECHNICAL.md.
7. Gunakan Manrope sebagai font utama.
8. Gunakan warna dan design token sesuai DESIGN.md.
9. Pastikan tampilan responsif pada desktop, tablet, dan mobile.
10. Jangan menggunakan data, harga, nomor WhatsApp, atau informasi bisnis palsu.
11. Jangan membuat backend, database, autentikasi, atau dashboard admin karena tidak termasuk ruang lingkup awal.
12. Jangan menganggap website company profile sebagai website pemesanan laundry. Keduanya merupakan produk yang berbeda.

---

## 3. Tahapan Implementasi

### MILESTONE 0 — Project Inspection

**Tujuan:** Memeriksa kondisi repository sebelum melakukan perubahan.

Tugas:
- Periksa seluruh struktur folder proyek.
- Periksa apakah React dan Vite sudah tersedia.
- Periksa konfigurasi Tailwind CSS.
- Periksa dependency yang sudah terpasang.
- Periksa ketersediaan aset gambar tim RuangLaundry.
- Periksa keberadaan PRD.md, DESIGN.md, dan TECHNICAL.md.
- Identifikasi konfigurasi yang perlu diperbaiki.

Ketentuan:
- Jangan menghapus file yang sudah ada tanpa alasan teknis.
- Jangan melakukan instalasi ulang secara sembarangan.
- Jangan langsung membuat halaman website sebelum inspeksi selesai.

**Acceptance Criteria:**
- Kondisi repository sudah dipahami.
- Dependency dan konfigurasi yang dibutuhkan sudah teridentifikasi.
- Tidak ada file penting yang terhapus.
- Daftar pekerjaan awal tersedia.

### MILESTONE 1 — Project Foundation

**Tujuan:** Menyiapkan fondasi aplikasi.

Tugas:
- Konfigurasi React dan Vite.
- Konfigurasi Tailwind CSS sesuai versi yang digunakan.
- Instalasi Lucide React.
- Konfigurasi font Manrope.
- Siapkan global CSS.
- Siapkan struktur folder.
- Pastikan aplikasi dapat dijalankan.

Struktur folder yang dituju:

```text
ruanglaundry/
├── public/
│   └── assets/
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── TECHNICAL.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── TESTING.md
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── layout/
│   ├── sections/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

**Acceptance Criteria:**
- Aplikasi berjalan tanpa error.
- Struktur folder sudah dibuat.
- Tailwind CSS berfungsi.
- Lucide React dapat digunakan.
- Font Manrope berhasil diterapkan.

**Pengujian:**

```bash
npm run dev
npm run build
```

### MILESTONE 2 — Design System & Reusable Components

**Tujuan:** Membuat fondasi visual yang digunakan oleh seluruh halaman.

Tugas:
- Implementasikan seluruh design token dari DESIGN.md.
- Buat konfigurasi warna.
- Terapkan typography scale.
- Terapkan spacing dan border radius.
- Buat komponen Container.
- Buat komponen Button.
- Buat komponen SectionHeading.
- Buat komponen reusable lain yang diperlukan.

Warna utama:

| Token | Hex |
|---|---|
| Primary Navy | #17213B |
| Secondary Blue | #269DDF |
| Accent Blue | #55B9F0 |
| Background | #F5F8FC |
| Surface | #FFFFFF |
| Primary Text | #202B3C |
| Secondary Text | #64748B |
| Deep Navy | #10192D |

**Acceptance Criteria:**
- Seluruh komponen menggunakan design token.
- Tidak ada warna yang dibuat sembarangan.
- Typography konsisten.
- Komponen dapat digunakan ulang.
- Tampilan dasar tidak memiliki konflik CSS.

### MILESTONE 3 — Navbar & Hero Section

**Tujuan:** Membuat bagian pertama yang dilihat pengunjung.

#### Navbar
Implementasikan:
- Logo RuangLaundry.
- Menu Beranda.
- Menu Tentang Kami.
- Menu Fitur.
- Menu Cara Kerja.
- Menu Harga.
- Tombol Konsultasi.
- Mobile navigation.

#### Hero Section

Headline:

**Digitalisasikan Bisnis Laundry Anda, Kelola Pesanan Lebih Mudah.**

Subheadline harus menjelaskan bahwa RuangLaundry menyediakan website pemesanan laundry online untuk membantu bisnis laundry mengelola pesanan secara lebih terstruktur.

Implementasikan:
- Headline.
- Deskripsi singkat.
- CTA Konsultasi.
- CTA Lihat Layanan atau fitur.
- Foto dua anggota tim RuangLaundry.
- Elemen visual pendukung secukupnya.

Layout:
- Desktop: teks di kiri, foto di kanan.
- Mobile: teks di atas, foto di bawah.

Gunakan aset foto tim yang tersedia. Jangan membuat path gambar palsu. Jika aset belum tersedia, gunakan placeholder sementara yang jelas dan minta konfirmasi sebelum menggantinya.

**Acceptance Criteria:**
- Navbar berfungsi.
- Semua anchor navigation mengarah ke section yang benar.
- CTA WhatsApp membuka nomor yang benar.
- Hero tampil sesuai DESIGN.md.
- Foto tidak terpotong secara tidak proporsional.
- Mobile layout tetap nyaman dibaca.

### MILESTONE 4 — About, Benefits & Features

**Tujuan:** Menjelaskan identitas RuangLaundry dan manfaat produknya.

#### About RuangLaundry

Jelaskan:
- Identitas RuangLaundry.
- Layanan pembuatan website laundry online.
- Fokus pada digitalisasi proses pemesanan laundry.
- Tujuan membantu bisnis laundry memiliki sistem pemesanan yang lebih terorganisir.

#### Benefits

Tampilkan manfaat yang relevan:
- Mempermudah pelanggan melakukan pemesanan.
- Mengurangi ketergantungan pada pencatatan manual.
- Membantu pengelolaan pesanan.
- Memudahkan pelanggan memantau status laundry jika fitur tracking tersedia.
- Memberikan citra bisnis yang lebih profesional.

#### Features

Tampilkan fitur produk secara terstruktur:
- Form pemesanan laundry.
- Input informasi pelanggan.
- Pilihan layanan Regular dan Express.
- Input berat laundry jika tersedia.
- Estimasi biaya jika berat sudah diketahui.
- Kode pesanan.
- Pelacakan status pesanan.

Jangan menampilkan fitur sebagai fitur yang sudah tersedia apabila implementasinya belum dikonfirmasi.

**Acceptance Criteria:**
- Informasi bisnis mudah dipahami.
- Tidak ada klaim yang tidak dapat dibuktikan.
- Setiap fitur memiliki deskripsi yang jelas.
- Tampilan konsisten dengan design system.

### MILESTONE 5 — How It Works & Ordering Process

**Tujuan:** Menjelaskan dua proses yang berbeda kepada pengunjung.

#### A. Cara Kerja Sistem Laundry Online

Tampilkan alur pelanggan menggunakan website laundry:

1. Pelanggan membuka website laundry.
2. Pelanggan mengisi informasi pemesanan.
3. Pelanggan memilih layanan Regular atau Express.
4. Pelanggan memasukkan berat laundry jika sudah mengetahui beratnya.
5. Pelanggan menerima informasi biaya atau menunggu penimbangan oleh admin.
6. Pelanggan memperoleh kode pesanan.
7. Pelanggan memantau status pesanan sesuai fitur yang tersedia.

#### B. Cara Memesan Layanan RuangLaundry

Tampilkan alur calon klien membeli layanan dari RuangLaundry:

1. Calon klien melihat paket layanan.
2. Calon klien memilih paket yang dibutuhkan.
3. Calon klien menghubungi RuangLaundry melalui WhatsApp.
4. RuangLaundry melakukan konsultasi kebutuhan.
5. Proses pengerjaan dan penyerahan website mengikuti kesepakatan layanan.

**Acceptance Criteria:**
- Kedua alur tidak tercampur.
- Pengunjung dapat membedakan penggunaan produk laundry dengan pembelian jasa RuangLaundry.
- Setiap langkah mudah dipahami.

### MILESTONE 6 — Pricing Section

**Tujuan:** Menampilkan paket layanan secara transparan.

Gunakan data harga berikut:

| Paket | Harga |
|---|---:|
| RuangStart | Rp400.000 |
| RuangCustom | Rp1.000.000 |
| RuangCare | Rp200.000 per layanan |

Ketentuan:
- Domain dan hosting termasuk dalam paket sesuai informasi bisnis yang telah ditetapkan.
- RuangCare dihitung per layanan, bukan biaya bulanan.
- Jangan mengarang rincian fitur atau batas revisi yang belum dikonfirmasi.
- Setiap paket memiliki CTA WhatsApp.
- Pesan WhatsApp dapat menyesuaikan paket yang dipilih.

**Acceptance Criteria:**
- Harga tampil akurat.
- Tidak ada biaya tambahan yang dibuat-buat.
- CTA paket membuka WhatsApp dengan pesan yang sesuai.
- Layout tiga paket responsif.

### MILESTONE 7 — FAQ, CTA & Footer

**Tujuan:** Menjawab pertanyaan pengunjung dan memberikan jalur komunikasi yang jelas.

#### FAQ

Buat komponen accordion untuk pertanyaan yang relevan, misalnya:
- Apa itu RuangLaundry?
- Apa yang dimaksud website laundry online?
- Apakah domain dan hosting termasuk?
- Bagaimana cara memesan layanan?
- Apa perbedaan RuangStart dan RuangCustom?
- Bagaimana sistem RuangCare?
- Apakah tersedia demo website?

Jawaban harus mengikuti informasi bisnis yang sudah dikonfirmasi. Jika ada informasi yang belum tersedia, jangan membuat jawaban seolah-olah sudah pasti.

#### CTA

Arahkan pengunjung untuk konsultasi melalui WhatsApp.

#### Footer

Tampilkan:
- Logo RuangLaundry.
- Deskripsi singkat.
- Navigasi website.
- Kontak WhatsApp.
- Informasi hak cipta.

**Acceptance Criteria:**
- Accordion dapat dibuka dan ditutup.
- CTA berfungsi.
- Footer memiliki informasi yang benar.
- Tidak ada tautan kosong atau rusak.

### MILESTONE 8 — Responsive Optimization

**Tujuan:** Memastikan website nyaman digunakan pada berbagai ukuran layar.

Periksa:
- Desktop.
- Laptop.
- Tablet.
- Mobile.

Fokus pemeriksaan:
- Navbar dan mobile menu.
- Ukuran headline.
- Posisi gambar hero.
- Lebar container.
- Grid pricing.
- FAQ accordion.
- Spacing antarsection.
- Tombol dan tap target.
- Overflow horizontal.

**Acceptance Criteria:**
- Tidak ada horizontal overflow.
- Tidak ada teks terpotong.
- Gambar tetap proporsional.
- Semua tombol mudah ditekan.
- Seluruh section dapat dibaca dengan nyaman.

### MILESTONE 9 — SEO, Accessibility & Performance

**Tujuan:** Menyiapkan kualitas website sebelum dipublikasikan.

SEO:
- Judul halaman.
- Meta description.
- Favicon.
- Open Graph metadata.
- Semantic HTML.
- Heading hierarchy.
- Alt text gambar.

Accessibility:
- Kontras warna yang memadai.
- Navigasi keyboard.
- Focus state.
- Label tombol yang jelas.
- Struktur heading yang logis.
- Accordion dapat diakses.

Performance:
- Optimasi ukuran gambar.
- Gunakan format gambar modern jika memungkinkan.
- Lazy loading untuk gambar di luar viewport awal.
- Hindari dependency yang tidak diperlukan.
- Minimalkan penggunaan animasi berlebihan.

**Acceptance Criteria:**
- Metadata tersedia.
- Tidak ada gambar penting tanpa alt text.
- Navigasi keyboard dapat digunakan.
- Tidak ada error console yang kritis.
- Ukuran aset telah dioptimalkan.

### MILESTONE 10 — Final Testing & Audit

**Tujuan:** Memastikan seluruh website sesuai kebutuhan sebelum deployment.

Pengujian fungsional:
- Navigasi navbar.
- Anchor link.
- Tombol WhatsApp.
- Pesan WhatsApp setiap paket.
- FAQ accordion.
- Mobile navigation.
- Link footer.
- Tampilan seluruh section.

Pengujian teknis:

```bash
npm run build
```

Periksa:
- Build berhasil.
- Tidak ada error runtime.
- Tidak ada broken image.
- Tidak ada broken link.
- Tidak ada horizontal overflow.
- Tidak ada data harga yang salah.
- Tidak ada nomor WhatsApp yang salah.

Buat dokumen hasil pengujian pada:

```text
docs/TESTING.md
```

**Acceptance Criteria:**
- Semua pengujian utama berhasil.
- Seluruh CTA berfungsi.
- Website responsif.
- Build production berhasil.
- Tidak ada masalah kritis yang belum diselesaikan.

---

## 4. Aturan CTA dan WhatsApp

Nomor WhatsApp resmi:

`6289505799964`

Gunakan format URL:

```text
https://wa.me/6289505799964
```

Gunakan pesan yang relevan sesuai konteks, misalnya:

- Konsultasi umum.
- Pertanyaan RuangStart.
- Pertanyaan RuangCustom.
- Pertanyaan RuangCare.

Buat helper terpusat untuk menghasilkan URL WhatsApp agar nomor dan format pesan konsisten.

Jangan menulis nomor WhatsApp berbeda-beda pada banyak komponen.

---

## 5. Aturan Demo Website

Demo sistem laundry masih dalam tahap pengembangan.

Ketentuan:
- Jangan menggunakan URL demo palsu.
- Jangan mengarahkan tombol demo ke halaman yang tidak tersedia.
- CTA demo boleh disembunyikan sementara.
- Alternatifnya, tampilkan status “Demo Segera Hadir”.
- Aktifkan CTA demo hanya setelah URL yang valid tersedia dan telah diuji.

---

## 6. Aturan Konten dan Data

Semua informasi harus bersumber dari PRD.md atau informasi bisnis yang telah dikonfirmasi.

Jangan mengarang:
- Testimoni pelanggan.
- Jumlah klien.
- Statistik keberhasilan.
- Pengalaman perusahaan.
- Sertifikasi.
- Logo partner.
- Alamat kantor.
- Akun media sosial.
- Fitur produk yang belum tersedia.
- Garansi atau ketentuan layanan yang belum ditetapkan.

Jika ada informasi yang belum tersedia, tandai sebagai TODO dan minta konfirmasi.

---

## 7. Definition of Done

Website dinyatakan selesai apabila:

- [ ] Semua section sesuai PRD.md.
- [ ] Seluruh tampilan sesuai DESIGN.md.
- [ ] Struktur kode mengikuti TECHNICAL.md.
- [ ] Semua CTA berfungsi.
- [ ] Informasi harga akurat.
- [ ] WhatsApp menggunakan nomor resmi.
- [ ] Tidak ada tautan demo palsu.
- [ ] Tampilan desktop dan mobile responsif.
- [ ] Tidak ada broken image.
- [ ] Tidak ada error kritis.
- [ ] Build production berhasil.
- [ ] Pengujian terdokumentasi dalam TESTING.md.

---

## 8. Instruksi Eksekusi untuk AI Agent

Kerjakan implementasi berdasarkan urutan milestone.

**Aturan wajib:**

1. Mulai dari Milestone 0.
2. Laporkan hasil inspeksi sebelum mengubah kode.
3. Kerjakan satu milestone pada satu waktu.
4. Setelah setiap milestone, jalankan pengujian yang relevan.
5. Laporkan file yang dibuat atau diubah.
6. Laporkan hasil pengujian dan masalah yang ditemukan.
7. Jangan melanjutkan ke milestone berikutnya jika milestone saat ini masih memiliki masalah kritis.
8. Jangan mengubah keputusan desain atau kebutuhan bisnis tanpa persetujuan.
9. Jangan mengganti aset utama dengan gambar generik tanpa persetujuan.
10. Pertahankan kualitas kode, konsistensi desain, dan responsivitas.

**Perintah awal:** Lakukan Milestone 0 — Project Inspection terlebih dahulu. Jangan langsung mengimplementasikan seluruh website.