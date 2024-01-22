/** @type {import('tailwindcss').Config} */
// import { FontFamily } from './GlobalStyles'
const defaultTheme = require('tailwindcss/defaultTheme')
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/views/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    extend: {
      fontFamily: {
        'sans': ['"salsa"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'default': '#29C752',
      },
    },
  },
  plugins: [nativewind()],
}

