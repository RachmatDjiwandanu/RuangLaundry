import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import { faqData } from '../data/faq.js';
import { getWhatsAppUrl } from '../utils/whatsapp.js';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-surface-bg border-t border-border/60">
      <Container>
        <SectionHeading
          badge="Tanya Jawab (FAQ)"
          badgeIcon={HelpCircle}
          badgeVariant="blue"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Pelajari lebih dalam mengenai sistem pemesanan laundry online, spesifikasi paket, hingga dukungan teknis yang kami sediakan."
        />

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-12">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-surface border-brand-blue/50 shadow-md ring-1 ring-brand-blue/20'
                    : 'bg-surface border-border hover:border-brand-blue/30 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue select-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-navy-primary leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-brand-blue text-white rotate-180'
                        : 'bg-surface-muted text-content-secondary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-content-secondary leading-relaxed border-t border-border/40"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Help Callout */}
        <div className="max-w-xl mx-auto text-center p-6 rounded-2xl bg-surface-muted/60 border border-border">
          <p className="text-sm font-semibold text-navy-primary mb-1">
            Masih memiliki pertanyaan lain yang belum terjawab?
          </p>
          <p className="text-xs text-content-secondary mb-4">
            Tim konsultan RuangLaundry siap membantu menjelaskan secara rinci melalui chat WhatsApp.
          </p>
          <Button
            variant="secondary"
            size="sm"
            href={getWhatsAppUrl()}
            leftIcon={MessageSquare}
          >
            Tanyakan via WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}

