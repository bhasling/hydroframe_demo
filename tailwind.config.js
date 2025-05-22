/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        textDisabled: "#6B7280",
        primary: "#015c87",
        secondary: "#01608E",
        textFourth: "#015E8B",
        secondaryHover: "#129bdc",
        tertiary: "#d8f2ff",
        bgc: "#D9F2FE",
        bgf: "#D9F2FE"
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}