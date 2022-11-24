/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    corePlugins: {
      preflight: false,
    },
    extend: {
      screens: {
        '2xl': '1536px',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
