# TECHNICAL SPECIFICATION
# RUANGLAUNDRY — COMPANY PROFILE WEBSITE

**Version:** 1.0  
**Status:** Technical Specification  
**Project:** RuangLaundry Company Profile  
**Architecture:** Component-Based Frontend Architecture  
**Frontend:** React  
**Build Tool:** Vite  
**Styling:** Tailwind CSS  
**Language:** JavaScript  
**Package Manager:** npm

---

# 1. PROJECT OVERVIEW

## 1.1 Technical Objective

Dokumen ini menetapkan standar teknis pengembangan website company profile RuangLaundry.

Tujuan utama:

1. Menghasilkan website company profile yang responsif.
2. Menggunakan arsitektur frontend berbasis komponen.
3. Memiliki struktur kode yang terorganisir dan mudah dipelihara.
4. Mengoptimalkan performa dan waktu loading.
5. Mendukung SEO dan aksesibilitas.
6. Mengintegrasikan CTA dengan WhatsApp resmi RuangLaundry.
7. Memudahkan pengembangan fitur tambahan pada masa mendatang.

## 1.2 Project Scope

Website dikembangkan sebagai company profile dan marketing landing page.

Fokus implementasi:

- Company information.
- Service presentation.
- Product features.
- Pricing packages.
- FAQ.
- WhatsApp integration.
- Responsive interface.
- SEO optimization.

Website tidak mencakup sistem operasional laundry maupun dashboard administrator.

---

# 2. TECHNOLOGY STACK

## 2.1 Core Technologies

| Technology | Purpose |
|---|---|
| React | Frontend UI development |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application programming language |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| React Router DOM | Routing jika diperlukan |
| npm | Package management |

## 2.2 Technology Selection

### React

Digunakan untuk membangun antarmuka menggunakan reusable components.

Alasan:
- Component-based architecture.
- Reusability.
- Maintainability.
- Memudahkan pengembangan section website.
- Ekosistem yang luas.

### Vite

Digunakan sebagai build tool.

Alasan:
- Development server cepat.
- Hot Module Replacement.
- Build production yang optimal.
- Integrasi dengan React.

### Tailwind CSS

Digunakan untuk styling seluruh komponen.

Ketentuan:
- Gunakan utility classes secara konsisten.
- Hindari inline styling yang tidak diperlukan.
- Gunakan design tokens.
- Hindari duplikasi class yang berlebihan.
- Gunakan reusable component untuk pola styling berulang.

### Lucide React

Digunakan untuk ikon antarmuka.

Ketentuan:
- Gunakan ikon sesuai konteks.
- Pertahankan konsistensi ukuran.
- Hindari penggunaan emoji sebagai ikon utama.

---

# 3. APPLICATION ARCHITECTURE

## 3.1 Architecture Pattern

Gunakan Component-Based Frontend Architecture.

Struktur utama:

1. Application Entry Point.
2. Layout Components.
3. Reusable UI Components.
4. Page Sections.
5. Data Configuration.
6. Styling and Design Tokens.
7. Utility Functions.

## 3.2 Architecture Principles

- Separation of concerns.
- Reusable components.
- Single responsibility.
- Consistent naming.
- Centralized configuration.
- Maintainable code.
- Avoid unnecessary abstraction.

## 3.3 Application Flow

Alur aplikasi:

Browser → React Application → Page Layout → Page Sections → Reusable Components → UI Rendering.

Data konten yang bersifat statis disimpan pada file konfigurasi agar mudah diperbarui tanpa mengubah struktur komponen.

---

# 4. PROJECT DIRECTORY STRUCTURE

Gunakan struktur folder berikut:

```text
ruang-laundry/
│
├── public/
│   ├── assets/
│   │   ├── logo-ruanglaundry.png
│   │   ├── team-ruanglaundry.png
│   │   └── illustrations/
│   │
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── TECHNICAL.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── TESTING.md
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Badge.jsx
│   │   │
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── HowToOrderSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── CTASection.jsx
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   ├── benefits.js
│   │   ├── features.js
│   │   ├── pricing.js
│   │   └── faq.js
│   │
│   ├── hooks/
│   │   └── useScrollPosition.js
│   │
│   ├── utils/
│   │   ├── whatsapp.js
│   │   └── scroll.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── postcss.config.js
└── README.md
```

Struktur dapat disesuaikan jika terdapat kebutuhan teknis yang valid, tetapi pemisahan komponen, section, data, dan utility harus dipertahankan.

---

# 5. COMPONENT ARCHITECTURE

## 5.1 Component Rules

Setiap komponen harus memiliki tanggung jawab yang jelas.

Contoh:

