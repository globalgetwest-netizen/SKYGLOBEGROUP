import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8F9FA',
        text: '#202124',
        border: '#DADCE0',
        primary: {
          DEFAULT: '#1A3A8F',
          dark: '#0F2167',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#F6D860',
          dark: '#8B6B14',
        },
        noria: {
          orange: '#F5A623',
          blue: '#00D4FF',
        },
        navy: '#041022',
      },
      borderRadius: {
        pill: '9999px',
        card: '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(60,64,67,0.10)',
        'card-hover': '0 4px 12px rgba(60,64,67,0.15)',
        gold: '0 8px 28px rgba(201,162,39,0.32)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '64px', fontWeight: '800' }],
        h1: ['48px', { lineHeight: '56px', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '44px', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '36px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '28px' }],
        caption: ['14px', { lineHeight: '22px' }],
      },
      maxWidth: { container: '1280px' },
    },
  },
  plugins: [],
}

export default config
