/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        seperator:"rgb(38,38,38)",
        primary:"#121212"
      },
    },
  },
  plugins: [],
}