Navbar.jsx:
- Menampilkan navigasi.
- Mengelola mobile menu.
- Menangani navigasi section.

HeroSection.jsx:
- Menampilkan headline.
- Menampilkan deskripsi.
- Menampilkan CTA.
- Menampilkan foto tim.

PricingSection.jsx:
- Membaca data paket.
- Menampilkan pricing cards.
- Mengarahkan CTA sesuai paket.

FAQSection.jsx:
- Menampilkan pertanyaan.
- Mengelola accordion.
- Menampilkan jawaban.

## 5.2 Reusable Components

Komponen reusable yang wajib digunakan jika relevan:

- Button.
- Container.
- SectionHeading.
- FeatureCard.
- PricingCard.
- FAQItem.
- ProcessStep.
- IconWrapper.

Jangan membuat komponen terlalu kompleks dengan mencampurkan banyak tanggung jawab.

## 5.3 Data-Driven Components

Konten yang memiliki pola berulang harus menggunakan konfigurasi data.

Contoh:

```javascript
export const benefits = [
  {
    id: 1,
    title: "Pemesanan Online",
    description: "Memudahkan pelanggan melakukan pemesanan melalui website.",
    icon: "monitor-smartphone",
  },
  {
    id: 2,
    title: "Pengelolaan Pesanan",
    description: "Membantu pemilik laundry mengelola pesanan lebih terorganisir.",
    icon: "clipboard-list",
  },
];
```

Komponen kemudian membaca data menggunakan map().

Tujuan:
- Mengurangi duplikasi.
- Mempermudah pembaruan konten.
- Menjaga konsistensi tampilan.

---

# 6. ROUTING & NAVIGATION

## 6.1 Routing Strategy

Website versi pertama menggunakan Single Page Application dengan satu halaman utama.

React Router DOM tidak wajib digunakan apabila tidak ada halaman tambahan.

Navigasi utama menggunakan anchor links menuju section.

Contoh:

- #beranda
- #tentang
- #layanan
- #cara-kerja
- #harga
- #faq
- #kontak

## 6.2 Smooth Scrolling

Gunakan CSS scroll-behavior atau implementasi yang sesuai.

Pastikan:
- Navigasi tidak menutupi heading section.
- Sticky navbar memperhitungkan scroll offset.
- Navigasi mobile berfungsi dengan baik.

---

# 7. WHATSAPP INTEGRATION

## 7.1 Business Contact

Nomor resmi RuangLaundry:

089505799964

Format internasional:

6289505799964

Base URL:

```text
https://wa.me/6289505799964
```

## 7.2 WhatsApp Utility

Buat utility terpusat pada:

`src/utils/whatsapp.js`

Contoh implementasi:

```javascript
const WHATSAPP_NUMBER = "6289505799964";

export function getWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
```

## 7.3 CTA Message Configuration

Setiap CTA dapat memiliki pesan berbeda.

Contoh pesan umum:

"Halo RuangLaundry, saya tertarik menggunakan sistem pemesanan laundry online. Saya ingin mengetahui informasi lebih lanjut mengenai layanan yang tersedia."

Pesan RuangStart:

"Halo RuangLaundry, saya tertarik dengan paket RuangStart seharga Rp400.000. Mohon informasi lebih lanjut."

Pesan RuangCustom:

"Halo RuangLaundry, saya tertarik dengan paket RuangCustom seharga Rp1.000.000. Mohon informasi lebih lanjut."

Pesan RuangCare:

"Halo RuangLaundry, saya ingin mengetahui informasi mengenai layanan RuangCare seharga Rp200.000 per layanan."

Seluruh tombol CTA harus menggunakan utility yang sama agar nomor WhatsApp tidak ditulis berulang kali.

## 7.4 Link Behavior

- Gunakan target="_blank".
- Gunakan rel="noopener noreferrer".
- Pastikan URL WhatsApp valid.
- Jangan menggunakan nomor WhatsApp berbeda pada masing-masing section.

---

# 8. CONTENT & DATA MANAGEMENT

## 8.1 Static Content

Konten berikut disimpan secara terstruktur:

- Navigation.
- Benefits.
- Features.
- Pricing.
- FAQ.
- Process steps.

## 8.2 Pricing Data

Informasi harga yang digunakan:

| Package | Price | Billing |
|---|---:|---|
| RuangStart | Rp400.000 | Sesuai kesepakatan paket |
| RuangCustom | Rp1.000.000 | Sesuai kesepakatan paket |
| RuangCare | Rp200.000 | Per layanan |

Domain dan hosting termasuk paket sesuai ketentuan layanan.

Jangan menambahkan biaya atau periode pembayaran yang belum ditentukan.

