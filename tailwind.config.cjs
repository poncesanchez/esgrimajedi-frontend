/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito Sans', 'sans-serif'],
        secondary: ['Jaapokki', 'sans-serif'],
        terciary: ['Krona One', 'sans-serif'],
      },
      colors:{
        primary : {
          100 :'#1D192A',
          90 : '#332F3E',
          80 : '#4A4754',
          70 : '#605D69',
          60 : '#77757F',
          50 : '#8D8B94',
          40 : '#A4A3A9',
          30 : '#BAB9BE',
          20 : '#D1D1D4',
          10 : '#E8E7E9',
        },
        secondary : {
          100 :'#CDB057',
          90 : '#D1B767',
          80 : '#D7BF78',
          70 : '#DCC789',
          60 : '#E1CF9A',
          50 : '#E6D7AA',
          40 : '#EBDFBC',
          30 : '#F0E7CC',
          20 : '#F5EFDD',
          10 : '#FAF7EE',
        }
      }
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
    },
  },
  plugins: [],
}