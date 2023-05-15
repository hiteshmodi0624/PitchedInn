/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors:{
        seperator:"rgb(38,38,38)",
        gray:"#121212",
        gray2:"#1E1E1E",
        grey:"#71767A",
        primary:"#0023FF",
        primary2:"#006AFF"
      },
    },
  },
  plugins: [],
}

