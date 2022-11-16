const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      borderStyles: {
        styles: true, // defaults to false
        colors: true // defaults to false
      },
      zIndex: {
        75: 75,
        100: 100,
        150: 150,
        200: 200,
        250: 250
      },
      maxWidth: {
        screen: '100vw',
        '1000-px': '1000px',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      },
      height: {
        '100-px': '100px',
        '200-px': '200px'
      },
      maxHeight: {
        '120-px': '120px',
        '170-px': '170px',
        '200-px': '200px',
        modal: 'calc(100vh - 32rem)'
      },
      spacing: {
        '-2-px': '-2px'
      },
      boxShadow: {
        blue: '0 0 0 3px rgba(18, 202, 251, 0.8)',
        grey: '0 0 0 3px rgba(0, 0, 0, 0.4)'
      }
    },
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        700: '#1d39c4',
        600: '#2f54eb',
        500: '#597ef7',
        400: '#85a5ff',
        300: '#adc6ff',
        200: '#d6e4ff',
        100: '#f0f5ff'
      },
      green: {
        700: '#057A55',
        600: '#0E9F6E',
        500: '#31C48D',
        400: '#84E1BC',
        300: '#BCF0DA',
        200: '#DEF7EC',
        100: '#F3FAF7',
        50: '#16A34A'
      },
      teal: {
        700: '#046F72',
        600: '#058B8E',
        500: '#37A2A5',
        400: '#69B9BB',
        300: '#9BD1D2',
        200: '#CDE8E8',
        100: '#E6F3F4'
      },
      orange: {
        700: '#D48806',
        600: '#FAAD14',
        500: '#FFC53D',
        400: '#FFD666',
        300: '#FFE58F',
        200: '#FFF1B8',
        100: '#FFFBE6'
      },
      red: {
        700: '#CF1322',
        600: '#E82C36',
        500: '#FF4D4F',
        400: '#FF7875',
        300: '#FFA39E',
        200: '#FFCCC7',
        100: '#FFF1F0'
      },
      gray: {
        700: '#1a202e',
        600: '#364152',
        500: '#64748b',
        400: '#97a6ba',
        300: '#cfd8e3',
        200: '#e2e8f0',
        100: '#f1f5f9',
        50: '#f8fafc'
      }

      // ...
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'disabled'],
    borderRadius: ['responsive', 'hover', 'group-hover'],
    borderWidth: ['responsive', 'first', 'hover', 'focus', 'last'],
    boxShadow: ['responsive', 'hover', 'group-hover', 'group-focus', 'focus-within', 'focus'],
    cursor: ['hover', 'focus', 'disabled'],
    display: ['responsive', 'hover', 'group-hover'],
    flex: ['responsive', 'hover', 'group-hover'],
    justifyContent: ['responsive', 'hover', 'group-hover'],
    margin: ['responsive', 'hover', 'group-hover', 'first', 'last'],
    maxWidth: ['responsive', 'hover', 'group-hover'],
    opacity: ['group-hover', 'group-focus'],
    padding: ['responsive', 'hover', 'group-hover', 'first', 'last'],
    position: ['responsive', 'group-hover', 'hover'],
    scale: ['group-hover', 'group-focus'],
    space: ['hover', 'focus', 'group-hover', 'responsive'],
    width: ['responsive', 'hover', 'group-hover'],
    wordBreak: ['responsive', 'hover', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled', 'even', 'odd'],
    visibility: ['group-hover']
  },
  plugins: [
    require('tailwindcss-border-styles')(),
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'static/**/*.css',
      'static/**/*.js',
      'nuxt.config.js'
    ]
  }
}
