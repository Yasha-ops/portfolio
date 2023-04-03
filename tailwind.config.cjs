/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#93c5fd",
        'background': "#1f2937"
      },
      fontFamily: {
          Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
