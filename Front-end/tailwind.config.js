/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/context/*.{js,jsx,ts,tsx}",
    "./src/hooks/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
