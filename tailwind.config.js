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
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
