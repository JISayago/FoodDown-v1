module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'primary-red': '#BD0003',
        'light-red':'#cdb4b0',
          'primary-white': '#FFFFFF'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '80px',
        }
      }
    },
  }