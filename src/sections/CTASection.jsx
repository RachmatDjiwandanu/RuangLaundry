import React from 'react';
import { MessageSquare, CheckCircle2, PhoneCall } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-navy-primary text-white relative border-t border-navy-deep">
      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Label */}
          <div className="mb-4">
            <Badge variant="white" icon={CheckCircle2} size="md">
              Mulai Langkah Digitalisasi
            </Badge>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight mb-5">
            Siap Mengembangkan Bisnis Laundry Anda ke Era Digital?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-surface-muted/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Mulai digitalisasi bisnis laundry Anda bersama RuangLaundry dan hadirkan pengalaman pemesanan yang lebih praktis, rapi, dan modern bagi pelanggan Anda.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppUrl()}
              leftIcon={MessageSquare}
              className="w-full sm:w-auto shadow-lg"
            >
              Konsultasi Gratis via WhatsApp
            </Button>
          </div>

          {/* Business Phone & Micro Trust */}
          <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-surface-muted/90">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-brand-accent shrink-0" />
              <span>WhatsApp Resmi: <strong className="text-white tracking-wide">0895-0579-9964</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Konsultasi & Tanya Jawab Gratis</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
