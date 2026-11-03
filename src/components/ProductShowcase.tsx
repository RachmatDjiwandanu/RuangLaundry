import React, { useState } from 'react';
import { 
  Laptop, Smartphone, LayoutDashboard, CheckCircle2, 
  Clock, Calendar, User, MapPin, Send, Filter, Check, RotateCcw
} from 'lucide-react';

interface MockOrder {
  id: string;
  customer: string;
  phone: string;
  service: string;
  weight: number;
  status: 'Baru' | 'Pencucian' | 'Siap Diantar' | 'Selesai';
  total: number;
}

const INITIAL_ORDERS: MockOrder[] = [
  { id: '#RL-1082', customer: 'Ibu Maya', phone: '0812-9811-xx', service: 'Cuci Komplit (6 Kg)', weight: 6, status: 'Pencucian', total: 42000 },
  { id: '#RL-1081', customer: 'Bpk. Dimas', phone: '0856-1122-xx', service: 'Bedcover King', weight: 1, status: 'Siap Diantar', total: 35000 },
  { id: '#RL-1080', customer: 'Kak Cindy', phone: '0819-4455-xx', service: 'Setrika Saja (5 Kg)', weight: 5, status: 'Baru', total: 25000 },
  { id: '#RL-1079', customer: 'Bpk. Hendra', phone: '0813-7788-xx', service: 'Cuci Komplit (8 Kg)', weight: 8, status: 'Selesai', total: 56000 },
];

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'admin' | 'mobile'>('customer');

  // Interactive state for Customer Booking Simulator
  const [selectedService, setSelectedService] = useState<'komplit' | 'kering' | 'satuan'>('komplit');
  const [weightKg, setWeightKg] = useState<number>(5);
  const [pickupSlot, setPickupSlot] = useState<string>('pagi');
  const [orderSent, setOrderSent] = useState<boolean>(false);

  // Interactive state for Admin Dashboard Simulator
  const [orders, setOrders] = useState<MockOrder[]>(INITIAL_ORDERS);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Interactive state for Mobile Screen Simulator
  const [mobileScreen, setMobileScreen] = useState<'booking' | 'tracking' | 'receipt'>('tracking');

  // Dynamic price calculation
  const getServiceRate = () => {
    switch (selectedService) {
      case 'komplit': return 7000;
      case 'kering': return 5000;
      case 'satuan': return 35000;
      default: return 7000;
    }
  };

  const getServiceName = () => {
    switch (selectedService) {
      case 'komplit': return 'Cuci Komplit (Kiloan)';
      case 'kering': return 'Cuci Kering Saja';
      case 'satuan': return 'Bedcover & Satuan';
    }
  };

  const totalEstimate = selectedService === 'satuan' ? 35000 : weightKg * getServiceRate();

  const handleSimulateOrder = () => {
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
    }, 4000);
  };

  const handleAdvanceStatus = (orderId: string) => {
    setOrders(prev => prev.map(order => {
      if (order.id !== orderId) return order;
      if (order.status === 'Baru') return { ...order, status: 'Pencucian' };
      if (order.status === 'Pencucian') return { ...order, status: 'Siap Diantar' };
      if (order.status === 'Siap Diantar') return { ...order, status: 'Selesai' };
      return { ...order, status: 'Baru' };
    }));
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(o => o.status.toLowerCase() === statusFilter.toLowerCase());

  const countByStatus = (st: string) => orders.filter(o => o.status.toLowerCase() === st.toLowerCase()).length;

  return (
    <section id="produk" className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block">
            Simulasi Antarmuka
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight text-balance">
            Kelola Bisnis Laundry <span className="inline-block">dengan Lebih Mudah</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Tampilan antarmuka yang bersih, intuitif, dan responsif baik untuk pelanggan saat memesan maupun pemilik laundry saat mengelola pesanan harian.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('customer')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none ${
              activeTab === 'customer'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-surface-muted text-navy/70 hover:bg-slate-200'
            }`}
          >
            <Laptop className="w-4 h-4" aria-hidden="true" />
            <span>Website Pemesanan Pelanggan</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none ${
              activeTab === 'admin'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-surface-muted text-navy/70 hover:bg-slate-200'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
            <span>Dashboard Admin Pengelolaan</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none ${
              activeTab === 'mobile'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-surface-muted text-navy/70 hover:bg-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" aria-hidden="true" />
            <span>Tampilan Responsif Mobile</span>
          </button>
        </div>

        {/* Showcase Canvas Frame */}
        <div className="bg-surface-bg rounded-3xl sm:rounded-4xl p-4 sm:p-8 border border-slate-200 shadow-soft">
          
          {/* TAB 1: WEBSITE PEMESANAN PELANGGAN (INTERACTIVE LIVE ORDER SIMULATOR) */}
          {activeTab === 'customer' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="text-xs text-slate-400 font-mono ml-2">https://laundryanda.com/booking</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Uji Coba Interaktif
                </span>
              </div>

              {/* Interactive Booking Interface */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Form */}
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <div>
                      <h4 className="text-lg font-extrabold text-navy">Formulir Pesanan Antar-Jemput</h4>
                      <p className="text-xs text-slate-500">Pilih layanan dan atur berat cucian untuk melihat kalkulasi harga otomatis.</p>
                    </div>

                    <div className="space-y-4 text-xs">
                      {/* Service selector */}
                      <div>
                        <label className="block font-bold text-navy mb-1.5">1. Pilih Jenis Layanan</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { key: 'komplit', label: 'Cuci Komplit', sub: 'Rp7.000/kg' },
                            { key: 'kering', label: 'Kering Saja', sub: 'Rp5.000/kg' },
                            { key: 'satuan', label: 'Bedcover', sub: 'Rp35.000/pcs' },
                          ].map((svc) => (
                            <button
                              key={svc.key}
                              type="button"
                              onClick={() => setSelectedService(svc.key as any)}
                              className={`p-2.5 rounded-xl border text-center transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none ${
                                selectedService === svc.key
                                  ? 'border-primary bg-primary-light text-primary font-bold shadow-xs'
                                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <span className="block font-bold">{svc.label}</span>
                              <span className="text-[10px] opacity-75">{svc.sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Weight Stepper (if kiloan) */}
                      {selectedService !== 'satuan' ? (
                        <div>
                          <label className="block font-bold text-navy mb-1.5">2. Estimasi Berat Cucian (Kg)</label>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setWeightKg(prev => Math.max(1, prev - 1))}
                              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 font-extrabold text-base text-navy flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                              aria-label="Kurangi berat cucian"
                            >
                              -
                            </button>
                            <div className="px-4 py-2 rounded-xl bg-primary-light border border-primary/20 text-center font-mono font-extrabold text-navy text-sm min-w-[90px]">
                              {weightKg} Kg
                            </div>
                            <button
                              type="button"
                              onClick={() => setWeightKg(prev => Math.min(30, prev + 1))}
                              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 font-extrabold text-base text-navy flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                              aria-label="Tambah berat cucian"
                            >
                              +
                            </button>
                            <span className="text-[11px] text-slate-400 ml-2">Minimal 1 kg, penimbangan ulang dilakukan kurir saat penjemputan.</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                          <span className="font-semibold text-navy">Layanan Satuan:</span> Dihitung per potong (1 pcs Bedcover King).
                        </div>
                      )}

                      {/* Customer Info Simulation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-navy mb-1">Nama Pemesan</label>
                          <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                            <User className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            <span>Budi Prasetyo</span>
                          </div>
                        </div>
                        <div>
                          <label className="block font-bold text-navy mb-1">Nomor WhatsApp</label>
                          <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                            <span>0812-9876-XXXX</span>
                          </div>
                        </div>
                      </div>

                      {/* Slot selector */}
                      <div>
                        <label className="block font-bold text-navy mb-1.5">3. Waktu Penjemputan</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setPickupSlot('pagi')}
                            className={`p-2 rounded-xl border flex items-center justify-between text-left transition-all ${
                              pickupSlot === 'pagi'
                                ? 'border-primary bg-primary-light text-primary font-bold'
                                : 'border-slate-200 text-slate-600'
                            }`}
                          >
                            <span>Pagi (09:00 - 12:00)</span>
                            {pickupSlot === 'pagi' && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => setPickupSlot('sore')}
                            className={`p-2 rounded-xl border flex items-center justify-between text-left transition-all ${
                              pickupSlot === 'sore'
                                ? 'border-primary bg-primary-light text-primary font-bold'
                                : 'border-slate-200 text-slate-600'
                            }`}
                          >
                            <span>Sore (15:00 - 18:00)</span>
                            {pickupSlot === 'sore' && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Summary Card (Dynamic updates) */}
                  <div className="lg:col-span-5 bg-surface-bg p-5 rounded-2xl border border-slate-200 flex flex-col justify-between text-left">
                    <div className="space-y-3 text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">Ringkasan Kalkulasi</span>
                      <div className="pb-3 border-b border-slate-200 space-y-2">
                        <div className="flex justify-between text-slate-600">
                          <span>Paket Pilihan:</span>
                          <span className="font-bold text-navy">{getServiceName()}</span>
                        </div>
                        {selectedService !== 'satuan' && (
                          <div className="flex justify-between text-slate-600">
                            <span>Estimasi Berat:</span>
                            <span className="font-bold text-navy">{weightKg} Kg</span>
                          </div>
                        )}
                        <div className="flex justify-between text-slate-600">
                          <span>Tarif Satuan:</span>
                          <span className="font-bold text-navy">Rp{getServiceRate().toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Waktu Jemput:</span>
                          <span className="font-semibold text-primary capitalize">{pickupSlot}</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm font-extrabold text-navy pt-1">
                        <span>Total Estimasi:</span>
                        <span className="text-primary font-mono text-lg font-bold">
                          Rp{totalEstimate.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        *Data langsung tersinkronisasi ke WhatsApp admin dan kasir outlet saat pelanggan menekan tombol kirim.
                      </p>
                    </div>

                    <div className="pt-4 space-y-2">
                      <button
                        type="button"
                        onClick={handleSimulateOrder}
                        className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                      >
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Simulasi Kirim Pesanan</span>
                      </button>

                      {orderSent && (
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-semibold flex items-center gap-2 animate-fade-in">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                          <span>Simulasi Berhasil: Order tercatat dan notifikasi otomatis siap dikirim ke WhatsApp!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DASHBOARD ADMIN PENGELOLAAN (INTERACTIVE STATUS ADVANCER) */}
          {activeTab === 'admin' && (
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="text-xs text-slate-400 font-mono ml-2">https://laundryanda.com/admin/orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                    Admin Panel Demo
                  </span>
                  <button
                    onClick={() => setOrders(INITIAL_ORDERS)}
                    className="p-1 rounded-md text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
                    title="Reset simulasi order"
                    aria-label="Reset simulasi order"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Dynamic Status Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Pesanan Baru</span>
                  <p className="text-xl font-extrabold text-navy">{countByStatus('baru')} Pesanan</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-amber-500 uppercase block">Dalam Proses Cuci</span>
                  <p className="text-xl font-extrabold text-amber-600">{countByStatus('pencucian')} Antrean</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-cyan uppercase block">Siap Diantar</span>
                  <p className="text-xl font-extrabold text-cyan">{countByStatus('siap diantar')} Pesanan</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase block">Selesai</span>
                  <p className="text-xl font-extrabold text-emerald-600">{countByStatus('selesai')} Order</p>
                </div>
              </div>

              {/* Orders Table with live action button */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-3.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="font-bold text-navy">Manajemen Pesanan Masuk (Klik "Update" untuk simulasi alur status)</span>
                  
                  {/* Status filter tabs */}
                  <div className="flex items-center gap-1">
                    {['all', 'baru', 'pencucian', 'siap diantar', 'selesai'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-bold capitalize transition-colors ${
                          statusFilter === st 
                            ? 'bg-navy text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {st === 'all' ? 'Semua' : st}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-bold">
                      <tr>
                        <th className="px-4 py-2.5">ID Order</th>
                        <th className="px-4 py-2.5">Pelanggan</th>
                        <th className="px-4 py-2.5">Layanan</th>
                        <th className="px-4 py-2.5">Status Pengerjaan</th>
                        <th className="px-4 py-2.5">Total Tagihan</th>
                        <th className="px-4 py-2.5 text-right">Aksi Alur</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {filteredOrders.map((order) => {
                        let badgeClass = 'bg-slate-100 text-slate-700';
                        if (order.status === 'Baru') badgeClass = 'bg-blue-100 text-blue-700';
                        if (order.status === 'Pencucian') badgeClass = 'bg-amber-100 text-amber-700';
                        if (order.status === 'Siap Diantar') badgeClass = 'bg-cyan-light text-navy';
                        if (order.status === 'Selesai') badgeClass = 'bg-emerald-100 text-emerald-700';

                        return (
                          <tr key={order.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="px-4 py-3 font-mono font-bold text-primary">{order.id}</td>
                            <td className="px-4 py-3 font-medium">{order.customer} ({order.phone})</td>
                            <td className="px-4 py-3">{order.service}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeClass}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-semibold text-navy font-mono">
                              Rp{order.total.toLocaleString('id-ID')}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button
                                onClick={() => handleAdvanceStatus(order.id)}
                                className="px-2.5 py-1 rounded-md bg-primary-light text-primary font-bold text-[10px] hover:bg-primary hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
                              >
                                Update Status ➔
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TAMPILAN RESPONSIF MOBILE (INTERACTIVE SCREENS) */}
          {activeTab === 'mobile' && (
            <div className="flex flex-col items-center justify-center py-4">
              {/* Screen toggle pills for mobile frame */}
              <div className="flex items-center gap-2 mb-6 text-xs">
                <button
                  onClick={() => setMobileScreen('tracking')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                    mobileScreen === 'tracking' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Layar Status Tracking
                </button>
                <button
                  onClick={() => setMobileScreen('booking')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                    mobileScreen === 'booking' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Layar Form Booking
                </button>
                <button
                  onClick={() => setMobileScreen('receipt')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                    mobileScreen === 'receipt' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Layar Struk Digital
                </button>
              </div>

              {/* Smartphone mockup frame */}
              <div className="w-72 bg-navy rounded-[38px] p-3.5 shadow-2xl border-4 border-slate-700 text-left">
                {/* Speaker notch */}
                <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" aria-hidden="true" />

                {/* Inner screen */}
                <div className="bg-white rounded-[26px] p-4 space-y-3 text-xs overflow-hidden min-h-[360px] flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                      <span className="font-extrabold text-navy">Laundry Anda</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    </div>

                    {mobileScreen === 'tracking' && (
                      <div className="space-y-3">
                        <div className="bg-primary-light p-3 rounded-2xl border border-primary/20 space-y-1">
                          <span className="text-[10px] font-semibold text-slate-500 block">Pesanan #LN-1082</span>
                          <h5 className="font-extrabold text-sm text-navy">Pakaian Sedang Dicuci</h5>
                          <div className="w-full bg-white h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-primary h-full w-2/3 rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-1 text-[11px] text-slate-600 border-t border-slate-100 pt-2">
                          <div className="flex justify-between">
                            <span>Layanan:</span>
                            <span className="font-bold text-navy">Cuci Komplit (6 Kg)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimasi Selesai:</span>
                            <span className="font-bold text-emerald-600">Besok, 17:00</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {mobileScreen === 'booking' && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-primary uppercase">Pemesanan Online</span>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="font-bold text-navy block text-[11px]">Cuci Komplit Kiloan</span>
                          <span className="text-[10px] text-primary">Rp7.000 / kg</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px]">
                          <span>Alamat Jemput: Jl. Mawar No. 12</span>
                        </div>
                      </div>
                    )}

                    {mobileScreen === 'receipt' && (
                      <div className="space-y-2 font-mono text-[10px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <div className="text-center font-bold text-navy pb-1 border-b border-dashed border-slate-300">
                          STRUK RESMI LAUNDRY
                        </div>
                        <div className="flex justify-between">
                          <span>Total Cucian:</span>
                          <span>6.0 Kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Status Bayar:</span>
                          <span className="text-emerald-600 font-bold">Lunas (QRIS)</span>
                        </div>
                        <div className="flex justify-between font-bold text-navy border-t border-dashed border-slate-300 pt-1">
                          <span>Total:</span>
                          <span>Rp42.000</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <div className="w-full py-2 rounded-xl bg-primary text-white text-center font-bold text-[11px] shadow-xs">
                      {mobileScreen === 'tracking' ? 'Hubungi Kurir Penjemput' : 'Konfirmasi Pesanan'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
