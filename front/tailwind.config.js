/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '391':'391px'
      },
      colors:{
        'anotherBlack': '#2f2f2f',
        'anotherGray': '#4c4c4c',
      },
      zIndex:{
          '100':'100',
          '200':'200',
      },
      spacing:{
        'Home': '10rem',
      },
      backgroundImage: {
        'living': "url('../src/assets/living.png')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}