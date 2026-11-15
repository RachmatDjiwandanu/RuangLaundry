import React from 'react';
import { ShoppingBag, ArrowRight, MessageSquare } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import { orderRuangLaundrySteps } from '../data/steps.js';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function HowToOrderSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Cara Memesan Layanan Kami"
          badgeIcon={ShoppingBag}
          badgeVariant="blue"
          title="4 Langkah Mudah Memulai Digitalisasi Bisnis Laundry Anda"
          subtitle="Kami mendampingi proses pembuatan website laundry Anda dari pemilihan nama domain hingga website siap digunakan."
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {orderRuangLaundrySteps.map((stepItem) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="relative bg-surface-bg rounded-card p-6 sm:p-7 border border-border shadow-card hover:shadow-card-hover hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-navy-primary text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-primary mb-2.5">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 text-xs font-semibold text-brand-blue">
                  Tahap 0{stepItem.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="bg-brand-light border border-brand-blue/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-navy-primary">
              Siap Menghadirkan Website Pemesanan untuk Laundry Anda?
            </h4>
            <p className="text-sm text-content-secondary mt-1">
              Konsultasikan nama domain dan paket yang sesuai dengan tim RuangLaundry hari ini.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href={getWhatsAppUrl()}
            leftIcon={MessageSquare}
            className="shrink-0"
          >
            Konsultasi Sekarang
          </Button>
        </div>
      </Container>
    </section>
  );
}

