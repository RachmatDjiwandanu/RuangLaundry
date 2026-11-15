import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import BenefitsSection from './sections/BenefitsSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import HowItWorksSection from './sections/HowItWorksSection.jsx';
import HowToOrderSection from './sections/HowToOrderSection.jsx';
import PricingSection from './sections/PricingSection.jsx';
import FAQSection from './sections/FAQSection.jsx';
import CTASection from './sections/CTASection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-content-primary">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Benefits of Online Laundry System (Problem & Solution Hook) */}
        <BenefitsSection />

        {/* 3. System Features */}
        <FeaturesSection />

        {/* 4. Interactive System Demo */}
        <HowItWorksSection />

        {/* 5. Pricing Packages */}
        <PricingSection />

        {/* 6. About RuangLaundry (Credibility & Trust Bridge) */}
        <AboutSection />

        {/* 7. How To Order RuangLaundry Services (Client Flow) */}
        <HowToOrderSection />

        {/* 8. FAQ Accordion */}
        <FAQSection />

        {/* 9. Conversion CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
