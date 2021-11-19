module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:true,
    },
    screens:{
      "lg": "1111px",
      "md":"732px",
      "sm":"360px",
    },
    textColor: theme => theme('colors'),
     textColor: {
       'primary': '#FFFFFF',
       'secondary': '#848199',
       'danger': '#3E9FE3',
     },
     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3E9FE3',
      'secondary': '#D7DCF0',
      'danger': '#e3342f',
     }),
    extend: {
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
