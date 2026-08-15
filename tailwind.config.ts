import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: { ink: '#0B0F19' },
      boxShadow: { glow: '0 18px 50px rgba(99, 102, 241, 0.14)' }
    }
  },
  plugins: []
};

export default config;
