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
        'mini_phone': '300px',

        'tablet': '660px',
        // => @media (min-width: 640px) { ... }
  
        'big_tablet': '900px',

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
}