import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Define theme-specific text colors
        light: {
          background: {
            primary: '#9ca3af',
            secondary: '#d1d5db',
            tertiary: '#e5e7eb',
          },
          text: {
            primary: '#242121',
            secondary: '#374151',
            muted: '#6B7280',
          },
        },
        dark: {
          background: {
            primary: '#374151',
            secondary: '#4b5563',
            tertiary: '#6b7280',
          },
          text: {
            primary: '#5188ff',
            secondary: '#D1D5DB',
            muted: '#f9fafb',
            negative: '#be123c',
          },
        },
      },
      
    },
  },
  plugins: [],
};

export default config;
