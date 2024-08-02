// This is a dummy tailwind config file used to provide intellisense.
// To configure your global tailwind settings, modify the imported theme object.
const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,jsx,ts,tsx}',
  ],
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
