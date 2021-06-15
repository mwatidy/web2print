const colors = require('tailwindcss/colors');

// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      white: "#FFF",
      gray: colors.coolGray,
      blue: colors.lightBlue,
      green: colors.emerald,
      red: colors.rose,
    },
    fontFamily: {
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
