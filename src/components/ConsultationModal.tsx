import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  initialPrice?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'Konsultasi Umum',
  initialPrice = ''
}) => {
  const [selectedPlan, setSelectedPlan] = useState(initialPackage);
  const [name, setName] = useState('');
  const [laundryName, setLaundryName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPlan(initialPackage);
    }
  }, [initialPackage]);

  // Handle Escape key to close modal (R-32 Compliance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const text = `Halo Tim RuangLaundry!%0A%0ASaya tertarik untuk konsultasi pembuatan website:%0A- Paket: ${selectedPlan} ${initialPrice ? `(${initialPrice})` : ''}%0A- Nama: ${name}%0A- Nama Laundry: ${laundryName || '-' }%0A- WhatsApp: ${phone}%0A- Catatan: ${notes || '-' }%0A%0AMohon informasi lebih lanjut. Terima kasih!`;
    
    setIsSuccess(true);
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
      setIsSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-navy hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
          aria-label="Tutup formulir konsultasi"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6 space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Formulir Konsultasi
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-navy">
            Hubungi RuangLaundry
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Isi formulir singkat di bawah ini. Tim kami akan segera merespons via WhatsApp.
          </p>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-navy">Mengarahkan ke WhatsApp...</h4>
            <p className="text-xs text-slate-500">Silakan lanjutkan percakapan melalui aplikasi WhatsApp Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Package selector */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Pilihan Layanan / Paket:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['RuangStart (Rp400k)', 'RuangCustom (Rp1jt)', 'RuangCare (Rp200k)', 'Konsultasi Umum'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedPlan(item)}
                    className={`py-2 px-3 rounded-xl border text-center font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none ${
                      selectedPlan.includes(item.split(' ')[0])
                        ? 'border-primary bg-primary-light text-primary shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name-input" className="block text-xs font-bold text-navy mb-1">
                Nama Lengkap Anda *
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            {/* Laundry Business Name */}
            <div>
              <label htmlFor="laundry-input" className="block text-xs font-bold text-navy mb-1">
                Nama Usaha Laundry Anda *
              </label>
              <input
                id="laundry-input"
                type="text"
                required
                value={laundryName}
                onChange={(e) => setLaundryName(e.target.value)}
                placeholder="Contoh: Bersih Wangi Laundry"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="phone-input" className="block text-xs font-bold text-navy mb-1">
                Nomor WhatsApp Aktif *
              </label>
              <input
                id="phone-input"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 08123456789"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes-input" className="block text-xs font-bold text-navy mb-1">
                Kebutuhan Khusus / Pertanyaan (Opsional)
              </label>
              <textarea
                id="notes-input"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tuliskan jika ada permintaan khusus atau pertanyaan..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            {/* Live WhatsApp Preview */}
            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/80 text-[11px] text-slate-700 space-y-1">
              <span className="font-bold text-emerald-800 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Format Pesan WhatsApp yang Akan Dikirim:
              </span>
              <p className="font-mono text-slate-600 bg-white p-2.5 rounded-xl border border-emerald-100/80 leading-relaxed text-[10px]">
                Halo Tim RuangLaundry! Saya ingin konsultasi paket <strong className="text-navy">{selectedPlan}</strong> untuk usaha <strong className="text-navy">{laundryName || '[Nama Laundry]'}</strong> atas nama <strong className="text-navy">{name || '[Nama Anda]'}</strong>.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Lanjutkan ke WhatsApp RuangLaundry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
