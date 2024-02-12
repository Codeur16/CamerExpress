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
        'Black1' : "rgba(0, 0, 0, 0.1)",
        'Black2' : "rgba(0, 0, 0, 0.2)",
        'Black3' : "rgba(0, 0, 0, 0.3)",
        'Black4' : "rgba(0, 0, 0, 0.4)",
        'Black5' : "rgba(0, 0, 0, 0.5)",
        'Black6' : "rgba(0, 0, 0, 0.6)",
        'Black7' : "rgba(0, 0, 0, 0.7)",
        'Black8' : "rgba(0, 0, 0, 0.8)",
        'Black9' : "rgba(0, 0, 0, 0.9)",
        'Limeblue' : "rgba(0, 129, 199, 1)",
        'Limeblue1' : "rgba(0, 129, 199, 0.1)",
        'Limeblue2' : "rgba(0, 129, 199, 0.2)",
        'Limeblue3' : "rgba(0, 129, 199, 0.3)",
        'Limeblue4' : "rgba(0, 129, 199, 0.4)",
        'Limeblue5' : "rgba(0, 129, 199, 0.5)",
        'Limeblue6' : "rgba(0, 129, 199, 0.6)",
        'Limeblue7' : "rgba(0, 129, 199, 0.7)",
        'Limeblue8' : "rgba(0, 129, 199, 0.8)",
        'Limeblue9' : "rgba(0, 129, 199, 0.9)",
      },
    },
  },
  plugins: [nativewind()],
}

