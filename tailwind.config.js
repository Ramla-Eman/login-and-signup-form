/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'mb': { max: '425px' }, //mobile size
        'maxd': '425px' , //tablet size
      }
    },
  },
  plugins: [],
}

