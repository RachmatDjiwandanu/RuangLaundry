/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop-wide': { 'raw': '(min-width: 960px) and (orientation: landscape)' },
      },
      colors: {
        navy: {
          DEFAULT: '#17213B',
          primary: '#17213B',
          deep: '#181E2E', // Precisely calibrated to match official logo canvas background
          darker: '#10192D',
        },
        brand: {
          blue: '#269DDF',
          'blue-hover': '#1F87C0',
          accent: '#55B9F0',
          light: '#EDF5FC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#EDF2F8',
          bg: '#F5F8FC',
        },
        content: {
          primary: '#202B3C',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#D8E2EF',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'btn': '10px',
        'card-sm': '14px',
        'card': '16px',
        'container': '20px',
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(23, 33, 59, 0.05), 0 1px 4px -1px rgba(23, 33, 59, 0.03)',
        'card-hover': '0 12px 24px -4px rgba(23, 33, 59, 0.08), 0 4px 8px -2px rgba(23, 33, 59, 0.04)',
        'card-featured': '0 20px 30px -10px rgba(38, 157, 223, 0.15), 0 8px 12px -4px rgba(23, 33, 59, 0.05)',
      },
    },
  },
  plugins: [],
};
