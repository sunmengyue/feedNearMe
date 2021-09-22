module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cust-black': '#261603',
        'cust-red': '#CB3737',
        'cust-orange': '#F3A953',
        'cust-gray': {
          DEFAULT: '#E3E3E3',
          lighter: '#F9F9F9',
          light: '#EBEBEB',
          dark: '#D7D6D5',
        },
      },
      fontFamily: {
        header: 'Raleway, sans-serif',
        'main-text': 'Spartan, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [],
};
