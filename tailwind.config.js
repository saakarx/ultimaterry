const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 24px 0 hsla(0, 0%, 0%, 0.15)'
      },
      colors: {
        'c-black': 'hsla(207, 95%, 8%, 1)',
        'c-pink': 'hsla(345, 100%, 60%, 1)',
        'c-green': 'hsla(174, 62%, 47%, 1)',
        'c-green-light': 'hsla(174, 62%, 47%, .4)',
        'c-white': 'hsla(210, 12%, 97%, 1)',
        'c-cyan': 'hsla(202, 90%, 54%, 1)'
      },
      fontFamily: {
        heading: ['Josefin Slab'],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: { hero: '408px 1fr 408px' },
      gridTemplateRows: {
        heroImage: 'minmax(300px, 550px)',
        modal: 'auto 1fr auto'
      },
      height: {
        'hero-image': 'calc(100% - 44px)'
      },
      maxWidth: {
        'image-card': '335px'
      },
      spacing: {
        18: '4.5rem'
      },
      width: {
        102: '25.5rem',
        'hero-image': 'calc(100% - 44px)'
      }
    }
  },
  plugins: []
}
