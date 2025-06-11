// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        russian_violet: { DEFAULT: '#3C1644', 100: '#0c040e', 200: '#19091c', 300: '#250d2a', 400: '#311237', 500: '#3c1644', 600: '#762b84', 700: '#ac42c2', 800: '#c881d6', 900: '#e3c0eb' },
        russian_violet_secondary: { DEFAULT: '#301852', 100: '#0a0511', 200: '#130a21', 300: '#1d0e32', 400: '#271342', 500: '#301852', 600: '#552a91', 700: '#7b44c9', 800: '#a782db', 900: '#d3c1ed' },
        pale_dogwood: { DEFAULT: '#E4CAC3', 100: '#3a211a', 200: '#754234', 300: '#af644f', 400: '#ca9789', 500: '#e4cac3', 600: '#e9d5cf', 700: '#efdfdb', 800: '#f4eae7', 900: '#faf4f3' },
        indian_red: { DEFAULT: '#D9535F', 100: '#310b0e', 200: '#63161c', 300: '#94202a', 400: '#c52b38', 500: '#d9535f', 600: '#e1767f', 700: '#e8989f', 800: '#f0babf', 900: '#f7dddf' },
        indigo: { DEFAULT: '#451970', 100: '#0e0517', 200: '#1c0a2d', 300: '#290f44', 400: '#37145a', 500: '#451970', 600: '#6a26ae', 700: '#8f48d7', 800: '#b585e4', 900: '#dac2f2' },
        brand: {
          DEFAULT: '#D9535F', // Map brand to Indian Red
          light: '#E4CAC3',
          dark: '#3C1644',
        },
        dark: { DEFAULT: '#0A0A0A' },
        mid: { DEFAULT: '#1A1A1A' },
        light: { DEFAULT: '#FFFFFF' },
        gray: {
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      borderRadius: {
        pill: '9999px',
        card: '1rem',
        lg: '1.5rem',
      },
      boxShadow: {
        glow: '0 8px 32px rgba(249,115,22,0.15)',
        card: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};