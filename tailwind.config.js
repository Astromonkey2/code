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
        russian_violet: {
          DEFAULT: '#3C1644', // Primary dark purple
          secondary: '#301852', // Secondary purple
        },
        pale_dogwood: '#E4CAC3', // Light beige/pink
        indian_red: '#D9535F', // Accent red
        indigo: '#451970', // Deep purple
        brand: {
          DEFAULT: '#D9535F', // Map brand to Indian Red
          light: '#E4CAC3',
          dark: '#3C1644',
        },
        dark: '#0A0A0A',
        mid: '#1A1A1A',
        light: '#FFFFFF',
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