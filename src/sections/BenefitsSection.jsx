import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import IconWrapper from '../components/ui/IconWrapper.jsx';
import { benefitsData } from '../data/benefits.js';

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-bg border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Mengapa Digitalisasi Laundry?"
          badgeIcon={CheckCircle2}
          badgeVariant="blue"
          title="Tinggalkan Pencatatan Manual, Beralih ke Sistem Pemesanan Praktis"
          subtitle="Sistem pemesanan online memberikan efisiensi nyata bagi operasional usaha Anda sekaligus menghadirkan layanan yang lebih profesional bagi pelanggan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-start"
            >
              <div className="mb-5">
                <IconWrapper
                  icon={benefit.icon}
                  variant="blue"
                  size="md"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-navy-primary mb-3">
                {benefit.title}
              </h3>

              <p className="text-sm text-content-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

