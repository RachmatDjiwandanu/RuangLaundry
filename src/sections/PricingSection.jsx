import React from 'react';
import { Tag, Check, MessageSquare, Info, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import { pricingPackages } from '../data/pricing.js';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function PricingSection() {
  return (
    <section id="harga" className="py-20 sm:py-24 lg:py-28 bg-surface border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Pilihan Paket Investasi"
          badgeIcon={Tag}
          badgeVariant="blue"
          title="Paket Layanan Transparan untuk Bisnis Laundry Anda"
          subtitle="Pilih paket pembuatan website yang sesuai dengan kebutuhan operasional usaha Anda. Sudah termasuk domain dan hosting tanpa biaya tersembunyi."
        />

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricingPackages.map((pkg) => {
            const isFeatured = pkg.featured;
            const isMaintenance = pkg.isMaintenance;

            return (
              <div
                key={pkg.id}
                className={`rounded-card flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-surface border-2 border-brand-blue shadow-card-featured ring-4 ring-brand-blue/10'
                    : 'bg-surface border border-border shadow-card hover:shadow-card-hover'
                } p-6 sm:p-8`}
              >
                <div className="flex flex-col flex-1">
                  {/* Top Eyebrow Row: Tag / Category & Badge (No absolute positioning to prevent overlap) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-content-muted">
                      {isMaintenance ? 'Layanan Maintenance' : 'Pembuatan Website'}
                    </span>
                    {pkg.badge && (
                      <Badge
                        variant={isFeatured ? 'blue' : isMaintenance ? 'amber' : 'navy'}
                        size="sm"
                        icon={isFeatured ? CheckCircle2 : undefined}
                      >
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Package Title */}
                  <h3 className="text-2xl font-extrabold text-navy-primary tracking-tight">
                    {pkg.name}
                  </h3>

                  {/* Package Description */}
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mt-2 mb-6">
                    {pkg.description}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 rounded-xl bg-surface-muted/70 border border-border/80 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-navy-primary tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${
                        isMaintenance ? 'text-amber-800 bg-amber-100/80' : 'text-brand-blue bg-brand-light'
                      }`}>
                        {pkg.billingNote}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="flex-1 mb-8">
                    <p className="text-xs font-bold text-navy-primary uppercase tracking-wider mb-3.5">
                      Fitur & Fasilitas:
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-primary">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured ? 'bg-brand-blue text-white' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button (Anchored to card bottom) */}
                <div className="pt-5 border-t border-border/60 mt-auto">
                  <Button
                    variant={isFeatured ? 'primary' : isMaintenance ? 'navy' : 'secondary'}
                    href={getWhatsAppUrl(pkg.message)}
                    leftIcon={MessageSquare}
                    fullWidth
                    size="md"
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain & Hosting Notice Card */}
        <div className="bg-surface rounded-2xl border border-border p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-brand-blue" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-content-secondary leading-relaxed">
            <strong className="text-navy-primary">Catatan Penting:</strong> Harga paket pembuatan website (Website Starter & Website Custom) sudah mencakup pendaftaran domain serta hosting sesuai ketentuan layanan. Layanan Maintenance Web merupakan jasa pemeliharaan berkala yang dihitung per satu kali layanan pengerjaan (bukan sistem tagihan bulanan).
          </div>
        </div>
      </Container>
    </section>
  );
}
