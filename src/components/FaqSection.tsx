import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'Apa itu RuangLaundry?',
      category: 'Umum',
      a: 'RuangLaundry adalah penyedia jasa pembuatan website dan sistem pemesanan online yang berfokus membantu bisnis laundry, khususnya UMKM, agar dapat memiliki kehadiran digital profesional dan menerima pesanan pelanggan secara lebih praktis.'
    },
    {
      q: 'Siapa yang dapat menggunakan layanan RuangLaundry?',
      category: 'Layanan',
      a: 'Layanan RuangLaundry ditujukan bagi pemilik usaha laundry kiloan, laundry satuan, dry cleaning, hingga usaha laundry antar-jemput yang ingin memiliki website resmi beridentitas brand sendiri.'
    },
    {
      q: 'Apa perbedaan RuangStart dan RuangCustom?',
      category: 'Paket',
      a: 'RuangStart menggunakan template desain siap pakai yang telah disediakan oleh RuangLaundry dengan proses cepat dan harga lebih terjangkau (Rp400.000). Sedangkan RuangCustom memberikan fleksibilitas penuh untuk membuat desain dan tema sesuai permintaan serta identitas khas bisnis Anda (Rp1.000.000).'
    },
    {
      q: 'Apakah website dapat menggunakan nama domain sendiri?',
      category: 'Domain & Teknis',
      a: 'Ya, website dapat dihubungkan dengan nama domain bisnis laundry Anda sendiri (misalnya: www.laundryanda.com) agar terlihat lebih kredibel dan mudah diingat oleh pelanggan.'
    },
    {
      q: 'Bagaimana proses pembuatan website?',
      category: 'Alur',
      a: 'Prosesnya dimulai dengan konsultasi kebutuhan dan materi bisnis laundry Anda, pemilihan paket layanan (RuangStart atau RuangCustom), proses pengerjaan website oleh tim RuangLaundry, pengujian sistem pemesanan, hingga website siap dipublikasikan dan digunakan.'
    },
    {
      q: 'Apa itu layanan RuangCare?',
      category: 'Paket',
      a: 'RuangCare (Rp200.000) adalah layanan pemeliharaan (maintenance) berkala untuk menjaga performa, kestabilan sistem pemesanan, serta memastikan website laundry Anda tetap berjalan dengan baik setiap saat.'
    }
  ];

  const filteredFaqs = faqs.filter(item => 
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Temukan jawaban atas pertanyaan umum seputar layanan pembuatan website laundry dari RuangLaundry.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-8 relative">
          <label htmlFor="faq-search" className="sr-only">Cari pertanyaan</label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="faq-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik (misal: domain, custom, harga)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-primary/40 bg-primary-light/30 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-primary' : 'text-navy'}`}>
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-primary/10">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs sm:text-sm bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              Tidak ditemukan pertanyaan yang cocok dengan "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
