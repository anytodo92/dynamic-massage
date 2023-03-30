/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        mobile_sm: "375px",
        mobile_md: "420px",
        tablet: "480px",
        laptop: "768px",
        desktop: "1024px",
        desktop_lg: "1280px",
        desktop_ml: "1440px",
        desktop_xl: "1920px",
      },
      maxWidth: {
        "d/ml": "1340px",
      }
    },
  },
  plugins: [],
};