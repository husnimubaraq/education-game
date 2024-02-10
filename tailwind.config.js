/** 
 * @type {import('tailwindcss').Config} 
 * */

// eslint-disable-next-line unicorn/prefer-module
const nativewind = require("nativewind/tailwind")

/* eslint-disable unicorn/prefer-module */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
}