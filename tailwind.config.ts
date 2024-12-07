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
            primary: '#9ca3af', //gray-400
            secondary: '#d1d5db', //gray-300
            tertiary: '#e5e7eb', //gray-200
            paper: '#ffffff', //gray-50
            card: '#ffffff', //gray-50
          },
          text: {
            primary: '#242121',
            secondary: '#374151',
            muted: '#6B7280',
          },
        },
        dark: {
          background: {
            primary: '#374151', //stone-800
            secondary: '#4b5563', //gray-600
            tertiary: '#6b7280', //gray-500
            paper: '#262626', //neutral-800
            card: '#404040', //neutral-700
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};

export default config;
