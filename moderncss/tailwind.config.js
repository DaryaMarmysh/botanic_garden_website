const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),require('@themesberg/flowbite/plugin')
  ],
   
    


}



const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      lime: colors.lime,
    }
  },
  
 
   
}
module.exports = {

  plugins: [
      require('themesberg/flowbite/plugin')
  ]

}
module.exports = {

  plugins: [
      require('themesberg/flowbite/plugin'),
   
  ]

}
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

