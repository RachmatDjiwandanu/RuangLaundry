import React from 'react';
import { LayoutTemplate, Palette, Wrench, Paperclip } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'template',
      name: 'Website Template',
      badge: 'Solusi Cepat & Efisien',
      description: 'Pembuatan website laundry menggunakan template yang telah disediakan RuangLaundry.',
      icon: LayoutTemplate,
      color: 'text-primary',
      bgColor: 'bg-primary-light',
      features: [
        'Template siap pakai khusus laundry',
        'Formulir pemesanan online langsung',
        'Penyesuaian nama, kontak, & harga',
        'Tampilan responsif di semua perangkat'
      ],
      priceTag: 'Paket RuangStart'
    },
    {
      id: 'custom',
      name: 'Custom Website',
      badge: 'Desain Eksklusif & Unik',
      description: 'Pembuatan website laundry dengan desain dan tampilan sesuai permintaan serta identitas brand klien.',
      icon: Palette,
      color: 'text-cyan',
      bgColor: 'bg-cyan-light',
      features: [
        'Desain visual tailor-made sesuai brand',
        'Kustomisasi layout & tata letak menu',
        'Integrasi identitas warna & grafis klien',
        'Struktur sistem pemesanan fleksibel'
      ],
      priceTag: 'Paket RuangCustom'
    },
    {
      id: 'maintenance',
      name: 'Website Maintenance',
      badge: 'Performa Stabil & Terjaga',
      description: 'Layanan pemeliharaan website untuk menjaga performa dan kestabilan sistem.',
      icon: Wrench,
      color: 'text-navy',
      bgColor: 'bg-slate-100',
      features: [
        'Pemeliharaan teknis berkala',
        'Pengecekan kestabilan sistem pemesanan',
        'Pembaruan konten & daftar harga',
        'Monitoring keamanan & backup sistem'
      ],
      priceTag: 'Paket RuangCare'
    }
  ];

  return (
    <section id="layanan" className="py-20 sm:py-28 px-6 sm:px-12">
      {/* Blue Container inspired by reference design */}
      <div className="max-w-7xl mx-auto bg-primary rounded-4xl sm:rounded-5xl p-6 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-left mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2">
              Layanan Utama
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Layanan Digital untuk Bisnis Laundry Anda
            </h2>
            <p className="text-white/85 text-sm sm:text-base mt-2 font-medium">
              Tiga pilar layanan terfokus untuk membantu bisnis laundry Anda bertransformasi dan berkembang secara online.
            </p>
          </div>

          {/* 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg relative flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Decorative Paperclip */}
                  <div className="absolute -top-3.5 right-8 text-slate-400 group-hover:text-primary transition-colors paperclip-shadow" aria-hidden="true">
                    <Paperclip className="w-7 h-7 transform rotate-45" />
                  </div>

                  <div>
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color}`}>
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-navy">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-navy mb-2.5">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6 text-xs sm:text-sm text-slate-600">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">
                      {item.priceTag}
                    </span>
                    <button
                      onClick={() => onSelectService(item.name)}
                      className="text-xs font-bold text-navy hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-md px-1.5 py-1"
                    >
                      Konsultasi Paket
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