## 8.3 Demo Availability

Demo sistem masih dalam pengembangan.

Ketentuan implementasi:
- Jangan membuat URL demo fiktif.
- Jangan mengarahkan tombol ke halaman kosong.
- Tombol demo dapat disembunyikan atau ditampilkan sebagai Segera Hadir.
- URL demo dapat dimasukkan ke konfigurasi setelah tersedia.

---

# 9. STYLING ARCHITECTURE

## 9.1 Design Token Implementation

Seluruh styling harus mengikuti DESIGN.md.

Warna utama:

```css
:root {
  --color-primary: #17213B;
  --color-secondary: #269DDF;
  --color-accent: #55B9F0;

  --color-background: #F5F8FC;
  --color-surface: #FFFFFF;
  --color-surface-muted: #EDF2F8;

  --color-text-primary: #202B3C;
  --color-text-secondary: #64748B;
  --color-border: #E2E8F0;
}
```

## 9.2 Typography

Gunakan Manrope sebagai font utama.

Pastikan font dimuat secara optimal dan tidak menyebabkan layout shift berlebihan.

## 9.3 Tailwind Configuration

Gunakan konfigurasi design tokens yang sesuai dengan versi Tailwind CSS yang dipilih.

Hindari membuat nilai warna, spacing, dan radius yang berbeda-beda tanpa alasan.

## 9.4 Responsive Styling

Utamakan pendekatan mobile-first.

Gunakan breakpoint Tailwind sesuai kebutuhan.

Pastikan:
- Layout desktop proporsional.
- Tablet tidak mengalami layout yang terlalu padat.
- Mobile menggunakan single-column layout.
- Gambar dan teks tidak saling bertabrakan.

---

# 10. PERFORMANCE OPTIMIZATION

## 10.1 Image Optimization

- Gunakan WebP atau AVIF apabila memungkinkan.
- Kompres gambar.
- Tetapkan width dan height.
- Gunakan lazy loading untuk gambar di bawah fold.
- Jangan melakukan lazy loading pada gambar hero yang menjadi konten utama.
- Hindari ukuran gambar yang jauh lebih besar daripada kebutuhan tampilan.

## 10.2 JavaScript Optimization

- Hindari dependency yang tidak diperlukan.
- Hindari state management library jika tidak dibutuhkan.
- Gunakan React hooks secara tepat.
- Hindari re-render yang tidak diperlukan.
- Pisahkan kode jika ukuran bundle berkembang signifikan.

## 10.3 Animation Optimization

- Gunakan CSS transitions untuk interaksi sederhana.
- Hindari animasi yang menyebabkan layout recalculation berlebihan.
- Gunakan transform dan opacity jika memungkinkan.
- Hormati prefers-reduced-motion.

## 10.4 Performance Validation

Gunakan Lighthouse untuk mengevaluasi:

- Performance.
- Accessibility.
- Best Practices.
- SEO.

Target internal awal:
- Performance: minimal 90.
- Accessibility: minimal 90.
- Best Practices: minimal 90.
- SEO: minimal 90.

Nilai tersebut merupakan target pengujian, bukan jaminan hasil sebelum audit dilakukan.

---

# 11. SEO IMPLEMENTATION

## 11.1 Metadata

Sediakan:

- Page title.
- Meta description.
- Canonical URL setelah domain ditetapkan.
- Open Graph metadata.
- Favicon.

Contoh title:

RuangLaundry | Website & Solusi Digital untuk Bisnis Laundry

Contoh description:

RuangLaundry menyediakan website pemesanan laundry online untuk membantu pemilik usaha mengelola pesanan dan mengembangkan bisnis secara digital.

## 11.2 Semantic HTML

Gunakan elemen:

- header.
- nav.
- main.
- section.
- article jika relevan.
- footer.

Pastikan hanya terdapat satu H1 utama pada halaman.

## 11.3 SEO Assets

Sediakan:
- robots.txt.
- sitemap.xml.
- Favicon.
- Social sharing image.

Jangan membuat structured data yang berisi informasi perusahaan yang belum terverifikasi.

---

# 12. ACCESSIBILITY

Target WCAG 2.2 AA.

Ketentuan:

- Kontras teks memadai.
- Semantic HTML.
- Keyboard navigation.
- Visible focus state.
- Accessible labels.
- Alt text.
- Button dan link memiliki fungsi yang jelas.
- Accordion dapat diakses dengan keyboard.
- Mobile navigation memiliki accessible state.

---

# 13. SECURITY & RELIABILITY

Walaupun website tidak memiliki backend, beberapa praktik tetap wajib diterapkan:

