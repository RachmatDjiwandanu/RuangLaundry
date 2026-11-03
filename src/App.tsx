import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Konsultasi Umum');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleOpenConsultation = (pkgName?: string, price?: string) => {
    setSelectedPackage(pkgName || 'Konsultasi Umum');
    setSelectedPrice(price || '');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      {/* Sticky Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Website Content */}
      <main className="w-full flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onSelectService={(serviceName) => handleOpenConsultation(serviceName)} />

        {/* Product Showcase (Website & Admin Dashboard Mockups) */}
        <ProductShowcase />

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Pricing Section */}
        <PricingSection onSelectPackage={(pkg, price) => handleOpenConsultation(pkg, price)} />

        {/* How It Works */}
        <HowItWorksSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA & Footer */}
        <FinalCtaAndFooter onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialPackage={selectedPackage}
        initialPrice={selectedPrice}
      />
    </div>
  );
}

export default App;
