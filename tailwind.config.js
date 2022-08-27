/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        WorkSans: ['Work Sans', 'sans-serif'],
        Bitter: ['Bitter', 'serif'],
      },

      fontSize:{
        'title' : '3.8rem',
      },

      colors: {
        darkBlue: '#111a21',
        maximumRed: '#D62828',
        carolinaBlue: '#00A6ED',
        lemonMeringue: '#EAE2B7',
      },

      screens:{
        lgs: "1000px",
      }
    },
  },
  plugins: [],
}