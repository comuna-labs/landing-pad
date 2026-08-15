import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0B0F19' },
      boxShadow: { glow: '0 18px 50px rgba(99, 102, 241, 0.14)' }
    }
  },
  plugins: []
};

export default config;
