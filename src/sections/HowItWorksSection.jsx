import React from 'react';
import { Laptop } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import InteractiveOrderDemo from '../components/demo/InteractiveOrderDemo.jsx';

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-20 sm:py-24 lg:py-28 bg-surface-bg border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Simulasi Interaktif"
          badgeIcon={Laptop}
          badgeVariant="blue"
          title="Demo Sistem yang Kami Buat"
          subtitle="Coba langsung alur pemesanan online dan pelacakan status cucian yang akan didapatkan pelanggan laundry Anda."
        />

        {/* Interactive System Demo (Replaces the 5 static cards) */}
        <div className="max-w-4xl mx-auto">
          <InteractiveOrderDemo />
        </div>
      </Container>
    </section>
  );
}
