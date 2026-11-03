import React from 'react';
import { MessagesSquare, CheckSquare, Code2, Rocket, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Konsultasikan Kebutuhan Website',
      desc: 'Diskusikan jenis layanan laundry Anda, daftar harga, dan preferensi tampilan website bersama tim RuangLaundry.',
      icon: MessagesSquare,
    },
    {
      step: '2',
      title: 'Pilih Layanan yang Sesuai',
      desc: 'Tentukan paket layanan yang paling sesuai dengan target dan anggaran (RuangStart, RuangCustom, atau RuangCare).',
      icon: CheckSquare,
    },
    {
      step: '3',
      title: 'Proses Pembuatan Website',
      desc: 'Tim kami mulai mengerjakan struktur website, formulir pemesanan, dan penyesuaian identitas brand bisnis laundry Anda.',
      icon: Code2,
    },
    {
      step: '4',
      title: 'Website Siap Digunakan',
      desc: 'Website selesai diuji, dipublikasikan, dan siap menerima pemesanan cucian online dari pelanggan setia Anda.',
      icon: Rocket,
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 bg-surface-bg border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Tahapan Pengerjaan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Mulai Digitalisasi Bisnis Laundry Anda
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Empat tahapan terstruktur dan mudah untuk mewujudkan kehadiran online bisnis laundry Anda.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-navy font-extrabold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-navy mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