- Jangan menyimpan API key atau secret pada frontend.
- Jangan memasukkan informasi sensitif ke repository.
- Gunakan external link attributes yang aman.
- Validasi URL eksternal sebelum digunakan.
- Gunakan HTTPS pada deployment.
- Hindari memasukkan script eksternal yang tidak terpercaya.
- Pastikan dependency diperbarui secara terkontrol.

---

# 14. TESTING STRATEGY

## 14.1 Functional Testing

Uji:

- Navbar navigation.
- Mobile hamburger menu.
- Smooth scrolling.
- WhatsApp CTA.
- Pesan WhatsApp berdasarkan paket.
- FAQ accordion.
- Pricing card.
- External links.

## 14.2 Responsive Testing

Uji pada:

- 360px mobile.
- 390px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.

Pastikan tidak ada horizontal overflow dan elemen penting tidak terpotong.

## 14.3 Visual Testing

Bandingkan hasil implementasi dengan DESIGN.md.

Periksa:
- Warna.
- Typography.
- Spacing.
- Layout.
- Card.
- Button.
- Foto tim.
- Responsivitas.

## 14.4 Technical Testing

Jalankan:

```bash
npm run build
```

Pastikan:
- Build berhasil.
- Tidak ada error compile.
- Tidak ada broken imports.
- Tidak ada missing assets.
- Tidak ada error runtime yang mengganggu.

---

# 15. DEVELOPMENT COMMANDS

Command standar:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Gunakan package scripts yang sesuai dengan konfigurasi Vite.

---

# 16. DEPLOYMENT

Website dapat di-deploy menggunakan layanan hosting frontend seperti:

- Vercel.
- Netlify.
- Hosting yang mendukung static frontend deployment.

Ketentuan:

- Build production harus berhasil.
- Domain diarahkan ke hosting.
- HTTPS aktif.
- Metadata diperiksa.
- WhatsApp CTA diuji pada production.
- Semua asset harus dapat dimuat.

Domain produksi mengikuti domain resmi RuangLaundry yang ditetapkan pemilik usaha.

---

# 17. MAINTAINABILITY & CODING STANDARDS

## 17.1 Naming Convention

- React components: PascalCase.
- Functions: camelCase.
- Constants: UPPER_SNAKE_CASE jika sesuai konteks.
- Data files: camelCase.
- CSS classes: mengikuti standar Tailwind.

## 17.2 Code Quality

- Hindari duplikasi kode.
- Gunakan reusable components.
- Hindari komponen terlalu panjang.
- Pisahkan data dari presentation.
- Hindari hardcoded WhatsApp number di banyak file.
- Hapus dependency dan kode yang tidak digunakan.
- Jangan membuat abstraction berlebihan.

## 17.3 Documentation

Perubahan teknis yang signifikan harus dicatat pada README.md atau dokumentasi terkait.

---

# 18. AI AGENT DEVELOPMENT RULES

AI Agent wajib:

1. Membaca PRD.md.
2. Membaca DESIGN.md.
3. Membaca TECHNICAL.md.
4. Mengikuti seluruh ketentuan proyek.
5. Tidak mengganti technology stack tanpa persetujuan.
6. Tidak menambahkan backend tanpa kebutuhan.
7. Tidak membuat fitur di luar scope.
8. Tidak mengarang informasi perusahaan.
9. Menggunakan asset resmi yang tersedia.
10. Membuat komponen reusable.
11. Menjaga konsistensi desain.
12. Melakukan testing setelah implementasi.
13. Menjalankan production build.
14. Melaporkan file yang dibuat dan diubah.
15. Melaporkan kendala dan fitur yang belum selesai secara transparan.

Jika terdapat konflik antar dokumen:

- PRD.md menjadi acuan kebutuhan produk.
- DESIGN.md menjadi acuan visual dan UX.
- TECHNICAL.md menjadi acuan implementasi teknis.

Jangan mengubah spesifikasi secara sepihak.

---

# 19. FINAL TECHNICAL DEFINITION

RuangLaundry Company Profile dibangun menggunakan React, Vite, JavaScript, dan Tailwind CSS dengan pendekatan Component-Based Frontend Architecture.

Website versi pertama berfokus pada company profile, pemasaran layanan, informasi paket, serta integrasi konsultasi WhatsApp.

Tidak diperlukan backend maupun database untuk kebutuhan awal.

Arsitektur harus sederhana, modular, responsif, maintainable, dan siap dikembangkan apabila RuangLaundry membutuhkan fitur tambahan pada masa mendatang.

**TECHNICAL.md menjadi Single Source of Truth untuk technology stack, struktur proyek, arsitektur frontend, integrasi, standar coding, testing, dan deployment.**