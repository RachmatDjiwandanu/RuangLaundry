/**
 * WhatsApp integration utility.
 * Follows TECHNICAL.md Section 7.
 */
export const WHATSAPP_NUMBER = "6289505799964";

export const DEFAULT_WHATSAPP_MESSAGES = {
  general: "Halo RuangLaundry, saya tertarik menggunakan sistem pemesanan laundry online. Saya ingin mengetahui informasi lebih lanjut mengenai layanan yang tersedia.",
  ruangStart: "Halo RuangLaundry, saya tertarik dengan paket RuangStart seharga Rp400.000. Mohon informasi lebih lanjut.",
  ruangCustom: "Halo RuangLaundry, saya tertarik dengan paket RuangCustom seharga Rp1.000.000. Mohon informasi lebih lanjut.",
  ruangCare: "Halo RuangLaundry, saya ingin mengetahui informasi mengenai layanan RuangCare seharga Rp200.000 per layanan.",
};

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGES.general) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

