import React from 'react';
import { Shirt, Award, Smartphone, Sliders, ShieldCheck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const supportingPoints = [
    {
      title: 'Website dengan Identitas Brand Sendiri',
      desc: 'Tingkatkan kredibilitas bisnis Anda dengan logo, nama, warna khas, dan nama domain bisnis Anda sendiri di hadapan para pelanggan.',
      icon: Award,
      color: 'bg-cyan-light text-cyan'
    },
    {
      title: 'Tampilan Responsif di Berbagai Perangkat',
      desc: 'Dapat dibuka dengan lancar dan nyaman melalui smartphone, tablet, maupun laptop tanpa kendala tampilan terpotong.',
      icon: Smartphone,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Pilihan Template Maupun Desain Custom',
      desc: 'Tersedia pilihan template praktis yang hemat biaya, atau pembuatan custom eksklusif yang dirancang khusus mengikuti konsep brand Anda.',
      icon: Sliders,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Layanan Maintenance Website',
      desc: 'RuangLaundry mendampingi operasional Anda dengan layanan pemeliharaan teknis rutin demi memastikan performa dan keamanan website selalu optimal.',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section id="keunggulan" className="py-20 sm:py-28 px-6 sm:px-12 bg-surface-bg border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header (Clean, no capsule badge or generic sparkles) */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Keunggulan Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Mengapa Memilih RuangLaundry?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Dedikasi kami adalah menghadirkan solusi teknologi yang tepat guna, mudah dipahami, dan berdampak nyata bagi pertumbuhan bisnis laundry Anda.
          </p>
        </div>

        {/* Varied Rhythm Layout (Fix for R-14 Copy-Paste Cards): Flagship Highlight + 2x2 Support Grid */}
        <div className="space-y-6">
          {/* Flagship Highlight Card: Solusi Digital Khusus Laundry */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                <Shirt className="w-7 h-7" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  Fokus Industri #01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy">
                  Solusi Digital Khusus Bisnis Laundry
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Bukan sekadar website profil umum. Setiap alur pemesanan, pilihan kiloan vs satuan, dan sistem jadwal penjemputan dirancang khusus untuk mengakomodasi realitas operasional usaha laundry.
                </p>
              </div>
            </div>
          </div>

          {/* 2x2 Grid for Other 4 Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportingPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-navy mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
