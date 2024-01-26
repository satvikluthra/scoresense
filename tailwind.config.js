/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        'sans': ['Outfit'],

      },
      colors: {
        'black': '#000000',
        'red': '#FF3131',
        'gray': '#1d1d1d',
        'lightgray': '#2c2c2c',
      }
    },
  },
  plugins: [],
}
