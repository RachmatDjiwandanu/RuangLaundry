/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3189F5',
          hover: '#2574d9',
          light: '#EAF4FA',
        },
        navy: {
          DEFAULT: '#163B65',
          dark: '#0f2744',
          subtle: '#2a4d77',
        },
        cyan: {
          DEFAULT: '#48B9D5',
          light: '#d6f2f8',
        },
        surface: {
          bg: '#FAFAFA',
          white: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(22, 59, 101, 0.06), 0 4px 12px -2px rgba(22, 59, 101, 0.04)',
        'float': '0 20px 40px -10px rgba(49, 137, 245, 0.15)',
        'card-hover': '0 20px 35px -8px rgba(22, 59, 101, 0.1)',
      }
    },
  },
  plugins: [],
}

