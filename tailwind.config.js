/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // startbiz.in logo teal + orange
          primary: '#007A8A',
          'primary-dark': '#005F6B',
          accent: '#F48C31',
          'accent-dark': '#E07820',
          surface: '#F5FAFB',
          muted: '#E8F2F4',
          text: '#1A2B2E',
          'text-soft': '#4A5C5F',
          dark: '#0B1F22',
          // Hero: deep navy (contrasts with teal logo)
          navy: '#152238',
          'navy-deep': '#0D1628',
          blue: '#007A8A',
          green: '#1FA37A',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px -20px rgba(11, 31, 34, 0.28)',
        nav: '0 2px 16px rgba(11, 31, 34, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
