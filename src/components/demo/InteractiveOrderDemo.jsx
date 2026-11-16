import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Search, 
  Scale, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight,
  Receipt,
  PackageCheck
} from 'lucide-react';
import Button from '../ui/Button.jsx';
import Badge from '../ui/Badge.jsx';

export default function InteractiveOrderDemo() {
  const [activeTab, setActiveTab] = useState('order'); // 'order' or 'tracking'

  // Order Form State
  const [customerName, setCustomerName] = useState('Budi Santoso');
  const [serviceType, setServiceType] = useState('regular'); // 'regular' (7000) or 'express' (12000)
  const [weight, setWeight] = useState(4);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('RL-8821');

  // Tracking Demo State
  const [trackingCodeInput, setTrackingCodeInput] = useState('RL-8821');
  const [activeTrackingStep, setActiveTrackingStep] = useState(2); // 0 to 4

  const serviceRates = {
    regular: { name: 'Cuci Regular', price: 7000, duration: '2 Hari' },
    express: { name: 'Cuci Express', price: 12000, duration: '1 Hari' },
  };

  const currentRate = serviceRates[serviceType];
  const calculatedTotal = weight * currentRate.price;

  const trackingSteps = [
    { title: 'Pesanan Diterima', desc: 'Data formulir order telah masuk ke admin', time: '10:00 WIB' },
    { title: 'Penimbangan', desc: 'Pakaian ditimbang aktual (4.0 kg)', time: '10:30 WIB' },
    { title: 'Sedang Dicuci', desc: 'Pakaian masuk mesin cuci & pengeringan', time: '11:15 WIB' },
    { title: 'Sedang Disetrika', desc: 'Pakaian disetrika rapi & dipacking wangi', time: '14:00 WIB' },
    { title: 'Siap Diambil', desc: 'Pakaian selesai dan siap diserahkan ke pelanggan', time: '15:30 WIB' },
  ];

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const randomCode = 'RL-' + Math.floor(1000 + Math.random() * 9000);
    setGeneratedCode(randomCode);
    setTrackingCodeInput(randomCode);
    setOrderSubmitted(true);
  };

  const handleGoToTracking = () => {
    setOrderSubmitted(false);
    setActiveTab('tracking');
    setActiveTrackingStep(1);
  };

  return (
    <div className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden">
      
      {/* Demo Header Bar with Tabs */}
      <div className="bg-navy-deep text-white p-4 sm:p-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-accent flex items-center justify-center shrink-0">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">Simulasi Interaktif Sistem Pemesanan</h3>
              <Badge variant="blue" size="sm">Coba Langsung</Badge>
            </div>
            <p className="text-xs text-surface-muted/80">
              Lihat pengalaman nyata yang akan dirasakan oleh pelanggan laundry Anda
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-white/10 p-1 rounded-xl border border-white/15 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('order')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'order'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-surface-muted/80 hover:text-white'
            }`}
          >
            1. Form Pemesanan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tracking')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'tracking'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-surface-muted/80 hover:text-white'
            }`}
          >
            2. Pelacakan Status
          </button>
        </div>
      </div>

      {/* Demo Workspace Content */}
      <div className="p-6 sm:p-8 bg-surface-bg">
        
        {/* ================= TAB 1: FORM PEMESANAN ONLINE ================= */}
        {activeTab === 'order' && (
          <div className="max-w-2xl mx-auto">
            {!orderSubmitted ? (
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                
                {/* Customer Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                      Nama Pelanggan
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      required
                      className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-navy-primary font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="text"
                      defaultValue="0812-3456-7890"
                      placeholder="08xxxxxxxxxx"
                      required
                      className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-navy-primary font-medium"
                    />
                  </div>
                </div>

                {/* Service Selection Cards */}
                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                    Pilih Jenis Layanan
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    <button
                      type="button"
                      onClick={() => setServiceType('regular')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        serviceType === 'regular'
                          ? 'bg-surface border-2 border-brand-blue ring-2 ring-brand-blue/10 shadow-sm'
                          : 'bg-surface border-border hover:border-brand-blue/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-navy-primary">Layanan Regular</span>
                        <span className="text-xs font-bold text-brand-blue">Rp7.000 /kg</span>
                      </div>
                      <p className="text-xs text-content-secondary">
                        Estimasi selesai: 2 Hari kerja
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('express')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        serviceType === 'express'
                          ? 'bg-surface border-2 border-brand-blue ring-2 ring-brand-blue/10 shadow-sm'
                          : 'bg-surface border-border hover:border-brand-blue/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-navy-primary">Layanan Express</span>
                        <span className="text-xs font-bold text-brand-blue">Rp12.000 /kg</span>
                      </div>
                      <p className="text-xs text-content-secondary">
                        Estimasi selesai: 1 Hari kerja (Kilat)
                      </p>
                    </button>

                  </div>
                </div>

                {/* Weight Input & Calculation */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-navy-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-brand-blue" />
                      <span>Estimasi Berat Pakaian</span>
                    </label>
                    <span className="text-sm font-extrabold text-navy-primary bg-surface px-2.5 py-0.5 rounded-md border border-border">
                      {weight} kg
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                  <div className="flex justify-between text-[11px] text-content-secondary mt-1">
                    <span>1 kg</span>
                    <span>Geser untuk simulasi berat</span>
                    <span>15 kg</span>
                  </div>
                </div>

                {/* Real-Time Price Summary Box */}
                <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-content-secondary">Perkiraan Biaya:</p>
                    <p className="text-xs text-content-muted">
                      {weight} kg × Rp{currentRate.price.toLocaleString('id-ID')} ({currentRate.name})
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-extrabold text-navy-primary">
                      Rp{calculatedTotal.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                {/* Submit Action */}
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  fullWidth
                  rightIcon={ArrowRight}
                >
                  Simulasikan Buat Pesanan
                </Button>
              </form>
            ) : (
              /* Simulated Success Receipt */
              <div className="bg-surface rounded-xl border border-border p-6 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-navy-primary mb-1">
                  Pesanan Simulasi Berhasil Dibuat
                </h4>
                <p className="text-xs text-content-secondary mb-6">
                  Berikut ringkasan nota pesanan online yang diterima oleh pelanggan:
                </p>

                <div className="max-w-sm mx-auto bg-surface-bg p-4 rounded-xl border border-border/80 text-left space-y-2.5 mb-6 text-xs">
                  <div className="flex justify-between pb-2 border-b border-border/60">
                    <span className="text-content-secondary">Kode Pesanan:</span>
                    <strong className="text-brand-blue text-sm font-extrabold">{generatedCode}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-content-secondary">Nama:</span>
                    <span className="font-semibold text-navy-primary">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-content-secondary">Layanan:</span>
                    <span className="font-semibold text-navy-primary">{currentRate.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-content-secondary">Berat:</span>
                    <span className="font-semibold text-navy-primary">{weight} kg</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border/60">
                    <span className="text-content-secondary font-bold">Total Tagihan:</span>
                    <strong className="text-navy-primary text-sm font-extrabold">
                      Rp{calculatedTotal.toLocaleString('id-ID')}
                    </strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleGoToTracking}
                    rightIcon={PackageCheck}
                  >
                    Coba Lacak Kode {generatedCode}
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setOrderSubmitted(false)}
                    leftIcon={RotateCcw}
                  >
                    Ulangi Formulir
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: PELACAKAN STATUS REAL-TIME ================= */}
        {activeTab === 'tracking' && (
          <div className="max-w-2xl mx-auto">
            
            {/* Search Code Bar */}
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-content-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={trackingCodeInput}
                  onChange={(e) => setTrackingCodeInput(e.target.value)}
                  placeholder="Masukkan Kode Pesanan (cth: RL-8821)"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-navy-primary font-bold"
                />
              </div>
              <button
                type="button"
                onClick={() => setTrackingCodeInput('RL-8821')}
                className="px-4 py-2.5 text-xs font-semibold bg-surface border border-border rounded-xl hover:bg-surface-muted text-content-primary"
              >
                Reset
              </button>
            </div>

            {/* Interactive Step Switcher for Laundry Owner */}
            <div className="mb-6 bg-surface p-4 rounded-xl border border-border">
              <p className="text-xs font-bold text-navy-primary mb-2">
                Simulasikan Perubahan Status oleh Toko:
              </p>
              <div className="flex flex-wrap gap-2">
                {trackingSteps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTrackingStep(idx)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTrackingStep === idx
                        ? 'bg-brand-blue text-white shadow-sm'
                        : activeTrackingStep > idx
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-surface-muted text-content-secondary hover:text-navy-primary'
                    }`}
                  >
                    {idx + 1}. {step.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Tracking Result Card */}
            <div className="bg-surface rounded-xl border border-border p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80">
                <div>
                  <span className="text-xs text-content-secondary">Kode Pesanan:</span>
                  <h4 className="text-lg font-extrabold text-navy-primary">{trackingCodeInput || 'RL-8821'}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-content-secondary">Status Terkini:</span>
                  <p className="text-sm font-bold text-brand-blue">{trackingSteps[activeTrackingStep].title}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-4 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                {trackingSteps.map((step, idx) => {
                  const isDone = idx < activeTrackingStep;
                  const isCurrent = idx === activeTrackingStep;

                  return (
                    <div key={idx} className="flex items-start gap-3.5 relative z-10">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${
                        isDone
                          ? 'bg-emerald-500 text-white shadow-sm'
                          : isCurrent
                          ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20 animate-pulse'
                          : 'bg-surface-muted text-content-muted border border-border'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>

                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className={`text-sm font-bold ${isCurrent ? 'text-brand-blue' : isDone ? 'text-navy-primary' : 'text-content-secondary'}`}>
                            {step.title}
                          </h5>
                          <span className="text-[11px] text-content-secondary">{step.time}</span>
                        </div>
                        <p className="text-xs text-content-secondary mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

