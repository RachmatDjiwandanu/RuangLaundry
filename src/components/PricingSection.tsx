import React, { useState } from 'react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [highlightedId, setHighlightedId] = useState<string>('ruangcustom');

  const plans = [
    {
      id: 'ruangstart',
      name: 'RuangStart',
      price: 'Rp400.000',
      badge: 'Template Siap Pakai',
      isCustom: false,
      description: 'Solusi pembuatan website laundry menggunakan template yang telah disediakan RuangLaundry.',
      highlight: 'Pilihan ekonomis dan cepat untuk memulai digitalisasi bisnis laundry.'
    },
    {
      id: 'ruangcustom',
      name: 'RuangCustom',
      price: 'Rp1.000.000',
      badge: 'Kustomisasi Desain',
      isCustom: true,
      description: 'Pembuatan website laundry dengan desain dan tema sesuai permintaan serta identitas bisnis pelanggan.',
      highlight: 'Kustomisasi penuh untuk membangun identitas brand yang kuat dan profesional.'
    },
    {
      id: 'ruangcare',
      name: 'RuangCare',
      price: 'Rp200.000',
      badge: 'Layanan Pemeliharaan',
      isCustom: false,
      description: 'Layanan maintenance website untuk pemeliharaan dan menjaga performa website.',
      highlight: 'Dukungan berkala untuk memastikan sistem website selalu stabil dan terawat.'
    }
  ];

  return (
    <section id="harga" className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Pilihan Paket
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Pilihan Layanan dan Harga
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Pilih solusi website yang sesuai dengan kebutuhan dan anggaran bisnis laundry Anda.
          </p>
        </div>

        {/* Interactive Helper Tabs to highlight matching plan */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1 hidden sm:inline">Panduan Cepat:</span>
          <button
            type="button"
            onClick={() => setHighlightedId('ruangstart')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none ${
              highlightedId === 'ruangstart'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Untuk yang Butuh Cepat (Template)
          </button>
          <button
            type="button"
            onClick={() => setHighlightedId('ruangcustom')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none ${
              highlightedId === 'ruangcustom'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Untuk Desain Eksklusif (Custom)
          </button>
          <button
            type="button"
            onClick={() => setHighlightedId('ruangcare')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none ${
              highlightedId === 'ruangcare'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Untuk Pemeliharaan (Maintenance)
          </button>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isTarget = highlightedId === plan.id;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isTarget
                    ? 'bg-navy text-white shadow-xl ring-2 ring-primary transform md:-translate-y-1'
                    : 'bg-white text-navy border border-slate-200 shadow-soft hover:shadow-card-hover'
                }`}
              >
                <div>
                  {/* Header of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-extrabold ${isTarget ? 'text-white' : 'text-navy'}`}>
                      {plan.name}
                    </h3>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      isTarget ? 'bg-primary/25 text-cyan' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-slate-100/20">
                    <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight block ${
                      isTarget ? 'text-cyan' : 'text-primary'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs font-medium block mt-1 ${
                      isTarget ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {plan.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isTarget ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      Deskripsi Layanan:
                    </span>
                    <p className={`text-sm leading-relaxed ${
                      isTarget ? 'text-slate-200' : 'text-slate-600'
                    }`}>
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPackage(plan.name, plan.price)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none ${
                      isTarget
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-sm'
                        : 'bg-primary-light hover:bg-primary hover:text-white text-primary'
                    }`}
                  >
                    Pilih Paket {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
