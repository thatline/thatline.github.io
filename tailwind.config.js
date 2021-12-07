const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    // TODO: further optimize for production, goal size for tailwind.css is 16k
    enabled: false,
    content: [
      './src/**/*.pug',
      './src/**/*.md',
      './src/scripts/**/*.js'
    ],
    mode: 'all',
    preserveHtmlElements: true,
    options: {
      keyframes: true
    }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['proxima-nova', ...defaultTheme.fontFamily.sans],
        serif: ['playfair-display', ...defaultTheme.fontFamily.serif],
      // },
      fontSize: {
        '3xl': ['3rem', '3.45rem'],
        '4xl': ['5rem', '5.75rem'],
        '5xl': ['7rem', '9.25rem']
      }
    },
    colors: {
      offblack: '#1B1C1E',
      white: '#ffffff'
    },
  },
  variants: {
    extend: {
      grayscale: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // TODO: form to submit lines?
    require('tailwindcss-debug-screens')
  ],
}