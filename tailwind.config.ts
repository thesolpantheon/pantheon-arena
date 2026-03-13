import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2ED',
        dark: '#242424',
        'dark-bg': '#242422',
        'light-text': '#F4F1EC',
        hermes: '#B8860B',
        ares: '#8B2500',
        cronus: '#6B6B6B',
        axiom: '#0A7E8C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        serif: ['Playfair Display', 'EB Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
