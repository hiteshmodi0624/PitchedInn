/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        seperator:"rgb(38,38,38)",
        gray:"#121212",
        gray2:"#1E1E1E",
        grey:"#71767A",
        primary:"#0023FF",
      },
    },
  },
  plugins: [],
}

