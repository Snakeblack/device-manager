/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        'mirage-dark': '#16222A',
        'mirage-light': '#3A6073'
      }
    }
  }
}
