import React from 'react';
import { Layers, Target, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 sm:py-28 px-6 sm:px-12 bg-surface-bg border-y border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header - Editorial & Clean, No generic eyebrow pill or sparkles */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Profil RuangLaundry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Kenali RuangLaundry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            <strong>RuangLaundry</strong> merupakan penyedia jasa pembuatan website dan sistem pemesanan laundry online yang membantu UMKM meningkatkan profesionalitas dan efisiensi bisnis melalui teknologi digital.
          </p>
        </div>

        {/* Varied Rhythm Layout (Fix for R-14 Copy-Paste Cards): Flagship Highlight + Split Support */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Flagship Feature (Spanning 7 columns) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                Fokus Khusus Industri Laundry
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Kami memahami secara mendalam alur operasional laundry kiloan, satuan, dry clean, hingga layanan antar-jemput. Struktur website dan alur pemesanan dirancang khusus sesuai dinamika nyata pemilik laundry dan pelanggan.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Sistem terarah, tanpa fitur membingungkan yang tidak diperlukan.
            </div>
          </div>

          {/* Supporting Pillars (Spanning 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft flex-1">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-cyan flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-cyan" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">Mendukung Pertumbuhan UMKM</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Menghadirkan solusi digital yang terjangkau, mudah dikelola tanpa keahlian teknis rumit, serta siap pakai untuk akselerasi bisnis laundry Anda.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft flex-1">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-navy flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-navy" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">Identitas Brand Milik Anda</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Website dibangun dengan logo, warna tema, dan nama bisnis laundry Anda sendiri, memberikan citra profesional di mata pelanggan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
