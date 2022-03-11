const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'xm': '860px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cesnetDark: '#4b4d4a',
        cesnetGray: '#dcdcda',
        cesnetRed: '#e60000',
        cesnetLightRed: '#f6d1c3',
      },
      listStyleType: {
        square: 'square'
      },
      fontFamily: {
        'cesnet': ['Oswald', 'Arial', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
