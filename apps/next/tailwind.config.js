const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
    extend:{
      colors:{
        "text-color": "#fdfcdc"
      },
      backgroundColor: {
        "primary": "#0081a7",
        "primary-light": "#00afb9",
        "secondary": "#f07167",
        "secondary-light": "#fed9b7",
        "secondary-lighter": "#fdfcdc"
      }
    }
  },
}
