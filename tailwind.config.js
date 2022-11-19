/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'mirage-dark': '#16222A',
        'mirage-light': '#3A6073',
      },
    },
  },
};
