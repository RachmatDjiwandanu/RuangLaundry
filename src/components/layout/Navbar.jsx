import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import { navigationLinks } from '../../data/navigation.js';
import { getWhatsAppUrl } from '../../utils/whatsapp.js';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPastHero } = useScrollPosition();

  // Show navbar only after user scrolls past the Hero section, or if mobile menu is open
  const isVisible = isPastHero || mobileMenuOpen;

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      if (window.innerWidth >= 960 && isLandscape && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out bg-navy-deep/95 backdrop-blur-md border-b border-white/10 ${
        isVisible
          ? 'translate-y-0 opacity-100 shadow-xl py-3 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none py-3'
      }`}
      aria-hidden={!isVisible}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md transition-opacity hover:opacity-90"
            aria-label="RuangLaundry Beranda"
            tabIndex={isVisible ? 0 : -1}
          >
            <img
              src="/assets/logo-ruanglaundry.webp"
              alt="Logo RuangLaundry"
              width="160"
              height="36"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden desktop-wide:flex items-center gap-1.5 xl:gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isVisible ? 0 : -1}
                className="px-3.5 py-2 text-sm font-medium text-surface-muted/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden desktop-wide:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href={getWhatsAppUrl()}
              leftIcon={MessageSquare}
              tabIndex={isVisible ? 0 : -1}
            >
              Konsultasi Sekarang
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex desktop-wide:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              tabIndex={isVisible ? 0 : -1}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity">
          <div className="bg-navy-deep border-b border-white/10 p-6 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1 mb-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-base font-semibold text-surface-muted/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="primary"
                href={getWhatsAppUrl()}
                leftIcon={MessageSquare}
                fullWidth
                onClick={handleLinkClick}
              >
                Konsultasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
