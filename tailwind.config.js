import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // ===== Tambahan tinggi custom =====
      height: {
        100: '500px', // sekarang bisa pakai h-100 (400px)
      },

      // ===== Font Custom =====
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },

      // ===== Animasi Custom =====
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'background-position-spin':
          'background-position-spin 3000ms infinite alternate',
      },

      // ===== Keyframes Custom =====
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' },
        },
      },

      // ===== Border Radius Custom =====
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ===== Warna tambahan kalau mau =====
      colors: {
        // tambahkan warna custom di sini jika perlu
      },
    },
  },

  // ===== Mode Dark =====
  darkMode: ['class', 'class'],

  // ===== Plugins =====
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // primary: '#0072f5', // bisa aktifkan jika mau
          },
        },
        dark: {
          colors: {
            primary: '#0072f5',
          },
        },
      },
    }),
    require('tailwind-scrollbar'),
    // require("tailwindcss-animate"), // aktifkan kalau mau
  ],
}
