const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Sans MS", "Comic Sans", ...defaultTheme.fontFamily.comic],
      },
    },
  },
  // ...
}